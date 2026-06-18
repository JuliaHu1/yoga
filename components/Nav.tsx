import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-[#F3F0F8]">
      <Link href="/" className="font-serif text-xl tracking-wide text-[#2C2638]">
        Julia Hu Yoga
      </Link>
      <div className="flex gap-8">
        <Link href="/" className="text-sm tracking-widest uppercase text-[#2C2638]/70 hover:text-[#7C5FA0] transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-sm tracking-widest uppercase text-[#2C2638]/70 hover:text-[#7C5FA0] transition-colors">
          About
        </Link>
        <Link href="/booking" className="text-sm tracking-widest uppercase text-[#2C2638]/70 hover:text-[#7C5FA0] transition-colors">
          Booking
        </Link>
      </div>
    </nav>
  );
}
