export const metadata = {
  title: "About | Julia Hu Yoga",
};

export default function About() {
  return (
    <article>
      <div className="max-w-2xl mx-auto px-8 pt-20 pb-24">
        <div className="flex flex-col sm:flex-row gap-12 items-start mb-16">
          <img
            src="/yoga6.jpg"
            alt="Julia Hu"
            className="w-48 h-56 object-cover object-top flex-shrink-0"
          />
          <div>
            <h1 className="font-serif text-5xl font-light text-[#1A1530] mb-6">
              About Julia
            </h1>
            <p className="text-[#1A1530]/75 leading-relaxed text-lg" style={{fontFamily: "var(--font-dm-sans), 'DM Sans', system-ui, sans-serif"}}>
              I received my RYT-200 at Lotusland Yoga in San Francisco in 2025
              and completed a teaching apprenticeship with Jasmine Tarkeshi.
            </p>
          </div>
        </div>

        <div className="space-y-7 text-[#1A1530]/75 leading-relaxed text-lg" style={{fontFamily: "var(--font-dm-sans), 'DM Sans', system-ui, sans-serif"}}>
          <p>
            I came to yoga in 2018 looking for a way to slow down. What I found
            was a practice that asked me to pay attention — to my body, my
            breath, and the philosophical traditions that have shaped this
            lineage for thousands of years.
          </p>
          <p>
            My classes draw on the wisdom of classical texts alongside a
            physical practice built around breath and intention. I tend toward
            sequences that build heat and then let it settle, leaving room for
            both challenge and rest.
          </p>
          <p>
            I think about yoga as something you carry with you. My hope is that
            students leave with something useful — a felt sense of groundedness,
            or a question worth sitting with.
          </p>
        </div>
      </div>

      {/* Cello + backbend */}
      <div className="w-full overflow-hidden">
        <img
          src="/IMG_3123.jpeg"
          alt="Julia playing cello while a student holds a backbend"
          className="w-full object-cover"
          style={{ maxHeight: "90vh", objectPosition: "center center" }}
        />
      </div>

      {/* Closing image */}
      <div className="max-w-4xl mx-auto px-8 py-24 pb-28">
        <img
          src="/yoga2.jpg"
          alt="Julia in sphinx pose outdoors on a wooden deck"
          className="w-full h-[50vh] object-cover object-center"
        />
      </div>
    </article>
  );
}
