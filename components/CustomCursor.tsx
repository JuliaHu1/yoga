'use client';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [blooming, setBlooming] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = document.elementFromPoint(e.clientX, e.clientY);
      setBlooming(!!el?.closest('a, button, [role="button"], input, select, textarea, label'));
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Petal rotation: closed = petals tight together, blooming = spread wide
  const p = (closed: number, open: number) =>
    `rotate(${blooming ? open : closed}deg)`;

  return (
    <div
      style={{
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        transform: 'translate(-20px, -20px)',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      <svg width="40" height="52" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Lily pad */}
        <ellipse cx="40" cy="84" rx="28" ry="9" fill="#7a9e7e" opacity="0.72" />
        {/* Lily pad notch */}
        <path d="M40 75 L37 84" stroke="#5a7a5e" strokeWidth="2" strokeLinecap="round" />

        {/* All petals rotate around base point (40, 72) */}
        {/* Outer left */}
        <path
          d="M40 72 Q26 58 22 34 Q37 50 40 72Z"
          fill="#d8ccec" stroke="#5B4B8A" strokeWidth="1.8" strokeLinejoin="round"
          style={{ transformOrigin: '40px 72px', transform: p(-28, -58), transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)' }}
        />
        {/* Outer right */}
        <path
          d="M40 72 Q54 58 58 34 Q43 50 40 72Z"
          fill="#d8ccec" stroke="#5B4B8A" strokeWidth="1.8" strokeLinejoin="round"
          style={{ transformOrigin: '40px 72px', transform: p(28, 58), transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)' }}
        />
        {/* Inner left */}
        <path
          d="M40 72 Q32 54 33 26 Q41 48 40 72Z"
          fill="#c9b8e0" stroke="#5B4B8A" strokeWidth="1.8" strokeLinejoin="round"
          style={{ transformOrigin: '40px 72px', transform: p(-12, -30), transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1) 0.04s' }}
        />
        {/* Inner right */}
        <path
          d="M40 72 Q48 54 47 26 Q39 48 40 72Z"
          fill="#c9b8e0" stroke="#5B4B8A" strokeWidth="1.8" strokeLinejoin="round"
          style={{ transformOrigin: '40px 72px', transform: p(12, 30), transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1) 0.04s' }}
        />
        {/* Center petal */}
        <path
          d="M40 72 Q36 52 40 20 Q44 52 40 72Z"
          fill="#bfaed8" stroke="#5B4B8A" strokeWidth="1.8" strokeLinejoin="round"
          style={{ transformOrigin: '40px 72px', transform: p(0, 0), transition: 'transform 0.3s ease' }}
        />
      </svg>
    </div>
  );
}
