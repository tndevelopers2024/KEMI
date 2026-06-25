"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stethoscope, Building, Factory, GraduationCap, Home, HardHat, Server } from "lucide-react";
import Image from "next/image";

const industries = [
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Hospitals, Clinics, Medical Facilities",
    image: "/images/industries/healthcare.png",
  },
  {
    icon: Building,
    title: "Commercial Buildings",
    description: "Corporate Offices, Shopping Complexes, Business Centers",
    image: "/images/industries/commercial.png",
  },
  {
    icon: Factory,
    title: "Industrial Plants",
    description: "Manufacturing Facilities, Processing Units, Factories",
    image: "/images/industries/industrial.png",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Schools, Colleges, Universities, Training Centers",
    image: "/images/industries/educational.png",
  },
  {
    icon: Home,
    title: "Residential Projects",
    description: "Apartments, Villas, Gated Communities",
    image: "/images/industries/residential.png",
  },
  {
    icon: HardHat,
    title: "Manufacturing Industries",
    description: "Production Plants and Industrial Infrastructure",
    image: "/images/industries/manufacturing.png",
  },
  {
    icon: Server,
    title: "IT Parks",
    description: "Technology Campuses and Data Facilities",
    image: "/images/industries/it_park.png",
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

        <div className="flex flex-wrap justify-center gap-6 mt-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Background */}
                <div className="aspect-[4/5] w-full relative">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  <div className="bg-brand-orange w-12 h-12 rounded-full flex items-center justify-center mb-4 transform group-hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                    <Icon size={24} className="text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-300 delay-75">
                    {industry.title}
                  </h3>
                  <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    {industry.description}
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

