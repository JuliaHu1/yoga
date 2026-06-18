import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <img
          src="/IMG_4645 2.jpeg"
          alt="Outdoor yoga class on the grass in San Francisco"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          style={{ filter: "blur(4px) brightness(0.88) contrast(0.92)" }}
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1
            className="font-serif text-6xl md:text-8xl font-light text-white leading-tight mb-6"
            style={{ textShadow: "0 1px 16px rgba(0,0,0,0.35)" }}
          >
            Find Your Ground
          </h1>
          <p
            className="text-lg md:text-xl text-white/90 max-w-xl mb-10 font-light tracking-wide"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}
          >
            Dynamic, intentional vinyasa yoga in San Francisco.
          </p>
          <Link
            href="/booking"
            className="btn-wiggle inline-block border border-white text-white px-10 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-[#1A1530] transition-colors"
          >
            Book a Private
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-2xl mx-auto px-8 py-28 text-center">
        <h2 className="font-serif text-4xl font-light text-[#1A1530] mb-8">
          Practice rooted in presence
        </h2>
        <p className="text-[#1A1530]/75 leading-relaxed text-lg mb-6">
          Vinyasa flows that build heat and then let it settle, with space woven in for both playful challenge and genuine rest.
        </p>
        <p className="text-[#1A1530]/75 leading-relaxed text-lg">
          Rooted in classical yoga philosophy and shaped by years of dedicated practice and study.
        </p>
      </section>

      {/* Portrait teaser */}
      <section className="w-full overflow-hidden">
        <div className="max-w-5xl mx-auto px-8 pb-28 grid md:grid-cols-2 gap-16 items-center">
          <img
            src="/yoga4.jpg"
            alt="Julia in tree pose in front of a tropical mural"
            className="w-full h-[70vh] object-cover object-top"
          />
          <div>
            <h2 className="font-serif text-4xl font-light text-[#1A1530] mb-8 leading-snug">
              Movement as a way of listening
            </h2>
            <p className="text-[#1A1530]/75 leading-relaxed text-lg mb-6">
              Each class is an unhurried exploration, an honest conversation between breath and body.
            </p>
            <Link
              href="/about"
              className="inline-block text-sm tracking-widest uppercase text-[#5B4B8A] border-b border-[#9B8EC4] pb-0.5 hover:text-[#1A1530] hover:border-[#1A1530] transition-colors"
            >
              About Julia
            </Link>
          </div>
        </div>
      </section>

      {/* Email subscribe */}
      <section className="max-w-xl mx-auto px-8 pb-28 text-center">
        <h2 className="font-serif text-3xl font-light text-[#1A1530] mb-4">
          Stay in the loop
        </h2>
        <p className="text-[#1A1530]/75 leading-relaxed mb-8">
          Sign up for my email list to receive occasional updates and announcements about public classes.
        </p>
        <a
          href="mailto:hujulia29@gmail.com?subject=Subscribe me to class updates"
          className="inline-block border border-[#5B4B8A] text-[#5B4B8A] px-10 py-3 text-sm tracking-widest uppercase hover:bg-[#5B4B8A] hover:text-white transition-colors"
        >
          Subscribe to email list
        </a>
      </section>
    </>
  );
}
