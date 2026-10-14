'use client';
import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const [scrollRatio, setScrollRatio] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const { top, height } = heroRef.current.getBoundingClientRect();
      // As hero scrolls upward out of view, ratio goes 0 → 1
      const ratio = Math.max(0, Math.min(1, -top / (height * 0.25)));
      setScrollRatio(ratio);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const slowSpacing = `${scrollRatio * 0.55}em`;

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[55vh] md:h-[68vh] overflow-hidden"
    >
      <img
        src="/IMG_4645 2.jpeg"
        alt="Outdoor yoga class on the grass in San Francisco"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        style={{ filter: 'blur(4px) brightness(1.05) contrast(0.85)' }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6 pb-12 md:pb-16">
        <p
          className="font-serif font-light leading-relaxed mb-3"
          style={{
            color: '#F5F0E8',
            textShadow: '0 1px 10px rgba(0,0,0,0.3)',
            fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
          }}
        >
          yoga to help you{' '}
          <span
            style={{
              letterSpacing: slowSpacing,
              marginRight: `-${slowSpacing}`,
              display: 'inline-block',
              transition: 'letter-spacing 0.05s linear, margin-right 0.05s linear',
            }}
          >
            slow
          </span>
          {' '}down · settle in · and light your inner fire
        </p>
      </div>
    </section>
  );
}
