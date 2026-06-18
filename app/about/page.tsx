export const metadata = {
  title: "About Me | Julia Hu Yoga",
};

export default function About() {
  return (
    <article className="max-w-2xl mx-auto px-8 pt-20 pb-28">
      {/* Photo above heading */}
      <img
        src="/yoga2.jpg"
        alt="Julia in sphinx pose outdoors on a wooden deck"
        className="w-full h-[55vh] object-cover object-center mb-16"
      />

      <h1 className="font-serif text-5xl font-light text-[#1A1530] mb-12">
        About me
      </h1>

      <div className="space-y-7 text-[#1A1530]/75 leading-relaxed text-lg mb-20">
        <p>
          I received my RYT-200 at Lotusland Yoga in San Francisco in 2025
          and completed a teaching apprenticeship with Jasmine Tarkeshi.
        </p>
        <p>
          I came to yoga in 2018 out of curiosity, the way you stumble into
          something without a plan and realize it&apos;s exactly where you wanted
          to be. What kept me coming back was how welcoming it felt: less rigid
          than the movement practices I&apos;d known, more interested in exploration
          than perfection.
        </p>
        <p>
          My classes draw on the wisdom of classical texts alongside a physical
          practice built around breath and intention. I tend toward sequences
          that build heat and then let it settle, leaving room for both
          challenge and rest.
        </p>
        <p>
          I think about yoga as something you carry with you. My hope is that
          students leave with something useful: a felt sense of ease in their
          own body, or a question worth sitting with.
        </p>
      </div>

    </article>
  );
}
