import Link from "next/link";
import EmailSignup from "@/components/EmailSignup";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[60vh] md:h-[78vh] overflow-hidden">
        <img
          src="/IMG_4645 2.jpeg"
          alt="Outdoor yoga class on the grass in San Francisco"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          style={{ filter: "blur(4px) brightness(1.05) contrast(0.85)" }}
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1
            className="font-serif text-5xl md:text-8xl font-light leading-tight mb-6"
            style={{ color: "#F5F0E8", textShadow: "0 1px 16px rgba(0,0,0,0.3)" }}
          >
            Find Your Ground
          </h1>
          <p
            className="text-lg md:text-xl max-w-xl mb-10 font-light tracking-wide"
            style={{ color: "#EDE8DF", textShadow: "0 1px 8px rgba(0,0,0,0.25)" }}
          >
            Dynamic, intentional vinyasa yoga in San Francisco.
          </p>
          <Link
            href="/booking"
            className="btn-wiggle inline-block border border-[#F5F0E8] text-[#F5F0E8] px-10 py-3 text-sm tracking-widest uppercase hover:bg-[#F5F0E8] hover:text-[#1A1530] transition-colors"
          >
            Book a 1:1
          </Link>
        </div>
      </section>

      {/* Intro essay */}
      <section className="max-w-2xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="space-y-7 text-[#1A1530]/80 leading-relaxed text-lg">
          <p>
            Many of us know the feeling: doing everything right, checking every box, and still sensing that something hasn&apos;t quite clicked into place. Perhaps waiting to exhale until we hit the next milestone, then the next.
          </p>
          <p>
            How do we balance a sense of momentum with a sense of equilibrium? Yoga philosophy has been sitting with this question for thousands of years. Its answer begins not in the mind, but in the body. Yoga invites us to listen to signals that are already there, beneath the noise of everything we think we should be doing.
          </p>
          <p>
            Rather than focusing on perfect alignment in a set of poses, I teach a practice that empowers you to feel rooted, strong, and joyful in your own body. Whether you join me for a weekend park class or book a 1:1 session, let&apos;s explore the practice together and build toward a self and a community that holds more curiosity and compassion.
          </p>
        </div>
      </section>

      {/* About link with portrait */}
      <section className="w-full overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 md:px-8 pb-20 md:pb-28 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <img
            src="/yoga4.jpg"
            alt="Julia in tree pose in front of a tropical mural"
            className="w-full h-[50vh] md:h-[70vh] object-cover object-top"
          />
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#1A1530] mb-6 md:mb-8 leading-snug">
              Movement as a way of listening
            </h2>
            <p className="text-[#1A1530]/75 leading-relaxed text-lg mb-6">
              Each class is an unhurried exploration, an honest conversation between breath and body.
            </p>
            <Link
              href="/about"
              className="inline-block text-sm tracking-widest uppercase text-[#5B4B8A] border-b border-[#9B8EC4] pb-0.5 hover:text-[#1A1530] hover:border-[#1A1530] transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Email subscribe */}
      <section className="max-w-xl mx-auto px-5 md:px-8 pb-20 md:pb-28 text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-light text-[#1A1530] mb-4">
          Stay in the loop
        </h2>
        <p className="text-[#1A1530]/75 leading-relaxed mb-8">
          Sign up for my email list to receive occasional updates and announcements about public classes.
        </p>
        <EmailSignup />
      </section>
    </>
  );
}
