"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ClipboardList, PenTool, ShoppingCart, Hammer, ActivitySquare, Settings2 } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Requirement Analysis",
    description: "Understanding project scope and technical requirements.",
  },
  {
    icon: PenTool,
    title: "Design & Planning",
    description: "Preparation of engineering designs and execution plans.",
  },
  {
    icon: ShoppingCart,
    title: "Procurement & Supply",
    description: "Sourcing quality materials and equipment.",
  },
  {
    icon: Hammer,
    title: "Installation & Execution",
    description: "Professional implementation by experienced teams.",
  },
  {
    icon: ActivitySquare,
    title: "Testing & Commissioning",
    description: "Comprehensive testing for optimum performance.",
  },
  {
    icon: Settings2,
    title: "Maintenance & Support",
    description: "Ongoing support and annual maintenance services.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Our Project Execution Methodology"
          align="center"
          className="mb-20"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-slate-200 md:hidden" />

          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Container */}
                  <div className={`flex-1 w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:text-left" : "md:text-right"}`}>
                    <div className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative
                      ${isEven ? "md:mr-8" : "md:ml-8"}
                    `}>
                      <span className="text-brand-orange font-bold text-sm uppercase tracking-wider mb-2 block">
                        Step {index + 1}
                      </span>
                      <h4 className="text-xl font-bold text-brand-navy mb-2">
                        {step.title}
                      </h4>
                      <p className="text-slate-500">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon Node */}
                  <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border-4 border-brand-gray md:mt-0 mt-6 z-10">
                    <div className="bg-brand-navy text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                      <Icon size={20} />
                    </div>
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
