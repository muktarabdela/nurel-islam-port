import Link from "next/link";

export default function PaidClasses() {
  return (
    <section id="private-classes" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="bg-surface-container-lowest rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-outline-variant/20">
          
          {/* Image Side */}
          <div className="lg:w-5/12 relative h-80 lg:h-auto">
            <img
              className="w-full h-full object-cover"
              alt="Student having a private online study session"
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 right-8 text-white">
              {/* <span className="inline-block px-3 py-1 rounded-full bg-secondary text-white text-xs font-bold mb-3 uppercase tracking-wider">
                Premium Tutoring
              </span> */}
              <h3 className="text-2xl font-serif font-bold">
ባሉበት ቦታ በተመጣጣኝ ዋጋ የዲን እውቀት ይሸምቱ
              </h3>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-7/12 p-10 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              ኦንላይን የ ክፍያ ትምህርቶች
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Accelerate your learning with personalized, one-on-one sessions tailored specifically to your pace and level. Whether you are memorizing the Quran or studying classical texts, our dedicated instructors are here to guide you.
            </p>
            
            {/* Key Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">person_check</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary">በተመርጡ ኡስታዞች</h4>
                  <p className="text-sm text-on-surface-variant">Scholars with verified Ijazahs.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary">ለሁሉም የሚመች የመማሬያ ግዜ</h4>
                  <p className="text-sm text-on-surface-variant">Pick timings that fit your life.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">payments</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary">በተመጣጣኝ ዋጋ</h4>
                  <p className="text-sm text-on-surface-variant">Contact us for tailored packages.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">devices</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary">ሙሉ በሙሉ በ ኦላይን የሆነ</h4>
                  <p className="text-sm text-on-surface-variant">Learn from anywhere via Zoom.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-outline-variant/30 pt-8">
              {/* <Link href="/#contact" className="w-full sm:w-auto">
                <button className="w-full bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-container transition-all shadow-md hover:shadow-lg">
                  Register Now
                </button>
              </Link> */}
              <p className="text-md text-on-surface-variant font-medium text-center sm:text-left">
                ለመመዝገብ አንዲሁም ሙሉ ስለ ትምህርቱ ጥያቄ ካላችሁ ከዚህ በታች በተቀመጠው ስልክ ይደውሉ <br className="hidden sm:block"/>
                09 40 71 19 45
                </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}