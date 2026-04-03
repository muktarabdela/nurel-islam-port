export default function About() {
  return (
    <section className="py-24 bg-[#fdfae7]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-serif font-bold text-[#012d1d] mb-8">
              Guided by Wisdom, Rooted in Faith
            </h2>

            <div className="w-20 h-1 bg-[#7d562d] mb-8"></div>

            <p className="text-lg text-[#414844] leading-relaxed mb-6">
              Nurel Islam Medresa stands as a beacon of classical Islamic
              education in the modern world. Our mission is to preserve the rich
              intellectual heritage of Islam while empowering students to
              navigate contemporary challenges with spiritual clarity.
            </p>

            <p className="text-lg text-[#414844] leading-relaxed">
              We believe that true education transforms the soul. Through
              rigorous study and community service, we cultivate leaders who
              embody the values of compassion, integrity, and lifelong learning.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-[#f7f4e1] p-8 rounded-xl hover:bg-white transition-all duration-300 shadow-sm">
              <span className="material-symbols-outlined text-4xl text-[#7d562d] mb-4">
                school
              </span>
              <h3 className="text-xl font-serif font-bold text-[#012d1d] mb-2">
                Classical Pedagogy
              </h3>
              <p className="text-[#414844] text-sm">
                Authentic transmission of knowledge through proven scholarly
                methods.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f7f4e1] p-8 rounded-xl hover:bg-white transition-all duration-300 shadow-sm mt-8">
              <span className="material-symbols-outlined text-4xl text-[#7d562d] mb-4">
                volunteer_activism
              </span>
              <h3 className="text-xl font-serif font-bold text-[#012d1d] mb-2">
                Social Impact
              </h3>
              <p className="text-[#414844] text-sm">
                Dedicated to the upliftment of our local and global community.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f7f4e1] p-8 rounded-xl hover:bg-white transition-all duration-300 shadow-sm">
              <span className="material-symbols-outlined text-4xl text-[#7d562d] mb-4">
                history_edu
              </span>
              <h3 className="text-xl font-serif font-bold text-[#012d1d] mb-2">
                Heritage Preservation
              </h3>
              <p className="text-[#414844] text-sm">
                Honoring the traditions of the past to illuminate the path for
                the future.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#f7f4e1] p-8 rounded-xl hover:bg-white transition-all duration-300 shadow-sm mt-8">
              <span className="material-symbols-outlined text-4xl text-[#7d562d] mb-4">
                groups
              </span>
              <h3 className="text-xl font-serif font-bold text-[#012d1d] mb-2">
                Majlis Spirit
              </h3>
              <p className="text-[#414844] text-sm">
                Fostering a welcoming environment for gathering and communal
                wisdom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
