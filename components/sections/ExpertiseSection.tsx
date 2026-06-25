"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Zap, Activity, Factory, Battery, Power, PanelRight, Settings } from "lucide-react";

const capabilities = [
  {
    icon: Zap,
    title: "Electrical Infrastructure",
    description: "HT & LT Distribution Networks",
  },
  {
    icon: Activity,
    title: "Hospital Electrical Systems",
    description: "Specialized Healthcare Electrical Installations",
  },
  {
    icon: Factory,
    title: "Industrial Electrification",
    description: "Complete Industrial Power Systems",
  },
  {
    icon: Battery,
    title: "Transformer Yard Works",
    description: "Transformer Installation & Associated Infrastructure",
  },
  {
    icon: Power,
    title: "DG Power Backup Systems",
    description: "Generator and Synchronization Solutions",
  },
  {
    icon: PanelRight,
    title: "Panel Manufacturing & Installation",
    description: "Custom Electrical Panel Solutions",
  },
  {
    icon: Settings,
    title: "Utility & MEP Projects",
    description: "Comprehensive Utility Infrastructure Services",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Our Engineering Expertise Covers"
          align="center"
          className="mb-16 [&_h2]:text-white [&_p]:text-slate-300"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800 transition-colors duration-300"
              >
                <div className="bg-brand-orange/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-brand-orange" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
