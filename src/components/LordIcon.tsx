import React, { useEffect, useRef, useState } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lord-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          trigger?: string;
          state?: string;
          colors?: string;
          delay?: string | number;
          stroke?: string | number;
          speed?: string | number;
        },
        HTMLElement
      >;
    }
  }
}

type Props = {
  src: string;
  colors?: string;
  size?: number;
  /** "once" replays a single cycle on hover; "loop" cycles until mouseleave. */
  mode?: "once" | "loop";
  /** Playback speed multiplier applied uniformly across cards. Default 1. */
  speed?: number;
  className?: string;
};

const LORDICON_SRC = "https://cdn.lordicon.com/lordicon.js";
let scriptPromise: Promise<void> | null = null;

const loadLordiconScript = (): Promise<void> => {
  if (typeof window === "undefined") return Promise.resolve();
  if (customElements.get("lord-icon")) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${LORDICON_SRC}"]`
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("lordicon load failed")));
      return;
    }
    const s = document.createElement("script");
    s.src = LORDICON_SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("lordicon load failed"));
    document.head.appendChild(s);
  });

  return scriptPromise;
};

type Player = {
  playFromBeginning?: () => void;
  play?: () => void;
  pause?: () => void;
  stop?: () => void;
  loop?: boolean;
  speed?: number;
  addEventListener?: (name: string, cb: () => void) => void;
  removeEventListener?: (name: string, cb: () => void) => void;
};

/** Wait for the web component's playerInstance to be attached, then hand it back. */
const whenReady = (
  el: HTMLElement & { playerInstance?: Player },
  cb: (player: Player) => void
) => {
  if (el.playerInstance) return cb(el.playerInstance);
  let tries = 0;
  const tick = () => {
    if (el.playerInstance) return cb(el.playerInstance);
    if (tries++ > 40) return; // ~2s cap
    setTimeout(tick, 50);
  };
  tick();
};

/**
 * Lazy-loaded Lordicon wrapper. The CDN script is injected only when the
 * icon nears the viewport; hover playback is driven manually so every card
 * animates at the same speed and finishes cleanly before the next hover.
 */
export const LordIcon: React.FC<Props> = ({
  src,
  colors = "primary:#181e15,secondary:#18f0bf",
  size = 44,
  mode = "once",
  speed = 1,
  className,
}) => {
  const hostRef = useRef<HTMLSpanElement>(null);
  const iconRef = useRef<HTMLElement>(null);
  const playingRef = useRef(false);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    loadLordiconScript()
      .then(() => { if (!cancelled) setReady(true); })
      .catch(() => { /* skip silently */ });
    return () => { cancelled = true; };
  }, [inView]);

  // Apply uniform speed as soon as the player is available.
  useEffect(() => {
    if (!ready) return;
    const el = iconRef.current as (HTMLElement & { playerInstance?: Player }) | null;
    if (!el) return;
    whenReady(el, (player) => {
      if (typeof player.speed !== "undefined") player.speed = speed;
      // Never let the web component's own loop flag linger; we control it.
      if (typeof player.loop !== "undefined") player.loop = false;
    });
  }, [ready, speed]);

  const startPlay = () => {
    const el = iconRef.current as (HTMLElement & { playerInstance?: Player }) | null;
    if (!el) return;
    whenReady(el, (player) => {
      if (playingRef.current && mode === "once") return; // debounce re-triggers mid-cycle
      playingRef.current = true;
      if (typeof player.speed !== "undefined") player.speed = speed;

      if (mode === "loop") {
        player.loop = true;
        player.playFromBeginning?.();
        return;
      }

      // "once": play a single cycle, then unlock for the next hover.
      player.loop = false;
      const onComplete = () => {
        playingRef.current = false;
        player.removeEventListener?.("complete", onComplete);
      };
      player.addEventListener?.("complete", onComplete);
      player.playFromBeginning?.();
    });
  };

  const stopPlay = () => {
    if (mode !== "loop") return;
    const el = iconRef.current as (HTMLElement & { playerInstance?: Player }) | null;
    if (!el) return;
    whenReady(el, (player) => {
      player.loop = false;
      player.pause?.();
      playingRef.current = false;
    });
  };

  // Attach hover listeners to the nearest `.group` ancestor (the card),
  // so hovering anywhere on the card plays the icon — not just the 32px icon box.
  useEffect(() => {
    if (!ready) return;
    const host = hostRef.current;
    if (!host) return;
    const card = host.closest(".group") as HTMLElement | null;
    if (!card) return;
    card.addEventListener("mouseenter", startPlay);
    card.addEventListener("mouseleave", stopPlay);
    card.addEventListener("focusin", startPlay);
    card.addEventListener("focusout", stopPlay);
    return () => {
      card.removeEventListener("mouseenter", startPlay);
      card.removeEventListener("mouseleave", stopPlay);
      card.removeEventListener("focusin", startPlay);
      card.removeEventListener("focusout", stopPlay);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, mode, speed]);

  return (
    <span
      ref={hostRef}
      className={className}
      style={{ display: "inline-flex", width: size, height: size }}
      onMouseEnter={startPlay}
      onMouseLeave={stopPlay}
      onFocus={startPlay}
      onBlur={stopPlay}
    >
      {ready ? (
        <lord-icon
          ref={iconRef as React.Ref<HTMLElement>}
          src={src}
          // trigger="in" plays the intro once so the icon is visible even before hover.
          trigger="in"
          colors={colors}
          style={{ width: size, height: size, display: "block" }}
        />
      ) : (
        <span
          aria-hidden="true"
          style={{ width: size, height: size, display: "inline-block" }}
        />
      )}
    </span>
  );
};

export default LordIcon;

