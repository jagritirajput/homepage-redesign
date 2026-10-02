import React, { useState } from 'react';
import { TrendingUp, ArrowUpRight, Award, CheckCircle2, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const caseStudies = [
    {
      id: 'case-1',
      title: 'E-Commerce Fashion Brand Growth',
      category: 'E-Commerce',
      metrics: {
        primary: '+310% Revenue',
        secondary: '4.2x ROAS',
        timeframe: '6 Months',
      },
      summary: 'Scaled Meta & Google Ads campaigns while optimizing Shopify site speed and product page conversion rates.',
      highlights: ['Generated 15,000+ new customers', 'Lowered CPA by 38%', 'Automated Klaviyo email flows'],
      imageBg: 'from-blue-50 to-cyan-100/60',
    },
    {
      id: 'case-2',
      title: 'B2B SaaS Lead Generation Campaign',
      category: 'B2B SaaS',
      metrics: {
        primary: '+240% Demo Requests',
        secondary: '-45% Cost Per Lead',
        timeframe: '4 Months',
      },
      summary: 'Executed targeted LinkedIn Ads and intent-based SEO landing pages for an enterprise software provider.',
      highlights: ['Secured #1 ranking for 18 core keywords', 'Boosted demo conversion rate to 8.4%', 'Streamlined CRM lead routing'],
      imageBg: 'from-sky-50 to-teal-100/60',
    },
    {
      id: 'case-3',
      title: 'Healthcare Chain Local SEO & PPC',
      category: 'Local Business',
      metrics: {
        primary: '+180% Patient Calls',
        secondary: '#1 Google Map Pack',
        timeframe: '3 Months',
      },
      summary: 'Dominated Delhi NCR local search rankings for a multi-location healthcare provider using hyper-local SEO & Google Ads.',
      highlights: ['Achieved top 3 Google local rankings', 'Increased monthly appointment bookings by 220%', 'Optimized Google Business Profiles'],
      imageBg: 'from-[#008BB9]/10 to-[#008BB9]/20',
    },
    {
      id: 'case-4',
      title: 'Real Estate Luxury Housing Campaign',
      category: 'Local Business',
      metrics: {
        primary: '₹140 Cr Inventory Sold',
        secondary: '1,200+ Qualified Leads',
        timeframe: '90 Days',
      },
      summary: 'Full-funnel digital campaign using high-converting video ads, landing pages, and automated WhatsApp lead nurturing.',
      highlights: ['Ran virtual tour lead forms', 'Achieved 82% buyer qualification rate', 'Reduced cost per lead by 50%'],
      imageBg: 'from-amber-50 to-orange-100/60',
    },
  ];

  const categories = ['All', 'E-Commerce', 'B2B SaaS', 'Local Business'];

  const filteredStudies = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter(c => c.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#008BB9]/10 border border-[#008BB9]/30 text-xs font-semibold text-[#008BB9] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>REAL IMPACT & RESULTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Featured <span className="text-[#008BB9]">Case Studies</span> & Success Stories
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Explore how we help ambitious enterprises across Delhi NCR and internationally achieve high-ROI digital transformation.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-[#008BB9] text-white shadow-md shadow-[#008BB9]/25 scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#008BB9] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-md hover:shadow-xl"
            >
              {/* Header Visual Box */}
              <div className={`p-6 sm:p-8 bg-gradient-to-br ${study.imageBg} border-b border-slate-200 relative`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-[#008BB9] border border-slate-200 shadow-xs">
                    {study.category}
                  </span>
                  <span className="text-xs text-slate-600 font-medium">
                    Timeframe: {study.metrics.timeframe}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-[#008BB9] transition-colors">
                  {study.title}
                </h3>

                {/* Primary Metric Badge */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <div className="px-4 py-2 rounded-lg bg-white border border-[#008BB9]/40 flex items-center space-x-2 shadow-xs">
                    <TrendingUp className="w-5 h-5 text-[#008BB9]" />
                    <span className="text-lg font-bold text-slate-900">{study.metrics.primary}</span>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-white border border-amber-300 flex items-center space-x-2 shadow-xs">
                    <Award className="w-5 h-5 text-[#D97706]" />
                    <span className="text-base font-bold text-slate-800">{study.metrics.secondary}</span>
                  </div>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {study.summary}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Campaign Impact Highlights:
                  </div>
                  {study.highlights.map((h, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#008BB9] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 text-xs font-bold text-[#008BB9] hover:text-[#0075A2] transition-colors"
                  >
                    <span>Read Full Case Study Blueprint</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
