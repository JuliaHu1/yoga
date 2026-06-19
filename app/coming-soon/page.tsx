export const metadata = {
  title: "Julia Hu Yoga — Coming Soon",
};

export default function ComingSoon() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-8 -mt-24">
      <svg width="52" height="60" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-10 opacity-80">
        <ellipse cx="40" cy="84" rx="28" ry="9" fill="#7a9e7e" opacity="0.72"/>
        <path d="M40 75 L37 84" stroke="#5a7a5e" strokeWidth="2" strokeLinecap="round"/>
        <path d="M40 72 Q26 58 22 34 Q37 50 40 72Z" fill="#d8ccec" stroke="#5B4B8A" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M40 72 Q54 58 58 34 Q43 50 40 72Z" fill="#d8ccec" stroke="#5B4B8A" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M40 72 Q32 54 33 26 Q41 48 40 72Z" fill="#c9b8e0" stroke="#5B4B8A" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M40 72 Q48 54 47 26 Q39 48 40 72Z" fill="#c9b8e0" stroke="#5B4B8A" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M40 72 Q36 52 40 20 Q44 52 40 72Z" fill="#bfaed8" stroke="#5B4B8A" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>

      <h1 className="font-serif text-5xl md:text-6xl font-light text-[#1A1530] mb-4">
        Julia Hu Yoga
      </h1>
      <p className="text-[#1A1530]/50 tracking-widest uppercase text-sm mb-16">
        Coming soon
      </p>

      <div className="w-px h-16 bg-[#9B8EC4]/30 mb-16" />

      <p className="text-[#1A1530]/70 leading-relaxed max-w-sm mb-10">
        Sign up to receive occasional updates and announcements about public classes.
      </p>
      <a
        href="mailto:hujulia29@gmail.com?subject=Keep me posted"
        className="inline-block border border-[#5B4B8A] text-[#5B4B8A] px-10 py-3 text-sm tracking-widest uppercase hover:bg-[#5B4B8A] hover:text-white transition-colors"
      >
        Keep me posted
      </a>
    </main>
  );
}
