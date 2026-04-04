export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-surface-container">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-20">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-8">
              Get in Touch
            </h2>
            <p className="text-on-surface-variant mb-12 text-lg">
              Have questions about our programs or wish to visit the Medresa? We
              are here to help you on your journey.
            </p>

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Phone</h4>
                  <p className="text-on-surface-variant">+1 (555) 123-4567</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Email</h4>
                  <p className="text-on-surface-variant">info@nurelislam.edu</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Location</h4>
                  <p className="text-on-surface-variant">
                    123 Wisdom Road, Knowledge Quarter
                    <br />
                    London, United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Optional Form (Ready to use if you ever want to uncomment it) */}
          {/* 
          <div className="bg-surface-container-lowest p-10 rounded-xl shadow-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-2">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-2">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">
                  Subject
                </label>
                <input
                  className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Program Inquiry"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">
                  Message
                </label>
                <textarea
                  className="w-full bg-surface-container-highest border-none rounded-lg p-4 h-32 focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="How can we assist you?"
                ></textarea>
              </div>
              <button className="w-full bg-primary text-on-primary py-4 rounded-lg font-bold hover:bg-primary-container transition-all">
                Send Message
              </button>
            </form>
          </div> 
          */}
        </div>
      </div>
    </section>
  );
}
