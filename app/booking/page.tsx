import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Work with Me | Julia Hu Yoga",
};

export default function Booking() {
  return (
    <section className="max-w-2xl mx-auto px-5 md:px-8 py-12 md:py-24">
      <h1 className="font-serif text-4xl md:text-5xl font-light text-[#1A1530] mb-4">
        Work with me
      </h1>
      <p className="text-[#1A1530]/75 text-base md:text-lg mb-12 md:mb-16 leading-relaxed">
        Tell me a little about where you are and what you&apos;re looking for. I&apos;ll read through your answers and reach out within 48 hours to set up a call.
      </p>
      <BookingForm />
    </section>
  );
}
