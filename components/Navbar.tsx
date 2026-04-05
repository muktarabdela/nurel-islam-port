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
          className="font-serif text-2xl font-bold text-[#012d1d]"
          href="/#home"
        >
          Nurel Islam Medresa
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            {/* Notice how all hrefs now start with a / */}
            <Link
              href="/#home"
              className="text-[#7d562d] font-bold border-b-2 border-[#7d562d] pb-1 text-sm tracking-wide cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-[#012d1d]/70 hover:text-[#012d1d] transition text-sm tracking-wide cursor-pointer"
            >
              About
            </Link>
            <Link
              href="/#programs"
              className="text-[#012d1d]/70 hover:text-[#012d1d] transition text-sm tracking-wide cursor-pointer"
            >
              Programs
            </Link>
            <Link
              href="/#charity"
              className="text-[#012d1d]/70 hover:text-[#012d1d] transition text-sm tracking-wide cursor-pointer"
            >
              Charity
            </Link>
            <Link
              href="/#contact"
              className="text-[#012d1d]/70 hover:text-[#012d1d] transition text-sm tracking-wide cursor-pointer"
            >
              Contact
            </Link>
          </div>

          {/* Donate Button */}
          <Link href="/#donate">
            <button className="bg-[#012d1d] text-white px-6 py-2 rounded-lg font-medium hover:scale-95 transition-all duration-200 cursor-pointer">
              Donate
            </button>
          </Link>
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
            Home
          </Link>
          <Link
            href="/#about"
            onClick={() => setOpen(false)}
            className="text-[#012d1d] font-medium py-2"
          >
            About
          </Link>
          <Link
            href="/#programs"
            onClick={() => setOpen(false)}
            className="text-[#012d1d] font-medium py-2"
          >
            Programs
          </Link>
          <Link
            href="/#charity"
            onClick={() => setOpen(false)}
            className="text-[#012d1d] font-medium py-2"
          >
            Charity
          </Link>
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="text-[#012d1d] font-medium py-2"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
