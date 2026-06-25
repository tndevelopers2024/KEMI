"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ClipboardList, PenTool, ShoppingCart, Hammer, ActivitySquare, Settings2 } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Requirement Analysis",
    description: "Detailed evaluation of project scope, site conditions, and technical requirements to form a robust engineering foundation.",
  },
  {
    icon: PenTool,
    title: "Design & Planning",
    description: "Preparation of comprehensive engineering designs, CAD layouts, and strategic execution plans tailored to the project.",
  },
  {
    icon: ShoppingCart,
    title: "Procurement & Supply",
    description: "Sourcing premium quality materials and high-grade electrical equipment from trusted global vendors.",
  },
  {
    icon: Hammer,
    title: "Installation & Execution",
    description: "Professional, on-site implementation by our highly skilled and safety-trained engineering teams.",
  },
  {
    icon: ActivitySquare,
    title: "Testing & Commissioning",
    description: "Comprehensive testing, calibration, and final commissioning ensuring optimum safety and performance.",
  },
  {
    icon: Settings2,
    title: "Maintenance & Support",
    description: "Ongoing technical support, performance monitoring, and comprehensive annual maintenance services (AMC).",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Abstract Engineering Background */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: "linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)", 
          backgroundSize: "40px 40px" 
        }} 
      />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Our Project Execution Methodology"
          align="center"
          className="mb-20"
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[36px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-[36px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 md:hidden" />

          <div className="space-y-16 md:space-y-24 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className={`group flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Container */}
                  <div className={`flex-1 w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? "md:text-left" : "md:text-right"}`}>
                    <div className={`relative bg-white p-8 md:p-10 rounded-3xl border border-slate-100 group-hover:border-brand-orange/30 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl
                      ${isEven ? "md:mr-12" : "md:ml-12"}
                    `}>
                      {/* Giant Number Watermark */}
                      <div className={`absolute -top-12 ${isEven ? "-right-8" : "-left-8"} text-[160px] font-black text-slate-900/[0.03] select-none pointer-events-none group-hover:text-brand-orange/[0.05] transition-colors duration-700 leading-none`}>
                        0{index + 1}
                      </div>

                      <div className="relative z-10">
                        <span className="inline-block text-brand-orange font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4 bg-brand-orange/5 border border-brand-orange/10 px-4 py-1.5 rounded-full">
                          Phase {index + 1}
                        </span>
                        <h4 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
                          {step.title}
                        </h4>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Icon Node */}
                  <div className="absolute left-[36px] md:left-1/2 -translate-x-1/2 mt-6 md:mt-0 z-20">
                    <motion.div 
                      className="bg-slate-50 p-2 md:p-2.5 rounded-full border border-slate-200 shadow-md group-hover:shadow-[0_0_20px_rgba(232,73,4,0.3)] group-hover:border-brand-orange/30 transition-all duration-500"
                    >
                      <div className="bg-brand-orange text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-inner relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                        {/* Glow effect inside icon */}
                        <div className="absolute inset-0 bg-white/20 blur-md rounded-full w-1/2 h-1/2 top-0 left-0" />
                        <Icon size={28} className="relative z-10" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty Spacer for layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
