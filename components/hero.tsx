export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[870px] flex items-center overflow-hidden"
    >
      {/* Background Image + Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAScJ0b4dps9UF4Pa6DueyXl_DrSbQx3kqvOP8BLRNrTbrt4fH6mKnnbP5Fh_oxTgMNgNC5dCnDfiBpEy2_iwle0vjcW8qh-WBEbOnMTqPvo-K-qfxE1AtibQK8ePQI3S7GjJIm4tfPIS-nWlRPgwsKQL1e-05pNfaJMEI9x4mX_j9iChGpxkQxcbBekS2hLzP4hII7JW49uwM_Sov7pgm7mQRBXlehzKEy6fLgr4-QpvAiQBPzsQSMOZatjVb2q2mtBSdfuIdX3baU"
          alt=""
        />

        <div className="absolute inset-0 hero-gradient opacity-90 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="text-white">
          <span className="inline-block px-4 py-1 rounded-full bg-[#7d562d] text-white text-sm font-semibold tracking-widest mb-6">
            ESTABLISHED TRADITION
          </span>

          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
            ኑረል ኢስላም መድረሳ
          </h1>

          <p className="text-xl md:text-2xl text-[#c1ecd4] max-w-xl mb-10 leading-relaxed">
            Serving the community through knowledge and charity. A sanctuary for
            scholarly growth and spiritual enrichment.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#fdfae7] text-[#012d1d] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#ece9d6] transition">
              Explore Programs
            </button>

            <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition">
              Learn Our History
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:block relative">
          {/* Image */}
          <div className="aspect-square rounded-xl overflow-hidden shadow-2xl transform rotate-3">
            <img
              className="w-full h-full object-cover"
              src="/hero.png"
              alt=""
            />
          </div>

          {/* Floating Quote Card */}
          <div className="absolute -bottom-6 -left-6 bg-[#7d562d] p-8 rounded-xl shadow-xl max-w-xs transform -rotate-3">
            <p className="font-serif italic text-white text-lg">
              "Knowledge is a light that Allah casts into the heart of
              whomsoever He wills."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
