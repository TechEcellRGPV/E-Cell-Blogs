import { useState } from "react";
import { ChevronDown } from "lucide-react"; // Import ChevronDown icon for dropdowns

export default function Header() {
  const [isInitiativesOpen, setIsInitiativesOpen] = useState(false);
  const [isArchivesOpen, setIsArchivesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // New state for mobile menu

  // Toggle functions for mobile dropdowns (click-based)
  const toggleMobileInitiatives = () => setIsInitiativesOpen((prev) => !prev);
  const toggleMobileArchives = () => setIsArchivesOpen((prev) => !prev);

  // Toggle function for the main mobile menu
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 shadow-xl border-b border-blue-500/20 md:px-16 2xl:px-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <a href="https://ecellrgpv.com/">
            <img
              src="/EcellLogo.png"
              alt="E-Cell Logo"
              className="w-45 h-34 object-contain text-white fill-white"
            />
            </a>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            <a
              href="https://ecellrgpv.com/"
              className="px-6 py-3 text-white font-medium hover:bg-blue-800/50 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Home
            </a>

            <a
              href="/"
              className="px-6 py-3 text-white font-medium hover:bg-blue-800/50 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Blog
            </a>

            {/* Initiatives Dropdown (Desktop) */}
            <div
              className="relative"
              onMouseEnter={() => setIsInitiativesOpen(true)}
              onMouseLeave={() => setIsInitiativesOpen(false)}
            >
              <button
                className="px-6 py-3 text-white font-medium hover:bg-blue-800/50 rounded-lg transition-all duration-200 hover:scale-105 flex items-center space-x-1"
              >
                <span>Initiatives</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isInitiativesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isInitiativesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-slate-800 rounded-xl shadow-2xl border border-blue-500/20 py-2 z-50 animate-in slide-in-from-top-2 duration-200"
                >
                    <a       
                      href="https://ecellrgpv.com/sip"
                      className="block px-6 py-3 text-white hover:bg-blue-700/50 transition-colors duration-150 font-medium"
                    >
                      SIP
                    </a>
                    <a       
                      href="https://ecellrgpv.com/cap"
                      className="block px-6 py-3 text-white hover:bg-blue-700/50 transition-colors duration-150 font-medium"
                    >
                      CAP
                    </a>
                    <a       
                      href="https://ecellrgpv.com/startupIncubation"
                      className="block px-6 py-3 text-white hover:bg-blue-700/50 transition-colors duration-150 font-medium"
                    >
                      Startup Incubation
                    </a>
                    <a       
                      href="https://ecellrgpv.com/imprenditore4.0"
                      className="block px-6 py-3 text-white hover:bg-blue-700/50 transition-colors duration-150 font-medium"
                    >
                      Imprenditore
                    </a>
                    <a       
                      href="https://ecellrgpv.com/e-mentoring"
                      className="block px-6 py-3 text-white hover:bg-blue-700/50 transition-colors duration-150 font-medium"
                    >
                      E-mentoring
                    </a>
                    <a       
                      href="https://ecellrgpv.com/skillsDevelopment"
                      className="block px-6 py-3 text-white hover:bg-blue-700/50 transition-colors duration-150 font-medium"
                    >
                      Skill Development
                    </a>
                </div>
              )}
            </div>

            {/* Archives Dropdown (Desktop) */}
            <div
              className="relative"
              onMouseEnter={() => setIsArchivesOpen(true)}
              onMouseLeave={() => setIsArchivesOpen(false)}
            >
              <button
                className="px-6 py-3 text-white font-medium hover:bg-blue-800/50 rounded-lg transition-all duration-200 hover:scale-105 flex items-center space-x-1"
              >
                <span>Archives</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isArchivesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isArchivesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-xl shadow-2xl border border-blue-500/20 py-2 z-50 animate-in slide-in-from-top-2 duration-200"
                >
                    <a
                      href="https://ecellrgpv.com/postevents"
                      className="block px-6 py-3 text-white hover:bg-blue-700/50 transition-colors duration-150 font-medium"
                    >
                     Events 
                    </a>
                     <a
                      href="https://ecellrgpv.com/gallery"
                      className="block px-6 py-3 text-white hover:bg-blue-700/50 transition-colors duration-150 font-medium"
                    >
                     Gallery
                    </a>
                     <a
                      href="https://ecellrgpv.com/alumni"
                      className="block px-6 py-3 text-white hover:bg-blue-700/50 transition-colors duration-150 font-medium"
                    >
                      Alumini
                    </a>
                     <a
                      href="https://ngis.stpi.in/"
                      className="block px-6 py-3 text-white hover:bg-blue-700/50 transition-colors duration-150 font-medium"
                    >
                     NGIS
                    </a>
                </div>
              )}
            </div>

            <a
              href="https://ecellrgpv.com/team"
              className="px-6 py-3 text-white font-medium hover:bg-blue-800/50 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Team
            </a>

            <a
              href="https://ecellrgpv.com/about"
              className="px-6 py-3 text-white font-medium hover:bg-blue-800/50 rounded-lg transition-all duration-200 hover:scale-105"
            >
              About
            </a>

            <a
              href="https://ecellrgpv.com/contact"
              className="px-6 py-3 text-white font-medium hover:bg-blue-800/50 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Contact
            </a>
          </nav>

          {/* Sign In Button (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="/login">
              <button
                variant="outline"
                className="border-2 border-blue-400 text-blue-300 hover:bg-blue-500/20 hover:text-white px-6 py-2 font-medium rounded-full transition-all duration-200 hover:scale-105 bg-transparent"
              >
                Sign in
              </button>
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-white p-2 focus:outline-none">
              {isMobileMenuOpen ? (
                // Close icon (X)
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content (conditionally rendered) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-800 shadow-lg border-t border-blue-500/20 animate-in slide-in-from-top-8 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="https://ecellrgpv.com/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700/50 transition-colors"
            >
              Home
            </a>

            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700/50 transition-colors"
            >
              Blog
            </a>

            {/* Mobile Initiatives Dropdown */}
            <div>
              <button
                onClick={toggleMobileInitiatives}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700/50 transition-colors"
              >
                <span>Initiatives</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isInitiativesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isInitiativesOpen && (
                <div className="pl-6 pr-3 py-1 space-y-1">
                  <a
                    href="https://ecellrgpv.com/sip"
                    className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-blue-700/30 transition-colors"
                  >
                    SIP
                  </a>
                  <a
                    href="https://ecellrgpv.com/cap"
                    className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-blue-700/30 transition-colors"
                  >
                    CAP
                  </a>
                  <a
                    href="https://ecellrgpv.com/startupIncubation"
                    className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-blue-700/30 transition-colors"
                  >
                    Startup Incubation
                  </a>
                  <a
                    href="https://ecellrgpv.com/imprenditore4.0"
                    className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-blue-700/30 transition-colors"
                  >
                    Imprenditore
                  </a>
                  <a
                    href="https://ecellrgpv.com/e-mentoring"
                    className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-blue-700/30 transition-colors"
                  >
                    E-mentoring
                  </a>
                  <a
                    href="https://ecellrgpv.com/skillsDevelopment"
                    className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-blue-700/30 transition-colors"
                  >
                    Skill Development
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Archives Dropdown */}
            <div>
              <button
                onClick={toggleMobileArchives}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700/50 transition-colors"
              >
                <span>Archives</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isArchivesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isArchivesOpen && (
                <div className="pl-6 pr-3 py-1 space-y-1">
                  <a
                    href="https://ecellrgpv.com/postevents"
                    className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-blue-700/30 transition-colors"
                  >
                    Events 
                  </a>
                  <a
                    href="https://ecellrgpv.com/gallery"
                    className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-blue-700/30 transition-colors"
                  >
                    Gallery
                  </a>
                  <a
                    href="https://ecellrgpv.com/alumni"
                    className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-blue-700/30 transition-colors"
                  >
                    Alumni
                  </a>
                  <a
                    href="https://ngis.stpi.in/"
                    className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-blue-700/30 transition-colors"
                  >
                    NGIS
                  </a>
                </div>
              )}
            </div>

            <a
              href="https://ecellrgpv.com/team"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700/50 transition-colors"
            >
              Team
            </a>

            <a
              href="https://ecellrgpv.com/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700/50 transition-colors"
            >
              About
            </a>

            <a
              href="https://ecellrgpv.com/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700/50 transition-colors"
            >
              Contact
            </a>

            {/* Mobile Sign In Button */}
            <div className="py-4 px-3">
              <a href="/login" className="block w-full text-center">
                <button
                  variant="outline"
                  className="w-full border-2 border-blue-400 text-blue-300 hover:bg-blue-500/20 hover:text-white px-6 py-2 font-medium rounded-full transition-all duration-200 bg-transparent"
                >
                  Sign in
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}