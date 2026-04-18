import React from "react";

export default function Donation() {
  return (
    <section id="donate" className="py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-primary rounded-xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          {/* Video Side */}
          {/* h-72 for mobile, lg:h-auto to stretch and match the right side's height on desktop */}
          <div className="lg:w-1/2 relative h-72 lg:h-auto bg-black m-10 rounded-xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/LXb3EKWsInQ?controls=1&rel=0&modestbranding=1"
              title="Donation Campaign Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 p-12 lg:p-20 text-on-primary">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Invest in Eternal Reward
            </h2>
            <p className="text-on-primary-container text-lg leading-relaxed mb-10">
              Your donation supports our educational programs, maintains our
              facilities, and funds our community outreach. Be a part of the
              Sadaqah Jariyah that continues to give for generations.
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
                  Student scholarships for underprivileged youth
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
                  Expansion of our research library
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
