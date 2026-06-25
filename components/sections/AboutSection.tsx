"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Award, Shield, Users, Lightbulb, Clock, Handshake } from "lucide-react";

const coreValues = [
  { icon: Award, title: "Quality First Approach" },
  { icon: Shield, title: "Safety-Oriented Execution" },
  { icon: Users, title: "Customer-Centric Service" },
  { icon: Lightbulb, title: "Innovation & Technical Excellence" },
  { icon: Clock, title: "Timely Project Completion" },
  { icon: Handshake, title: "Long-Term Client Relationships" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              title="Building Reliable Engineering Infrastructure"
              align="left"
              className="mb-8"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6 text-lg text-slate-600 leading-relaxed mb-10"
            >
              <p>
                <strong className="text-brand-navy">KEMI Engineers</strong> is a professionally managed
                engineering company specializing in MEP (Mechanical, Electrical &
                Plumbing) and Electrical Turnkey Solutions.
              </p>
              <p>
                We provide comprehensive engineering services for industrial,
                commercial, healthcare, educational, residential, and
                infrastructure projects. With a strong focus on quality, safety,
                innovation, and timely execution, our team delivers complete
                project solutions—from planning and design to installation,
                testing, commissioning, and maintenance.
              </p>
              <p>
                Over the years, we have built a reputation for delivering
                technically sound and cost-effective engineering solutions that
                help clients achieve operational excellence while ensuring
                compliance with industry standards.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4 bg-brand-gray p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                  >
                    <div className="bg-brand-orange/10 p-3 rounded-lg text-brand-orange shrink-0">
                      <Icon size={24} />
                    </div>
                    <span className="font-semibold text-brand-navy">
                      {value.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://oss.ceegelectric.com/v1/autoupload/2025-07-08/Hdx57K2xGnTWUVzafoC0OZR4.jpg_webp')",
              }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />

            {/* Experience Badge */}
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-lg border-l-4 border-brand-orange">
              <div className="text-4xl font-bold text-brand-navy mb-1">15+</div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Years of Excellence
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
