import React, { useEffect, useState } from 'react';
import { 
  Search, 
  X, 
  ArrowRight, 
  FileText, 
  Mail, 
  Github, 
  Linkedin, 
  Palette, 
  Sparkles,
  Command
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { LeetCodeIcon } from './icons/LeetCodeIcon';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTheme: (theme: string) => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Actions' | 'Themes';
  icon: React.ElementType;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectTheme
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateTo = (id: string) => {
    onClose();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commands: CommandItem[] = [
    {
      id: 'nav-about',
      title: 'Jump to About',
      category: 'Navigation',
      icon: ArrowRight,
      action: () => navigateTo('#about')
    },
    {
      id: 'nav-experience',
      title: 'Jump to Experience (Bloogle)',
      category: 'Navigation',
      icon: ArrowRight,
      action: () => navigateTo('#experience')
    },
    {
      id: 'nav-services',
      title: 'Jump to Engineering Services',
      category: 'Navigation',
      icon: ArrowRight,
      action: () => navigateTo('#services')
    },
    {
      id: 'nav-skills',
      title: 'Jump to Technical Skills',
      category: 'Navigation',
      icon: ArrowRight,
      action: () => navigateTo('#skills')
    },
    {
      id: 'nav-projects',
      title: 'Jump to Featured Projects',
      category: 'Navigation',
      icon: ArrowRight,
      action: () => navigateTo('#projects')
    },
    {
      id: 'nav-certifications',
      title: 'Jump to Certifications',
      category: 'Navigation',
      icon: ArrowRight,
      action: () => navigateTo('#certifications')
    },
    {
      id: 'nav-education',
      title: 'Jump to Education (Kumaraguru)',
      category: 'Navigation',
      icon: ArrowRight,
      action: () => navigateTo('#education')
    },
    {
      id: 'nav-contact',
      title: 'Jump to Contact',
      category: 'Navigation',
      icon: ArrowRight,
      action: () => navigateTo('#contact')
    },
    {
      id: 'act-resume',
      title: 'Download Single-Page Resume (PDF)',
      category: 'Actions',
      icon: FileText,
      action: () => {
        window.open(personalInfo.resumePdf, '_blank');
        onClose();
      }
    },
    {
      id: 'act-copy-email',
      title: 'Copy Email: ' + personalInfo.email,
      category: 'Actions',
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(personalInfo.email);
        alert('Email copied to clipboard!');
        onClose();
      }
    },
    {
      id: 'act-github',
      title: 'Open GitHub (singathurai007)',
      category: 'Actions',
      icon: Github,
      action: () => {
        window.open(personalInfo.github, '_blank');
        onClose();
      }
    },
    {
      id: 'act-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Actions',
      icon: Linkedin,
      action: () => {
        window.open(personalInfo.linkedin, '_blank');
        onClose();
      }
    },
    {
      id: 'act-leetcode',
      title: 'Open LeetCode (singathurai007)',
      category: 'Actions',
      icon: LeetCodeIcon,
      action: () => {
        window.open(personalInfo.leetcode, '_blank');
        onClose();
      }
    },
    {
      id: 'theme-gold',
      title: 'Theme: Cyber Gold (Default)',
      category: 'Themes',
      icon: Palette,
      action: () => {
        onSelectTheme('gold');
        onClose();
      }
    },
    {
      id: 'theme-emerald',
      title: 'Theme: Terminal Emerald',
      category: 'Themes',
      icon: Palette,
      action: () => {
        onSelectTheme('emerald');
        onClose();
      }
    },
    {
      id: 'theme-blue',
      title: 'Theme: Cloud Cyan',
      category: 'Themes',
      icon: Palette,
      action: () => {
        onSelectTheme('blue');
        onClose();
      }
    },
    {
      id: 'theme-violet',
      title: 'Theme: Electric Violet',
      category: 'Themes',
      icon: Palette,
      action: () => {
        onSelectTheme('violet');
        onClose();
      }
    }
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 max-w-xl w-full bg-[#120F1D] border border-[#261E3F] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#261E3F] bg-[#171324]">
          <Search className="w-5 h-5 text-[#8B5CF6] mr-3" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search sections..."
            className="w-full bg-transparent text-[#FAFAFA] placeholder-[#64748B] focus:outline-none text-sm font-mono"
          />
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#120F1D] border border-[#261E3F] text-[#CBD5E1]">
            ESC
          </span>
        </div>

        {/* Command Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="p-8 text-center text-[#CBD5E1] text-xs font-mono">
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd) => {
              const Icon = cmd.icon;
              return (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#171324] text-left transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#120F1D] border border-[#261E3F] flex items-center justify-center text-[#CBD5E1] group-hover:text-[#8B5CF6] group-hover:border-[#8B5CF6] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-[#CBD5E1] group-hover:text-[#FAFAFA] transition-colors">
                      {cmd.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#C4B5FD] uppercase px-2 py-0.5 rounded bg-[rgba(139,92,246,0.15)] border border-[#261E3F]">
                    {cmd.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2.5 bg-[#171324] border-t border-[#261E3F] flex items-center justify-between text-[11px] font-mono text-[#CBD5E1]">
          <div className="flex items-center gap-2">
            <Command className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>Use Ctrl+K to toggle anytime</span>
          </div>
          <span className="font-semibold text-[#FAFAFA]">SINGATHURAI C</span>
        </div>
      </div>
    </div>
  );
};

