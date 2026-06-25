"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="py-24 bg-brand-gray relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-20" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-navy/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
            <div className="bg-brand-navy w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-md">
              <Target size={32} className="text-brand-orange" />
            </div>
            <h3 className="text-3xl font-bold text-brand-navy mb-6">Our Mission</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              To deliver reliable, efficient, and innovative engineering solutions
              through superior quality, technical excellence, and customer-focused
              service while ensuring safety and sustainability in every project.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-brand-navy p-10 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
            <div className="bg-brand-orange w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-md">
              <Eye size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              To become one of India&apos;s most trusted and preferred providers of MEP
              and Electrical Turnkey Engineering Services by consistently delivering
              value-driven solutions and exceeding client expectations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
