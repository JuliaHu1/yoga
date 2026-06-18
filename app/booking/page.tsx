export const metadata = {
  title: "Booking | Julia Hu Yoga",
};

export default function Booking() {
  return (
    <section className="max-w-4xl mx-auto px-8 py-24">
      <h1 className="font-serif text-5xl font-light text-[#1A1530] mb-4">
        Book a Private
      </h1>
      <p className="text-[#1A1530]/75 text-lg mb-16 leading-relaxed max-w-xl">
        Choose a time that works for you. All levels are welcome.
      </p>
      <iframe
        src="https://cal.com/yoga"
        style={{ width: "100%", height: "700px", border: "none" }}
        title="Book a private yoga session with Julia Hu"
      />
    </section>
  );
}
