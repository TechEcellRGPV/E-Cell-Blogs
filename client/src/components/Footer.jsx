import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white py-16 px-6 md:px-16 lg:px-20 overflow-hidden  ">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-cyan-400 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-28 h-28 bg-indigo-500 rounded-full blur-2xl"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        {/* Changed to flexbox for better control over spacing */}
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between gap-y-12 lg:gap-x-12"> {/* Flex container */}
          {/* Logo & Description */}
          <div className="flex-shrink-0 w-full md:w-[45%] lg:w-1/4 space-y-4 -mt-12"> {/* Adjusted width for responsiveness */}
            <div className="flex items-center space-x-3">
              <a href="https://ecellrgpv.com/">
              <img
                src="/EcellLogo.png"
                alt="E-Cell Logo"
                className="w-34 h-32 object-contain text-white fill-white"
              />
              </a>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Entrepreneurship Cell is a non-profit organisation with the
              purpose of creating awareness towards the developing
              entrepreneurial culture and encouraging students to embrace the
              idea of starting their own venture. We aim to inspire and guide
              young entrepreneurs and their start-ups.
            </p>

            {/* Social Icons */}
            <div className="flex mt-6 space-x-4">
              <a
                href="https://www.facebook.com/ECellRGPV/"
                className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/ecell_rgpv/"
                className="w-9 h-9 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/ecellrgpv"
                className="w-9 h-9 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:w-[calc(50%-1.5rem)]  lg:w-auto ">
            <div className="space-y-4 w-fit md:pl-16 lg:pl-0"> {/* Adjusted width for responsiveness and w-auto for content fitting */}
            <h3 className="text-blue-400 font-semibold text-lg uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2">
              
                <li >
                  <a
                    href="https://ecellrgpv.com/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li >
                  <a
                    href="https://ecellrgpv.com/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About us
                  </a>
                </li>
                <li >
                  <a
                    href="https://ecellrgpv.com/contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact us
                  </a>
                </li>
                <li >
                  <a
                    href="https://ecellrgpv.com/gallery"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li >
                  <a
                    href="https://ecellrgpv.com/postevents"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Post Events
                  </a>
                </li>
                <li >
                  <a
                    href="https://ecellrgpv.com/cap"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    CAP
                  </a>
                </li>
             
            </ul>
            </div>
          </div>

          {/* Spotlight */}
          <div className="space-y-4 md:w-[calc(50%-1.5rem)] lg:w-auto"> {/* Adjusted width for responsiveness and w-auto for content fitting */}
            <h3 className="text-blue-400 font-semibold text-lg uppercase tracking-wide">
              Spotlight
            </h3>
            <ul className="space-y-2">
              
                <li >
                  <a
                    href="https://ecellrgpv.com/sip"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    SIP
                  </a>
                </li>
                <li >
                  <a
                    href="https://ecellrgpv.com/startupIncubation"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Startup Incubation
                  </a>
                </li>
                <li >
                  <a
                    href="https://ecellrgpv.com/e-mentoring"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    E-Mentoring
                  </a>
                </li>
                <li >
                  <a
                    href="https://ecellrgpv.com/skillsDevelopment"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Skill Development
                  </a>
                </li>
                <li >
                  <a
                    href="https://ecellrgpv.com/alumni"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Alumni E-Cell RGPV
                  </a>
                </li>
             
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4 md:w-[calc(50%-1.5rem)] lg:w-auto">
            <div className="space-y-4 w-fit md:pl-16 lg:pl-0"> {/* Adjusted width for responsiveness and w-auto for content fitting */}
            <h3 className="text-blue-400 font-semibold text-lg uppercase tracking-wide">
              Contact Us
            </h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>E-Cell RGPV, Gandhi Nagar, Bhopal</p>
              <p>
                Phone: <a href="tel:+918985412487">+91 8985412487</a>
              </p>
              <p>
                Email: <a href="mailto:support@ecellrgpv.com">support@ecellrgpv.com</a>
              </p>
            </div>
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