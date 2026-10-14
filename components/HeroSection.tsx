'use client';
import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const [expandRatio, setExpandRatio] = useState(0);
  const [meltProgress, setMeltProgress] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const height = heroRef.current.offsetHeight;

      // Expand slowly over 100% of hero height
      const ratio = Math.max(0, Math.min(1, -rect.top / (height * 1.0)));
      setExpandRatio(ratio);

      // Melt: how far past the hero bottom we've scrolled
      const past = Math.max(0, -rect.bottom);
      setMeltProgress(past);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const slowSpacing = `${expandRatio * 0.55}em`;

  // Four melt letters — same size/style as hero tagline, drift down from hero bottom
  const meltLetters = [
    { char: 's', side: 'left',  offset: '3vw',  fallRate: 0.18, fadeDelay: 0  },
    { char: 'l', side: 'left',  offset: '9vw',  fallRate: 0.14, fadeDelay: 40 },
    { char: 'o', side: 'right', offset: '9vw',  fallRate: 0.16, fadeDelay: 20 },
    { char: 'w', side: 'right', offset: '3vw',  fallRate: 0.20, fadeDelay: 10 },
  ] as const;

  return (
    <>
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
                transition: 'letter-spacing 0.05s linear, margin-right 0.05s linear',
              }}
            >
              slow
            </span>
            {' '}down · settle in · and light your inner fire
          </p>
        </div>
      </section>

      {/* Melt letters — fixed in the side margins as user scrolls past the hero */}
      {meltLetters.map(({ char, side, offset, fallRate, fadeDelay }) => {
        const progress = Math.max(0, meltProgress - fadeDelay);
        const opacity = Math.min(0.7, progress / 80) * Math.max(0, 1 - Math.max(0, progress - 300) / 350);
        const topPx = progress * fallRate;
        return (
          <div
            key={char + side}
            aria-hidden
            style={{
              position: 'fixed',
              [side]: offset,
              top: `${topPx}px`,
              transform: `scaleY(${1 + progress * 0.0015})`,
              transformOrigin: 'top center',
              opacity,
              pointerEvents: 'none',
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#5B4B8A',
              lineHeight: 1,
              userSelect: 'none',
              zIndex: 50,
            }}
          >
            {char}
          </div>
        );
      })}
    </>
  );
}
