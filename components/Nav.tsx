import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-[#FAF8F5]">
      <Link href="/" className="font-serif text-xl tracking-wide text-stone-800">
        Julia Hu Yoga
      </Link>
      <div className="flex gap-8">
        <Link href="/" className="text-sm tracking-widest uppercase text-stone-600 hover:text-stone-900 transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-sm tracking-widest uppercase text-stone-600 hover:text-stone-900 transition-colors">
          About
        </Link>
        <Link href="/booking" className="text-sm tracking-widest uppercase text-stone-600 hover:text-stone-900 transition-colors">
          Booking
        </Link>
      </div>
    </nav>
  );
}
