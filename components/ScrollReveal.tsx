import { ReactNode, useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'gentleSlideUp' | 'gentleSlideInLeft' | 'gentleScaleIn';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = 'gentleSlideUp',
  delay = 0,
  duration = 600,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        animation: isVisible
          ? `${animation} ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms forwards`
          : 'none',
        opacity: isVisible ? 1 : 0,
        willChange: 'transform, opacity',
        transform: !isVisible
          ? animation === 'gentleSlideUp'
            ? 'translateY(30px)'
            : animation === 'gentleSlideInLeft'
            ? 'translateX(-30px)'
            : 'scale(0.98)'
          : undefined,
        backfaceVisibility: 'hidden',
        transformOrigin: 'center center',
      }}
    >
      {children}
    </div>
  );
}
