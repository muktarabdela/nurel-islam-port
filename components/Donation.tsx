export default function Donation() {
  return (
    <section className="py-24 bg-[#012d1d] text-white">
      <div className="max-w-6xl mx-auto px-8 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-serif font-bold mb-6">
          Support Our Mission
        </h2>

        <p className="text-lg text-[#c1ecd4] max-w-2xl mx-auto mb-10">
          Your contribution helps us continue providing Islamic education and
          supporting those in need. Every donation is an investment in knowledge
          and sadaqah jariyah.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button className="bg-[#7d562d] hover:bg-[#9c6b3a] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
            Donate Now
          </button>

          <button className="border border-white/40 hover:bg-white hover:text-[#012d1d] px-8 py-3 rounded-full font-semibold transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Card 1 */}
          <div className="bg-[#1b4332] p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-2">Transparency</h3>
            <p className="text-sm text-[#c1ecd4]">
              We ensure all donations are used responsibly and effectively.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1b4332] p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-2">Community Impact</h3>
            <p className="text-sm text-[#c1ecd4]">
              Your support directly benefits students and families in need.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1b4332] p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-2">Ongoing Charity</h3>
            <p className="text-sm text-[#c1ecd4]">
              Earn continuous rewards through sadaqah jariyah initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
