export default function Donation() {
  return (
    <section id="donate" className="py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-primary rounded-xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          {/* Image Side */}
          <div className="lg:w-1/2 relative h-64 lg:h-auto">
            <img
              className="w-full h-full object-cover"
              alt="Warm hands holding a small glowing lantern or light, symbolizing hope and charity in a dark setting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCENUpL1pPpQHRNBEE1byQEK-bMn-DuMbRiI2vSZ5sNT7sevgZT3qPzK3NZA7PbsmYALAXrEf7DEo3_qvOK6hkvDHBQm_wz7YmMzNyS8V8EnygNW0cojNZVDBHoBI20wILll-2aMHZzaG1cZluTUc5GRCqI_NCLUu84QVHn66bLpZtrcYXcdq8fVTf6_N0P1GFO-bAfxOL3JRFnfAm73LbnfWWOWYd_zOfzq5G4sa-kLZx3tPbO3u7Kff56gT2QFzL8QzoI5YNi2tG"
            />
            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay"></div>
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
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
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
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">
                    done
                  </span>
                </div>
                <span className="text-lg">
                  Expansion of our research library
                </span>
              </div>
            </div>

            <button className="w-full md:w-auto bg-surface text-primary px-10 py-5 rounded-lg font-bold text-xl hover:bg-secondary-fixed transition-colors shadow-lg">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
