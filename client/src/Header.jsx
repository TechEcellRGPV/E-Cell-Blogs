import { useState } from "react";


export default function Header() {
  const [isInitiativesOpen, setIsInitiativesOpen] = useState(false);
  const [isArchivesOpen, setIsArchivesOpen] = useState(false);

  const initiativesItems = [
    "SIP",
    "CAP",
    "Startup Incubation",
    "Imprenditore",
    "E-mentoring",
    "Skill Development",
  ];

  const archivesItems = ["Events", "Gallery", "Alumni", "NGIS"];

  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 shadow-xl border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img
              src="/EcellLogo.png"
              alt="E-Cell Logo"
              className="w-22 h-20 object-contain text-white fill-white"
            />
           
          </div>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            <a
              href="https://ecellrgpv.com"
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

            {/* Initiatives Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsInitiativesOpen(true)}
                onMouseLeave={() => setIsInitiativesOpen(false)}
                className="px-6 py-3 text-white font-medium hover:bg-blue-800/50 rounded-lg transition-all duration-200 hover:scale-105 flex items-center space-x-1"
              >
                <span>Initiatives</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isInitiativesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isInitiativesOpen && (
                <div
                  onMouseEnter={() => setIsInitiativesOpen(true)}
                  onMouseLeave={() => setIsInitiativesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-56 bg-slate-800 rounded-xl shadow-2xl border border-blue-500/20 py-2 z-50 animate-in slide-in-from-top-2 duration-200"
                >
                  {initiativesItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-6 py-3 text-white hover:bg-blue-700/50 transition-colors duration-150 font-medium"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Archives Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsArchivesOpen(true)}
                onMouseLeave={() => setIsArchivesOpen(false)}
                className="px-6 py-3 text-white font-medium hover:bg-blue-800/50 rounded-lg transition-all duration-200 hover:scale-105 flex items-center space-x-1"
              >
                <span>Archives</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isArchivesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isArchivesOpen && (
                <div
                  onMouseEnter={() => setIsArchivesOpen(true)}
                  onMouseLeave={() => setIsArchivesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-xl shadow-2xl border border-blue-500/20 py-2 z-50 animate-in slide-in-from-top-2 duration-200"
                >
                  {archivesItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-6 py-3 text-white hover:bg-blue-700/50 transition-colors duration-150 font-medium"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/team"
              className="px-6 py-3 text-white font-medium hover:bg-blue-800/50 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Team
            </a>

            <a
              href="/about"
              className="px-6 py-3 text-white font-medium hover:bg-blue-800/50 rounded-lg transition-all duration-200 hover:scale-105"
            >
              About
            </a>

            <a
              href="/contact"
              className="px-6 py-3 text-white font-medium hover:bg-blue-800/50 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Contact
            </a>
          </nav>

          {/* Sign In Button */}
          <div className="flex items-center space-x-4">
            <a href="/login">
            <button
            variant="outline" 
            className="border-2 border-blue-400 text-blue-300 hover:bg-blue-500/20 hover:text-white px-6 py-2 font-medium rounded-full transition-all duration-200 hover:scale-105 bg-transparent">
              Sign in
            </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button className="text-white p-2">
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
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
