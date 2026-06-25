import Link from "next/link";
import { Zap, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group inline-flex">
              <div className="bg-brand-orange p-1.5 rounded-md text-white">
                <Zap size={24} strokeWidth={2.5} />
              </div>
              <span className="font-bold text-xl md:text-2xl tracking-tight text-white">
                KEMI Engineers
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm">
              Delivering reliable MEP and Electrical Turnkey Solutions for industrial, commercial, healthcare, residential, and infrastructure projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Industries", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
                    className="hover:text-brand-orange transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="text-brand-orange opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="hover:text-brand-orange transition-colors">
                  Electrical Solutions
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-brand-orange transition-colors">
                  MEP Services
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-brand-orange transition-colors">
                  Turnkey Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-orange shrink-0 mt-1" size={20} />
                <span>
                  No. 11, First Floor, Kamaraj Salai, Gandhi Nagar, Kolathur,
                  Chennai, Tamil Nadu
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-orange shrink-0" size={20} />
                <span>+91 99763 49753</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-orange shrink-0" size={20} />
                <a href="mailto:saktivel@kemiengineers.com" className="hover:text-white transition-colors">
                  saktivel@kemiengineers.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 KEMI Engineers. All Rights Reserved.
          </p>
          <p className="text-brand-orange text-sm font-medium">
            Powering Infrastructure with Engineering Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
