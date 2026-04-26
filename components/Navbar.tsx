"use client";

import { useState } from "react";
import Link from "next/link"; // Brought back Next.js Link for fast cross-page routing

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-[#fdfae7]/80 backdrop-blur-md transition-all duration-300">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          className="font-serif text-2xl font-bold tracking-wide hover:opacity-80 transition-opacity duration-300"
          href="/#home"
        >
          <span className="text-[#012d1d]">ኑረል ኢስላም</span>{" "}
          <span className="text-amber-600">መድረሳ</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            {/* Notice how all hrefs now start with a / */}
            <Link
              href="/#home"
              className="text-[#7d562d] font-bold border-b-2 border-[#7d562d] pb-1 text-md tracking-wide cursor-pointer"
            >
              ዋና ገፅ
            </Link>
            <Link
              href="/#about"
              className="text-[#012d1d]/70 hover:text-[#012d1d] transition text-md tracking-wide cursor-pointer"
            >
              ስለኛ
            </Link>
            <Link
              href="/#programs"
              className="text-[#012d1d]/70 hover:text-[#012d1d] transition text-md tracking-wide cursor-pointer"
            >
              ፕሮግራሞች
            </Link>
            <Link
              href="/#charity"
              className="text-[#012d1d]/70 hover:text-[#012d1d] transition text-md tracking-wide cursor-pointer"
            >
              ተጨማሪ
            </Link>
                  <Link
              href="/#classes"
              className="text-[#012d1d]/70 hover:text-[#012d1d] transition text-md tracking-wide cursor-pointer"
            >
              ትምህርቶች
            </Link>
            <Link
              href="/#contact"
              className="text-[#012d1d]/70 hover:text-[#012d1d] transition text-md tracking-wide cursor-pointer"
            >
              ያግኙን
            </Link>
          </div>

          {/* Donate Button */}
          {/* <Link href="/#donate">
            <button className="bg-[#012d1d] text-white px-6 py-2 rounded-lg font-medium hover:scale-95 transition-all duration-200 cursor-pointer">
              Donate
            </button>
          </Link> */}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-[#012d1d] text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-8 pb-4 flex flex-col gap-4 bg-[#fdfae7]">
          <Link
            href="/#home"
            onClick={() => setOpen(false)}
            className="text-[#012d1d] font-medium py-2"
          >
            ዋና ገፅ
          </Link>
          <Link
            href="/#about"
            onClick={() => setOpen(false)}
            className="text-[#012d1d] font-medium py-2"
          >
            ስለኛ
          </Link>
          <Link
            href="/#programs"
            onClick={() => setOpen(false)}
            className="text-[#012d1d] font-medium py-2"
          >
            ፕሮግራሞች
          </Link>
          <Link
            href="/#charity"
            onClick={() => setOpen(false)}
            className="text-[#012d1d] font-medium py-2"
          >
            ተጨማሪ
          </Link>
              <Link
              href="/#charity"
              className="text-[#012d1d]/70 hover:text-[#012d1d] transition text-md tracking-wide cursor-pointer"
            >
              ተጨማሪ
            </Link>
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="text-[#012d1d] font-medium py-2"
          >
            ያግኙን
          </Link>
        </div>
      )}
    </nav>
  );
}
