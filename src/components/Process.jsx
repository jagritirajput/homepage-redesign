import React, { useState } from 'react';
import { Search, FileText, Rocket, LineChart, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery & Deep Audit',
      short: 'Comprehensive brand, audience & technical assessment.',
      desc: 'We analyze your website, competitor landscape, target customer personas, and existing marketing channels to uncover hidden growth opportunities.',
      deliverables: ['Technical SEO & CRO Audit', 'Competitor Gap Analysis', 'Target Audience Persona Definition'],
      timeline: 'Week 1',
    },
    {
      number: '02',
      icon: FileText,
      title: 'Growth Strategy Blueprint',
      short: 'Tailored roadmap with clear KPIs & ROI targets.',
      desc: 'We build a clear 90-day growth roadmap outlining budget allocation, channel selection, ad copy concepts, and revenue forecasts.',
      deliverables: ['Omnichannel Marketing Strategy', 'KPI & Revenue Targets', 'Creative Asset Briefs'],
      timeline: 'Week 2',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Agile Execution & Launch',
      short: 'Deploying high-converting campaigns & pages.',
      desc: 'Our design, development, and media buying teams execute campaign setups, craft high-converting ad copy, build landing pages, and launch targeted channels.',
      deliverables: ['Paid Search & Social Launch', 'On-Page SEO Optimization', 'Landing Page Deployment'],
      timeline: 'Weeks 3 - 4',
    },
    {
      number: '04',
      icon: LineChart,
      title: 'Analyze, Optimize & Scale',
      short: 'Continuous A/B testing for maximum ROI scaling.',
      desc: 'Marketing is never static. We continuously monitor campaign analytics, run A/B split tests on ad creatives and landing pages, and double down on winning channels.',
      deliverables: ['Weekly CRO Experiments', 'Transparent ROI Reporting', 'Aggressive Campaign Scaling'],
      timeline: 'Ongoing',
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#008BB9]/10 border border-[#008BB9]/30 text-xs font-semibold text-[#008BB9] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>HOW WE WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Proven 4-Step <span className="text-[#008BB9]">Growth Process</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            A structured, transparent methodology designed to take your digital marketing from initial audit to predictable revenue scaling.
          </p>
        </div>

        {/* Desktop Step Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-xl border text-left transition-all duration-300 relative ${
                  isActive
                    ? 'bg-white border-[#008BB9] shadow-lg shadow-[#008BB9]/15 scale-105'
                    : 'bg-white/60 border-slate-200 hover:border-slate-300 opacity-80 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-2xl font-black ${isActive ? 'text-[#008BB9]' : 'text-slate-400'}`}>
                    {step.number}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isActive ? 'bg-[#008BB9] text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>
                <h3 className={`text-base font-bold ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                  {step.title}
                </h3>
                <p className="text-slate-500 text-xs mt-1 line-clamp-2">
                  {step.short}
                </p>
                <span className="inline-block mt-3 text-[10px] uppercase font-bold text-[#008BB9]">
                  Timeline: {step.timeline}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Content Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#008BB9] uppercase tracking-wider">
                <span>Phase {steps[activeStep].number}</span>
                <span>•</span>
                <span>{steps[activeStep].timeline}</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {steps[activeStep].title}
              </h3>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Key Deliverables in this Phase:
                </h4>
                <div className="space-y-2">
                  {steps[activeStep].deliverables.map((d, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#008BB9] shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#008BB9]/10 border border-[#008BB9] flex items-center justify-center mx-auto text-[#008BB9]">
                {React.createElement(steps[activeStep].icon, { className: 'w-8 h-8' })}
              </div>
              <h4 className="text-lg font-bold text-slate-900">Ready for Phase {steps[activeStep].number}?</h4>
              <p className="text-slate-600 text-xs">
                Partner with Xntrova to execute this exact process for your enterprise.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-md text-xs font-semibold text-white bg-[#008BB9] hover:bg-[#0075A2] transition-colors"
              >
                <span>Start Discovery Audit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
