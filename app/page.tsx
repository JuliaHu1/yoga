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
            Book a 1:1
          </Link>
        </div>
      </section>

      {/* Intro essay */}
      <section className="max-w-2xl mx-auto px-8 py-28">
        <div className="space-y-7 text-[#1A1530]/80 leading-relaxed text-lg">
          <p>
            Most of us know the feeling: doing everything right, checking every box, and still sensing that something hasn&apos;t quite clicked into place. Waiting to exhale until we hit the next milestone, then the next.
          </p>
          <p>
            Yoga philosophy has been sitting with this question for thousands of years. Its answer begins not in the mind, but in the body. In learning to listen to the signals already there, beneath the noise of everything we think we should be doing.
          </p>
          <p>
            Rather than focusing on perfect alignment in a set of poses, I teach a practice that empowers you to feel strong, joyful, and grounded in your own body. Whether you join me in the park on a Saturday morning or book a 1:1 session, let&apos;s explore it together and build toward a self, and a community, that holds a little more compassion.
          </p>
        </div>
      </section>

      {/* Two feature blocks */}
      <section className="max-w-5xl mx-auto px-8 pb-24 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-serif text-2xl font-light text-[#1A1530] mb-4">
            Practice rooted in presence
          </h2>
          <p className="text-[#1A1530]/75 leading-relaxed">
            Vinyasa flows with space woven in for playful challenge and genuine rest. Each class is an unhurried exploration, an honest conversation between breath and body.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-2xl font-light text-[#1A1530] mb-4">
            Rooted in classical yoga philosophy
          </h2>
          <p className="text-[#1A1530]/75 leading-relaxed">
            Shaped by years of dedicated practice, study, and a deep respect for the traditions that inform this work.
          </p>
        </div>
      </section>

      {/* About link with portrait */}
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
