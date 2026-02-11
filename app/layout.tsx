import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Playfair_Display, Open_Sans } from "next/font/google";
import FloatingButtons from "@/components/FloatingButtons";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Digital Marketing Services Company Delhi, India | King of Digital Marketing",
  description: "Created by Akash, a passionate web developer and designer. This project is a showcase of my skills in Next.js, Tailwind CSS, and modern web development practices. It features a stunning video background, smooth animations, and a responsive design that looks great on all devices. Explore the code and see how I built this beautiful landing page from scratch!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  "bg-white` }
      >
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
