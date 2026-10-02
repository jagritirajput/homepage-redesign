import React, { useState } from 'react';
import { Search, Target, Share2, ShoppingCart, FileText, Layout, Mail, Zap, ArrowRight, CheckCircle2, X, Sparkles } from 'lucide-react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedService, setSelectedService] = useState(null);

  const servicesData = [
    {
      id: 'seo',
      category: 'Growth & Traffic',
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      shortDesc: 'Drive high-intent organic traffic, dominate search results, and build long-term brand authority.',
      deliverables: ['Technical SEO Audit', 'Keyword Strategy', 'On-Page Optimization', 'High-DA Backlink Building'],
      fullDetails: 'Our SEO strategies focus on intent-driven traffic that converts into paying customers. We conduct deep keyword research, technical performance audits, page speed optimization, and authoritative link building tailored to Delhi NCR and global markets.',
    },
    {
      id: 'ppc',
      category: 'Paid Ads',
      icon: Target,
      title: 'PPC (Pay-Per-Click Advertising)',
      shortDesc: 'Maximize ROI with precision-targeted Google Search, Display, and Meta advertising campaigns.',
      deliverables: ['Google Search & Shopping Ads', 'Conversion Tracking', 'Ad Copy A/B Testing', 'Negative Keyword Sculpting'],
      fullDetails: 'We optimize every rupee of your ad spend. By combining hyper-targeted audience selection, compelling ad copy, and high-converting landing pages, we deliver low Cost-Per-Acquisition (CPA) and instant lead flow.',
    },
    {
      id: 'smm',
      category: 'Growth & Traffic',
      icon: Share2,
      title: 'Social Media Marketing (SMM)',
      shortDesc: 'Build a passionate community, elevate brand presence, and drive engagement across Meta, LinkedIn, and X.',
      deliverables: ['Content Calendar Strategy', 'Reels & Video Production', 'Community Management', 'Influencer Outreach'],
      fullDetails: 'Transform social channels into revenue engines. We craft visually stunning creative assets, manage daily posting schedules, run targeted paid social campaigns, and build loyal brand advocates.',
    },
    {
      id: 'ecommerce',
      category: 'Growth & Traffic',
      icon: ShoppingCart,
      title: 'E-Commerce Growth Marketing',
      shortDesc: 'Scale Shopify, WooCommerce, and Amazon store revenue with data-driven funnel optimization.',
      deliverables: ['Shopify/Amazon Sales Scaling', 'Abandoned Cart Recovery', 'ROAS Optimization', 'Customer LTV Booster'],
      fullDetails: 'E-commerce growth requires full-funnel strategy. From product page Conversion Rate Optimization (CRO) to retargeting and retention campaigns, we maximize customer lifetime value (LTV).',
    },
    {
      id: 'webdev',
      category: 'Design & Web',
      icon: Layout,
      title: 'Web Development & UI/UX Design',
      shortDesc: 'Modern, ultra-fast, responsive websites designed to convert visitors into qualified leads.',
      deliverables: ['Custom React/Next.js Dev', 'Mobile Responsive Layouts', 'SEO & Core Web Vitals', 'Lead Capture Integration'],
      fullDetails: 'We build lightning-fast web applications designed for maximum conversion. Seamlessly integrated with analytics, lead capture forms, and CRM tools, our custom web design elevates your brand image.',
    },
    {
      id: 'content',
      category: 'Growth & Traffic',
      icon: FileText,
      title: 'Content Marketing & Copywriting',
      shortDesc: 'Engage audiences with compelling brand storytelling, technical articles, and conversion copywriting.',
      deliverables: ['Thought Leadership Articles', 'SEO Blog Writing', 'Sales Landing Page Copy', 'Whitepapers & Ebooks'],
      fullDetails: 'Content is the backbone of digital visibility. We produce research-backed articles, landing page copy, case studies, and email sequences that resonate with target decision-makers.',
    },
    {
      id: 'email',
      category: 'Growth & Traffic',
      icon: Mail,
      title: 'Email Marketing & Automation',
      shortDesc: 'Nurture leads and increase repeat purchases with automated lifecycle email campaigns.',
      deliverables: ['Klaviyo/Mailchimp Flows', 'Drip Nurturing Campaigns', 'Segmentation & Personalization', 'Newsletter Design'],
      fullDetails: 'Unlock hidden revenue in your existing email subscriber base. We set up automated welcome series, promotional newsletters, customer re-engagement flows, and detailed A/B testing.',
    },
    {
      id: 'performance',
      category: 'Paid Ads',
      icon: Zap,
      title: 'Performance Marketing',
      shortDesc: 'Full-funnel growth campaigns optimized against revenue, Customer Acquisition Cost (CAC), and LTV.',
      deliverables: ['Multi-Channel Funnel Build', 'Omnichannel Attribution', 'CRO Experiments', 'Scale-up Strategy'],
      fullDetails: 'Performance marketing combines analytics, creative testing, and multi-channel media buying to achieve predictable, scalable revenue growth for hyper-growth brands.',
    },
  ];

  const categories = ['All', 'Growth & Traffic', 'Paid Ads', 'Design & Web'];

  const filteredServices = activeCategory === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#008BB9]/10 border border-[#008BB9]/30 text-xs font-semibold text-[#008BB9] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>OUR EXPERTISE & SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive <span className="text-[#008BB9]">Digital Services</span> Tailored For Growth
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            From organic search domination to performance ads and high-converting web applications, Xntrova provides end-to-end solutions for scalable business success.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#008BB9] text-white shadow-md shadow-[#008BB9]/25 scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#008BB9] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-sm hover:shadow-lg"
              >
                <div>
                  {/* Category Pill + Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#008BB9]/10 border border-[#008BB9]/20 flex items-center justify-center group-hover:bg-[#008BB9] transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-[#008BB9] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-600 border border-slate-200">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#008BB9] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Deliverable Tags */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-1.5 text-xs text-slate-600 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#008BB9] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full py-2.5 rounded-lg text-xs font-semibold text-[#008BB9] bg-slate-50 border border-slate-200 hover:bg-[#008BB9] hover:text-white hover:border-[#008BB9] flex items-center justify-center space-x-1.5 transition-all duration-200"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-slate-900 space-y-5 animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-[#008BB9] flex items-center justify-center text-white shrink-0">
                <selectedService.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase text-[#008BB9]">
                  {selectedService.category}
                </span>
                <h3 className="text-xl font-bold">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
              {selectedService.fullDetails}
            </p>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Key Campaign Deliverables:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                {selectedService.deliverables.map((d, i) => (
                  <div key={i} className="flex items-center space-x-2 bg-slate-50 p-2 rounded border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#008BB9]" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-1/2 py-3 rounded-md text-center text-xs font-semibold text-white bg-[#008BB9] hover:bg-[#0075A2] transition-colors"
              >
                Request Custom Proposal
              </a>
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-1/2 py-3 rounded-md text-center text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
