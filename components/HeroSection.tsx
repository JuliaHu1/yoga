'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [scrollRatio, setScrollRatio] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const { top, height } = heroRef.current.getBoundingClientRect();
      // As hero scrolls upward out of view, ratio goes 0 → 1
      const ratio = Math.max(0, Math.min(1, -top / (height * 0.6)));
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p
          className="font-sans text-xs md:text-sm tracking-[0.25em] uppercase mb-5 font-light"
          style={{ color: '#EDE8DF', textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}
        >
          yoga to help you
        </p>
        <h1
          className="font-serif font-light leading-tight mb-2"
          style={{
            color: '#F5F0E8',
            textShadow: '0 1px 16px rgba(0,0,0,0.3)',
            fontSize: 'clamp(2.8rem, 8vw, 6rem)',
          }}
        >
          <span
            style={{
              letterSpacing: slowSpacing,
              display: 'inline-block',
              transition: 'letter-spacing 0.05s linear',
            }}
          >
            slow
          </span>
          {' '}down
        </h1>
        <h1
          className="font-serif font-light leading-tight mb-2"
          style={{
            color: '#F5F0E8',
            textShadow: '0 1px 16px rgba(0,0,0,0.3)',
            fontSize: 'clamp(2.8rem, 8vw, 6rem)',
          }}
        >
          settle in
        </h1>
        <h1
          className="font-serif font-light leading-tight mb-10"
          style={{
            color: '#F5F0E8',
            textShadow: '0 1px 16px rgba(0,0,0,0.3)',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
          }}
        >
          and light your inner fire
        </h1>
        <Link
          href="#subscribe"
          className="btn-wiggle inline-block border border-[#F5F0E8] text-[#F5F0E8] px-10 py-3 text-sm tracking-widest uppercase hover:bg-[#F5F0E8] hover:text-[#1A1530] transition-colors"
        >
          Subscribe to email list
        </Link>
      </div>
    </section>
  );
}
