import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, AlertCircle, ShieldCheck, Sparkles } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Enter a valid phone number';
    }
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#008BB9]/10 border border-[#008BB9]/30 text-xs font-semibold text-[#008BB9] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>LET’S WORK TOGETHER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Start Your <span className="text-[#008BB9]">Growth Journey</span> With Xntrova
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Have a project in mind or need a comprehensive digital audit? Get in touch with our marketing team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Details Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">Contact Information</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Connect with the best digital marketing agency in Delhi NCR. We are ready to craft a customized roadmap for your business.
              </p>

              <div className="space-y-5 pt-2">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#008BB9] shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Head Office Address</h4>
                    <p className="text-slate-600 text-xs mt-0.5 font-medium">
                      Delhi NCR, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#008BB9] shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Direct Phone</h4>
                    <a href="tel:+918683828646" className="text-slate-700 text-xs mt-0.5 hover:text-[#008BB9] font-medium transition-colors block">
                      +91 868-382-8646
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#008BB9] shrink-0 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Email Address</h4>
                    <a href="mailto:info@xntrova.com" className="text-slate-700 text-xs mt-0.5 hover:text-[#008BB9] font-medium transition-colors block">
                      info@xntrova.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#008BB9] shrink-0 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Working Hours</h4>
                    <p className="text-slate-600 text-xs mt-0.5 font-medium">
                      Monday – Saturday: 9:00 AM – 7:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="pt-4 border-t border-slate-200 flex items-center space-x-3 text-xs text-slate-600 font-medium">
                <ShieldCheck className="w-5 h-5 text-[#D97706] shrink-0" />
                <span>NDAs & Privacy Guaranteed. Your data is 100% secure.</span>
              </div>
            </div>

            {/* Quick Response Card */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="font-semibold text-slate-900">Average Response Time:</span>
              </div>
              <span className="text-[#008BB9] font-bold">Under 2 Hours</span>
            </div>
          </div>

          {/* Right Lead Capture Form (White Card with Realistic Human Placeholders) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xl relative">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Request a Customized Strategy Call</h3>
              <p className="text-slate-600 text-sm mb-6">Fill in your requirements below and our lead marketing strategist will contact you.</p>

              {submitted ? (
                <div className="bg-[#008BB9]/10 border border-[#008BB9] text-slate-900 p-8 rounded-xl text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 bg-[#008BB9] text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-lg">
                    ✓
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Inquiry Received Successfully!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Xntrova Technologies. One of our digital strategists will review your request and reach out within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-md text-xs font-semibold text-slate-800 bg-slate-100 border border-slate-300 hover:bg-slate-200"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Jagriti"
                        className={`w-full bg-slate-50 border ${
                          errors.fullName ? 'border-red-500' : 'border-slate-300'
                        } rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#008BB9] focus:bg-white focus:ring-1 focus:ring-[#008BB9] transition-colors`}
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-xs mt-1 flex items-center font-medium">
                          <AlertCircle className="w-3 h-3 mr-1" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. jagritirajput@company.com"
                        className={`w-full bg-slate-50 border ${
                          errors.email ? 'border-red-500' : 'border-slate-300'
                        } rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#008BB9] focus:bg-white focus:ring-1 focus:ring-[#008BB9] transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 flex items-center font-medium">
                          <AlertCircle className="w-3 h-3 mr-1" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 9876533333"
                        className={`w-full bg-slate-50 border ${
                          errors.phone ? 'border-red-500' : 'border-slate-300'
                        } rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#008BB9] focus:bg-white focus:ring-1 focus:ring-[#008BB9] transition-colors`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1 flex items-center font-medium">
                          <AlertCircle className="w-3 h-3 mr-1" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Company Name / Website
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Company Name"
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#008BB9] focus:bg-white focus:ring-1 focus:ring-[#008BB9] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Service Required *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full bg-slate-50 border ${
                          errors.service ? 'border-red-500' : 'border-slate-300'
                        } rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#008BB9] focus:bg-white transition-colors`}
                      >
                        <option value="">Which service are you interested in?</option>
                        <option value="SEO">SEO (Search Engine Optimization)</option>
                        <option value="PPC">PPC Advertising</option>
                        <option value="Social Media">Social Media Marketing</option>
                        <option value="E-Commerce">E-Commerce Growth</option>
                        <option value="Web Dev">Web Development & Design</option>
                        <option value="Performance">Full Performance Marketing</option>
                      </select>
                      {errors.service && (
                        <p className="text-red-500 text-xs mt-1 flex items-center font-medium">
                          <AlertCircle className="w-3 h-3 mr-1" /> {errors.service}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Monthly Marketing Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#008BB9] focus:bg-white transition-colors"
                      >
                        <option value="">Select budget range...</option>
                        <option value="Under ₹50k">Under ₹50,000 / month</option>
                        <option value="₹50k - ₹1.5L">₹50,000 – ₹1,50,000 / month</option>
                        <option value="₹1.5L - ₹5L">₹1,50,000 – ₹5,00,000 / month</option>
                        <option value="₹5L+">₹5,00,000+ / month</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Project Details & Goals *
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. We are looking to increase our organic search rankings, scale lead generation, and redesign our web application..."
                      className={`w-full bg-slate-50 border ${
                        errors.message ? 'border-red-500' : 'border-slate-300'
                      } rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#008BB9] focus:bg-white focus:ring-1 focus:ring-[#008BB9] transition-colors`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1 flex items-center font-medium">
                        <AlertCircle className="w-3 h-3 mr-1" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-lg font-bold text-white bg-gradient-to-r from-[#008BB9] to-[#0075A2] hover:from-[#0075A2] hover:to-[#006080] shadow-lg shadow-[#008BB9]/30 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#FFB800]" />
                        <span>Send Proposal Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
