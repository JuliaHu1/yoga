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

  // Four melt letters: S L on left, O W on right
  // Fade in as meltProgress 0→120, fade out 500→900
  const meltLetters = [
    { char: 's', side: 'left',  offset: '3vw',  topStart: 10, fallRate: 0.10, fadeDelay: 0   },
    { char: 'l', side: 'left',  offset: '8vw',  topStart: 22, fallRate: 0.07, fadeDelay: 60  },
    { char: 'o', side: 'right', offset: '8vw',  topStart: 18, fallRate: 0.09, fadeDelay: 30  },
    { char: 'w', side: 'right', offset: '3vw',  topStart: 8,  fallRate: 0.12, fadeDelay: 10  },
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
      {meltLetters.map(({ char, side, offset, topStart, fallRate, fadeDelay }) => {
        const progress = Math.max(0, meltProgress - fadeDelay);
        const opacity = Math.min(1, progress / 120) * Math.max(0, 1 - Math.max(0, progress - 400) / 400);
        const translateY = progress * fallRate;
        return (
          <div
            key={char + side}
            aria-hidden
            style={{
              position: 'fixed',
              [side]: offset,
              top: `${topStart}vh`,
              transform: `translateY(${translateY}px) scaleY(${1 + progress * 0.001})`,
              opacity,
              pointerEvents: 'none',
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'clamp(4rem, 8vw, 7rem)',
              fontWeight: 300,
              color: '#9B8EC4',
              lineHeight: 1,
              userSelect: 'none',
              zIndex: 50,
              transition: 'opacity 0.1s ease-out',
            }}
          >
            {char}
          </div>
        );
      })}
    </>
  );
}
