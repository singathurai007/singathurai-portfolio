'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, Send, CornerDownLeft, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/portfolioData';
import { MotionReveal } from './MotionReveal';

interface HistoryItem {
  cmd: string;
  output: React.ReactNode;
}

export const Terminal: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [inputVal, setInputVal] = useState('');
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [history, setHistory] = useState<HistoryItem[]>([
    {
      cmd: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-[var(--primary)] font-bold text-sm">
            {lang === 'ta'
              ? 'சிங்கதுரை சி-யின் கிளவுட் & பேக்கெண்ட் ஷெல் [v3.0.0]'
              : "Singathurai C's Cloud & Backend Shell [v3.0.0]"}
          </p>
          <p className="text-slate-400 text-xs">
            {lang === 'ta'
              ? "கிடைக்கும் கட்டளைகளைக் காண 'help' என தட்டச்சு செய்யவும் அல்லது கீழேயுள்ள பட்டன்களை சொடுக்கவும்."
              : "Type 'help' to see all commands or click the quick pills below to explore credentials."}
          </p>
        </div>
      ),
    },
  ]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const runCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    // Track command history for up/down arrows
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const lower = cmd.toLowerCase();

    if (lower === 'clear' || lower === 'cls') {
      setHistory([]);
      return;
    }

    let output: React.ReactNode;

    switch (lower) {
      case 'help':
      case '?':
      case 'commands':
      case 'உதவி':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-[var(--primary)] font-bold mb-1">
              {lang === 'ta' ? 'கிடைக்கும் கட்டளைகள்:' : 'Available Commands:'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 font-mono text-[11px]">
              <p>• <span className="text-[var(--primary)] font-semibold">about</span> — Bio & Education (CGPA 7.11)</p>
              <p>• <span className="text-[var(--primary)] font-semibold">stack</span> — Backend & Cloud Arsenal</p>
              <p>• <span className="text-[var(--primary)] font-semibold">projects</span> — Key production resume systems</p>
              <p>• <span className="text-[var(--primary)] font-semibold">experience</span> — Bloogle internship details</p>
              <p>• <span className="text-[var(--primary)] font-semibold">roadmap</span> — 9-module curriculum path</p>
              <p>• <span className="text-[var(--primary)] font-semibold">education</span> — KCT B.Tech IT degree</p>
              <p>• <span className="text-[var(--primary)] font-semibold">contact</span> — Direct email, WhatsApp & links</p>
              <p>• <span className="text-[var(--primary)] font-semibold">sudo hire</span> — Immediate candidate dispatch</p>
              <p>• <span className="text-[var(--primary)] font-semibold">lang ta / lang en</span> — Switch language</p>
              <p>• <span className="text-[var(--primary)] font-semibold">clear</span> — Reset terminal window</p>
            </div>
          </div>
        );
        break;

      case 'about':
      case 'whoami':
      case 'சுயவிவரம்':
        output = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-[var(--primary)] font-bold text-sm">SINGATHURAI C</p>
            <p className="text-slate-400">
              {lang === 'ta'
                ? 'கோயம்புத்தூர் குமரகுரு தொழில்நுட்பக் கல்லூரியின் தகவல் தொழில்நுட்ப பட்டதாரி (CGPA: 7.11). Bloogle நிறுவனத்தில் பேக்கெண்ட் டெவலப்மெண்ட் இன்டர்ன். NestJS, PostgreSQL, Prisma ORM, AWS மற்றும் DevSecOps CI/CD-யில் நிபுணத்துவம்.'
                : 'B.Tech Information Technology Graduate from Kumaraguru College of Technology, Coimbatore (CGPA: 7.11) and Backend Development Intern at Bloogle. Specialized in NestJS, TypeScript, PostgreSQL, Prisma ORM, AWS, and DevSecOps CI/CD automation.'}
            </p>
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-[10px]">
              <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-[var(--primary)]">Location: Coimbatore, India</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-emerald-400">CGPA: 7.11 (71.1%)</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-cyan-400">Available: Immediate</span>
            </div>
          </div>
        );
        break;

      case 'stack':
      case 'skills':
      case 'திறன்கள்':
        output = (
          <div className="space-y-1.5 text-xs text-slate-300 font-mono">
            <p className="text-[var(--primary)] font-bold text-sm">[CORE TECHNICAL ARSENAL]</p>
            <p>• <strong className="text-white">Backend:</strong> NestJS, TypeScript, Node.js, REST APIs, Google OAuth 2.0, JWT RBAC</p>
            <p>• <strong className="text-white">Databases:</strong> PostgreSQL, Prisma ORM, MySQL, Relational Schema &amp; Query Optimization</p>
            <p>• <strong className="text-white">Cloud:</strong> AWS (EC2, IAM, Security Groups, CloudWatch, SNS, VPC), Docker, Linux</p>
            <p>• <strong className="text-white">DevSecOps:</strong> Jenkins CI/CD, SonarQube SAST, Trivy Image Scanner, Terraform IaC, Ansible</p>
            <p>• <strong className="text-white">Observability:</strong> Prometheus, Node Exporter, Grafana Dashboards, Alertmanager</p>
          </div>
        );
        break;

      case 'projects':
      case 'திட்டங்கள்':
        output = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-[var(--primary)] font-bold text-sm">[KEY PRODUCTION PROJECTS]</p>
            <div className="space-y-1 pl-1">
              <p>
                1. <strong className="text-white">TV Repair Lead Management:</strong>{' '}
                <a href="https://tvrepaircoimbatore.in" target="_blank" rel="noreferrer" className="text-cyan-400 underline font-mono">
                  tvrepaircoimbatore.in
                </a>{' '}
                — NestJS, Prisma ORM, PostgreSQL, Google OAuth 2.0.
              </p>
              <p>
                2. <strong className="text-white">DevSecOps Automated CI/CD Pipeline:</strong> GitHub Webhooks → Jenkins → SonarQube → Trivy → Docker → AWS EC2.
              </p>
              <p>
                3. <strong className="text-white">AWS EC2 Full-Stack Monitoring:</strong> Prometheus + Node Exporter + Grafana Dashboards + Alertmanager SNS.
              </p>
              <p>
                4. <strong className="text-white">AWS Modular Cloud Infrastructure:</strong> Terraform IaC provisioning &amp; Ansible configuration playbooks.
              </p>
            </div>
          </div>
        );
        break;

      case 'experience':
      case 'exp':
      case 'அனுபவம்':
        output = (
          <div className="space-y-3 text-xs text-slate-300">
            <p className="text-[var(--primary)] font-bold text-sm">[WORK EXPERIENCE & INTERNSHIPS]</p>
            
            <div className="space-y-1">
              <p className="font-semibold text-white">
                1. Full-Stack Developer Intern • Bloogle (Oct 2026 – Present)
              </p>
              <p className="text-slate-400">Coimbatore, India • Production App: <a href="https://tvrepaircoimbatore.in" target="_blank" rel="noreferrer" className="text-emerald-400 underline font-mono">tvrepaircoimbatore.in</a></p>
              <ul className="list-disc list-inside space-y-0.5 text-slate-300 pl-1 text-[11px]">
                <li>Engineered full-stack features connecting Next.js clients to NestJS/TypeScript REST APIs.</li>
                <li>Architected PostgreSQL database with Prisma ORM and query optimizations.</li>
                <li>Implemented RBAC access control with Google OAuth 2.0 and JWT authentication.</li>
              </ul>
            </div>

            <div className="space-y-1 pt-1 border-t border-slate-800">
              <p className="font-semibold text-white">
                2. Cloud &amp; DevOps Intern • SURE ProEd (Present)
              </p>
              <p className="text-slate-400">Remote • Provider: <a href="https://sureproed.com/" target="_blank" rel="noreferrer" className="text-purple-400 underline font-mono">sureproed.com</a></p>
              <ul className="list-disc list-inside space-y-0.5 text-slate-300 pl-1 text-[11px]">
                <li>Managing cloud infrastructure for Next-Gen Learning Platform across distributed cloud environments.</li>
                <li>Automating DevSecOps CI/CD delivery pipelines using Docker, GitHub Actions, and Linux automation.</li>
                <li>Configuring Prometheus &amp; Grafana observability metrics and cloud security policies.</li>
              </ul>
            </div>
          </div>
        );
        break;

      case 'roadmap':
      case 'curriculum':
      case 'கற்றல்':
        output = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p className="text-[var(--primary)] font-bold text-sm">[FULL-STACK 4-STAGE ROADMAP]</p>
            <p>1. <span className="text-emerald-400">✓ Frontend:</span> JavaScript (ES6+), TypeScript, React.js, Next.js</p>
            <p>2. <span className="text-cyan-400">● Backend:</span> Node.js, NestJS (Modules, DTOs, Guards), REST APIs</p>
            <p>3. <span className="text-amber-400">★ Database:</span> PostgreSQL, Relational Schemas, Prisma ORM, Indexing</p>
            <p>4. <span className="text-purple-400">🚀 Integration:</span> Next.js → REST API → NestJS → PostgreSQL</p>
          </div>
        );
        break;

      case 'education':
      case 'edu':
      case 'கல்லூரி':
        output = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-[var(--primary)] font-bold text-sm">[ACADEMIC BACKGROUND]</p>
            <p className="font-semibold text-white">
              Kumaraguru College of Technology, Coimbatore
            </p>
            <p className="slate-400">
              B.Tech in Information Technology | <strong className="text-[var(--primary)] font-mono">CGPA: 7.11 (71.1%)</strong>
            </p>
            <p className="text-[11px] text-slate-400">
              Core Coursework: Data Structures, Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, Software Engineering.
            </p>
          </div>
        );
        break;

      case 'contact':
      case 'தொடர்பு':
        output = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p className="text-[var(--primary)] font-bold text-sm">[DIRECT CHANNELS]</p>
            <p>• Email: <a href={`mailto:${personalInfo.email}`} className="text-[var(--primary)] underline">{personalInfo.email}</a></p>
            <p>• Phone: <a href="tel:+918778457577" className="text-[var(--primary)] underline">+91 8778457577</a></p>
            <p>• WhatsApp: <a href="https://wa.me/918778457577" target="_blank" rel="noreferrer" className="text-emerald-400 underline">Chat on WhatsApp</a></p>
            <p>• LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{personalInfo.linkedin}</a></p>
            <p>• GitHub: <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-200 underline">{personalInfo.github}</a></p>
          </div>
        );
        break;

      case 'sudo hire':
      case 'hire':
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });
        output = (
          <div className="space-y-1.5 p-2 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
            <p className="font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>[CANDIDATE DISPATCH: ACCESS GRANTED]</span>
            </p>
            <p className="text-slate-300">
              Singathurai C is open to Full-Stack Developer, Backend Engineer, and Cloud/DevOps roles.
            </p>
            <p className="font-mono text-[11px]">
              Direct reach: <a href={`mailto:${personalInfo.email}`} className="underline text-emerald-400 font-bold">{personalInfo.email}</a> or phone <span className="font-bold">+91 8778457577</span>.
            </p>
          </div>
        );
        setTimeout(() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 800);
        break;

      case 'lang ta':
      case 'tamil':
      case 'தமிழ்':
        setLang('ta');
        output = <p className="text-emerald-400 text-xs font-mono">மொழி தமிழுக்கு மாற்றப்பட்டது (Language set to Tamil).</p>;
        break;

      case 'lang en':
      case 'english':
        setLang('en');
        output = <p className="text-emerald-400 text-xs font-mono">Language switched to English.</p>;
        break;

      default:
        output = (
          <p className="text-rose-400 text-xs font-mono">
            command not found: '{cmd}'. Type <span className="text-[var(--primary)] font-bold">'help'</span> to see available commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { cmd, output }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx < commandHistory.length) {
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  const quickPills = [
    { label: 'help', cmd: 'help' },
    { label: 'about', cmd: 'about' },
    { label: 'stack', cmd: 'stack' },
    { label: 'projects', cmd: 'projects' },
    { label: 'experience', cmd: 'experience' },
    { label: 'roadmap', cmd: 'roadmap' },
    { label: 'education', cmd: 'education' },
    { label: 'contact', cmd: 'contact' },
    { label: 'sudo hire', cmd: 'sudo hire' },
    { label: 'clear', cmd: 'clear' },
  ];

  return (
    <section id="terminal" className="py-14 relative border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <MotionReveal amount={0.2} y={24}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-[var(--primary)]/30 text-[var(--primary)] bg-[var(--primary)]/5 mb-2">
                <TerminalIcon className="w-3.5 h-3.5" />
                <span>{t.terminal.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
                {t.terminal.title} <span className="text-[var(--primary)] text-glow">{t.terminal.titleHighlight}</span>
              </h2>
            </div>
            <p className="text-slate-400 text-xs md:text-sm max-w-md">
              {t.terminal.subtitle}
            </p>
          </div>
        </MotionReveal>

        {/* OLED Terminal Window */}
        <MotionReveal amount={0.2} delay={0.1}>
          <div
            onClick={() => inputRef.current?.focus()}
            className="w-full bg-[#030508]/95 border border-white/[0.1] hover:border-[var(--primary)]/40 rounded-2xl overflow-hidden backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-all duration-300 font-mono"
          >
            {/* Top Bar macOS Window Header */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-[#080b12] border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-3 text-xs text-slate-300 font-semibold truncate">
                  singathurai@bloogle-backend: ~ (zsh)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE v3.0.0</span>
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setHistory([]);
                  }}
                  className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-xs flex items-center gap-1"
                  title="Clear terminal"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span className="hidden sm:inline text-[10px]">{t.terminal.clearBtn}</span>
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-6 min-h-[300px] max-h-[460px] overflow-y-auto space-y-3.5 text-xs text-slate-200">
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  {item.cmd !== 'welcome' && (
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="text-emerald-400 font-bold">singathurai@cloud</span>
                      <span className="text-slate-500">:</span>
                      <span className="text-[var(--primary)] font-bold">~</span>
                      <span className="text-slate-400">$</span>
                      <span className="text-white font-semibold">{item.cmd}</span>
                    </div>
                  )}
                  <div className="pl-3 sm:pl-4 border-l border-white/[0.08]">{item.output}</div>
                </div>
              ))}

              {/* Active Command Input Line */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-emerald-400 font-bold shrink-0">singathurai@cloud</span>
                <span className="text-slate-500 shrink-0">:</span>
                <span className="text-[var(--primary)] font-bold shrink-0">~</span>
                <span className="text-slate-400 shrink-0">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={t.terminal.placeholder}
                  className="flex-1 bg-transparent text-white placeholder-slate-600 focus:outline-none text-xs font-mono"
                  autoComplete="off"
                  spellCheck="false"
                />
                <button
                  onClick={() => runCommand(inputVal)}
                  className="p-1 text-slate-400 hover:text-[var(--primary)] transition-colors shrink-0"
                  title="Run command"
                >
                  <CornerDownLeft className="w-3.5 h-3.5" />
                </button>
              </div>
              <div ref={bottomRef} />
            </div>

            {/* Quick Command Pills Bar */}
            <div className="px-4 py-2.5 bg-[#060910] border-t border-white/[0.06] flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mr-1 shrink-0">
                Quick Pills:
              </span>
              {quickPills.map((pill) => (
                <button
                  key={pill.cmd}
                  onClick={(e) => {
                    e.stopPropagation();
                    runCommand(pill.cmd);
                  }}
                  className="px-2.5 py-1 rounded text-[11px] bg-white/[0.03] hover:bg-[var(--primary)]/15 text-slate-300 hover:text-[var(--primary)] border border-white/[0.08] hover:border-[var(--primary)]/40 transition-all shrink-0 active:scale-95"
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};
export default Terminal;
