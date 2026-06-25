import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <div className="px-4 sm:px-6 pb-4 sm:px-6 w-full mt-0">
      <footer className="bg-white text-slate-600 pt-16 md:pt-20 pb-8 px-8 md:px-16 rounded-[2rem] lg:rounded-[3rem] mx-auto max-w-7xl shadow-2xl border border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Left Column - Brand Info & Contact */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="flex items-center group inline-flex">
              <Image 
                src="/logo.png" 
                alt="KEMI Engineers" 
                width={200} 
                height={56} 
                className="w-40 md:w-48 h-auto object-contain" 
              />
            </Link>
            
            <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
              A 360° engineering partner — strategy, performance, and execution that build infrastructure that wins attention and delivers value.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <Phone className="text-brand-orange shrink-0" size={16} />
                <span className="text-sm text-slate-600">+91 99763 49753</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-brand-orange shrink-0" size={16} />
                <a href="mailto:saktivel@kemiengineers.com" className="text-sm text-slate-600 hover:text-brand-orange transition-colors">
                  saktivel@kemiengineers.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
              {[
                {
                  name: "LinkedIn",
                  href: "#",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  )
                },
                {
                  name: "Instagram",
                  href: "#",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  )
                },
                {
                  name: "Facebook",
                  href: "#",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  )
                },
                {
                  name: "X (Twitter)",
                  href: "#",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  )
                },
                {
                  name: "YouTube",
                  href: "#",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                  )
                }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-orange hover:border-brand-orange hover:bg-brand-orange/5 transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Columns - Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Services */}
            <div>
              <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-6">Services</h4>
              <ul className="space-y-4">
                {["Electrical Solutions", "MEP Services", "Turnkey Projects", "Consulting"].map((item) => (
                  <li key={item}>
                    <Link href="#services" className="text-sm text-slate-600 hover:text-brand-orange transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-6">Company</h4>
              <ul className="space-y-4">
                {["About", "Process", "Industries", "Contact"].map((item) => (
                  <li key={item}>
                    <Link href={`#${item.toLowerCase()}`} className="text-sm text-slate-600 hover:text-brand-orange transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialisms */}
            <div>
              <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-6">Specialisms</h4>
              <ul className="space-y-4">
                {["Industrial Automation", "Commercial MEP", "Healthcare Facilities", "Infrastructure"].map((item) => (
                  <li key={item}>
                    <Link href="#industries" className="text-sm text-slate-600 hover:text-brand-orange transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © 2026 KEMI Engineers. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <MapPin size={14} />
            <span>Chennai · Tamil Nadu</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
