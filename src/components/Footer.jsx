import React, { useState } from 'react';
import { Mail, ArrowUp, Sparkles } from 'lucide-react';

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1320] text-slate-400 border-t border-slate-800 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="inline-block">
              <img
                src="https://res.cloudinary.com/di93stsbz/image/upload/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png"
                alt="Xntrova Technologies"
                className="h-9 w-auto"
              />
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Xntrova is the best digital marketing agency in Delhi NCR offering performance-driven SEO, PPC, social media marketing, and custom web development. Driven by ideas, focused on measurable ROI.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.facebook.com/xntrova/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/xntrova.agency/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-[#E4405F] hover:border-[#E4405F] flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/xntrova/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://x.com/xntrova"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-black hover:border-slate-500 flex items-center justify-center transition-all"
                aria-label="X (Twitter)"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#hero" className="hover:text-[#008BB9] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#008BB9] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#008BB9] transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-[#008BB9] transition-colors">Why Choose Us</a></li>
              <li><a href="#process" className="hover:text-[#008BB9] transition-colors">How We Work</a></li>
              <li><a href="#portfolio" className="hover:text-[#008BB9] transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-[#008BB9] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Digital Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#services" className="hover:text-[#008BB9] transition-colors">Search Engine Optimization (SEO)</a></li>
              <li><a href="#services" className="hover:text-[#008BB9] transition-colors">Pay-Per-Click Advertising (PPC)</a></li>
              <li><a href="#services" className="hover:text-[#008BB9] transition-colors">Social Media Marketing (SMM)</a></li>
              <li><a href="#services" className="hover:text-[#008BB9] transition-colors">E-Commerce Growth Marketing</a></li>
              <li><a href="#services" className="hover:text-[#008BB9] transition-colors">Web Development & Design</a></li>
              <li><a href="#services" className="hover:text-[#008BB9] transition-colors">Content Marketing & Copywriting</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Subscribe to Insights</h4>
            <p className="text-xs text-slate-400">
              Get weekly digital growth insights and SEO tactics straight to your inbox.
            </p>

            {newsletterSubscribed ? (
              <div className="bg-[#008BB9]/20 border border-[#008BB9] text-xs text-white p-3 rounded text-center">
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="e.g. rahul@company.com"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#008BB9]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 rounded bg-[#008BB9] text-white text-xs font-semibold hover:bg-[#0075A2]"
                  >
                    Join
                  </button>
                </div>
              </form>
            )}

            <div className="text-[11px] text-slate-400">
              📍 Delhi NCR, India • 📞 +91 868-382-8646
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Xntrova Technologies. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="#hero" className="hover:text-slate-200">Privacy Policy</a>
            <span>•</span>
            <a href="#hero" className="hover:text-slate-200">Terms of Service</a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-[#008BB9] hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
