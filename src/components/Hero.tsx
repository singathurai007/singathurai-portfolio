import React, { useState, useEffect, Suspense, lazy } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { LeetCodeIcon } from './icons/LeetCodeIcon';

const HeroGlobe = lazy(() => import('./3d/HeroGlobe'));

export const Hero: React.FC = () => {
  const { lang, t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const roles = t.hero.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Reset role index if language changes
  useEffect(() => {
    setRoleIndex(0);
    setCurrentRole('');
    setIsDeleting(false);
  }, [lang]);

  useEffect(() => {
    const targetWord = roles[roleIndex] || roles[0];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setCurrentRole(targetWord.substring(0, currentRole.length + 1));
        setTypingSpeed(85);

        if (currentRole.length + 1 === targetWord.length) {
          // Finished typing, pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Deleting backward
        setCurrentRole(targetWord.substring(0, currentRole.length - 1));
        setTypingSpeed(45);

        if (currentRole.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(250);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, roleIndex, roles, typingSpeed]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <section id="home" className="min-h-[85vh] flex items-center pt-28 pb-14 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
          
          {/* Left Column with Staggered Entrance */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="text-[#CBD5E1] text-sm font-medium mb-1">
              {t.hero.greeting}
            </motion.p>
            
            <motion.h1 
              variants={itemVariants} 
              className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#FAFAFA] mb-3 leading-tight"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Dynamic Animated Rotating Role */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-2.5 text-base sm:text-xl font-bold font-mono mb-4 text-[#FAFAFA]">
              <span className="text-[#CBD5E1] font-medium">{t.hero.iam}</span>
              <span className="text-[#8B5CF6] font-bold inline-flex items-center">
                <span>{currentRole || roles[0]}</span>
                <span className="inline-block w-1.5 h-4 sm:h-5 ml-1 bg-[#8B5CF6] animate-pulse" />
              </span>
            </motion.div>

            {/* Description with DM Sans 1.65 line-height */}
            <motion.p variants={itemVariants} className="text-[#CBD5E1] text-base leading-[1.65] max-w-xl mb-6 font-sans">
              {t.hero.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] hover:from-[#7C3AED] hover:to-[#5B21B6] shadow-[0_4px_18px_rgba(139,92,246,0.35)] transition-all transform hover:-translate-y-0.5 group"
              >
                <span>{t.hero.explore}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-[#FAFAFA] bg-[#120F1D] hover:bg-[#171324] border border-[#261E3F] hover:border-[#8B5CF6] shadow-[0_4px_14px_rgba(0,0,0,0.4)] transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-[#8B5CF6]" />
                <span>{t.hero.resumePdf}</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#120F1D] hover:bg-[#171324] border border-[#261E3F] hover:border-[#8B5CF6] text-[#CBD5E1] hover:text-[#FAFAFA] flex items-center justify-center transition-all hover:-translate-y-0.5 shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                title="GitHub: github.com/singathurai007"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#120F1D] hover:bg-[#171324] border border-[#261E3F] hover:border-[#8B5CF6] text-[#CBD5E1] hover:text-[#FAFAFA] flex items-center justify-center transition-all hover:-translate-y-0.5 shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                title="LinkedIn: linkedin.com/in/singathuraic"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#120F1D] hover:bg-[#171324] border border-[#261E3F] hover:border-[#FFA116] text-[#CBD5E1] hover:text-[#FFA116] flex items-center justify-center transition-all hover:-translate-y-0.5 shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                title="LeetCode: leetcode.com/u/singathurai007"
              >
                <LeetCodeIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-full bg-[#120F1D] hover:bg-[#171324] border border-[#261E3F] hover:border-[#8B5CF6] text-[#CBD5E1] hover:text-[#FAFAFA] flex items-center justify-center transition-all hover:-translate-y-0.5 shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                title={`Email: ${personalInfo.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/918778457577`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#120F1D] hover:bg-[#171324] border border-[#261E3F] hover:border-[#8B5CF6] text-[#CBD5E1] hover:text-[#FAFAFA] flex items-center justify-center transition-all hover:-translate-y-0.5 shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                title="WhatsApp: +91 8778457577"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Stylized Portrait Avatar with soft purple ring border */}
          <motion.div 
            className="lg:col-span-5 flex justify-center items-center relative min-h-[360px]"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: shouldReduceMotion ? 0 : 0.3 }}
          >
            {/* 3D Wireframe Network / Globe in Background */}
            <div className="absolute inset-[-40px] pointer-events-none z-0 flex items-center justify-center opacity-65">
              <Suspense fallback={<div className="w-64 h-64 rounded-full border border-[#261E3F]" />}>
                <HeroGlobe />
              </Suspense>
            </div>

            <div className="relative w-64 sm:w-72 z-10">
              {/* Soft purple ambient glow behind frame */}
              <div className="absolute -inset-2 rounded-[30px] bg-gradient-to-tr from-[#8B5CF6]/25 via-[#6D28D9]/20 to-transparent blur-xl opacity-60" />
              
              {/* Stylized Avatar Card with soft Electric Violet ring border */}
              <div className="relative z-10 bg-[#120F1D] border border-[#261E3F] ring-4 ring-[#8B5CF6]/30 rounded-[26px] p-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
                <div className="rounded-[20px] overflow-hidden aspect-[1/1.12] bg-[#171324] relative group border border-[#261E3F]">
                  <img
                    src="/assets/profile.png"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/profile.png';
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
export default Hero;
