"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ShieldCheck, HardHat, Building2, MapPin } from "lucide-react";
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
          backgroundImage: "url('https://ncetest.com/wp-content/uploads/2024/05/shutterstock_1971671024-scaled.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-brand-navy/20 mix-blend-multiply" />
        {/* Darken the left side where the text sits */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/60 to-transparent" />
        {/* Darken the bottom slightly for the scroll indicator */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Powering Infrastructure with Engineering Excellence
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed drop-shadow-md">
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

      {/* Bottom Information Strip */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-0 left-0 w-full bg-brand-orange py-4 z-20 overflow-hidden"
      >
        <motion.div 
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 80, repeat: Infinity }}
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex justify-start items-center gap-6 lg:gap-10 pr-6 lg:pr-10 min-w-max text-[11px] lg:text-xs font-semibold tracking-[0.2em] text-white uppercase">
              
              <div className="flex items-center gap-3">
                <span>200+ HAPPY CLIENTS</span>
              </div>
              
              <div className="w-1 h-1 rounded-full bg-white shrink-0"></div>
              
              <div className="flex items-center gap-3">
                 <HardHat size={15} className="text-white" />
                 <span>500+ PROJECTS DELIVERED</span>
              </div>
              
              <div className="w-1 h-1 rounded-full bg-white shrink-0"></div>
              
              <div className="flex items-center gap-3">
                 <ShieldCheck size={15} className="text-white" />
                 <span>ISO 9001:2015 CERTIFIED</span>
              </div>
              
              <div className="w-1 h-1 rounded-full bg-white shrink-0"></div>
              
              <div className="flex items-center gap-3">
                 <MapPin size={15} className="text-white" />
                 <span>PAN INDIA PRESENCE</span>
              </div>
              
              <div className="w-1 h-1 rounded-full bg-white shrink-0"></div>
              
              <div className="flex items-center gap-3">
                 <Building2 size={15} className="text-white" />
                 <span>DESIGN · BUILD · MANAGE</span>
              </div>
              
              <div className="w-1 h-1 rounded-full bg-white shrink-0"></div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
