import { Facebook,Instagram,Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white py-16 px-6 lg:px-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-cyan-400 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-28 h-28 bg-indigo-500 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Logo & Description */}
          <div className="space-y-1">
            <div className="flex items-center space-x-3 -mt-5">
              <img
                src="/EcellLogo.png"
                alt="E-Cell Logo"
                className="w-22 h-22 object-contain text-white fill-white"
              />
              
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Entrepreneurship Cell is a non-profit organisation with the purpose of
              creating awareness towards the developing entrepreneurial culture and
              encouraging students to embrace the idea of starting their own venture.
              We aim to inspire and guide young entrepreneurs and their start-ups.
            </p>

            {/* Social Icons */}
            <div className="flex mt-4 space-x-4">
              <a
                href="#"
                className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-blue-400 font-semibold text-lg uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About us", "Contact us", "Gallery", "Post Events", "CAP"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Spotlight */}
          <div className="space-y-6">
            <h3 className="text-blue-400 font-semibold text-lg uppercase tracking-wide">Spotlight</h3>
            <ul className="space-y-3">
              {["SIP", "Startup Incubation", "E-Mentoring", "Skill Development", "Alumni E-Cell RGPV"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h3 className="text-blue-400 font-semibold text-lg uppercase tracking-wide">Contact Us</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>E-Cell RGPV, Gandhi Nagar, Bhopal</p>
              <p>Phone: +91 8985412487</p>
              <p>Email: support@ecellrgpv.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 italic text-sm">
            Copyright © 2016-2025 E-Cell RGPV. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
