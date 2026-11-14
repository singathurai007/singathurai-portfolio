import React from 'react';
import { GraduationCap, Calendar, Award, Building2 } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { educationData } from '../data/portfolioData';
import { MotionReveal } from './MotionReveal';

export const Education: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <section id="education" className="py-12 relative border-t border-[#27272A]/70">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <MotionReveal amount={0.2} y={20}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-7 gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-[#38BDF8]/25 text-[#38BDF8] bg-[#38BDF8]/10 mb-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Foundation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FAFAFA]">
                Education & <span className="text-[#38BDF8]">Background</span>
              </h2>
            </div>
            <p className="text-[#A1A1AA] text-xs sm:text-sm max-w-sm">
              B.Tech in Information Technology from Kumaraguru College of Technology with strong foundational computing coursework.
            </p>
          </div>
        </MotionReveal>

        {/* Compact, Simple Education Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-3.5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              className="bg-[#121215] border border-[#27272A] hover:border-[#38BDF8]/60 rounded-xl p-4 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-[0_8px_20px_rgba(0,0,0,0.5),0_0_15px_rgba(56,189,248,0.1)]"
            >
              <div>
                {/* Top Row: Period & Score */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#A1A1AA] bg-[#09090B] border border-[#27272A] px-2 py-0.5 rounded">
                    <Calendar className="w-3 h-3 text-[#A1A1AA]" />
                    <span>{edu.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/25 px-2 py-0.5 rounded">
                    <Award className="w-3 h-3" />
                    <span>{edu.score}</span>
                  </span>
                </div>

                {/* Degree Title */}
                <h3 className="text-sm sm:text-base font-bold text-[#FAFAFA] group-hover:text-[#38BDF8] transition-colors mb-1.5 leading-snug">
                  {edu.degree}
                </h3>
              </div>

              {/* Institution */}
              <div className="pt-2 border-t border-[#27272A] mt-2">
                <span className="text-[11px] text-[#A1A1AA] flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span className="truncate">{edu.institution}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
