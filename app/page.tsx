import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <img
          src="/IMG_4645 2.jpeg"
          alt="Outdoor yoga class on the grass"
          className="absolute inset-0 w-full h-full object-cover object-center blur-[2px] scale-105"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="font-serif text-6xl md:text-8xl font-light text-white leading-tight mb-6 drop-shadow-[0_1px_12px_rgba(0,0,0,0.45)]">
            Find Your Ground
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10 font-light tracking-wide drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]">
            Dynamic, intentional vinyasa yoga in San Francisco.
          </p>
          <Link
            href="/booking"
            className="inline-block border border-white text-white px-10 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-stone-800 transition-colors"
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
          Vinyasa flows that build heat and then let it settle — with space woven in for both playful challenge and genuine rest.
        </p>
        <p className="text-stone-600 leading-relaxed text-lg">
          Grounded in the Bhagavad Gita, the Yoga Sutras, and the language of the chakras.
        </p>
      </section>

      {/* Portrait teaser */}
      <section className="w-full overflow-hidden">
        <div className="max-w-5xl mx-auto px-8 pb-28 grid md:grid-cols-2 gap-16 items-center">
          <img
            src="/yoga4.jpg"
            alt="Julia in tree pose"
            className="w-full h-[70vh] object-cover object-top"
          />
          <div>
            <h2 className="font-serif text-4xl font-light text-stone-800 mb-8 leading-snug">
              Movement as a way of listening
            </h2>
            <p className="text-stone-600 leading-relaxed text-lg mb-6">
              Each class is an unhurried exploration — not a performance, not a workout. Just an honest conversation between breath and body.
            </p>
            <Link
              href="/about"
              className="inline-block text-sm tracking-widest uppercase text-stone-600 border-b border-stone-400 pb-0.5 hover:text-stone-800 hover:border-stone-800 transition-colors"
            >
              About Julia
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
