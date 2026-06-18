export const metadata = {
  title: "About | Serene Roots Yoga",
};

export default function About() {
  return (
    <article>
      {/* Full-bleed portrait header */}
      <div className="w-full h-[75vh] overflow-hidden">
        <img
          src="/yoga6.jpg"
          alt="Julia seated and smiling"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Bio */}
      <div className="max-w-2xl mx-auto px-8 py-24">
        <h1 className="font-serif text-5xl font-light text-stone-800 mb-10">
          About Julia
        </h1>

        <div className="space-y-7 text-stone-600 leading-relaxed text-lg">
          <p>
            I have been teaching yoga for over a decade, drawn to the practice after a long search for stillness in a life that moved too fast. Yoga gave me a language for something I had always sensed but struggled to articulate: that the body knows how to heal itself when we stop rushing past it.
          </p>
          <p>
            My training is rooted in Hatha and Yin traditions, with influences from somatic movement therapy and Vipassana meditation. I hold certifications from the Yoga Alliance (500-hour RYT) and have studied with teachers across India, Portugal, and the Pacific Northwest.
          </p>
          <p>
            I teach small groups and one-on-one sessions outdoors and in intimate studio spaces. Sessions unfold slowly — there is no rush to arrive anywhere, no performance to maintain. The practice is whatever shows up when you give it your full attention.
          </p>
        </div>
      </div>

      {/* Wide landscape image — cello + backbend */}
      <div className="w-full h-[60vh] overflow-hidden">
        <img
          src="/IMG_3123.jpeg"
          alt="Yoga session with live cello music"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Philosophy */}
      <div className="max-w-2xl mx-auto px-8 py-24">
        <h2 className="font-serif text-3xl font-light text-stone-800 mb-8">
          Teaching Philosophy
        </h2>

        <div className="space-y-7 text-stone-600 leading-relaxed text-lg">
          <p>
            I believe yoga is not a performance of flexibility or strength. It is a practice of attention — noticing where you are holding, where you are bracing against life, and learning, slowly, to soften.
          </p>
          <p>
            Each class begins with a few minutes of simple sitting: not to achieve a meditative state, but to feel the room, the breath, the particular quality of this day. We move from there.
          </p>
          <p>
            I draw on breath work, long-held poses, and quiet transitions. I offer modifications readily and cues sparingly. The goal is for you to leave feeling more yourself, not less.
          </p>
        </div>
      </div>

      {/* Sphinx — closing image */}
      <div className="max-w-4xl mx-auto px-8 pb-28">
        <img
          src="/yoga2.jpg"
          alt="Julia in sphinx pose outdoors"
          className="w-full h-[50vh] object-cover object-center"
        />
      </div>
    </article>
  );
}
