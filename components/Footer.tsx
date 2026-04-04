import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-[#f7f4e1] dark:bg-[#012d1d] text-[#012d1d] dark:text-[#fdfae7]">
      {/* 
        Changed to md:grid-cols-4, but made the first item span 2 columns 
        so it perfectly fills the space left by removing the Support column. 
      */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
        {/* Column 1: Brand & Description (Takes up 2 columns) */}
        <div className="md:col-span-2 pr-4">
          <Link
            href="#"
            className="font-serif text-2xl font-bold text-[#012d1d] dark:text-[#fdfae7] mb-4 block"
          >
            Nurel Islam Medresa
          </Link>
          <p className="text-sm text-[#012d1d]/70 dark:text-[#fdfae7]/70 leading-relaxed max-w-sm">
            Nurturing the heart and mind through classical Islamic teaching and
            modern community engagement. Empowering the next generation with
            faith and knowledge.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="#"
                className="text-sm text-[#012d1d]/70 dark:text-[#fdfae7]/70 hover:text-[#7d562d] transition-colors font-medium"
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm text-[#012d1d]/70 dark:text-[#fdfae7]/70 hover:text-[#7d562d] transition-colors font-medium"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm text-[#012d1d]/70 dark:text-[#fdfae7]/70 hover:text-[#7d562d] transition-colors font-medium"
              >
                Donations
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm text-[#012d1d]/70 dark:text-[#fdfae7]/70 hover:text-[#7d562d] transition-colors font-medium"
              >
                Charity Work
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Connect & Copyright */}
        <div>
          <h4 className="font-serif text-lg font-semibold mb-6">
            Connect With Us
          </h4>
          <div className="flex space-x-3">
            {/* Telegram - Official Blue */}
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-[#0088cc] flex items-center justify-center text-white hover:opacity-80 hover:-translate-y-1 transition-all shadow-md"
              aria-label="Telegram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.45c.538-.196 1.006.128.832.941z" />
              </svg>
            </Link>

            {/* TikTok - Official Black */}
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:opacity-80 hover:-translate-y-1 transition-all shadow-md"
              aria-label="TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </Link>

            {/* YouTube - Official Red */}
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:opacity-80 hover:-translate-y-1 transition-all shadow-md"
              aria-label="YouTube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>

            {/* WhatsApp - Official Green */}
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:opacity-80 hover:-translate-y-1 transition-all shadow-md"
              aria-label="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </Link>
          </div>

          {/* Copyright slightly separated */}
          <div className="mt-8 pt-6 border-t border-[#012d1d]/10 dark:border-[#fdfae7]/10">
            <p className="text-xs font-medium text-[#012d1d]/50 dark:text-[#fdfae7]/50">
              © {new Date().getFullYear()} Nurel Islam Medresa.
              <br />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
