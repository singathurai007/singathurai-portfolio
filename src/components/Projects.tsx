'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Briefcase,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { MotionReveal } from './MotionReveal';

interface ProjectsProps {
  onOpenLightbox?: (images: string[], title: string) => void;
}

export const Projects: React.FC<ProjectsProps> = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right to left (next), -1 = left to right (prev)
  const [isPaused, setIsPaused] = useState(false);

  const currentProject = projectsData[currentIndex];

  // Turn to slide with direction
  const turnToSlide = useCallback((newIndex: number, newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(newIndex);
  }, []);

  const turnNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  }, []);

  const turnPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  }, []);

  // Automatic turning from right to left every 5.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      turnNext();
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused, turnNext]);

  // Slide animation variants (turns smoothly from right to left)
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 28 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 28 },
        opacity: { duration: 0.25 }
      }
    })
  };

  return (
    <section id="projects" className="py-20 sm:py-24 relative border-t border-[#261E3F]">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <MotionReveal amount={0.2} y={24}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-[#261E3F] text-[#C4B5FD] bg-[rgba(139,92,246,0.15)] mb-2.5 font-semibold">
                <Briefcase className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>Featured Engineering Projects</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#FAFAFA] font-heading">
                {t.projects.title} <span className="text-[#8B5CF6]">{t.projects.titleHighlight}</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#CBD5E1] mt-2 font-mono">
                Production-tested backend services, automated DevSecOps pipelines, and cloud infrastructure as code.
              </p>
            </div>

            {/* Live Auto-Turn Indicator & Controls */}
            <div className="flex items-center gap-3 shrink-0 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setIsPaused((prev) => !prev)}
                className="flex items-center gap-2 text-xs font-mono text-[#FAFAFA] bg-[#171324] hover:bg-[#1f1930] border border-[#261E3F] px-3.5 py-1.5 rounded-full transition-all font-medium"
                title={isPaused ? "Resume auto-turn" : "Pause auto-turn"}
              >
                <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-500' : 'bg-[#10B981] animate-pulse shadow-[0_0_8px_#10B981]'}`} />
                <span>{isPaused ? 'Paused' : 'Auto-turning'}</span>
                {isPaused ? <Play className="w-3 h-3 ml-0.5 text-[#8B5CF6]" /> : <Pause className="w-3 h-3 ml-0.5 text-[#8B5CF6]" />}
              </button>

              <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-[#CBD5E1] bg-[#120F1D] border border-[#261E3F] px-3.5 py-1.5 rounded-full shadow-xs">
                <span>{String(currentIndex + 1).padStart(2, '0')} / {String(projectsData.length).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        </MotionReveal>

        {/* Featured Showcase Container */}
        <div 
          className="relative overflow-hidden rounded-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full bg-[#120F1D] border border-[#261E3F] hover:border-[#8B5CF6] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_30px_rgba(139,92,246,0.16)] transition-all"
            >
              {/* macOS Window Title Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#171324] border-b border-[#261E3F]">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block shrink-0" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block shrink-0" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block shrink-0" />
                  <span className="ml-2 font-mono text-xs text-[#CBD5E1] truncate font-medium">
                    {currentProject.windowTitle}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 shrink-0 ml-3">
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[rgba(139,92,246,0.15)] text-[#C4B5FD] border border-[#261E3F] font-semibold">
                    {currentProject.categoryLabel}
                  </span>
                  <span className="text-xs font-mono text-[#FAFAFA] font-bold">
                    0{currentIndex + 1}
                  </span>
                </div>
              </div>

              {/* Project Card Content: Full Width Clean Architectural Display */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Index & Title */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-[#8B5CF6]">
                      PROJECT 0{currentIndex + 1}
                    </span>
                    <span className="text-[#261E3F]">•</span>
                    <span className="text-xs font-mono text-[#10B981] flex items-center gap-1 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                      Verified Production Engineering
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#FAFAFA] tracking-tight leading-snug font-heading">
                    {currentProject.liveUrl ? (
                      <a
                        href={currentProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#8B5CF6] transition-colors inline-flex items-center gap-2.5"
                      >
                        <span>{currentProject.title}</span>
                        <ExternalLink className="w-5 h-5 text-[#8B5CF6]" />
                      </a>
                    ) : (
                      <span>{currentProject.title}</span>
                    )}
                  </h3>

                  <p className="text-[#CBD5E1] text-sm sm:text-base leading-[1.65] mt-3 max-w-3xl">
                    {currentProject.description}
                  </p>
                </div>

                {/* Two-Column Deliverables & Stack Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-2">
                  {/* Left Column: Key Engineering Deliverables (7 cols) */}
                  <div className="md:col-span-7 bg-[#171324] p-5 sm:p-6 rounded-xl border border-[#261E3F] flex flex-col justify-between">
                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-wider text-[#8B5CF6] mb-3.5 font-semibold flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6]" />
                        <span>Key Engineering Deliverables</span>
                      </span>
                      <div className="space-y-3">
                        {currentProject.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-2 shrink-0" />
                            <span className="text-xs sm:text-sm text-[#FAFAFA] leading-relaxed font-sans">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Production Tech Stack & Architecture (5 cols) */}
                  <div className="md:col-span-5 bg-[#171324] p-5 sm:p-6 rounded-xl border border-[#261E3F] flex flex-col justify-between">
                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-wider text-[#8B5CF6] mb-3.5 font-semibold flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-[#8B5CF6]" />
                        <span>Technology Stack</span>
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-xs font-mono px-3 py-1.5 rounded-lg border bg-[rgba(139,92,246,0.15)] text-[#C4B5FD] border-[rgba(139,92,246,0.25)] font-semibold hover:border-[#8B5CF6] transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {currentProject.githubUrl && (
                      <div className="mt-5 pt-4 border-t border-[#261E3F] flex items-center justify-between text-xs font-mono">
                        <span className="text-[#CBD5E1]">Repository</span>
                        <a
                          href={currentProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8B5CF6] hover:text-[#C4B5FD] hover:underline inline-flex items-center gap-1 font-medium"
                        >
                          <span>github.com/{currentProject.githubUrl.split('github.com/')[1] || 'singathurai007'}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="pt-4 border-t border-[#261E3F] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {/* View Source Code Button */}
                    <a
                      href={currentProject.githubUrl || "https://github.com/singathurai007"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] text-white font-bold text-xs sm:text-sm font-mono hover:from-[#7C3AED] hover:to-[#5B21B6] shadow-[0_4px_18px_rgba(139,92,246,0.35)] transition-all transform hover:-translate-y-0.5"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Repository</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                    </a>

                    {/* Live Site (if applicable) */}
                    {currentProject.liveUrl && (
                      <a
                        href={currentProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#171324] hover:bg-[#1f1930] border border-[#261E3F] hover:border-[#8B5CF6] text-xs sm:text-sm font-mono text-[#FAFAFA] transition-all transform hover:-translate-y-0.5 shadow-xs font-semibold"
                      >
                        <ExternalLink className="w-4 h-4 text-[#10B981]" />
                        <span>Live Production Site</span>
                      </a>
                    )}
                  </div>

                  <span className="text-xs font-mono text-[#CBD5E1]">
                    Project {currentIndex + 1} of {projectsData.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Bottom Bar: Left/Right Turn Buttons + Numbered Pills */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-[#261E3F]">
          
          {/* Previous / Next Turn Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={turnPrev}
              aria-label="Previous Project"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#120F1D] hover:bg-[#171324] border border-[#261E3F] hover:border-[#8B5CF6] text-xs font-mono text-[#CBD5E1] hover:text-[#FAFAFA] transition-all shadow-xs"
            >
              <ChevronLeft className="w-4 h-4 text-[#8B5CF6]" />
              <span>Prev</span>
            </button>

            <button
              type="button"
              onClick={turnNext}
              aria-label="Next Project"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#120F1D] hover:bg-[#171324] border border-[#261E3F] hover:border-[#8B5CF6] text-xs font-mono text-[#CBD5E1] hover:text-[#FAFAFA] transition-all shadow-xs"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4 text-[#8B5CF6]" />
            </button>
          </div>

          {/* Numbered Indicators (01 - 05) */}
          <div className="flex items-center gap-2">
            {projectsData.map((project, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => turnToSlide(idx, idx > currentIndex ? 1 : -1)}
                  aria-label={`Go to ${project.title}`}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] text-white font-bold shadow-[0_2px_10px_rgba(139,92,246,0.4)]'
                      : 'bg-[#120F1D] text-[#CBD5E1] hover:text-[#FAFAFA] border border-[#261E3F] hover:border-[#8B5CF6] shadow-xs'
                  }`}
                >
                  <span>0{idx + 1}</span>
                  {isActive && (
                    <span className="hidden md:inline text-[10px] uppercase font-semibold">
                      {project.id === 'tv-repair-coimbatore' ? 'NestJS' : project.id.split('-')[0]}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Current Project Caption */}
          <span className="text-xs font-mono text-[#CBD5E1] text-center sm:text-right truncate max-w-xs">
            {currentProject.title}
          </span>
        </div>

      </div>
    </section>
  );
};

export default Projects;
