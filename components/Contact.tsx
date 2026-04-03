export default function Contact() {
  return (
    <section className="py-24 bg-[#f7f4e1]">
      <div className="max-w-6xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#012d1d] mb-4">
            Get in Touch
          </h2>
          <p className="text-[#414844] max-w-2xl mx-auto">
            We welcome your questions, suggestions, and support. Reach out to us
            through any of the following channels.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Phone */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <span className="material-symbols-outlined text-4xl text-[#7d562d] mb-4">
              call
            </span>
            <h3 className="font-serif font-bold text-lg text-[#012d1d] mb-2">
              Phone
            </h3>
            <p className="text-[#414844] text-sm">+251 9XX XXX XXX</p>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <span className="material-symbols-outlined text-4xl text-[#7d562d] mb-4">
              mail
            </span>
            <h3 className="font-serif font-bold text-lg text-[#012d1d] mb-2">
              Email
            </h3>
            <p className="text-[#414844] text-sm">info@nurelislam.org</p>
          </div>

          {/* Location */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <span className="material-symbols-outlined text-4xl text-[#7d562d] mb-4">
              location_on
            </span>
            <h3 className="font-serif font-bold text-lg text-[#012d1d] mb-2">
              Location
            </h3>
            <p className="text-[#414844] text-sm">Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
