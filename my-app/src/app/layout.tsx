import type { Metadata } from "next";
import { Bricolage_Grotesque, Public_Sans, Caveat } from "next/font/google";
import "./globals.css";

const displayFont = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const sansFont = Public_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const handFont = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nicolas Maulana | Frontend Developer",
  description:
    "Portfolio of Nicolas Maulana SS - Frontend Developer & Mobile Dev. CS student at BINUS University and Software Engineer at MidHub.ID, building Indonesia's heavy equipment marketplace frontend from the ground up.",
  keywords: ["Nicolas Maulana", "Portfolio", "Frontend Developer", "Mobile Developer", "React", "Next.js", "TypeScript", "Web Development"],
  authors: [{ name: "Nicolas Maulana SS" }],
  creator: "Nicolas Maulana SS",
  openGraph: {
    title: "Nicolas Maulana | Frontend Developer",
    description: "Portfolio of Nicolas Maulana SS - Frontend Developer & Mobile Dev building real products with Next.js, Flutter, and ML.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolas Maulana | Frontend Developer",
    description: "Portfolio of Nicolas Maulana SS - Frontend Developer & Mobile Dev building real products with Next.js, Flutter, and ML.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${sansFont.variable} ${handFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
