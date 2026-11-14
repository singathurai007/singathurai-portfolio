import React from 'react';
import { Fingerprint, Server, Database, Cloud, ShieldCheck, ExternalLink, ArrowRight, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { MotionReveal } from './MotionReveal';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-12 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <MotionReveal amount={0.2} y={24}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/25 text-[#38BDF8] font-mono text-xs font-semibold uppercase tracking-wider mb-2">
              <Fingerprint className="w-3.5 h-3.5" />
              <span>{t.about.badge}</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#FAFAFA] tracking-tight mb-2">
              {t.about.title} <span className="text-[#38BDF8]">{t.about.titleHighlight}</span>
            </h2>
            <p className="text-[#A1A1AA] text-sm max-w-xl mx-auto">
              {t.about.subtitle}
            </p>
          </div>
        </MotionReveal>

        {/* Bento Grid */}
        <MotionReveal amount={0.2} delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 bg-[#121215] border border-[#27272A] hover:border-[#38BDF8]/60 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(56,189,248,0.12)]">
            <h3 className="font-heading font-bold text-lg sm:text-xl text-[#FAFAFA] mb-3">
              {t.about.roleTitle}
            </h3>

            <p className="text-[#A1A1AA] text-xs sm:text-sm leading-relaxed mb-3">
              {t.about.p1}
            </p>

            <p className="text-[#A1A1AA]/90 text-xs sm:text-sm leading-relaxed mb-5">
              {t.about.p2}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <div className="flex items-start gap-2.5 p-3 bg-[#09090B] border border-[#27272A] rounded-xl hover:border-[#38BDF8]/40 transition-colors">
                <Server className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#FAFAFA] text-xs font-heading">{t.about.h1Title}</strong>
                  <span className="text-[11px] text-[#A1A1AA]">{t.about.h1Desc}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 bg-[#09090B] border border-[#27272A] rounded-xl hover:border-[#38BDF8]/40 transition-colors">
                <Database className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#FAFAFA] text-xs font-heading">{t.about.h2Title}</strong>
                  <span className="text-[11px] text-[#A1A1AA]">{t.about.h2Desc}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 bg-[#09090B] border border-[#27272A] rounded-xl hover:border-[#38BDF8]/40 transition-colors">
                <Cloud className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#FAFAFA] text-xs font-heading">{t.about.h3Title}</strong>
                  <span className="text-[11px] text-[#A1A1AA]">{t.about.h3Desc}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 bg-[#09090B] border border-[#27272A] rounded-xl hover:border-[#38BDF8]/40 transition-colors">
                <ShieldCheck className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#FAFAFA] text-xs font-heading">{t.about.h4Title}</strong>
                  <span className="text-[11px] text-[#A1A1AA]">{t.about.h4Desc}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fast Facts Side Card */}
          <div className="lg:col-span-5 bg-[#121215] border border-[#27272A] hover:border-[#38BDF8]/60 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(56,189,248,0.12)]">
            <div className="flex flex-col gap-3.5">
              <div className="border-b border-[#27272A] pb-2.5">
                <span className="font-mono text-[11px] uppercase text-[#A1A1AA] block">{t.about.currentRoleLabel}</span>
                <strong className="text-[#FAFAFA] text-sm">{t.about.currentRoleValue}</strong>
              </div>

              <div className="border-b border-[#27272A] pb-2.5">
                <span className="font-mono text-[11px] uppercase text-[#A1A1AA] block">{t.about.liveProjectLabel}</span>
                <a
                  href="https://tvrepaircoimbatore.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#38BDF8] font-semibold text-sm inline-flex items-center gap-1.5 hover:underline"
                >
                  <span>tvrepaircoimbatore.in</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="border-b border-[#27272A] pb-2.5">
                <span className="font-mono text-[11px] uppercase text-[#A1A1AA] block">{t.about.eduLabel}</span>
                <span className="text-[#FAFAFA] text-sm font-semibold">{t.about.eduValue}</span>
              </div>

              <div className="border-b border-[#27272A] pb-2.5">
                <span className="font-mono text-[11px] uppercase text-[#A1A1AA] block">{t.about.locLabel}</span>
                <span className="text-[#FAFAFA] text-sm">{t.about.locValue}</span>
              </div>

              <div>
                <span className="font-mono text-[11px] uppercase text-[#A1A1AA] block">Contact</span>
                <span className="text-[#FAFAFA] text-xs font-mono">cmsingathurai@gmail.com • +91 8778457577</span>
              </div>
            </div>

            <a
              href={personalInfo.resumePdf}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs text-[#09090B] bg-[#38BDF8] hover:bg-[#7DD3FC] shadow-[0_0_15px_rgba(56,189,248,0.25)] transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.about.downloadResumeBtn}</span>
            </a>
          </div>

        </div>
        </MotionReveal>
      </div>
    </section>
  );
};

