import React from 'react';
import { ShieldCheck, Target, Users, Zap, CheckCircle, XCircle, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Target,
      title: 'Obsessed With ROI & Conversions',
      desc: 'We focus strictly on metrics that drive bottom-line profit—qualified leads, sales revenue, and lowered Cost-Per-Acquisition.',
    },
    {
      icon: Zap,
      title: 'Bespoke Campaign Architecture',
      desc: 'No cookie-cutter templates. Every strategy is built from scratch based on your specific business domain and target audience.',
    },
    {
      icon: Users,
      title: 'Dedicated Senior Strategist',
      desc: 'Direct line of communication with experienced marketing leads—no endless support queues or junior account handoffs.',
    },
    {
      icon: ShieldCheck,
      title: '100% Transparent Reporting',
      desc: 'Real-time custom dashboard access with clear explanations of ad spend, traffic sources, conversion rates, and ROI.',
    },
  ];

  const comparisonRows = [
    { feature: 'Strategy Approach', traditional: 'Generic pre-set packages', xntrova: 'Custom data-backed roadmap' },
    { feature: 'Primary Focus', traditional: 'Vanity metrics (likes, clicks)', xntrova: 'Qualified leads & revenue ROI' },
    { feature: 'Reporting & Analytics', traditional: 'Monthly static PDF exports', xntrova: 'Real-time transparent dashboards' },
    { feature: 'Communication', traditional: 'Slow support ticket system', xntrova: 'Dedicated Senior Lead direct access' },
    { feature: 'Optimization Speed', traditional: 'Set-and-forget campaigns', xntrova: 'Weekly data-driven A/B testing' },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#008BB9]/10 border border-[#008BB9]/30 text-xs font-semibold text-[#008BB9] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>THE XNTROVA ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Ambitious Brands <span className="text-[#008BB9]">Choose Xntrova</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            We bridge the gap between creative brand storytelling and rigorous performance marketing to deliver consistent competitive advantage.
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-[#008BB9] hover:bg-white transition-all duration-300 group hover:-translate-y-1.5 shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-[#008BB9]/10 border border-[#008BB9]/20 flex items-center justify-center text-[#008BB9] group-hover:bg-[#008BB9] group-hover:text-white transition-all duration-300 mb-4">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#008BB9] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Comparison Table */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">How Xntrova Compares to Traditional Agencies</h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">See why 500+ businesses switched their marketing growth to us.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700 border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                  <th className="py-3 px-4 font-semibold">Evaluation Factor</th>
                  <th className="py-3 px-4 font-semibold text-slate-500">Traditional Marketing Agencies</th>
                  <th className="py-3 px-4 font-semibold text-[#008BB9] bg-[#008BB9]/10 rounded-t-lg">Xntrova Technologies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-slate-900">{row.feature}</td>
                    <td className="py-4 px-4 text-slate-600 flex items-center space-x-2">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{row.traditional}</span>
                    </td>
                    <td className="py-4 px-4 font-semibold text-slate-900 bg-[#008BB9]/5 flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#008BB9] shrink-0" />
                      <span>{row.xntrova}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
