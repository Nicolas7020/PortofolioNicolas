import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nicolas Portfolio | Full Stack Developer",
  description: "Professional portfolio of Nicolas, a passionate Full Stack Developer specializing in React, Next.js, and modern web technologies. Explore my projects, experience, and skills.",
  keywords: ["Nicolas", "Portfolio", "Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development"],
  authors: [{ name: "Nicolas" }],
  creator: "Nicolas",
  openGraph: {
    title: "Nicolas Portfolio | Full Stack Developer",
    description: "Professional portfolio showcasing expertise in modern web development technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolas Portfolio | Full Stack Developer",
    description: "Professional portfolio showcasing expertise in modern web development technologies",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
