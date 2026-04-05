import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CharityPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section */}
        <header className="relative overflow-hidden bg-primary py-24 md:py-32">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-container via-primary to-primary"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-8 text-center">
            <h1 className="font-serif text-5xl md:text-7xl text-surface mb-6 leading-tight">
              Our Charity Work
            </h1>
            <p className="max-w-2xl mx-auto text-on-primary-container text-lg md:text-xl font-light">
              Transforming lives through communal wisdom and compassionate
              support. Our initiatives are rooted in the timeless values of
              generosity and service.
            </p>
          </div>
        </header>

        {/* Impact Stats Section */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center p-8 bg-surface-container-low rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="font-serif text-4xl md:text-5xl text-secondary mb-2">
                  12k+
                </div>
                <div className="text-sm font-bold text-on-surface/60 uppercase tracking-widest">
                  Meals Served
                </div>
              </div>
              <div className="text-center p-8 bg-surface-container-low rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="font-serif text-4xl md:text-5xl text-secondary mb-2">
                  850
                </div>
                <div className="text-sm font-bold text-on-surface/60 uppercase tracking-widest">
                  Families Helped
                </div>
              </div>
              <div className="text-center p-8 bg-surface-container-low rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="font-serif text-4xl md:text-5xl text-secondary mb-2">
                  45
                </div>
                <div className="text-sm font-bold text-on-surface/60 uppercase tracking-widest">
                  Active Projects
                </div>
              </div>
              <div className="text-center p-8 bg-surface-container-low rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="font-serif text-4xl md:text-5xl text-secondary mb-2">
                  $200k
                </div>
                <div className="text-sm font-bold text-on-surface/60 uppercase tracking-widest">
                  Funds Raised
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Gallery (Bento Style) */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <span className="inline-block px-3 py-1 bg-secondary-fixed text-on-secondary-fixed text-xs font-bold rounded-full mb-4 tracking-wider">
                  ONGOING INITIATIVES
                </span>
                <h2 className="font-serif text-4xl text-primary">
                  Compassion in Action
                </h2>
              </div>
              <p className="text-on-surface/70 max-w-md">
                Our charitable activities span across urgent relief and
                long-term sustainable development for our local community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Featured Activity */}
              <div className="md:col-span-8 bento-card bg-surface-container-low rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    alt="Gathering of diverse people sharing a communal meal in a warm, sunlit courtyard"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6GgQJCDZyC8FCVgiiuxQEQ12l9lDo4DL8WJLFsokUbDrwxi4PJg6CPIuQp-dteHKDSDqax-0RprQmuUSf4jQdF1_pGnOPSya9baYZHOCdqZSL9KvBN8HtruQRaj8QEO3O-BsRkngtlerTkVfv7UnhVb4Zp9cmmttqCBNTyNpZFBi4Go-nJ0TgZKm7pxqYPxLweAbXsn4V87Huv4p9JgyBqKrktsdeKdLoAnRMaQxpfvF55_T5GSrS5oKNj7r8J7RpytoqFLfEc5PI"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-secondary text-lg">
                      restaurant
                    </span>
                    <span className="text-xs font-bold text-secondary uppercase tracking-tighter">
                      Community Program
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-primary mb-3">
                    Ramadan Iftar
                  </h3>
                  <p className="text-on-surface/70 leading-relaxed">
                    Providing thousands of nutritious meals daily throughout the
                    holy month to students and local families in need, fostering
                    a spirit of unity.
                  </p>
                </div>
              </div>

              {/* Side Activity 1 */}
              <div className="md:col-span-4 bento-card bg-surface-container-low rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="aspect-square overflow-hidden">
                  <img
                    alt="Close up of hands exchanging a box of essential supplies"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOQuimjhkHzjFFk8eWYq0wkLVtIlA7OqfCgy5uujoKoNA8444ivdIdyApH7gfUqWNbVSbSd3jlXDmLlDFnOrLX8htrM7uSkS1FxgtItr9B22Pl4trEXkkJuGjA_d8KdNh6RXctOHe1p3_JEDeVOwXR6ug5oylwY3cd7dtNaECNvTGjJyBsrMA0jdxuqVfqxhVGshm3h2Mbu6GAW_a8ig_dvnWx0n0BUL_AMJyKtZdOdlPDdlcdCz69iiX1oQQkt9fAbpI38yh3Kn3a"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-primary mb-2">
                    Community Support
                  </h3>
                  <p className="text-on-surface/70 text-sm">
                    Monthly essential kits containing food, hygiene products,
                    and winter clothing for vulnerable elders.
                  </p>
                </div>
              </div>

              {/* Side Activity 2 */}
              <div className="md:col-span-4 bento-card bg-surface-container-low rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="aspect-square overflow-hidden">
                  <img
                    alt="Children in a classroom setting with sunlight streaming through windows"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0dKUujN7HZr6WrnjF9jon0A5JOVszB106R9pKwE-1M3vrDukOJch7tk4c2aTCjCS57u9CbKiDMahTiQJocDpoomDdF_ldyb1YaM_B8UvGhgUstc9PDQU5fz4nY53Lq5AZfPfi1h0iRqw8rziFM1k9tGG5HcMFEk5IVXTkmhPaNT5z0l9_1jsxtXmM89RUe0Yxg5FaJqItklJopl3K7ZYjobii8OvZ8OvAt012v6oOzfpZozDxf86YP_85on8mGf65M2hxDD6Sveaj"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-primary mb-2">
                    Educational Support
                  </h3>
                  <p className="text-on-surface/70 text-sm">
                    Scholarships and learning materials for orphans and
                    underprivileged students to ensure knowledge is accessible
                    to all.
                  </p>
                </div>
              </div>

              {/* Bottom Activity */}
              <div className="md:col-span-8 bento-card bg-surface-container-low rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-1/2 overflow-hidden">
                    <img
                      alt="Rescue workers and volunteers in a coordinated effort during a flood relief operation"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuTH72xwmFWMzskD2Srk9Mtjwk-lCOcxb-6LEh_JHbO_tGXxiNIaYxscotU7qSjJYRNQ6FNLZLmLZCj3QQi0etUUpo0Zd3BVKDlY8jc1YSRCHysBxiEBXqAOxy49Clg6m5pHCzF6cnzd_p6QYRCEd6oH_W0azuJb0wZ3K4QQ5m_XFkNPEpCQ4DAerpt6j7qtmrgLddXGSPdOlH7K65ukpp5tfiQyaGPcS4Yj8ePo7Pey9VNEpBjhrKqMCwR5cg3PICY2YCQfz7IULP"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-secondary text-lg">
                        medical_services
                      </span>
                      <span className="text-xs font-bold text-secondary uppercase tracking-tighter">
                        Crisis Response
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl text-primary mb-3">
                      Emergency Aid
                    </h3>
                    <p className="text-on-surface/70 text-sm leading-relaxed">
                      Rapid response teams equipped to provide medical supplies
                      and temporary shelter during natural disasters or local
                      crises.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 px-8 bg-surface">
          <div className="max-w-5xl mx-auto bg-primary rounded-xl overflow-hidden relative p-12 md:p-20 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,_#012d1d_0%,_#1b4332_100%)] opacity-90"></div>
            <div className="relative z-10">
              <h2 className="font-serif text-4xl md:text-5xl text-surface mb-8">
                Empower the Community
              </h2>
              <p className="text-on-primary-container text-lg mb-10 max-w-xl mx-auto">
                Your contributions directly fund these initiatives. Together, we
                can build a legacy of knowledge and care that lasts for
                generations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-surface-container-lowest text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-surface transition-colors shadow-xl">
                  Donate Now
                </button>
                <button className="border-2 border-surface/30 text-surface px-10 py-4 rounded-lg font-bold text-lg hover:bg-surface/10 transition-colors">
                  Become a Volunteer
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
