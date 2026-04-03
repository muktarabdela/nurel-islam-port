"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-[#fdfae7]/80 backdrop-blur-md transition-all duration-300">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <a className="font-serif text-2xl font-bold text-[#012d1d]" href="#">
          Nurel Islam Medresa
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            <a className="text-[#7d562d] font-bold border-b-2 border-[#7d562d] pb-1 text-sm tracking-wide">
              Home
            </a>
            <a className="text-[#012d1d]/70 hover:text-[#012d1d] transition text-sm tracking-wide">
              About
            </a>
            <a className="text-[#012d1d]/70 hover:text-[#012d1d] transition text-sm tracking-wide">
              Programs
            </a>
            <a className="text-[#012d1d]/70 hover:text-[#012d1d] transition text-sm tracking-wide">
              Charity
            </a>
            <a className="text-[#012d1d]/70 hover:text-[#012d1d] transition text-sm tracking-wide">
              Contact
            </a>
          </div>

          {/* Donate Button */}
          <button className="bg-[#012d1d] text-white px-6 py-2 rounded-lg font-medium hover:scale-95 transition-all duration-200">
            Donate
          </button>
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
          <a className="text-[#012d1d]">Home</a>
          <a className="text-[#012d1d]">About</a>
          <a className="text-[#012d1d]">Programs</a>
          <a className="text-[#012d1d]">Charity</a>
          <a className="text-[#012d1d]">Contact</a>
        </div>
      )}
    </nav>
  );
}
