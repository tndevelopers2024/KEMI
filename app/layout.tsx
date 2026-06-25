import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KEMI Engineers | MEP & Electrical Turnkey Solutions",
  description:
    "KEMI Engineers delivers reliable, efficient, and innovative MEP and Electrical Engineering solutions for industrial, commercial, healthcare, educational, residential, and infrastructure projects across India.",
  keywords: [
    "MEP",
    "Electrical Turnkey",
    "Engineering",
    "HVAC",
    "Plumbing",
    "Fire Fighting",
    "Industrial Electrification",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} min-h-screen flex flex-col font-sans selection:bg-brand-orange selection:text-white bg-white text-slate-800 antialiased`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
