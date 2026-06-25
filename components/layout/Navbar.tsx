"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group z-50">
          <div className="bg-brand-orange p-1.5 rounded-md text-white group-hover:scale-105 transition-transform">
            <Zap size={24} strokeWidth={2.5} />
          </div>
          <span
            className={cn(
              "font-bold text-xl md:text-2xl tracking-tight transition-colors",
              isScrolled ? "text-brand-navy" : "text-brand-navy md:text-white"
            )}
          >
            KEMI Engineers
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium hover:text-brand-orange transition-colors",
                    isScrolled ? "text-slate-600" : "text-white/90"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="#contact" tabIndex={-1}>
            <Button
              variant={isScrolled ? "primary" : "secondary"}
              size="md"
              className={cn(!isScrolled && "bg-white text-brand-navy hover:bg-slate-100")}
            >
              Get a Quote
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden z-50 p-2",
            isScrolled || mobileMenuOpen ? "text-brand-navy" : "text-brand-navy md:text-white"
          )}
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 bg-white z-40 pt-24 px-6 flex flex-col"
          >
            <ul className="flex flex-col gap-6 text-xl font-medium text-brand-navy">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full" size="lg">
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
