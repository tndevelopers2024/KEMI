"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you! Your request has been sent. We will contact you shortly.");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="pt-24 bg-brand-gray relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Let's Discuss Your Project"
          subtitle="Whether you're planning a new project, upgrading existing infrastructure, or looking for a reliable engineering partner, KEMI Engineers is ready to help."
          align="center"
          className="mb-16"
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
            >
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Contact Information</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-brand-orange/10 p-3 rounded-xl text-brand-orange shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-1">Phone</h4>
                    <p className="text-slate-600">+91 99763 49753</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="bg-brand-orange/10 p-3 rounded-xl text-brand-orange shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-1">Email</h4>
                    <a href="mailto:saktivel@kemiengineers.com" className="text-slate-600 hover:text-brand-orange transition-colors">
                      saktivel@kemiengineers.com
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="bg-brand-orange/10 p-3 rounded-xl text-brand-orange shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-1">Address</h4>
                    <p className="text-slate-600 leading-relaxed">
                      No. 11, First Floor, Kamaraj Salai, Gandhi Nagar, Kolathur,
                      Chennai, Tamil Nadu
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100 relative z-10"
          >
            <h3 className="text-2xl font-bold text-brand-navy mb-6">Request a Quote</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-slate-700">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="Your Company Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="Your Email"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-slate-700">Service Required</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all bg-slate-50 focus:bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="electrical">Electrical Services</option>
                  <option value="mep">MEP Services</option>
                  <option value="turnkey">Turnkey Solutions</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Project Details / Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending Request..." : "Request a Quote"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Google Maps Placeholder */}
      <div className="mt-16 h-96 w-full bg-slate-200 relative z-0">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-slate-500">
            <MapPin size={48} className="mx-auto mb-4 opacity-50" />
            <p className="font-medium text-lg">Google Maps Integration</p>
            <p className="text-sm">Chennai, Tamil Nadu</p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124376.12879559868!2d80.12571212269994!3d13.047464016147426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 opacity-50 mix-blend-multiply pointer-events-none"
        ></iframe>
      </div>
    </section>
  );
}
