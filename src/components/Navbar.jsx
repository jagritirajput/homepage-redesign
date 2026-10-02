import React, { useState, useEffect } from 'react';
import { Phone, Mail, Globe, Menu, X, ChevronDown, Sparkles } from 'lucide-react';

const FacebookIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState('India');
  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section on scroll
      const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Bar (Desktop) - Light Theme Surface */}
      <div className="hidden lg:block bg-[#F8FAFC] border-b border-slate-200 text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Social Icons */}
          <div className="flex items-center space-x-3">
            <span className="text-slate-600 font-medium mr-1">Follow Us:</span>
            <a
              href="https://www.facebook.com/xntrova/"
              target="_blank"
              rel="noreferrer"
              className="h-6 w-6 rounded-full bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition-all duration-200"
              title="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/xntrova.agency/"
              target="_blank"
              rel="noreferrer"
              className="h-6 w-6 rounded-full bg-[#E4405F]/10 text-[#E4405F] hover:bg-[#E4405F] hover:text-white flex items-center justify-center transition-all duration-200"
              title="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/xntrova/"
              target="_blank"
              rel="noreferrer"
              className="h-6 w-6 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white flex items-center justify-center transition-all duration-200"
              title="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://x.com/xntrova"
              target="_blank"
              rel="noreferrer"
              className="h-6 w-6 rounded-full bg-slate-200 text-slate-800 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-all duration-200"
              title="X (Twitter)"
            >
              <TwitterIcon />
            </a>
          </div>

          {/* Right Info & Contacts */}
          <div className="flex items-center space-x-6">
            <a
              href="tel:+918683828646"
              className="flex items-center space-x-1.5 text-slate-700 hover:text-[#008BB9] font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#008BB9]" />
              <span>+91 868-382-8646</span>
            </a>
            <span className="h-3.5 w-px bg-slate-300"></span>
            <a
              href="mailto:info@xntrova.com"
              className="flex items-center space-x-1.5 text-slate-700 hover:text-[#008BB9] font-medium transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#008BB9]" />
              <span>info@xntrova.com</span>
            </a>
            <span className="h-3.5 w-px bg-slate-300"></span>

            {/* Region Selector */}
            <div className="relative">
              <button
                onClick={() => setRegionDropdownOpen(!regionDropdownOpen)}
                className="flex items-center space-x-1 text-slate-700 hover:text-[#008BB9] font-medium transition-colors py-0.5 focus:outline-none"
              >
                <Globe className="w-3.5 h-3.5 text-[#008BB9]" />
                <span>Region: {activeRegion}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {regionDropdownOpen && (
                <div className="absolute right-0 mt-1 w-32 bg-white border border-slate-200 rounded shadow-xl py-1 z-50 text-slate-800">
                  {['India', 'Global', 'USA', 'UAE'].map((region) => (
                    <button
                      key={region}
                      onClick={() => {
                        setActiveRegion(region);
                        setRegionDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs hover:bg-[#008BB9]/10 hover:text-[#008BB9] ${
                        activeRegion === region ? 'text-[#008BB9] font-semibold bg-slate-50' : ''
                      }`}
                    >
                      {region}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar - Clean White Surface */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200'
            : 'bg-white py-4 border-b border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="flex items-center space-x-2 group"
          >
            <img
              src="https://res.cloudinary.com/di93stsbz/image/upload/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png"
              alt="Xntrova Technologies Logo"
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                  className={`px-3 py-2 text-sm font-semibold transition-all relative ${
                    isActive
                      ? 'text-[#008BB9]'
                      : 'text-slate-700 hover:text-[#008BB9]'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-0.5 bg-[#008BB9] transition-transform duration-200 rounded-full ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  ></span>
                </a>
              );
            })}
          </div>

          {/* Desktop Right CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-md text-sm font-semibold text-white bg-gradient-to-r from-[#008BB9] to-[#0075A2] hover:from-[#0075A2] hover:to-[#006080] shadow-md shadow-[#008BB9]/25 hover:shadow-lg transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-[#FFB800]" />
              <span>Get Free Audit</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="px-3.5 py-1.5 rounded text-xs font-semibold text-white bg-[#008BB9] hover:bg-[#0075A2]"
            >
              Audit
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-[#008BB9] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-over Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end">
            <div className="w-4/5 max-w-sm bg-white h-full shadow-2xl p-6 border-l border-slate-200 flex flex-col justify-between">
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                  <img
                    src="https://res.cloudinary.com/di93stsbz/image/upload/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png"
                    alt="Xntrova"
                    className="h-8 w-auto"
                  />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 rounded-md text-slate-500 hover:text-slate-900"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="py-6 space-y-1">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.id);
                        }}
                        className={`block px-4 py-3 text-base font-semibold rounded-md transition-colors ${
                          isActive
                            ? 'bg-[#008BB9]/10 text-[#008BB9]'
                            : 'text-slate-700 hover:bg-slate-100 hover:text-[#008BB9]'
                        }`}
                      >
                        {link.name}
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="pt-6 border-t border-slate-200 space-y-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('contact');
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-md text-center text-sm font-semibold text-white bg-gradient-to-r from-[#008BB9] to-[#0075A2]"
                >
                  <Sparkles className="w-4 h-4 text-[#FFB800]" />
                  <span>Get Free Digital Audit</span>
                </a>
                <div className="text-xs text-slate-500 text-center space-y-1">
                  <p>📞 +91 868-382-8646</p>
                  <p>✉️ info@xntrova.com</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
