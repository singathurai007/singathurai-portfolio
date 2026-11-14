import React, { useState } from 'react';
import { 
  Terminal, 
  Database, 
  Cloud, 
  ShieldCheck, 
  FileCode, 
  Cpu, 
  Network, 
  Key, 
  Lock, 
  Boxes, 
  Table, 
  GitFork, 
  Zap, 
  FileText, 
  Server, 
  Shield, 
  Activity, 
  Bell, 
  Box, 
  Play, 
  GitBranch, 
  Layers, 
  Workflow, 
  BarChart3, 
  CheckCircle2, 
  ShieldAlert, 
  Send, 
  GitCommit,
  Layers3
} from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { skillsCategories } from '../data/portfolioData';
import { MotionReveal } from './MotionReveal';
import { useLanguage } from '../context/LanguageContext';

const iconMap: Record<string, React.ElementType> = {
  Terminal,
  Database,
  Cloud,
  ShieldCheck,
  FileCode,
  Cpu,
  Network,
  Key,
  Lock,
  Boxes,
  Table,
  GitFork,
  Zap,
  FileText,
  Server,
  Shield,
  Activity,
  Bell,
  Box,
  Play,
  GitBranch,
  Layers,
  Workflow,
  BarChart3,
  CheckCircle2,
  ShieldAlert,
  Send,
  GitCommit
};

export const Skills: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const shouldReduceMotion = useReducedMotion();

  const filteredCategories = activeCategory === 'all'
    ? skillsCategories
    : skillsCategories.filter(cat => cat.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      }
    }
  };

  const categoryCardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  const badgesGridVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.04,
      }
    }
  };

  const badgeItemVariants: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 6 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.25, ease: 'easeOut' as const }
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-24 relative border-t border-[#261E3F]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <MotionReveal amount={0.2} y={24}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-[#261E3F] text-[#C4B5FD] bg-[rgba(139,92,246,0.15)] mb-2.5 font-semibold">
                <Layers3 className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>{t.skills.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#FAFAFA] font-heading">
                {t.skills.title} <span className="text-[#8B5CF6]">{t.skills.titleHighlight}</span>
              </h2>
            </div>
            <p className="text-[#CBD5E1] text-xs md:text-sm max-w-md leading-[1.65]">
              {t.skills.subtitle}
            </p>
          </div>
        </MotionReveal>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-[#261E3F]">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-[#8B5CF6] text-white font-semibold shadow-xs'
                : 'bg-[#120F1D] text-[#CBD5E1] hover:text-[#FAFAFA] border border-[#261E3F] hover:border-[#8B5CF6] shadow-xs'
            }`}
          >
            All ({skillsCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {skillsCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeCategory === cat.category
                  ? 'bg-[#8B5CF6] text-white font-semibold shadow-xs'
                  : 'bg-[#120F1D] text-[#CBD5E1] hover:text-[#FAFAFA] border border-[#261E3F] hover:border-[#8B5CF6] shadow-xs'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredCategories.map((cat) => {
            const CatIcon = iconMap[cat.icon] || Terminal;
            return (
              <motion.div
                key={cat.category}
                variants={categoryCardVariants}
                className="bg-[#120F1D] border border-[#261E3F] hover:border-[#8B5CF6] rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_30px_rgba(139,92,246,0.16)]"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-3 mb-4 border-b border-[#261E3F]">
                  <div className="w-9 h-9 rounded-xl bg-[rgba(139,92,246,0.15)] border border-[#261E3F] flex items-center justify-center text-[#8B5CF6]">
                    <CatIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#FAFAFA] tracking-tight font-heading">
                      {cat.category}
                    </h3>
                    <p className="text-[11px] font-mono text-[#CBD5E1]">
                      {cat.skills.length} verified technologies
                    </p>
                  </div>
                </div>

                {/* Staggered Skills Grid */}
                <motion.div 
                  className="grid grid-cols-2 gap-2.5"
                  variants={badgesGridVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {cat.skills.map((skill, sIdx) => {
                    const SkillIcon = iconMap[skill.icon] || FileCode;
                    return (
                      <motion.div
                        key={sIdx}
                        variants={badgeItemVariants}
                        whileHover={shouldReduceMotion ? {} : { y: -2 }}
                        className="group flex items-center gap-2.5 p-2 rounded-xl bg-[#171324] border border-[#261E3F] hover:border-[#8B5CF6] hover:bg-[#1c172d] transition-all duration-200 cursor-default"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#120F1D] border border-[#261E3F] flex items-center justify-center text-[#C4B5FD] group-hover:text-[#8B5CF6] group-hover:border-[#8B5CF6] transition-colors shrink-0">
                          <SkillIcon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-mono font-medium text-[#FAFAFA] group-hover:text-[#8B5CF6] transition-colors truncate">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
