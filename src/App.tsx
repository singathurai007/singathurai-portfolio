'use client';

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Stats } from './components/Stats';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { CommandPalette } from './components/CommandPalette';
import { AiAssistant } from './components/AiAssistant';

export const AppContent: React.FC = () => {
  const [theme, setTheme] = useState<string>('blue');
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxTitle, setLightboxTitle] = useState('');

  // Lenis smooth momentum scrolling with accessibility support
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'blue';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleOpenLightbox = (images: string[], title: string) => {
    setLightboxImages(images);
    setLightboxTitle(title);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090710] text-[#CBD5E1] font-sans relative selection:bg-[#8B5CF6]/30 selection:text-[#FAFAFA]">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Grid Pattern Background */}
      <div className="bg-grid-overlay" />

      {/* Ambient Radial Glows */}
      <div className="ambient-glow">
        <div className="glow-orb-1" />
        <div className="glow-orb-2" />
        <div className="glow-orb-3" />
      </div>

      {/* Floating Capsule Navbar */}
      <Navbar />

      {/* Page Sections */}
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Stats />
        <Experience />
        <Projects onOpenLightbox={handleOpenLightbox} />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      {/* Clean Footer */}
      <Footer />

      {/* AI Resume Assistant Widget (Floating Drawer) */}
      <AiAssistant />

      {/* Modals & Overlays */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        title={lightboxTitle}
      />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectTheme={handleThemeChange}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;

