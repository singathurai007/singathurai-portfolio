import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowUp, 
  ShieldCheck
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { LeetCodeIcon } from './icons/LeetCodeIcon';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: t.nav.about, href: '#home' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' }
  ];

  return (
    <footer className="relative bg-[#120F1D] border-t border-[#261E3F] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#261E3F]">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] text-white font-bold text-sm flex items-center justify-center tracking-tight shadow-[0_2px_8px_rgba(139,92,246,0.3)]">
                SC
              </span>
              <span className="font-heading text-xl font-bold tracking-tight text-[#FAFAFA]">
                SINGATHURAI C
              </span>
            </div>
            <p className="text-[#CBD5E1] text-sm max-w-sm leading-[1.65]">
              Backend Developer & DevOps Engineer specializing in NestJS, TypeScript, PostgreSQL, Prisma ORM, and automated AWS cloud infrastructure.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#064E3B]/40 border border-[#059669]/40 text-xs font-mono text-[#34D399]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Production Lead: tvrepaircoimbatore.in</span>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FAFAFA] mb-4 font-semibold">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm font-mono">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-[#CBD5E1] hover:text-[#8B5CF6] transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Resume (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FAFAFA] mb-4 font-semibold">
              Connect Directly
            </h4>
            <div className="flex items-center gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#171324] border border-[#261E3F] hover:border-[#8B5CF6] hover:text-[#8B5CF6] hover:bg-[#1c172d] text-[#CBD5E1] flex items-center justify-center transition-all shadow-2xs"
                title="GitHub: github.com/singathurai007"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#171324] border border-[#261E3F] hover:border-[#8B5CF6] hover:text-[#8B5CF6] hover:bg-[#1c172d] text-[#CBD5E1] flex items-center justify-center transition-all shadow-2xs"
                title="LinkedIn: linkedin.com/in/singathuraic"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#171324] border border-[#261E3F] hover:border-[#FFA116] hover:text-[#FFA116] hover:bg-[#1c172d] text-[#CBD5E1] flex items-center justify-center transition-all shadow-2xs"
                title="LeetCode: leetcode.com/u/singathurai007"
              >
                <LeetCodeIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-xl bg-[#171324] border border-[#261E3F] hover:border-[#8B5CF6] hover:text-[#8B5CF6] hover:bg-[#1c172d] text-[#CBD5E1] flex items-center justify-center transition-all shadow-2xs"
                title="Email: cmsingathurai@gmail.com"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="w-9 h-9 rounded-xl bg-[#171324] border border-[#261E3F] hover:border-[#8B5CF6] hover:text-[#8B5CF6] hover:bg-[#1c172d] text-[#CBD5E1] flex items-center justify-center transition-all shadow-2xs"
                title={`Phone: ${personalInfo.phone}`}
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-1">
              <a
                href={personalInfo.resumePdf}
                download="SINGATHURAI_C_Resume.pdf"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#8B5CF6] hover:text-[#C4B5FD] hover:underline font-medium"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Single-Page ATS Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-[#CBD5E1] text-center sm:text-left">
            © <span className="text-[#FAFAFA] font-semibold">SINGATHURAI C</span>. {t.footer.builtWith}.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-[#CBD5E1] hover:text-[#FAFAFA] transition-colors px-3.5 py-1.5 rounded-lg bg-[#171324] border border-[#261E3F] hover:border-[#8B5CF6] shadow-2xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#8B5CF6]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
