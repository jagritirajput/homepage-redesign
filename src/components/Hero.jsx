import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Award, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setFormError('Please fill in all required fields (*)');
      return;
    }
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    }, 4000);
  };

  return (
    <section id="hero" className="relative bg-gradient-to-br from-white via-slate-50 to-[#008BB9]/5 text-slate-900 pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-200">
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#008BB9]/10 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#0075A2]/10 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#008BB9]/10 border border-[#008BB9]/30 text-xs sm:text-sm font-semibold text-[#008BB9]">
              <Sparkles className="w-4 h-4 text-[#FFB800]" />
              <span>#1 Performance & Digital Marketing Agency in Delhi NCR</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Scale Your Business With <span className="bg-gradient-to-r from-[#008BB9] to-[#005573] bg-clip-text text-transparent">Data-Driven</span> Digital Marketing
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Unlock your business potential and connect with targeted customers by partnering with Xntrova. We combine creative strategies with measurable ROI to accelerate your digital growth.
            </p>

            {/* Feature Bullet Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700 max-w-xl mx-auto lg:mx-0 text-left font-medium">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-[#008BB9] shrink-0" />
                <span>Custom ROI-Driven Campaigns</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-[#008BB9] shrink-0" />
                <span>Transparent Analytics & Reporting</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-[#008BB9] shrink-0" />
                <span>Dedicated Account Strategist</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-[#008BB9] shrink-0" />
                <span>Proven 250%+ Organic Traffic Growth</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-md font-semibold text-white bg-gradient-to-r from-[#008BB9] to-[#0075A2] hover:from-[#0075A2] hover:to-[#006080] shadow-lg shadow-[#008BB9]/25 hover:shadow-xl flex items-center justify-center space-x-2 transition-all duration-200 group"
              >
                <span>Get Free Digital Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-md font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 shadow-sm flex items-center justify-center space-x-2 transition-all duration-200"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center justify-center lg:justify-start">
                  <span>250%</span>
                  <TrendingUp className="w-4 h-4 text-[#008BB9] ml-1" />
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">Avg Traffic Growth</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center justify-center lg:justify-start">
                  <span>500+</span>
                  <Users className="w-4 h-4 text-[#D97706] ml-1" />
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center justify-center lg:justify-start">
                  <span>120+</span>
                  <Award className="w-4 h-4 text-[#008BB9] ml-1" />
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">Delivered Projects</div>
              </div>
            </div>
          </div>

          {/* Right Lead Audit Form Card (White Light Theme with Realistic Placeholders) */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-200/60 relative">
              {/* Header inside Card */}
              <div className="mb-6 border-b border-slate-100 pb-4">
                <div className="flex items-center space-x-2 text-[#008BB9] font-semibold text-xs uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#D97706]" />
                  <span>Complimentary Strategy Session</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Get a Free Digital Audit</h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Tell us about your business and we will deliver a custom growth report.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-[#008BB9]/10 border border-[#008BB9] text-slate-900 p-6 rounded-lg text-center space-y-3">
                  <div className="w-12 h-12 bg-[#008BB9] text-white rounded-full flex items-center justify-center mx-auto text-xl">
                    ✓
                  </div>
                  <h3 className="text-lg font-bold">Audit Request Submitted!</h3>
                  <p className="text-xs text-slate-600">
                    Thank you! Our digital marketing strategist will review your details and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-slate-800">
                  {formError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-xs p-2.5 rounded font-medium">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Jagriti"
                        className="w-full bg-slate-50 border border-slate-300 rounded px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#008BB9] focus:bg-white focus:ring-1 focus:ring-[#008BB9] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. jagritirajput@company.com"
                        className="w-full bg-slate-50 border border-slate-300 rounded px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#008BB9] focus:bg-white focus:ring-1 focus:ring-[#008BB9] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 9876533333"
                        className="w-full bg-slate-50 border border-slate-300 rounded px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#008BB9] focus:bg-white focus:ring-1 focus:ring-[#008BB9] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Website</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Company Name"
                        className="w-full bg-slate-50 border border-slate-300 rounded px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#008BB9] focus:bg-white focus:ring-1 focus:ring-[#008BB9] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Primary Interest Service</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-300 rounded px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#008BB9] focus:bg-white transition-colors"
                    >
                      <option value="">Which service are you interested in?</option>
                      <option value="SEO">SEO (Search Engine Optimization)</option>
                      <option value="PPC">PPC (Pay-Per-Click Advertising)</option>
                      <option value="Social Media">Social Media Marketing</option>
                      <option value="E-Commerce">E-Commerce Marketing</option>
                      <option value="Web Dev">Web Development</option>
                      <option value="Performance">Performance Marketing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Business Goals / Message</label>
                    <textarea
                      name="message"
                      rows="2"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. We want to scale our website traffic by 250% and generate 50+ high-quality leads monthly..."
                      className="w-full bg-slate-50 border border-slate-300 rounded px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#008BB9] focus:bg-white focus:ring-1 focus:ring-[#008BB9] transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded font-semibold text-white bg-gradient-to-r from-[#008BB9] to-[#0075A2] hover:from-[#0075A2] hover:to-[#006080] shadow-md shadow-[#008BB9]/25 transition-all duration-200"
                  >
                    Submit Audit Request
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    🔒 100% confidential. No spam policy.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
