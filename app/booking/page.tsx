export const metadata = {
  title: "Booking | Serene Roots Yoga",
};

export default function Booking() {
  return (
    <section className="max-w-4xl mx-auto px-8 py-24">
      <h1 className="font-serif text-5xl font-light text-stone-800 mb-4">
        Book a Session
      </h1>
      <p className="text-stone-500 text-lg mb-16 leading-relaxed max-w-xl">
        Choose a time that suits you. First sessions are always welcome — no experience needed.
      </p>
      <iframe
        src="https://cal.com/yoga"
        style={{ width: "100%", height: "700px", border: "none" }}
        title="Book a yoga session"
      />
    </section>
  );
}
