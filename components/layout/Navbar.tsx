"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed z-50 transition-all duration-300 left-0 right-0 mx-auto",
        isScrolled
          ? "top-4 w-[calc(100%-2rem)] max-w-6xl rounded-full bg-white/95 backdrop-blur-md shadow-2xl py-3 border border-slate-200"
          : "top-4 w-[calc(100%-2rem)] max-w-6xl rounded-full bg-white/95 backdrop-blur-md shadow-lg py-4 border border-slate-200"
      )}
    >
      <div className="w-full h-full max-w-7xl mx-auto px-6 md:py-0 md:px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group z-50">
          <Image
            src="/logo.png"
            alt="KEMI Engineers"
            width={180}
            height={48}
            className="w-36 md:w-40 h-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-bold text-slate-700 hover:text-brand-orange transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="#contact" tabIndex={-1}>
            <Button
              variant="primary"
              size="sm"
              className="h-10 px-6 text-sm shadow-md"
            >
              Get a Quote
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2 text-kemi-black hover:text-brand-orange transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-[calc(100%+1rem)] left-0 right-0 bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 flex flex-col z-40"
          >
            <ul className="flex flex-col gap-4 text-lg font-medium text-kemi-black text-center">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full py-2 hover:text-brand-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 pt-6 border-t border-slate-200"
            >
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full h-12" size="md">
                  Get a Quote
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
