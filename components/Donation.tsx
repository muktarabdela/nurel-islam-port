import React from "react";

export default function Donation() {
  return (
    <section id="donate" className="py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-primary rounded-xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          {/* Video Side */}
          {/* h-72 for mobile, lg:h-auto to stretch and match the right side's height on desktop */}
          <div className="lg:w-1/2 relative h-72 lg:h-auto bg-black aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-white m-10">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/JAfPaNPdyrU?controls=1&rel=0&modestbranding=1"
              title="Donation Campaign Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 p-12 lg:p-20 text-on-primary">
            <h2 className="text-4xl font-serif font-bold mb-6">
              ከሞትን በኋላ የማይቋረጥ ሰደቃ{" "}
            </h2>
            <p className="text-on-primary-container text-lg leading-relaxed mb-10">
              መድረሳው ውስጥ የሚሰጡ ፕሮግራሞች ብዙ ስለሆኑ የቦታ ጥበት እና ተጨማሪ ስራዎችን ለመስራት ሁሉም
              የበኩሉን አስተዋጽኦ ቢሰጥ ለአኺራው መልካም ስራን በቀላሉ ማስቀደም ይችላል።
            </p>

            <div className="space-y-6 mb-10">
              {/* List Item 1 */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-white">
                    done
                  </span>
                </div>
                <span className="text-lg">
                  ከመድረሳው ጎን ለመስጂድነት የሚያገለግልን የቦታ ግዥ ማድረግ{" "}
                </span>
              </div>

              {/* List Item 2 */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-white">
                    done
                  </span>
                </div>
                <span className="text-lg">
                  ትምህርትን በተሳለጠ መልኩ ለመስጠት ዘመናዊ መሣሪያዎችን በግዥ ለማስገባት{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
