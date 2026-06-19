'use client';
import { useEffect, useRef } from 'react';

interface AccentProps {
  side: 'left' | 'right';
  top: string;
  delay?: number;
  children: React.ReactNode;
}

function Accent({ side, top, delay = 0, children }: AccentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('floral-visible'), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="floral-accent"
      style={{
        position: 'absolute',
        top,
        [side]: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {children}
    </div>
  );
}

// A gentle lotus bud that unfurls
function LotusBud({ scale = 1, mirrored = false }: { scale?: number; mirrored?: boolean }) {
  return (
    <svg
      width={80 * scale} height={110 * scale}
      viewBox="0 0 80 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: mirrored ? 'scaleX(-1)' : undefined, display: 'block' }}
    >
      {/* stem */}
      <path d="M40 108 Q38 80 40 60" stroke="#8aab8e" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" className="floral-stem" />
      {/* leaf left */}
      <path d="M40 85 Q22 75 18 60 Q32 70 40 85Z" fill="#b8d4bb" opacity="0.45" className="floral-leaf-l" />
      {/* leaf right */}
      <path d="M40 85 Q58 75 62 60 Q48 70 40 85Z" fill="#b8d4bb" opacity="0.45" className="floral-leaf-r" />
      {/* outer petals */}
      <path d="M40 62 Q28 46 30 24 Q40 44 40 62Z" fill="#d8ccec" stroke="#9B8EC4" strokeWidth="1" opacity="0.7" className="floral-petal floral-petal-ol" />
      <path d="M40 62 Q52 46 50 24 Q40 44 40 62Z" fill="#d8ccec" stroke="#9B8EC4" strokeWidth="1" opacity="0.7" className="floral-petal floral-petal-or" />
      {/* mid petals */}
      <path d="M40 60 Q30 44 33 20 Q40 42 40 60Z" fill="#c9b8e0" stroke="#9B8EC4" strokeWidth="1" opacity="0.8" className="floral-petal floral-petal-ml" />
      <path d="M40 60 Q50 44 47 20 Q40 42 40 60Z" fill="#c9b8e0" stroke="#9B8EC4" strokeWidth="1" opacity="0.8" className="floral-petal floral-petal-mr" />
      {/* center petal */}
      <path d="M40 60 Q36 40 40 14 Q44 40 40 60Z" fill="#bfaed8" stroke="#9B8EC4" strokeWidth="1" className="floral-petal floral-petal-c" />
    </svg>
  );
}

// A simple trailing vine with leaves
function Vine({ mirrored = false }: { mirrored?: boolean }) {
  return (
    <svg
      width={60} height={180}
      viewBox="0 0 60 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: mirrored ? 'scaleX(-1)' : undefined, display: 'block' }}
    >
      <path d="M30 178 Q28 140 32 100 Q30 60 28 20" stroke="#8aab8e" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" className="floral-stem" />
      <path d="M31 150 Q16 138 12 120 Q24 132 31 150Z" fill="#b8d4bb" opacity="0.5" className="floral-leaf-l" />
      <path d="M31 110 Q46 100 50 82 Q38 94 31 110Z" fill="#b8d4bb" opacity="0.45" className="floral-leaf-r" />
      <path d="M30 70 Q15 60 11 42 Q23 54 30 70Z" fill="#b8d4bb" opacity="0.4" className="floral-leaf-l" />
      <path d="M29 30 Q44 20 48 4 Q36 16 29 30Z" fill="#b8d4bb" opacity="0.35" className="floral-leaf-r" />
    </svg>
  );
}

// Delicate scatter of petals
function PetalScatter({ mirrored = false }: { mirrored?: boolean }) {
  return (
    <svg
      width={70} height={120}
      viewBox="0 0 70 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: mirrored ? 'scaleX(-1)' : undefined, display: 'block' }}
    >
      <ellipse cx="20" cy="30" rx="8" ry="14" fill="#d8ccec" opacity="0.5" transform="rotate(-30 20 30)" className="floral-petal" />
      <ellipse cx="45" cy="55" rx="6" ry="11" fill="#c9b8e0" opacity="0.45" transform="rotate(15 45 55)" className="floral-petal" />
      <ellipse cx="15" cy="82" rx="7" ry="12" fill="#e0d6f0" opacity="0.4" transform="rotate(-20 15 82)" className="floral-petal" />
      <ellipse cx="50" cy="105" rx="5" ry="9" fill="#d8ccec" opacity="0.35" transform="rotate(25 50 105)" className="floral-petal" />
    </svg>
  );
}

export default function FloralAccents() {
  return (
    // Hidden on mobile, only shows on wider screens
    <div className="hidden lg:block">
      <div style={{ position: 'relative', zIndex: 0 }}>
        {/* Right side after hero */}
        <Accent side="right" top="80vh" delay={0}>
          <LotusBud scale={0.9} mirrored />
        </Accent>

        {/* Left side mid-page */}
        <Accent side="left" top="160vh" delay={100}>
          <Vine />
        </Accent>

        {/* Right side lower */}
        <Accent side="right" top="260vh" delay={0}>
          <PetalScatter mirrored />
        </Accent>

        {/* Left side near bottom */}
        <Accent side="left" top="360vh" delay={150}>
          <LotusBud scale={0.75} />
        </Accent>
      </div>
    </div>
  );
}
