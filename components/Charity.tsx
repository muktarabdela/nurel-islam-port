import Link from "next/link";
import React from "react";

export default function Charity() {
  return (
    <section id="charity" className="py-24 bg-[#f7f4e1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-serif font-bold text-[#012d1d] mb-4">
              ተጨማሪ ስራዎች
            </h2>
            <p className="text-[#414844] max-w-xl text-lg">
              ትውልድን በእውቀት እና በተርቢያ ከመቅረጽ በዘለለ በሌሎች ጉዳዮች በአካባቢው ላይ መልካም ተጽዕኖን
              ማሳደር አንዱ የመድረሳችን መለያ ነው።
            </p>
          </div>

          <Link
            href="/charity"
            className="text-[#012d1d] font-bold flex items-center gap-2 group hover:text-[#2c1600] transition-colors bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md"
          >
            View More
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_right_alt
            </span>
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[300px] gap-6">
          {/* Item 1: MAIN CARD (Spans 2 columns, 2 rows) */}
          <div className="md:col-span-2 md:row-span-2 relative group rounded-3xl overflow-hidden shadow-lg h-[400px] md:h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700 z-0"
              alt="Long communal table set for a Ramadan Iftar gathering at dusk"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn8FNzrtr9CEykNl85eVHq2hER9Kui4nt4IK_DRHTmeGjGsTCkzLFUVWDPzL5kiuNka5RpVda1z2oK6g5EiIw_rULhd1Jw_JuH4lXMgTD0VXEgFUZlL-zh6EATU16N3qOYs9d2YiO1NujFYG5vHTXPjzLv4L_WxOHipWolZTYBKq4vUqT5qa27vMH8QX7E4eJCtBftdXPj_iJIiOA1LlNj7Ch2b7A2dZgg1J78IjjgzMBJDbBF4pp1zfRIBGAlhKcTF9DBRDoGn-I5"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#012d1d]/95 via-[#012d1d]/40 to-transparent z-10"></div>

            <div className="absolute inset-0 flex flex-col justify-end p-10 z-20">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#ffdcbd] text-[#2c1600] text-xs font-bold mb-4 uppercase tracking-wider w-max shadow-sm">
                Annual Event
              </span>
              <h3 className="text-4xl font-serif font-bold text-white mb-3 shadow-sm">
                Ramadan Iftar Program
              </h3>
              <p className="text-[#c1ecd4] text-lg max-w-md leading-relaxed">
                Providing thousands of meals annually to those in need during
                the blessed month. Bringing the community together, one meal at
                a time.
              </p>
            </div>
          </div>

          {/* Item 2: VIDEO EMBED CARD (Spans 2 columns, 1 row) */}
          <div className="md:col-span-2 md:row-span-1 relative rounded-3xl overflow-hidden shadow-lg bg-black h-[300px] md:h-full group">
            {/* Floating Label (Pointer events none so it doesn't block video clicks) */}
            {/* <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-bold pointer-events-none z-20 flex items-center gap-1 shadow-sm">
              <span className="material-symbols-outlined text-[14px]">
                play_circle
              </span>
              Watch Our Impact
            </div> */}

            <iframe
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              src="https://www.youtube.com/embed/LXb3EKWsInQ?controls=1&rel=0&modestbranding=1"
              title="Charity Impact Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Item 3: SMALL IMAGE CARD (Spans 1 column, 1 row) */}
          <div className="md:col-span-1 md:row-span-1 relative group rounded-3xl overflow-hidden shadow-lg h-[300px] md:h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700 z-0"
              alt="Group of diverse community members working together"
              src="/musela.jpg"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10"></div>

            <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                ኑረል ኢስላም ሙሰላ
              </h3>
              <p className="text-gray-200 text-sm">
                መድረሳው ለአምስቱ ወቅት ሰላት መስገጃነት እያገለገለ ይገኛል
              </p>
            </div>
          </div>

          {/* Item 4: STATISTIC / HIGHLIGHT CARD (Spans 1 column, 1 row) */}
          <div className="md:col-span-1 md:row-span-1 relative group rounded-3xl overflow-hidden shadow-lg h-[300px] md:h-full">
            <img
              className="w-full h-full object-cover"
              src="/Item4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
