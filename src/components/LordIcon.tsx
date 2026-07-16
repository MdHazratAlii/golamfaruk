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
  trigger?: "hover" | "click" | "loop" | "loop-on-hover" | "morph" | "in" | "boomerang";
  className?: string;
};

const LORDICON_SRC = "https://cdn.lordicon.com/lordicon.js";
let scriptPromise: Promise<void> | null = null;

/** Injects the Lordicon CDN script once, on demand. */
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

/**
 * Lazy-loaded Lordicon wrapper. The CDN script and the <lord-icon> element
 * are only mounted once the component scrolls into view. Hovering the
 * containing element replays the animation from the beginning.
 */
export const LordIcon: React.FC<Props> = ({
  src,
  colors = "primary:#181e15,secondary:#18f0bf",
  size = 44,
  trigger = "hover",
  className,
}) => {
  const hostRef = useRef<HTMLSpanElement>(null);
  const iconRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);

  // Observe visibility — only load once the icon nears the viewport.
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

  // Inject the CDN script only after the icon is in view.
  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    loadLordiconScript()
      .then(() => { if (!cancelled) setReady(true); })
      .catch(() => { /* silently skip; placeholder stays */ });
    return () => { cancelled = true; };
  }, [inView]);

  const play = () => {
    const el = iconRef.current as
      | (HTMLElement & { playerInstance?: { playFromBeginning: () => void; play: () => void } })
      | null;
    const player = el?.playerInstance;
    if (player) {
      player.playFromBeginning?.();
      player.play?.();
    }
  };

  return (
    <span
      ref={hostRef}
      className={className}
      style={{ display: "inline-flex", width: size, height: size }}
      onMouseEnter={play}
      onFocus={play}
    >
      {ready ? (
        <lord-icon
          ref={iconRef as React.Ref<HTMLElement>}
          src={src}
          trigger={trigger}
          colors={colors}
          style={{ width: size, height: size }}
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
