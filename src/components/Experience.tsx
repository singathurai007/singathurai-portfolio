import React from 'react';
import { Briefcase, ExternalLink, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { experienceData } from '../data/portfolioData';
import { MotionReveal } from './MotionReveal';
import { useLanguage } from '../context/LanguageContext';

export const Experience: React.FC = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <section id="experience" className="py-20 sm:py-24 relative border-t border-[#261E3F]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <MotionReveal amount={0.2} y={24}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-[#261E3F] text-[#C4B5FD] bg-[rgba(139,92,246,0.15)] mb-2.5 font-semibold">
                <Briefcase className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>{t.experience.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#FAFAFA] font-heading">
                {t.experience.title} <span className="text-[#8B5CF6]">{t.experience.titleHighlight}</span>
              </h2>
            </div>
            <p className="text-[#CBD5E1] text-xs md:text-sm max-w-md leading-[1.65]">
              {t.experience.subtitle}
            </p>
          </div>
        </MotionReveal>

        {/* Experience Timeline Cards */}
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experienceData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              className="group relative bg-[#120F1D] border border-[#261E3F] hover:border-[#8B5CF6] rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_30px_rgba(139,92,246,0.16)]"
            >
              {/* Top Row: Role, Company, Period, Live Badge */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[#261E3F]">
                <div className="space-y-1.5">
                  <div className="flex items-center flex-wrap gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#FAFAFA] group-hover:text-[#8B5CF6] transition-colors font-heading">
                      {item.role}
                    </h3>
                    {item.projectUrl ? (
                      <a
                        href={item.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-medium bg-[#064E3B]/40 text-[#34D399] border border-[#059669]/40 hover:bg-[#064E3B]/60 transition-all"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                        <span>Live: {item.project}</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-medium bg-[rgba(139,92,246,0.15)] text-[#C4B5FD] border border-[#261E3F]">
                        {item.project}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-[#CBD5E1] font-medium flex items-center flex-wrap gap-2">
                    {item.companyUrl ? (
                      <div className="inline-flex items-center gap-1.5">
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Internship Provider: ${item.company}`}
                          className="text-[#FAFAFA] font-semibold hover:text-[#8B5CF6] transition-colors inline-flex items-center gap-1 group/company"
                        >
                          <span>{item.company}</span>
                          <ExternalLink className="w-3 h-3 text-[#8B5CF6] group-hover/company:translate-x-0.5 transition-transform" />
                        </a>
                        <span className="text-[10px] text-[#C4B5FD] font-mono tracking-wider px-1.5 py-0.5 rounded bg-[rgba(139,92,246,0.15)] border border-[#261E3F]">
                          Provider
                        </span>
                      </div>
                    ) : (
                      <span className="text-[#FAFAFA] font-semibold">{item.company}</span>
                    )}
                    <span className="text-[#261E3F]">•</span>
                    <span className="flex items-center gap-1 text-[#CBD5E1] text-xs">
                      <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start lg:self-center px-3.5 py-1.5 rounded-xl bg-[#171324] border border-[#261E3F] text-xs font-mono text-[#CBD5E1]">
                  <Calendar className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Bullet Points with generous line-height */}
              <div className="mt-5 space-y-3">
                {item.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-1" />
                    <p className="text-[#CBD5E1] text-sm sm:text-base leading-[1.65]">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="mt-6 pt-5 border-t border-[#261E3F] flex flex-wrap items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-mono text-[#FAFAFA] font-semibold mr-1">
                  Stack:
                </span>
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-full text-xs font-mono bg-[rgba(139,92,246,0.15)] border border-[rgba(139,92,246,0.25)] text-[#C4B5FD] hover:border-[#8B5CF6] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Experience;
