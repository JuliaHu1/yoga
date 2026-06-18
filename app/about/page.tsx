export const metadata = {
  title: "About | Julia Hu Yoga",
};

export default function About() {
  return (
    <article>
      {/* Bio — portrait inline, much smaller */}
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
            <p className="text-[#1A1530]/75 leading-relaxed text-lg">
              Julia started practicing yoga in 2018 and received her RYT-200 at
              Lotusland Yoga in San Francisco in 2025, where she subsequently
              completed a teaching apprenticeship with Jasmine Tarkeshi.
            </p>
          </div>
        </div>

        <div className="space-y-7 text-[#1A1530]/75 leading-relaxed text-lg">
          <p>
            Her practice is rooted in the philosophical traditions of yoga: the
            Bhagavad Gita, the Yoga Sutras, and the language of the chakras. She
            brings these teachings into class as sources of wisdom to guide the
            physical practice.
          </p>
          <p>
            Julia&apos;s vinyasa flows are dynamic and intentional, with space woven
            in for restoration and stillness. She tends toward sequences that
            build heat and then let it settle, creating room for both playful
            challenge and genuine rest.
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

      {/* Philosophy */}
      <div className="max-w-2xl mx-auto px-8 py-24">
        <h2 className="font-serif text-3xl font-light text-[#1A1530] mb-8">
          Teaching Philosophy
        </h2>

        <div className="space-y-7 text-[#1A1530]/75 leading-relaxed text-lg">
          <p>
            Julia believes yoga is as much a practice for daily life as it is
            for the hour spent on the mat. Students leave her class with
            something to carry into the rest of their day, whether a reflection
            on yoga philosophy or a renewed sense of groundedness.
          </p>
          <p>
            Each class begins with intention and moves through sequences that
            build heat and then let it settle. There is room for challenge,
            and equally, room for rest.
          </p>
          <p>
            She has also been known to put down the mat entirely and pick up
            the cello for the occasional yoga dance flow with Ati.
          </p>
        </div>
      </div>

      {/* Closing image */}
      <div className="max-w-4xl mx-auto px-8 pb-28">
        <img
          src="/yoga2.jpg"
          alt="Julia in sphinx pose outdoors on a wooden deck"
          className="w-full h-[50vh] object-cover object-center"
        />
      </div>
    </article>
  );
}
