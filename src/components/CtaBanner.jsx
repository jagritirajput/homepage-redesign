import React from 'react';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-16 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-r from-[#001F2B] via-[#00384C] to-[#008BB9] rounded-2xl p-8 sm:p-12 border border-[#008BB9]/40 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
          
          {/* Background Decorative Glow */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl pointer-events-none"></div>

          {/* Left Text */}
          <div className="space-y-4 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold text-[#FFB800]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TRANSFORM YOUR DIGITAL FOOTPRINT TODAY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Ready to Accelerate Growth & Multiply Your Digital Revenue?
            </h2>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Book a complimentary strategy session with Xntrova experts. We will perform a custom audit of your search rankings, ad spend efficiency, and website conversion performance.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <a
              href="#contact"
              className="px-8 py-4 rounded-md font-bold text-slate-950 bg-[#FFB800] hover:bg-[#FFA500] shadow-lg shadow-[#FFB800]/25 transition-all duration-200 flex items-center justify-center space-x-2 text-center group"
            >
              <span>Get Free Audit Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="tel:+918683828646"
              className="px-8 py-4 rounded-md font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm transition-all duration-200 flex items-center justify-center space-x-2 text-center"
            >
              <Phone className="w-5 h-5 text-[#00A3E0]" />
              <span>Call Us Now</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
