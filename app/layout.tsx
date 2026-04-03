import "./globals.css";
import { Manrope, Noto_Serif } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });
const noto = Noto_Serif({ subsets: ["latin"], variable: "--font-headline" });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${noto.variable}`}>
      <body>{children}</body>
    </html>
  );
}

