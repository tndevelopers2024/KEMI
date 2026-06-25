"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Zap, Activity, Factory, Battery, Power, PanelRight, Settings } from "lucide-react";
import Image from "next/image";

const capabilities = [
  {
    icon: Zap,
    title: "Electrical Infrastructure",
    description: "HT & LT Distribution Networks. Comprehensive electrical solutions designed for massive industrial and commercial projects.",
    image: "/images/expertise/electrical.png",
    className: "md:col-span-2 md:row-span-2 min-h-[350px] lg:min-h-[600px]", // Item 1 (Large Hero)
  },
  {
    icon: Activity,
    title: "Hospital Electrical",
    description: "Specialized Healthcare Installations",
    image: "/images/expertise/hospital.png",
    className: "col-span-1 row-span-1 min-h-[250px] lg:min-h-[288px]", // Item 2 (Small)
  },
  {
    icon: Factory,
    title: "Industrial Systems",
    description: "Complete Industrial Power Networks",
    image: "/images/expertise/industrial.png",
    className: "col-span-1 row-span-1 min-h-[250px] lg:min-h-[288px]", // Item 3 (Small)
  },
  {
    icon: Battery,
    title: "Transformer Yards",
    description: "Installation & Associated Infrastructure",
    image: "/images/expertise/transformer.png",
    className: "col-span-1 row-span-1 min-h-[250px] lg:min-h-[288px]", // Item 4 (Small)
  },
  {
    icon: Power,
    title: "DG Power Backup",
    description: "Generator & Synchronization Solutions",
    image: "/images/expertise/dg_power.png",
    className: "col-span-1 row-span-1 min-h-[250px] lg:min-h-[288px]", // Item 5 (Small)
  },
  {
    icon: PanelRight,
    title: "Panel Manufacturing",
    description: "Custom Electrical Panel Solutions tailored for efficiency.",
    image: "/images/expertise/panel.png",
    className: "md:col-span-2 row-span-1 min-h-[250px] lg:min-h-[288px]", // Item 6 (Wide)
  },
  {
    icon: Settings,
    title: "Utility & MEP Projects",
    description: "Comprehensive Utility Infrastructure & MEP Services.",
    image: "/images/expertise/mep.png",
    className: "md:col-span-2 row-span-1 min-h-[250px] lg:min-h-[288px]", // Item 7 (Wide)
  },
];

export default function ExpertiseSection() {
  return (
    <section className="py-24 bg-brand-gray text-brand-navy relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" 
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Our Engineering Expertise Covers"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-auto">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                className={`group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 border border-slate-100 ${item.className}`}
              >
                {/* Image Background */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Hover Tint */}
                  <div className="absolute inset-0 bg-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay pointer-events-none" />
                </div>
                
                {/* Content Box */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end z-10">
                  <div className="flex flex-col md:flex-row md:items-end gap-4">
                    <div className="bg-white/10 backdrop-blur-md w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-500 shadow-xl">
                      <Icon className="text-white" size={26} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-200 text-sm md:text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
