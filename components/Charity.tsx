export default function Charity() {
  return (
    <section className="py-24 bg-[#fdfae7]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#012d1d] mb-4">
            Charity & Community Work
          </h2>
          <p className="text-[#414844] max-w-2xl mx-auto">
            Serving the community through knowledge and charity. Our initiatives
            aim to support those in need while strengthening brotherhood.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative rounded-xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433"
              alt=""
              className="w-full h-[350px] object-cover group-hover:scale-110 transition-all duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-xl font-serif font-bold mb-2">
                Food Distribution
              </h3>
              <p className="text-sm text-gray-200">
                Providing essential meals to families in need.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754"
              alt=""
              className="w-full h-[350px] object-cover group-hover:scale-110 transition-all duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-xl font-serif font-bold mb-2">
                Education Support
              </h3>
              <p className="text-sm text-gray-200">
                Helping students access learning materials and scholarships.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca"
              alt=""
              className="w-full h-[350px] object-cover group-hover:scale-110 transition-all duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-xl font-serif font-bold mb-2">
                Community Aid
              </h3>
              <p className="text-sm text-gray-200">
                Supporting local families through various initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
