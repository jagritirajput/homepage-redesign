import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Sharma',
      role: 'Founder & CEO',
      company: 'Apex Healthcare NCR',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      rating: 5,
      platform: 'Google Reviews',
      quote: 'Xntrova transformed our online presence completely. Within 4 months of launching our SEO and PPC campaigns, our qualified appointment bookings jumped by 220%. Their team is transparent, responsive, and truly data-driven.',
    },
    {
      name: 'Priya Malhotra',
      role: 'VP of Marketing',
      company: 'LuxeLiving Retail',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
      rating: 5,
      platform: 'Clutch Review',
      quote: 'Working with Xntrova has been the best digital decision we made. They restructured our Shopify Facebook & Google Ads campaigns, achieving a 4.2x ROAS while cutting our cost per acquisition significantly.',
    },
    {
      name: 'Vikram Mehta',
      role: 'Director of Growth',
      company: 'CloudTech Solutions',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      rating: 5,
      platform: 'Trustpilot',
      quote: 'The team at Xntrova doesn’t just execute tasks; they act as a strategic partner. Their B2B SaaS landing page designs and LinkedIn advertising campaigns yielded our highest conversion rates ever.',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#008BB9]/10 border border-[#008BB9]/30 text-xs font-semibold text-[#008BB9] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>CLIENT REVIEWS & FEEDBACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Trusted By 500+ <span className="text-[#008BB9]">Growing Brands</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Hear directly from business leaders who partnered with Xntrova to scale their revenue and online authority.
          </p>
        </div>

        {/* Testimonials Slider Box */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-12 shadow-xl relative">
          <Quote className="w-16 h-16 text-[#008BB9]/10 absolute top-6 right-8 pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Client Avatar */}
            <div className="shrink-0 text-center">
              <div className="relative inline-block">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-[#008BB9] shadow-md shadow-[#008BB9]/20"
                />
                <span className="absolute bottom-0 right-0 p-1 bg-[#008BB9] text-white rounded-full text-xs">
                  ✓
                </span>
              </div>
              <div className="mt-3 inline-flex items-center space-x-1 text-xs text-[#008BB9] font-bold bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                <CheckCircle2 className="w-3 h-3 text-[#D97706]" />
                <span>{testimonials[currentIndex].platform}</span>
              </div>
            </div>

            {/* Testimonial Quote & Info */}
            <div className="space-y-4 text-center md:text-left">
              {/* Star Rating */}
              <div className="flex items-center justify-center md:justify-start space-x-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFB800] text-[#FFB800]" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-slate-700 text-base sm:text-lg italic leading-relaxed font-medium">
                "{testimonials[currentIndex].quote}"
              </p>

              {/* Client Name & Role */}
              <div>
                <h3 className="text-lg font-bold text-slate-900">{testimonials[currentIndex].name}</h3>
                <p className="text-slate-500 text-xs sm:text-sm">
                  {testimonials[currentIndex].role} — <span className="text-[#008BB9] font-semibold">{testimonials[currentIndex].company}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Slider Navigation Controls */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-slate-100">
            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === idx ? 'bg-[#008BB9] w-8' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                ></button>
              ))}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-white hover:bg-[#008BB9] hover:border-[#008BB9] transition-all"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-white hover:bg-[#008BB9] hover:border-[#008BB9] transition-all"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
