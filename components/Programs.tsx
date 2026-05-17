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
        {/* Removed fixed height md:h-[820px] and fixed rows md:grid-rows-2 to allow for expansion */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Row 1 & 2 Left: MAIN CARD WITH VIDEO */}
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
            <div className="w-full flex-grow rounded-2xl overflow-hidden shadow-inner bg-black min-h-[300px] relative">
              <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/zniLjRrHXxo?controls=1&rel=0&modestbranding=1"
                title="Quran Education"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Row 1 Right: SECONDARY CARD (Image) */}
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
                የተለያዩ የእውቀት ዘርፎችን እንደየደረጃው መስጠት
              </p>
            </div>
            <span className="material-symbols-outlined text-6xl text-white opacity-40 group-hover:opacity-100 group-hover:rotate-12 transition-all relative z-20">
              menu_book
            </span>
          </div>

          {/* Row 2 Right Middle: SMALL CARD 1 */}
          <div className="bg-white rounded-3xl overflow-hidden flex flex-col hover:shadow-xl transition-all duration-500 min-h-[400px]">
            <div className="w-full h-full bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/r3UmgUpOR1Y?controls=1&rel=0&modestbranding=1"
                title="Children's Program"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-center bg-[#012d1d]">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full">
                  <span className="material-symbols-outlined text-[#7d562d]">child_care</span>
                </div>
                <h4 className="font-serif font-bold text-xl text-white">የልጆች ጊዜ</h4>
              </div>
              <p className="text-white text-sm">በእውቀትና በተግባር የታነፀን ትውልድ መቅረፅ</p>
            </div>
          </div>

          {/* Row 2 Right End: SMALL CARD 2 */}
          <div className="bg-white rounded-3xl overflow-hidden flex flex-col hover:shadow-xl transition-all duration-500 min-h-[400px]">
            <div className="w-full h-full bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/n7Tg4JqyPCY?controls=1&rel=0&modestbranding=1"
                title="Arabic Language"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-center bg-[#012d1d] text-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-[#ffdcbd]/20 w-10 h-10 flex items-center justify-center rounded-full">
                  <span className="material-symbols-outlined text-[#ffdcbd]">translate</span>
                </div>
                <h4 className="font-serif font-bold text-xl">አረብኛ ቋንቋ</h4>
              </div>
              <p className="text-[#c1ecd4] text-sm">ቁርአንን ለመገንዘብ አረብኛ ማወቅ መሰረታዊ ነው</p>
            </div>
          </div>

          {/* --- NEW ROW START --- */}

          {/* New Card 1: Wide Video Card (2 Cols) */}
          <div className="md:col-span-2 bg-white rounded-3xl overflow-hidden flex flex-col hover:shadow-xl transition-all duration-500 min-h-[400px]">
            <div className="w-full h-full bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID_4"
                title="Special Programs"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-8 flex-grow flex flex-col justify-center bg-[#2c1600] text-white">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-white/10 w-12 h-12 flex items-center justify-center rounded-full">
                  <span className="material-symbols-outlined text-white">mosque</span>
                </div>
                <h3 className="text-2xl font-serif font-bold">የአዳሪ ተማሪዎች ፕሮግራም</h3>
              </div>
              <p className="text-gray-300">ከሩቅ ለሚመጡ ተማሪዎች ተከታታይ የዲን ትምህርት የሚሰጥበት ዘርፍ</p>
            </div>
          </div>

          {/* New Card 2: Small Video Card (1 Col) */}
          <div className="md:col-span-1 bg-white rounded-3xl overflow-hidden flex flex-col hover:shadow-xl transition-all duration-500 min-h-[400px]">
            <div className="w-full h-full bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID_5"
                title="Women's Education"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-center bg-[#012d1d] text-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-pink-500/20 w-10 h-10 flex items-center justify-center rounded-full">
                  <span className="material-symbols-outlined text-pink-200">female</span>
                </div>
                <h4 className="font-serif font-bold text-lg">የሴቶች ልዩ ደርስ</h4>
              </div>
              <p className="text-[#c1ecd4] text-xs">ለእናቶችና ለእህቶች የተዘጋጁ ልዩ ትምህርቶች</p>
            </div>
          </div>

          {/* New Card 3: Small Video Card (1 Col) */}
          <div className="md:col-span-1 bg-white rounded-3xl overflow-hidden flex flex-col hover:shadow-xl transition-all duration-500 min-h-[400px]">
            <div className="w-full h-full bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID_6"
                title="Weekly Lectures"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-center bg-[#012d1d] text-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-500/20 w-10 h-10 flex items-center justify-center rounded-full">
                  <span className="material-symbols-outlined text-blue-200">groups</span>
                </div>
                <h4 className="font-serif font-bold text-lg">ሳምንታዊ ሙሃደራ</h4>
              </div>
              <p className="text-[#c1ecd4] text-xs">በየሳምንቱ አርብ የሚሰጡ ጠቃሚ ምክሮችና ትምህርቶች</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}