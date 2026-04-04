import Link from "next/link";

export default function Charity() {
  return (
    <section id="charity" className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              Charity in Action
            </h2>
            <p className="text-on-surface-variant max-w-xl">
              Our faith is lived through service. Witness the impact of your
              contributions within our community.
            </p>
          </div>

          <Link
            href="#"
            className="text-secondary font-bold flex items-center gap-2 group"
          >
            View More
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_right_alt
            </span>
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Ramadan Iftar */}
          <div className="relative group h-[400px] rounded-xl overflow-hidden shadow-lg">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
              alt="Long communal table set with dates, water, and traditional food for a Ramadan Iftar gathering at dusk"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn8FNzrtr9CEykNl85eVHq2hER9Kui4nt4IK_DRHTmeGjGsTCkzLFUVWDPzL5kiuNka5RpVda1z2oK6g5EiIw_rULhd1Jw_JuH4lXMgTD0VXEgFUZlL-zh6EATU16N3qOYs9d2YiO1NujFYG5vHTXPjzLv4L_WxOHipWolZTYBKq4vUqT5qa27vMH8QX7E4eJCtBftdXPj_iJIiOA1LlNj7Ch2b7A2dZgg1J78IjjgzMBJDbBF4pp1zfRIBGAlhKcTF9DBRDoGn-I5"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                Ramadan iftar
              </h3>
              <p className="text-on-primary-container text-sm">
                Providing thousands of meals annually to those in need during
                the blessed month.
              </p>
            </div>
          </div>

          {/* Card 2: Community Support */}
          <div className="relative group h-[400px] rounded-xl overflow-hidden shadow-lg">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
              alt="Group of diverse community members working together in a garden, helping each other with a sense of unity and purpose"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfICTc7SlmMO6rek322-lzOR28jsA08m8qb_o54goHpC9EblsR8iQnAK3PgQjlRe59aYopTmkYOszh-puATBHtXd-nEZMhoL3m-wiuCbPPWZj7CUAOm-GgbGs0w-CpdDLUsopsP8tSqSn5p8QGZ_zYVdEc-ilkULWEtioJIVRnrP1t5sZJ5mN_sZ5UX8T6qOFXPMCB75kNe9-kGqZA-XaW7Idy4zG279apktxUf2xAKjGkmbvkBfj4dKL8SeiRCtkOHKeLI8Iq4qzL"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                Community support
              </h3>
              <p className="text-on-primary-container text-sm">
                Ongoing social welfare programs, counseling, and financial aid
                for local families.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
