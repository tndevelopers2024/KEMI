"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";

const reasons = [
  {
    title: "Experienced Engineering Team",
    description: "Highly skilled professionals with hands-on industry experience.",
  },
  {
    title: "Quality Assured Execution",
    description: "Strict adherence to quality standards and best practices.",
  },
  {
    title: "On-Time Delivery",
    description: "Efficient project management ensuring timely completion.",
  },
  {
    title: "Safety-Oriented Work Culture",
    description: "Commitment to workplace safety and compliance.",
  },
  {
    title: "Customized Engineering Solutions",
    description: "Tailored solutions based on client requirements.",
  },
  {
    title: "Strong Technical Support",
    description: "Dedicated support throughout project lifecycle.",
  },
  {
    title: "End-to-End Project Management",
    description: "Single point of responsibility from start to finish.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-brand-gray overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://5.imimg.com/data5/SELLER/Default/2023/10/350164965/IH/CO/EF/45473716/electrical-power-transformer-repairing-service.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-brand-navy/20" />
            </div>
          </motion.div>

          <div>
            <SectionHeading
              title="Engineering Expertise You Can Trust"
              subtitle="Our commitment to quality and technical excellence sets us apart."
              align="left"
              className="mb-10"
            />

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-colors border border-transparent hover:border-slate-100 hover:shadow-sm"
                >
                  <div className="mt-1 bg-brand-orange text-white p-1 rounded-full shrink-0">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-navy mb-1">
                      {reason.title}
                    </h4>
                    <p className="text-slate-600">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
