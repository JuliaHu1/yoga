'use client';
import { useEffect, useState } from 'react';

function LotusBud({ scale = 1, mirrored = false }: { scale?: number; mirrored?: boolean }) {
  return (
    <svg width={80 * scale} height={110 * scale} viewBox="0 0 80 110" fill="none"
      style={{ transform: mirrored ? 'scaleX(-1)' : undefined, display: 'block' }}>
      <path d="M40 108 Q38 80 40 60" stroke="#8aab8e" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M40 85 Q22 75 18 60 Q32 70 40 85Z" fill="#b8d4bb" opacity="0.45" />
      <path d="M40 85 Q58 75 62 60 Q48 70 40 85Z" fill="#b8d4bb" opacity="0.45" />
      <path d="M40 62 Q28 46 30 24 Q40 44 40 62Z" fill="#d8ccec" stroke="#9B8EC4" strokeWidth="1" opacity="0.7" />
      <path d="M40 62 Q52 46 50 24 Q40 44 40 62Z" fill="#d8ccec" stroke="#9B8EC4" strokeWidth="1" opacity="0.7" />
      <path d="M40 60 Q30 44 33 20 Q40 42 40 60Z" fill="#c9b8e0" stroke="#9B8EC4" strokeWidth="1" opacity="0.8" />
      <path d="M40 60 Q50 44 47 20 Q40 42 40 60Z" fill="#c9b8e0" stroke="#9B8EC4" strokeWidth="1" opacity="0.8" />
      <path d="M40 60 Q36 40 40 14 Q44 40 40 60Z" fill="#bfaed8" stroke="#9B8EC4" strokeWidth="1" />
    </svg>
  );
}

function Vine({ mirrored = false }: { mirrored?: boolean }) {
  return (
    <svg width={60} height={180} viewBox="0 0 60 180" fill="none"
      style={{ transform: mirrored ? 'scaleX(-1)' : undefined, display: 'block' }}>
      <path d="M30 178 Q28 140 32 100 Q30 60 28 20" stroke="#8aab8e" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M31 150 Q16 138 12 120 Q24 132 31 150Z" fill="#b8d4bb" opacity="0.5" />
      <path d="M31 110 Q46 100 50 82 Q38 94 31 110Z" fill="#b8d4bb" opacity="0.45" />
      <path d="M30 70 Q15 60 11 42 Q23 54 30 70Z" fill="#b8d4bb" opacity="0.4" />
      <path d="M29 30 Q44 20 48 4 Q36 16 29 30Z" fill="#b8d4bb" opacity="0.35" />
    </svg>
  );
}

function PetalScatter({ mirrored = false }: { mirrored?: boolean }) {
  return (
    <svg width={70} height={120} viewBox="0 0 70 120" fill="none"
      style={{ transform: mirrored ? 'scaleX(-1)' : undefined, display: 'block' }}>
      <ellipse cx="20" cy="30" rx="8" ry="14" fill="#d8ccec" opacity="0.5" transform="rotate(-30 20 30)" />
      <ellipse cx="45" cy="55" rx="6" ry="11" fill="#c9b8e0" opacity="0.45" transform="rotate(15 45 55)" />
      <ellipse cx="15" cy="82" rx="7" ry="12" fill="#e0d6f0" opacity="0.4" transform="rotate(-20 15 82)" />
      <ellipse cx="50" cy="105" rx="5" ry="9" fill="#d8ccec" opacity="0.35" transform="rotate(25 50 105)" />
    </svg>
  );
}

// Each accent: appears when scroll passes `showAt` fraction of page, fades out after `hideAt`
const ACCENTS = [
  { id: 0, side: 'right' as const, top: '30%',  showAt: 0.05, hideAt: 0.35, component: 'lotus',   mirrored: true,  scale: 0.9 },
  { id: 1, side: 'left'  as const, top: '20%',  showAt: 0.25, hideAt: 0.55, component: 'vine',    mirrored: false, scale: 1   },
  { id: 2, side: 'right' as const, top: '35%',  showAt: 0.45, hideAt: 0.75, component: 'petals',  mirrored: true,  scale: 1   },
  { id: 3, side: 'left'  as const, top: '25%',  showAt: 0.65, hideAt: 0.95, component: 'lotus',   mirrored: false, scale: 0.75},
];

export default function FloralAccents() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setPct(total > 0 ? window.scrollY / total : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none" aria-hidden="true">
      {ACCENTS.map(a => {
        const visible = pct >= a.showAt && pct < a.hideAt;
        return (
          <div
            key={a.id}
            style={{
              position: 'fixed',
              top: a.top,
              [a.side]: '12px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0px)' : 'translateY(14px)',
              transition: 'opacity 1.2s ease, transform 1.4s ease',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          >
            {a.component === 'lotus'  && <LotusBud scale={a.scale} mirrored={a.mirrored} />}
            {a.component === 'vine'   && <Vine mirrored={a.mirrored} />}
            {a.component === 'petals' && <PetalScatter mirrored={a.mirrored} />}
          </div>
        );
      })}
    </div>
  );
}
