import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-[#f0eeff]">
      <Link href="/" className="font-serif text-xl tracking-wide text-[#1A1530]">
        Julia Hu Yoga
      </Link>
      <div className="flex gap-8">
        <Link href="/" className="text-sm tracking-widest uppercase text-[#1A1530]/70 hover:text-[#5B4B8A] transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-sm tracking-widest uppercase text-[#1A1530]/70 hover:text-[#5B4B8A] transition-colors">
          About
        </Link>
        <Link href="/booking" className="text-sm tracking-widest uppercase text-[#1A1530]/70 hover:text-[#5B4B8A] transition-colors">
          Booking
        </Link>
      </div>
    </nav>
  );
}
