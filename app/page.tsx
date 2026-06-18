import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1800&q=80"
          alt="Peaceful yoga in nature"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Soft light overlay to keep text readable */}
        <div className="absolute inset-0 bg-[#FAF8F5]/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="font-serif text-6xl md:text-8xl font-light text-stone-800 leading-tight mb-6">
            Find Your Ground
          </h1>
          <p className="text-lg md:text-xl text-stone-700 max-w-xl mb-10 font-light tracking-wide">
            A gentle return to breath, body, and stillness — wherever you are.
          </p>
          <Link
            href="/booking"
            className="inline-block border border-stone-700 text-stone-700 px-10 py-3 text-sm tracking-widest uppercase hover:bg-stone-700 hover:text-[#FAF8F5] transition-colors"
          >
            Book a Class
          </Link>
        </div>
      </section>

      {/* Intro section */}
      <section className="max-w-2xl mx-auto px-8 py-28 text-center">
        <h2 className="font-serif text-4xl font-light text-stone-800 mb-8">
          Practice rooted in presence
        </h2>
        <p className="text-stone-600 leading-relaxed text-lg mb-6">
          Whether you are new to yoga or deepening a long-standing practice, each session is an invitation to slow down, listen inward, and reconnect with what matters.
        </p>
        <p className="text-stone-600 leading-relaxed text-lg">
          Classes are small, unhurried, and shaped around you.
        </p>
      </section>
    </>
  );
}
