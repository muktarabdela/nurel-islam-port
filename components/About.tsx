export default function About() {
  return (
    <section id="about" className="py-24 bg-[#fdfae7]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Changed items-start to items-center so the video vertically aligns with the text nicely */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* LEFT CONTENT (Text) */}
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

          {/* RIGHT CONTENT (Video replacing the cards) */}
          <div className="lg:col-span-7">
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/my08a22EH5Q?controls=1&rel=0&modestbranding=1"
                title="About Nural Islam Madrasa Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
