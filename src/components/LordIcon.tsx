import React, { useRef } from "react";

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
  /** Emitted color palette e.g. "primary:#064e3b,secondary:#c9a84c" */
  colors?: string;
  size?: number;
  trigger?: "hover" | "click" | "loop" | "loop-on-hover" | "morph" | "in" | "boomerang";
  className?: string;
};

/**
 * Wrapper around the <lord-icon> web component (loaded via CDN in index.html).
 * Manually triggers the icon animation when the containing card is hovered,
 * so hovering the whole card plays the icon, not just the icon itself.
 */
export const LordIcon: React.FC<Props> = ({
  src,
  colors = "primary:#064e3b,secondary:#c9a84c",
  size = 44,
  trigger = "hover",
  className,
}) => {
  const ref = useRef<HTMLElement>(null);

  const play = () => {
    const el = ref.current as (HTMLElement & { playerInstance?: { playFromBeginning: () => void; play: () => void } }) | null;
    const player = el?.playerInstance;
    if (player) {
      player.playFromBeginning?.();
      player.play?.();
    }
  };

  return (
    <span
      className={className}
      style={{ display: "inline-flex", width: size, height: size }}
      onMouseEnter={play}
      onFocus={play}
    >
      <lord-icon
        ref={ref as React.Ref<HTMLElement>}
        src={src}
        trigger={trigger}
        colors={colors}
        style={{ width: size, height: size }}
      />
    </span>
  );
};

export default LordIcon;
