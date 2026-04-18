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
            በመድረሳው የሚሰጡ ትምህርቶች
          </h2>
          <p className="text-[#414844] max-w-2xl mx-auto text-lg">
            በመድረሳው ላይ የሚሰጡት የትምህርት ዘርፎች መሰረታቸው ቁርአንና ሐዲስ እንዲሁም ያጠቃላይ ሙስሊሞች ስምምነት
            ሲሆን ቁርአንና ሐዲስንም በቀደምት ትውልድ ግንዛቤ መሰረት ነው
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[650px]">
          {/* MAIN CARD WITH VIDEO - Spans 2 Cols, 2 Rows */}
          <div className="md:col-span-2 md:row-span-2 bg-white rounded-3xl p-8 flex flex-col gap-6 hover:shadow-xl transition-all duration-500">
            <div>
              <h3 className="text-4xl font-serif font-bold text-[#012d1d] mb-3">
                የቁርአን ትምህርት
              </h3>
              <p className="text-[#414844] text-lg leading-relaxed">
                ለልጆች ለእናቶች ለወጣቶች ለአባቶች እንደ ሁኔታቸው እና እርከናቸው በተለያዩ ጊዜያትና ኡስታዞች
                ይሰጣል።
              </p>
            </div>

            {/* Main Card Video Container */}
            <div className="w-full flex-grow rounded-2xl overflow-hidden shadow-inner bg-black min-h-[250px] md:min-h-0 relative">
              <iframe
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                src="https://www.youtube.com/embed/LXb3EKWsInQ?controls=1&rel=0&modestbranding=1"
                title="Charity Impact Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* SECONDARY CARD - Spans 2 Cols, 1 Row (NO VIDEO - Kept Original Design) */}
          <div className="md:col-span-2 bg-[#012d1d] rounded-3xl p-10 flex items-center justify-between group hover:shadow-xl transition-all duration-500 overflow-hidden relative min-h-[250px]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#012d1d] via-[#012d1d]/90 to-transparent z-10"></div>

            <img
              className="absolute right-0 top-0 w-2/3 h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700 z-0"
              src={defaultImageUrl}
              alt="Islamic Book Studies"
            />

            <div className="relative z-20 max-w-sm text-white">
              <h3 className="text-3xl font-serif font-bold mb-3">የተለያዩ ኪታቦች</h3>
              <p className="text-[#c1ecd4] leading-relaxed">
                Deep dives into Fiqh, Hadith, and Seerah using classical texts
                and modern commentaries.
              </p>
            </div>

            <span className="material-symbols-outlined text-6xl text-white opacity-40 group-hover:opacity-100 group-hover:rotate-12 transition-all relative z-20">
              menu_book
            </span>
          </div>

          {/* SMALL CARD 1 WITH VIDEO (Updated UX) */}
          <div className="bg-white rounded-3xl overflow-hidden flex flex-col hover:shadow-xl transition-all duration-500 h-full">
            {/* Top: Video */}
            <div className="w-full aspect-video bg-black">
              <iframe
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                src="https://www.youtube.com/embed/LXb3EKWsInQ?controls=1&rel=0&modestbranding=1"
                title="Charity Impact Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* Bottom: Text Content */}
            <div className="p-6 flex-grow flex flex-col justify-center bg-[#ece9d6]">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-sm">
                  <span className="material-symbols-outlined text-[#7d562d]">
                    child_care
                  </span>
                </div>
                <h4 className="font-serif font-bold text-xl text-[#012d1d]">
                  Youth Circle
                </h4>
              </div>
              <p className="text-[#414844] text-sm">
                Foundation for the next generation.
              </p>
            </div>
          </div>

          {/* SMALL CARD 2 WITH VIDEO (Updated UX) */}
          <div className="bg-white rounded-3xl overflow-hidden flex flex-col hover:shadow-xl transition-all duration-500 h-full">
            {/* Top: Video */}
            <div className="w-full aspect-video bg-black">
              <iframe
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                src="https://www.youtube.com/embed/LXb3EKWsInQ?controls=1&rel=0&modestbranding=1"
                title="Charity Impact Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* Bottom: Text Content */}
            <div className="p-6 flex-grow flex flex-col justify-center bg-[#012d1d] text-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-[#ffdcbd]/20 w-10 h-10 flex items-center justify-center rounded-full shadow-sm">
                  <span className="material-symbols-outlined text-[#ffdcbd]">
                    translate
                  </span>
                </div>
                <h4 className="font-serif font-bold text-xl">
                  Arabic Language
                </h4>
              </div>
              <p className="text-[#c1ecd4] text-sm">
                Unlock the language of the Quran.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
