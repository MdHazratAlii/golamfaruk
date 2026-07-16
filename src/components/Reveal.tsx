import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  variant?: 'fade-up' | 'slide-left' | 'slide-right';
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  id?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  className = '',
  as: Tag = 'div',
  id,
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const initial =
    variant === 'slide-left'
      ? 'opacity-0 -translate-x-10'
      : variant === 'slide-right'
      ? 'opacity-0 translate-x-10'
      : 'opacity-0 translate-y-8';

  const shown = 'opacity-100 translate-x-0 translate-y-0';

  return React.createElement(
    Tag as any,
    {
      ref: ref as any,
      id,
      className: `transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none motion-reduce:transform-none ${
        visible ? shown : initial
      } ${className}`,
      style: { transitionDelay: visible ? `${delay}ms` : '0ms' },
    },
    children
  );
};

export default Reveal;
