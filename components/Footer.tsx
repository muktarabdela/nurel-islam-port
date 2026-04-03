export default function Footer() {
  return (
    <footer className="bg-[#012d1d] text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              Nurel Islam Medresa
            </h3>
            <p className="text-[#c1ecd4] text-sm leading-relaxed">
              Serving the community through knowledge and charity. Building
              strong foundations in faith, education, and compassion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[#c1ecd4]">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Programs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Charity
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Mini */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm text-[#c1ecd4] mb-2">Addis Ababa, Ethiopia</p>
            <p className="text-sm text-[#c1ecd4] mb-2">+251 9XX XXX XXX</p>
            <p className="text-sm text-[#c1ecd4]">info@nurelislam.org</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 text-center text-sm text-[#c1ecd4]">
          © {new Date().getFullYear()} Nurel Islam Medresa. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
