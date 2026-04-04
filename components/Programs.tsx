export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-[#f7f4e1]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#012d1d] mb-4">
            Academic Programs
          </h2>
          <p className="text-[#414844] max-w-2xl mx-auto">
            Structured curricula designed for varying levels of proficiency,
            from beginners to advanced students of knowledge.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[600px]">
          {/* MAIN CARD */}
          <div className="md:col-span-2 md:row-span-2 bg-white rounded-xl p-10 flex flex-col justify-between group hover:shadow-xl transition-all duration-500 overflow-hidden relative">
            <div className="z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-[#ffdcbd] text-[#2c1600] text-xs font-bold mb-4 uppercase tracking-wider">
                Most Attended
              </span>

              <h3 className="text-3xl font-serif font-bold text-[#012d1d] mb-4">
                Qur’an teaching (Tajweed)
              </h3>

              <p className="text-[#414844] text-lg leading-relaxed max-w-sm">
                Master the art of recitation with precise phonetics and
                spiritual connection. Classes available for all ages.
              </p>
            </div>

            {/* Background image */}
            <img
              className="absolute bottom-0 right-0 w-1/2 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVu1pBcYpBeMgrI1GLBlFFb6IWqNyNCwHbF2vInkT3E6Mg68UmvXorD63nHGZ0azIfA3icMfroFB7i7xELWm0HWKcFu6f3j52XutHIb-icuy2jYW6TRtv-1ipyL844zZOqkg0QR3WqjbAlWEFJ-WU4XW22Hzeb2VxWTRpXYk_y4ZGOOZ90vW6mtFvUJKy7lQJlyKfoygux_dXjuxkq9vhtBfS2USM-p1xndNOOuBLDnrp8WigFaFHRVK8N3G_kjxssOr0kx5ZsUHf-"
              alt=""
            />
          </div>

          {/* SECONDARY CARD */}
          <div className="md:col-span-2 bg-[#012d1d] text-white rounded-xl p-10 flex items-center justify-between group hover:bg-[#1b4332] transition-all duration-300">
            <div className="max-w-xs">
              <h3 className="text-2xl font-serif font-bold mb-2">
                Islamic book studies (Kitabs)
              </h3>
              <p className="text-[#c1ecd4] text-sm">
                Deep dives into Fiqh, Hadith, and Seerah using classical texts
                and modern commentaries.
              </p>
            </div>

            <span className="material-symbols-outlined text-6xl opacity-20 group-hover:opacity-100 group-hover:rotate-12 transition-all">
              menu_book
            </span>
          </div>

          {/* SMALL CARD 1 */}
          <div className="bg-[#ece9d6] rounded-xl p-8 flex flex-col justify-center text-center hover:bg-white transition-all">
            <span className="material-symbols-outlined text-[#7d562d] text-4xl mb-2">
              child_care
            </span>
            <h4 className="font-serif font-bold text-[#012d1d]">
              Youth Circle
            </h4>
            <p className="text-xs text-[#414844] mt-1">
              Foundation for the next generation.
            </p>
          </div>

          {/* SMALL CARD 2 */}
          <div className="bg-[#ece9d6] rounded-xl p-8 flex flex-col justify-center text-center hover:bg-white transition-all">
            <span className="material-symbols-outlined text-[#7d562d] text-4xl mb-2">
              translate
            </span>
            <h4 className="font-serif font-bold text-[#012d1d]">
              Arabic Language
            </h4>
            <p className="text-xs text-[#414844] mt-1">
              Unlock the language of the Quran.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
