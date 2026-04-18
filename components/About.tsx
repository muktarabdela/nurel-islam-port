export default function About() {
  return (
    <section id="about" className="py-24 bg-[#fdfae7]">
      <div className="max-w-7xl mx-auto px-8">
        {/* TOP ROW: Text and Cards (Unchanged Design) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-serif font-bold text-[#012d1d] mb-8">
              ትንሽ ስለ ኑረል ኢስላም መድረሳ
            </h2>

            <div className="w-20 h-1 bg-[#7d562d] mb-8"></div>

            <p className="text-lg text-[#414844] leading-relaxed mb-6">
              ኑረል ኢስላም መድረሳ ብዙ እናቶች እና አባቶች አሊፍ ብለው ጀምረው ቁርአን እስከማኽተም ደርሰዋል።
              በአካባቢ ላይ የሚገኙ በመቶዎች የሚቆጠሩ ህጻናትና ወጣቶችም ከውቀት ማዕድ ቀስመዋል በመድረሳዉ ውስጥ
              የሚሰጡ የእውቀት ዘርፎች ከቃይደቱን ኖራንያ ጀምሮ ቁርዓን እስከ መጨረስ ከአርበኢን ጀምሮ እስከ ትልልቅ
              የሀዲስ ኪታቦች ነህው ሰርፍ ኢምላእ እና ሌሎችም የአረብኛ ቋንቋ ትምህርቶች በፊቅህ ዘርፍ ከሰፊና ጀምሮ
              እስከ ትልልቅ የፊቅህ ኪታቦች ኢልመል ሀዲስ፣ ኢልመል ፈራኢድ ፣ ኢልመ ኡሱሊል ፊቅህ፣ ተፍሲር እና
              ሌሎችም ኢልሞች እየተሰጡ ይገኛል ኑረል ኢስላም መድረሳ ከግለሰብ ቤት ተጀምሮ፣የተለያዩ ተግዳሮቶችን
              በማለፍ ወደ መድረስነት ተሻግሯል ወደፊትም በአላህ ፍቃድ ወደ ከፍታ ይቀጥላል።
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            <div className="bg-[#f7f4e1] p-8 rounded-xl hover:bg-white transition-all duration-300 shadow-sm sm:mt-8">
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
            <div className="bg-[#f7f4e1] p-8 rounded-xl hover:bg-white transition-all duration-300 shadow-sm sm:mt-8">
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

        <div className="mt-20 max-w-3xl mx-auto">
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-black">
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
      </div>
    </section>
  );
}
