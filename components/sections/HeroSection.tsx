"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";

const features = [
  "End-to-End Engineering Solutions",
  "Experienced Technical Team",
  "Quality Assured Execution",
  "On-Time Project Delivery",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 mt-16 md:mt-0">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-brand-orange font-semibold tracking-wider uppercase mb-4">
              MEP & Electrical Turnkey Solutions
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Powering Infrastructure with Engineering Excellence
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Delivering reliable, efficient, and innovative MEP and Electrical
              Engineering solutions for industrial, commercial, healthcare,
              educational, residential, and infrastructure projects across India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-slate-200">
                <CheckCircle2 className="text-brand-orange shrink-0" size={20} />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="#contact" tabIndex={-1}>
              <Button size="lg" className="w-full sm:w-auto">
                Get a Quote
              </Button>
            </Link>
            <Link href="#contact" tabIndex={-1}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-brand-navy">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden md:flex"
      >
        <span className="text-white/70 text-sm font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-brand-orange" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
