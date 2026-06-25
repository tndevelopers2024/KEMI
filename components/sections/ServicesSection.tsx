"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Zap, Wrench, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "electrical",
    title: "Electrical Services",
    icon: Zap,
    description:
      "We offer complete electrical infrastructure solutions designed to meet the needs of modern industries and commercial establishments.",
    items: [
      "HT & LT Electrical Installations",
      "Transformer Supply & Installation",
      "HT, RMU, PCC, MCC, APFC Panels",
      "DG Synchronization Panels",
      "Cable Laying & Termination Works",
      "Earthing & Lightning Protection Systems",
      "Street Lighting & Outdoor Electrification",
      "Electrical Maintenance Services",
    ],
  },
  {
    id: "mep",
    title: "MEP Services",
    icon: Wrench,
    description:
      "Comprehensive Mechanical, Electrical, and Plumbing services that ensure efficient building operations and infrastructure performance.",
    items: [
      "HVAC & Central Air Conditioning",
      "Ventilation & Exhaust Systems",
      "Fire Fighting & Hydrant Systems",
      "Sprinkler & Fire Alarm Systems",
      "Water Supply & Drainage Systems",
      "Sewage Networks & Pumping Solutions",
      "Utility Piping & Industrial Mechanical Works",
    ],
  },
  {
    id: "turnkey",
    title: "Turnkey Solutions",
    icon: Building2,
    description:
      "From concept to commissioning, we provide complete turnkey engineering solutions under one roof for seamless coordination.",
    items: [
      "Design & Engineering",
      "Project Planning",
      "Procurement & Supply",
      "Installation & Execution",
      "Testing & Commissioning",
      "Quality Assurance",
      "Project Management",
      "Annual Maintenance Services (AMC)",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-brand-gray relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Our Services"
          subtitle="Complete Engineering Solutions Under One Roof"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white rounded-4xl shadow-xl overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Card Header */}
                <div className="p-8 pb-6 border-b border-slate-100 relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 text-brand-gray opacity-50 group-hover:text-brand-orange/10 transition-colors duration-300">
                    <Icon size={120} />
                  </div>
                  <div className="bg-brand-orange w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6 relative z-10 shadow-md">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 relative z-10 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-8 pt-6 flex-grow flex flex-col">
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2.5 shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 font-semibold text-brand-navy group-hover:text-brand-orange transition-colors mt-auto"
                  >
                    Request Service
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="inline-block bg-white px-6 py-3 rounded-full text-slate-700 font-medium shadow-sm border border-slate-100">
            <span className="text-brand-orange font-bold mr-2">Note:</span>
            Our turnkey approach ensures seamless coordination, faster project completion, and better cost control.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
