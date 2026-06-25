"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Users, Code, Link as LinkIcon, HeartHandshake, Layers, LayoutList } from "lucide-react";

const strengths = [
  {
    icon: Users,
    title: "Skilled Technical Workforce",
    description: "Dedicated team of qualified engineers, supervisors, and technicians.",
  },
  {
    icon: Code,
    title: "Advanced Engineering Practices",
    description: "Use of modern technologies and industry-standard methodologies.",
  },
  {
    icon: LinkIcon,
    title: "Strong Vendor Network",
    description: "Reliable procurement and supplier partnerships.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Focused Approach",
    description: "Transparent communication and customer satisfaction.",
  },
  {
    icon: Layers,
    title: "End-to-End Project Execution",
    description: "Complete project ownership from concept to commissioning.",
  },
  {
    icon: LayoutList,
    title: "Professional Project Management",
    description: "Systematic planning, monitoring, and delivery.",
  },
];

export default function StrengthsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Our Strengths"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-5 p-6 rounded-3xl border border-slate-100 hover:shadow-lg transition-all duration-300 group bg-white"
              >
                <div className="bg-brand-gray p-4 rounded-xl group-hover:bg-brand-orange group-hover:text-white text-brand-navy transition-colors duration-300 shrink-0">
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">
                    {strength.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
