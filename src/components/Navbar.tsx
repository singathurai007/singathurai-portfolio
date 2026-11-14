'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'experience', 'projects', 'skills', 'certifications', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav?.home || 'Home', href: '#home', id: 'home' },
    { label: t.nav?.experience || 'Experience', href: '#experience', id: 'experience' },
    { label: t.nav?.projects || 'Projects', href: '#projects', id: 'projects' },
    { label: t.nav?.skills || 'Skills', href: '#skills', id: 'skills' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: t.nav?.contact || 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }

    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      const navHeight = 72;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPos = elPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    }
  };

  return (
    <>
      {/* Fully Fixed Edge-to-Edge Full-Width Top Header (Deep Obsidian & Electric Violet Theme) */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#090710]/95 backdrop-blur-xl border-b border-[#261E3F] shadow-[0_4px_24px_rgba(0,0,0,0.6)]'
            : 'bg-[#090710]/80 backdrop-blur-md border-b border-[#261E3F]/70'
        }`}
      >
        <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-12 py-3">
          {/* Left Brand: Medium Logo, Name & Software Engineer */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 sm:gap-3.5 group shrink-0"
            title="Singathurai C — Software Engineer"
          >
            <div className="relative flex items-center justify-center">
              <img
                src="/images/logo.png"
                alt="Singathurai C Logo"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-[#261E3F] group-hover:border-[#8B5CF6] transition-all shadow-sm"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#10B981] border-2 border-[#090710] shadow-xs" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading font-bold text-base sm:text-lg text-[#FAFAFA] group-hover:text-[#8B5CF6] transition-colors leading-tight tracking-tight">
                Singathurai
              </span>
              <span className="text-xs sm:text-[13px] font-mono font-semibold text-[#8B5CF6] leading-tight mt-0.5">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <ul className="hidden md:flex items-center gap-1.5 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    activeSection === link.id
                      ? 'text-[#FAFAFA] bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 font-semibold shadow-[0_0_12px_rgba(139,92,246,0.25)]'
                      : 'text-[#CBD5E1] hover:text-[#FAFAFA] hover:bg-[#8B5CF6]/10'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right End: Only Hire Me Button (Royal Purple to Electric Violet Gradient) */}
          <div className="flex items-center gap-2.5">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] hover:from-[#7C3AED] hover:to-[#5B21B6] rounded-full shadow-[0_4px_18px_rgba(139,92,246,0.35)] transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>Hire Me</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-[#120F1D] border border-[#261E3F] text-[#FAFAFA] hover:text-[#8B5CF6]"
              aria-label="Open navigation menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-[2000] bg-[#090710]/98 backdrop-blur-2xl flex flex-col justify-center items-center gap-6 transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none -translate-y-6'
        }`}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#120F1D] border border-[#261E3F] flex items-center justify-center text-[#FAFAFA] hover:text-[#8B5CF6]"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>

        <ul className="flex flex-col items-center gap-4 list-none p-0 m-0">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xl font-heading font-bold transition-colors ${
                  activeSection === link.id ? 'text-[#8B5CF6]' : 'text-[#CBD5E1] hover:text-[#FAFAFA]'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="w-full max-w-xs px-6 mt-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] hover:from-[#7C3AED] hover:to-[#5B21B6] text-white rounded-full shadow-[0_4px_18px_rgba(139,92,246,0.35)] transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>Hire Me</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
