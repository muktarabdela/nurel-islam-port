import "./globals.css";
import { Manrope, Noto_Serif } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

const noto = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-headline",
});

export const metadata = {
  title: "Nurel Islam Medresa",
  description: "Classical Islamic teaching and modern community engagement",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${noto.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* Notice bg-surface and text-on-surface here, linking straight to your globals.css @theme */}
      <body className="bg-surface text-on-surface antialiased">{children}</body>
    </html>
  );
}
