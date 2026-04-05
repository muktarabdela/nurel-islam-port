import React from "react";

export default function Programs() {
  const defaultImageUrl =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDUvGZMwhxjbP7Ypinqed0I588a6L2lBezYhqMZDCfWswgANOuA3l5z4ULamCyfLEMQLXEjc7r9JX_x1WfaZ-Vfqpt7wt1zIRurqEJps_3DVNlQk3pfLT4KMoLJy1Qg4v5y2hEOr4CI1macJf43wxMXdX8q4T3Gbc_vsaOEfq5OYyDpb5XxKJ6iZqVKUM4XHfAwtBMe4ERxRRR54b1_rQIZ1JlS9IxwXc7B13vFsteAhHsqtf9Cu0zzwDRrpmaV-KQW4gFlIiIojVf7";

  return (
    <section id="programs" className="py-24 bg-[#f7f4e1]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#012d1d] mb-4">
            Academic Programs
          </h2>
          <p className="text-[#414844] max-w-2xl mx-auto text-lg">
            Structured curricula designed for varying levels of proficiency,
            from beginners to advanced students of knowledge.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[600px]">
          {/* MAIN CARD - Spans 2 Cols, 2 Rows */}
          <div className="md:col-span-2 md:row-span-2 bg-white rounded-3xl p-10 flex flex-col justify-between group hover:shadow-2xl transition-all duration-500 overflow-hidden relative min-h-[400px]">
            <div className="z-10 relative">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#ffdcbd] text-[#2c1600] text-xs font-bold mb-6 uppercase tracking-wider shadow-sm">
                Most Attended
              </span>

              <h3 className="text-4xl font-serif font-bold text-[#012d1d] mb-4">
                Qur’an teaching (Tajweed)
              </h3>

              <p className="text-[#414844] text-lg leading-relaxed max-w-sm">
                Master the art of recitation with precise phonetics and
                spiritual connection. Classes available for all ages.
              </p>
            </div>

            {/* Mobile View Image (Hidden on Desktop) */}
            <img
              className="absolute bottom-0 right-0 w-1/2 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700 md:hidden"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVu1pBcYpBeMgrI1GLBlFFb6IWqNyNCwHbF2vInkT3E6Mg68UmvXorD63nHGZ0azIfA3icMfroFB7i7xELWm0HWKcFu6f3j52XutHIb-icuy2jYW6TRtv-1ipyL844zZOqkg0QR3WqjbAlWEFJ-WU4XW22Hzeb2VxWTRpXYk_y4ZGOOZ90vW6mtFvUJKy7lQJlyKfoygux_dXjuxkq9vhtBfS2USM-p1xndNOOuBLDnrp8WigFaFHRVK8N3G_kjxssOr0kx5ZsUHf-"
              alt="Quran Teaching Mobile"
            />

            {/* Desktop View Image (Hidden on Mobile) */}
            <img
              className="absolute bottom-0 right-0 w-1/2 group-hover:scale-110 transition-all duration-700 hidden md:block"
              src={defaultImageUrl}
              alt="Quran Teaching Desktop"
            />
          </div>

          {/* SECONDARY CARD - Spans 2 Cols, 1 Row */}
          <div className="md:col-span-2 bg-[#012d1d] rounded-3xl p-10 flex items-center justify-between group hover:shadow-xl transition-all duration-500 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#012d1d] via-[#012d1d]/90 to-transparent z-10"></div>

            <img
              className="absolute right-0 top-0 w-2/3 h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700 z-0"
              src={defaultImageUrl}
              alt="Islamic Book Studies"
            />

            <div className="relative z-20 max-w-sm text-white">
              <h3 className="text-3xl font-serif font-bold mb-3">
                Islamic book studies (Kitabs)
              </h3>
              <p className="text-[#c1ecd4] leading-relaxed">
                Deep dives into Fiqh, Hadith, and Seerah using classical texts
                and modern commentaries.
              </p>
            </div>

            <span className="material-symbols-outlined text-6xl text-white opacity-40 group-hover:opacity-100 group-hover:rotate-12 transition-all relative z-20">
              menu_book
            </span>
          </div>

          {/* SMALL CARD 1 */}
          <div className="relative bg-[#ece9d6] rounded-3xl p-8 flex flex-col justify-end group hover:shadow-xl transition-all duration-500 overflow-hidden md:h-full h-64">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-0"
              src={defaultImageUrl}
              alt="Youth Circle"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>

            <div className="relative z-20 text-white mt-auto">
              <div className="bg-white/20 backdrop-blur-sm w-12 h-12 flex items-center justify-center rounded-full mb-3">
                <span className="material-symbols-outlined text-white text-2xl">
                  child_care
                </span>
              </div>
              <h4 className="font-serif font-bold text-2xl mb-1">
                Youth Circle
              </h4>
              <p className="text-sm text-gray-200">
                Foundation for the next generation.
              </p>
            </div>
          </div>

          {/* SMALL CARD 2 */}
          <div className="relative bg-[#ece9d6] rounded-3xl p-8 flex flex-col justify-end group hover:shadow-xl transition-all duration-500 overflow-hidden md:h-full h-64">
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700 z-0"
              src={defaultImageUrl}
              alt="Arabic Language"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012d1d]/95 via-[#012d1d]/60 to-black/10 z-10"></div>

            <div className="relative z-20 text-white mt-auto">
              <div className="bg-[#ffdcbd]/20 backdrop-blur-sm w-12 h-12 flex items-center justify-center rounded-full mb-3">
                <span className="material-symbols-outlined text-[#ffdcbd] text-2xl">
                  translate
                </span>
              </div>
              <h4 className="font-serif font-bold text-2xl mb-1 text-white">
                Arabic Language
              </h4>
              <p className="text-sm text-[#c1ecd4]">
                Unlock the language of the Quran.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
