import React, { useState } from 'react';
import { Lightbulb, Compass, BarChart3, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('approach');

  const pillars = [
    {
      icon: Lightbulb,
      title: 'Creative Ideas',
      desc: 'Fresh thinking that builds powerful, memorable brand stories.',
      color: '#008BB9',
    },
    {
      icon: Compass,
      title: 'Strategic Planning',
      desc: 'Smart roadmaps backed by deep industry research and competitor analysis.',
      color: '#0075A2',
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Decisions',
      desc: 'Precision marketing campaigns tied directly to conversions and measurable ROI.',
      color: '#D97706',
    },
    {
      icon: TrendingUp,
      title: 'Measurable Results',
      desc: 'Transparent reporting and continuous optimization for sustainable growth.',
      color: '#059669',
    },
  ];

  const tabContents = {
    approach: {
      heading: 'Results-Oriented Marketing Framework',
      text: 'We combine consumer psychology, cutting-edge digital technology, and granular analytics to craft custom marketing strategies tailored to your exact industry goals.',
      bullets: ['In-depth audience research', 'Omnichannel campaign execution', 'Real-time performance tracking'],
    },
    mission: {
      heading: 'Empowering Businesses to Climb the Digital Ladder',
      text: 'Our mission is to eliminate guesswork from digital marketing. We empower ambitious brands across Delhi NCR and globally to achieve market leadership.',
      bullets: ['Transparent, zero-fluff communication', 'Dedicated account strategist for every client', 'Focus on revenue, not just metrics'],
    },
    culture: {
      heading: 'Driven by Innovation & Constant Evolution',
      text: 'Our team of SEO specialists, media buyers, content creators, and web developers constantly test new strategies to keep your business ahead of search engine updates.',
      bullets: ['Agile sprint cycles & quick execution', 'Data analytics combined with storytelling', 'Relentless commitment to client satisfaction'],
    },
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-[#008BB9]/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#008BB9]/10 border border-[#008BB9]/30 text-xs font-semibold text-[#008BB9]">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
              <span>ABOUT XNTROVA TECHNOLOGIES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Driven By Ideas. <br />
              Focused on <span className="text-[#008BB9]">Measurable Results.</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              At Xntrova, we believe that the key to great marketing is understanding people. Each of our strategies is rooted in fresh ideas, robust planning, and a clear focus on what truly matters. We combine creativity with data-driven decisions to create meaningful digital experiences that connect, engage, and inspire action.
            </p>

            <div className="border-l-2 border-[#008BB9] pl-4 py-1 text-slate-600 text-sm italic font-medium">
              "Whether you want to shape your brand story, improve visibility, or drive conversion, we take a creative and data-driven approach to ensure the best possible results."
            </div>

            {/* Interactive Tab Controls */}
            <div className="pt-4">
              <div className="flex space-x-2 border-b border-slate-200 pb-2">
                {[
                  { id: 'approach', label: 'Our Approach' },
                  { id: 'mission', label: 'Our Mission' },
                  { id: 'culture', label: 'Our Culture' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 text-sm font-semibold rounded-md transition-all ${
                      activeTab === tab.id
                        ? 'bg-[#008BB9] text-white shadow-md'
                        : 'text-slate-600 hover:text-[#008BB9] hover:bg-slate-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="mt-4 p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="text-lg font-bold text-slate-900">
                  {tabContents[activeTab].heading}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {tabContents[activeTab].text}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs font-semibold text-slate-700">
                  {tabContents[activeTab].bullets.map((b, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#008BB9]" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Visual & Pillars Matrix Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#008BB9]/60 hover:bg-white transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-md"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-xs">
                      <IconComp className="w-5 h-5" style={{ color: pillar.color }} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-[#008BB9] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Performance Overview Widget */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-slate-900 to-[#001F2B] border border-slate-800 text-white shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <h4 className="text-sm font-bold text-white">Xntrova Proven Track Record</h4>
                  <p className="text-xs text-slate-400">Verified Growth Across 120+ Campaigns</p>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#008BB9]/20 text-[#00A3E0] text-xs font-semibold flex items-center space-x-1">
                  <TrendingUp className="w-3.5 h-3.5 mr-1" />
                  Continuous ROI
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 text-center">
                <div className="p-2 rounded bg-white/5 border border-white/10">
                  <div className="text-xl sm:text-2xl font-bold text-[#00A3E0]">+250%</div>
                  <div className="text-[11px] text-slate-300 mt-0.5">Organic Search Growth</div>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/10">
                  <div className="text-xl sm:text-2xl font-bold text-[#FFB800]">120+</div>
                  <div className="text-[11px] text-slate-300 mt-0.5">Projects Delivered</div>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/10">
                  <div className="text-xl sm:text-2xl font-bold text-emerald-400">4.5x</div>
                  <div className="text-[11px] text-slate-300 mt-0.5">Average Client ROI</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
