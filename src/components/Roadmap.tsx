import React, { useState } from 'react';
import { 
  GraduationCap, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Layers, 
  Terminal, 
  Database, 
  Server, 
  Layout, 
  Sparkles,
  Workflow
} from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { roadmapData } from '../data/portfolioData';
import { RoadmapPhase } from '../types/portfolio';
import { MotionReveal } from './MotionReveal';
import { useLanguage } from '../context/LanguageContext';

export const Roadmap: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeStage, setActiveStage] = useState<string>('all');
  const shouldReduceMotion = useReducedMotion();

  const stages = [
    { id: 'all', label: lang === 'ta' ? 'முழுமையான பாதை (9 தொகுதிகள்)' : 'Complete Path (9 Modules)' },
    { id: 'Frontend', label: lang === 'ta' ? '1. பிரண்ட்-எண்ட்' : '1. Frontend' },
    { id: 'Backend', label: lang === 'ta' ? '2. பேக்கெண்ட்' : '2. Backend' },
    { id: 'Database', label: lang === 'ta' ? '3. தரவுத்தளம்' : '3. Database' },
    { id: 'Full-Stack Integration', label: lang === 'ta' ? '4. முழு-அடுக்கு ஒருங்கிணைப்பு' : '4. Full-Stack Integration' }
  ];

  const filteredRoadmap = activeStage === 'all'
    ? roadmapData
    : roadmapData.filter((item) => item.stage === activeStage);

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
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <section id="roadmap" className="py-14 relative border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <MotionReveal amount={0.2} y={24}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-[var(--primary)]/30 text-[var(--primary)] bg-[var(--primary)]/5 mb-2">
                <Workflow className="w-3.5 h-3.5" />
                <span>{t.roadmap.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
                {t.roadmap.title} <span className="text-[var(--primary)] text-glow">{t.roadmap.titleHighlight}</span>
              </h2>
            </div>
            <p className="text-slate-400 text-xs md:text-sm max-w-md">
              {t.roadmap.subtitle}
            </p>
          </div>
        </MotionReveal>

        {/* Visual Pipeline Flow Bar */}
        <MotionReveal amount={0.2} delay={0.1}>
          <div className="mb-8 p-3.5 rounded-xl bg-[#0b0e14]/90 border border-white/[0.08] backdrop-blur-md hidden sm:flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center font-bold text-[11px]">1</span>
              <span className="text-white font-semibold">Frontend</span>
              <span className="text-slate-500 text-[10px]">(JS, TS, React, Next)</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center font-bold text-[11px]">2</span>
              <span className="text-white font-semibold">Backend</span>
              <span className="text-slate-500 text-[10px]">(Node, NestJS, REST)</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center font-bold text-[11px]">3</span>
              <span className="text-white font-semibold">Database</span>
              <span className="text-slate-500 text-[10px]">(Postgres &amp; SQL)</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center font-bold text-[11px]">4</span>
              <span className="text-white font-semibold">Integration</span>
              <span className="text-slate-500 text-[10px]">(Full-Stack App)</span>
            </div>
          </div>
        </MotionReveal>

        {/* Filter Tabs */}
        <MotionReveal amount={0.2} delay={0.15}>
          <div className="flex flex-wrap items-center gap-1.5 mb-8 pb-3 border-b border-white/[0.06]">
            {stages.map((stage) => {
              const count = stage.id === 'all'
                ? roadmapData.length
                : roadmapData.filter(i => i.stage === stage.id).length;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(stage.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    activeStage === stage.id
                      ? 'bg-[var(--primary)] text-black font-semibold shadow-[0_0_15px_rgba(250,204,21,0.4)]'
                      : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.08]'
                  }`}
                >
                  {stage.label} ({count})
                </button>
              );
            })}
          </div>
        </MotionReveal>

        {/* Roadmap Cards Grid with Stagger */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {filteredRoadmap.map((phase: RoadmapPhase) => {
            const isCompleted = phase.status === 'Completed';
            const isInProgress = phase.status === 'In Progress';

            return (
              <motion.div
                key={phase.id}
                variants={cardVariants}
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                className="group relative bg-[#0b0e14]/90 border border-white/[0.08] hover:border-[var(--primary)]/40 rounded-xl p-5 flex flex-col justify-between backdrop-blur-md transition-all duration-300 hover:shadow-[0_12px_25px_-10px_rgba(0,0,0,0.7)] shadow-md hover:shadow-[var(--accent-glow)]/10"
              >
                <div>
                  {/* Top Header: Number, Stage & Status */}
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 flex items-center justify-center font-mono font-bold text-xs">
                        {phase.num}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        {phase.stage}
                      </span>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                        isCompleted
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : isInProgress
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                          : 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                      }`}
                    >
                      {isCompleted ? (
                        <>
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Completed</span>
                        </>
                      ) : isInProgress ? (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                          <span>In Progress</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3 h-3" />
                          <span>Core Stack</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white mb-3 group-hover:text-[var(--primary)] transition-colors">
                    {phase.title}
                  </h3>

                  {/* Topics List */}
                  <div className="space-y-1.5 mb-4">
                    {phase.topics.map((topic, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-[var(--primary)] shrink-0 mt-0.5" />
                        <span className="text-[11px] text-slate-300 leading-tight">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Practical Task (if exists) */}
                  {phase.task && (
                    <div className="mb-4 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-[var(--primary)] mb-1 font-semibold">
                        Practical Task
                      </span>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        {phase.task}
                      </p>
                    </div>
                  )}
                </div>

                {/* Expected Outcome */}
                <div className="pt-3 border-t border-white/[0.04]">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    Expected Engineering Outcome
                  </span>
                  <p className="text-[11px] text-slate-400 italic leading-relaxed">
                    "{phase.expectedOutcome}"
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
