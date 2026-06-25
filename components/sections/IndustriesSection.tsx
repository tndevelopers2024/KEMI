"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stethoscope, Building, Factory, GraduationCap, Home, HardHat, Server } from "lucide-react";

const industries = [
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Hospitals, Clinics, Medical Facilities",
  },
  {
    icon: Building,
    title: "Commercial Buildings",
    description: "Corporate Offices, Shopping Complexes, Business Centers",
  },
  {
    icon: Factory,
    title: "Industrial Plants",
    description: "Manufacturing Facilities, Processing Units, Factories",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Schools, Colleges, Universities, Training Centers",
  },
  {
    icon: Home,
    title: "Residential Projects",
    description: "Apartments, Villas, Gated Communities",
  },
  {
    icon: HardHat,
    title: "Manufacturing Industries",
    description: "Production Plants and Industrial Infrastructure",
  },
  {
    icon: Server,
    title: "IT Parks",
    description: "Technology Campuses and Data Facilities",
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Delivering Solutions Across Diverse Sectors"
          subtitle="KEMI Engineers has successfully catered to the engineering requirements of various industries."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-6 rounded-2xl border border-slate-100 bg-white hover:bg-brand-navy hover:border-brand-navy transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col items-center text-center"
              >
                <div className="bg-brand-gray group-hover:bg-brand-orange/20 p-4 rounded-full mb-4 transition-colors duration-300">
                  <Icon size={32} className="text-brand-orange" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-brand-navy group-hover:text-white mb-2 transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-slate-500 group-hover:text-slate-300 text-sm transition-colors duration-300">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
