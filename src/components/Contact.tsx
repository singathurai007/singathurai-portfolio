import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  MessageCircle, 
  FileText, 
  ExternalLink,
  Github,
  Linkedin
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { MotionReveal } from './MotionReveal';
import { useLanguage } from '../context/LanguageContext';
import { LeetCodeIcon } from './icons/LeetCodeIcon';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setFormSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 sm:py-24 relative border-t border-[#261E3F]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <MotionReveal amount={0.2} y={24}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-[#261E3F] text-[#C4B5FD] bg-[rgba(139,92,246,0.15)] mb-2.5 font-semibold">
                <Mail className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>{t.contact.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#FAFAFA] font-heading">
                {t.contact.title} <span className="text-[#8B5CF6]">{t.contact.titleHighlight}</span>
              </h2>
            </div>
            <p className="text-[#CBD5E1] text-xs md:text-sm max-w-md leading-[1.65]">
              {t.contact.subtitle}
            </p>
          </div>
        </MotionReveal>

        <MotionReveal amount={0.2} delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Direct Channels Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Email Card with Copy Action */}
              <div className="bg-[#120F1D] border border-[#261E3F] hover:border-[#8B5CF6] rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_30px_rgba(139,92,246,0.16)]">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold">
                    {t.contact.emailLabel}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 text-xs font-mono text-[#8B5CF6] hover:text-[#C4B5FD] hover:underline font-medium"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#10B981]" />
                        <span className="text-[#10B981]">{t.contact.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t.contact.copyAddress}</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-base sm:text-lg font-bold text-[#FAFAFA] hover:text-[#8B5CF6] transition-colors flex items-center gap-2 font-mono truncate"
                >
                  <Mail className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="bg-[#120F1D] border border-[#261E3F] hover:border-[#8B5CF6] rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_30px_rgba(139,92,246,0.16)]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#CBD5E1] block mb-2.5 font-semibold">
                  Direct Contact & WhatsApp
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-base font-bold text-[#FAFAFA] hover:text-[#8B5CF6] transition-colors flex items-center gap-2 font-mono"
                  >
                    <Phone className="w-4 h-4 text-[#8B5CF6]" />
                    <span>{personalInfo.phone}</span>
                  </a>
                  <a
                    href="https://wa.me/918778457577"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#064E3B]/40 text-[#34D399] border border-[#059669]/40 text-xs font-mono hover:bg-[#064E3B]/60 transition-all self-start sm:self-auto font-medium"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-[#120F1D] border border-[#261E3F] rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#CBD5E1] block mb-1.5 font-semibold">
                  Location
                </span>
                <div className="flex items-center gap-2 text-[#FAFAFA] text-xs font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Engineering & Problem-Solving Profiles */}
              <div className="bg-[#120F1D] border border-[#261E3F] hover:border-[#8B5CF6] rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_30px_rgba(139,92,246,0.16)]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#CBD5E1] block mb-3 font-semibold">
                  Engineering & Problem Solving
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#171324] border border-[#261E3F] text-xs font-mono text-[#CBD5E1] hover:text-[#FAFAFA] hover:border-[#8B5CF6] hover:bg-[#1c172d] transition-all shadow-2xs"
                  >
                    <Github className="w-3.5 h-3.5 text-[#8B5CF6]" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-[#261E3F]" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#171324] border border-[#261E3F] text-xs font-mono text-[#CBD5E1] hover:text-[#FAFAFA] hover:border-[#8B5CF6] hover:bg-[#1c172d] transition-all shadow-2xs"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#8B5CF6]" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-[#261E3F]" />
                  </a>
                  <a
                    href={personalInfo.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#171324] border border-[#261E3F] text-xs font-mono text-[#CBD5E1] hover:text-[#FFA116] hover:border-[#FFA116]/40 hover:bg-[#1c172d] transition-all shadow-2xs"
                  >
                    <LeetCodeIcon className="w-3.5 h-3.5 text-[#FFA116]" />
                    <span>LeetCode</span>
                    <ExternalLink className="w-3 h-3 text-[#261E3F]" />
                  </a>
                </div>
              </div>

              {/* Single-Page Resume Download Box */}
              <div className="bg-[#120F1D] border border-[#261E3F] hover:border-[#8B5CF6] rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_30px_rgba(139,92,246,0.16)]">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] text-white flex items-center justify-center font-bold shadow-[0_2px_8px_rgba(139,92,246,0.3)]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#FAFAFA] font-heading">
                      Verified 1-Page Resume PDF
                    </h4>
                    <p className="text-[11px] text-[#CBD5E1] font-mono">
                      ATS-compliant • Singathurai C
                    </p>
                  </div>
                </div>
                <p className="text-[#CBD5E1] text-xs leading-relaxed mb-4">
                  Download my single-page resume formatted with verified experience at Bloogle, live production link, and cloud projects.
                </p>
                <a
                  href={personalInfo.resumePdf}
                  download="SINGATHURAI_C_Resume.pdf"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] text-white font-semibold text-xs font-mono hover:from-[#7C3AED] hover:to-[#5B21B6] shadow-[0_4px_18px_rgba(139,92,246,0.35)] transition-all"
                >
                  <span>Download Resume (PDF)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Interactive Message Form Column (7 cols) */}
            <div className="lg:col-span-7 bg-[#120F1D] border border-[#261E3F] rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
              <h3 className="text-xl font-bold text-[#FAFAFA] mb-1.5 font-heading">
                Send a Direct Message
              </h3>
              <p className="text-[#CBD5E1] text-xs sm:text-sm mb-5 leading-[1.65]">
                Fill out the form below and I will respond to your inquiry within 24 hours.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-[#064E3B]/40 border border-[#059669]/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#064E3B] text-[#34D399] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#FAFAFA] font-heading">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-[#CBD5E1] text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. Singathurai C will review your message and reply promptly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-lg bg-[#171324] hover:bg-[#261E3F] border border-[#261E3F] text-xs font-mono text-[#FAFAFA] transition-all shadow-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] mb-1.5 font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#171324] border border-[#261E3F] text-[#FAFAFA] placeholder-[#64748B] focus:outline-none focus:border-[#8B5CF6] focus:bg-[#120F1D] text-xs sm:text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] mb-1.5 font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#171324] border border-[#261E3F] text-[#FAFAFA] placeholder-[#64748B] focus:outline-none focus:border-[#8B5CF6] focus:bg-[#120F1D] text-xs sm:text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] mb-1.5 font-semibold">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Backend Developer Role / Project Consultation"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#171324] border border-[#261E3F] text-[#FAFAFA] placeholder-[#64748B] focus:outline-none focus:border-[#8B5CF6] focus:bg-[#120F1D] text-xs sm:text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] mb-1.5 font-semibold">
                      Message Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your team, tech stack, or project requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#171324] border border-[#261E3F] text-[#FAFAFA] placeholder-[#64748B] focus:outline-none focus:border-[#8B5CF6] focus:bg-[#120F1D] text-xs sm:text-sm transition-colors resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] text-white font-semibold text-xs sm:text-sm font-mono hover:from-[#7C3AED] hover:to-[#5B21B6] shadow-[0_4px_18px_rgba(139,92,246,0.35)] transition-all transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message Directly</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};
export default Contact;
