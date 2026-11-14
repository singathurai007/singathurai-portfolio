'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Sparkles, 
  X, 
  Send, 
  RotateCcw, 
  CheckCircle2, 
  ExternalLink, 
  Briefcase, 
  Mail, 
  Phone,
  Maximize2,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/portfolioData';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  tags?: string[];
  links?: { label: string; url: string }[];
}

export const AiAssistant: React.FC = () => {
  const { lang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessage: Message = {
    id: 'welcome',
    sender: 'ai',
    text: lang === 'ta'
      ? `வணக்கம்! நான் சிங்கதுரையின் AI ரெஸ்யூம் அசிஸ்டெண்ட். அவரது NestJS பேக்கெண்ட், AWS & DevSecOps அனுபவம், நேரடி tvrepaircoimbatore.in திட்டம் அல்லது பணியமர்த்தல் பற்றி என்னிடம் கேளுங்கள்.`
      : `Hello! I'm Singathurai's AI Resume Assistant. Ask me anything about his NestJS backend architecture, AWS & DevSecOps pipelines, production tvrepaircoimbatore.in system, or hiring availability!`,
    tags: ['NestJS', 'TypeScript', 'AWS', 'DevSecOps', 'PostgreSQL', 'Prisma ORM'],
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);

  useEffect(() => {
    // Update initial message when language changes
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome') {
        return [initialMessage];
      }
      return prev;
    });
  }, [lang]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const generateAnswer = (query: string): Message => {
    const q = query.toLowerCase();
    const isTa = lang === 'ta' || /[\u0B80-\u0BFF]/.test(query);

    // 1. Why Hire / Summary
    if (q.includes('why hire') || q.includes('hire') || q.includes('strengths') || q.includes('ஏன்') || q.includes('தேர்வு')) {
      return {
        id: Date.now().toString(),
        sender: 'ai',
        text: isTa
          ? `சிங்கதுரையை தேர்வு செய்ய 3 முக்கிய காரணங்கள்:\n\n1. நேரடி வணிக அனுபவம்: Bloogle நிறுவனத்தில் tvrepaircoimbatore.in தளத்தின் முழுமையான NestJS, Prisma & PostgreSQL பேக்கெண்டை உருவாக்கியுள்ளார்.\n2. கிளவுட் & DevSecOps: Jenkins, SonarQube, Trivy மற்றும் AWS EC2 கொண்டு தானியங்கு CI/CD அமைத்துள்ளார்.\n3. வலுவான கல்வி அடிப்படை: குமரகுரு தொழில்நுட்பக் கல்லூரியின் IT பட்டதாரி (CGPA: 7.11/71.1%). உடனடி பணிக்கு தயார்.`
          : `Top reasons to hire Singathurai C:\n\n• Production-Tested Backend: Architected and shipped tvrepaircoimbatore.in using NestJS, TypeScript, Prisma ORM, and PostgreSQL with Google OAuth 2.0 RBAC.\n• DevSecOps & Cloud Automation: Automated zero-touch CI/CD pipelines with Jenkins, SonarQube quality gates, Trivy image scanning, and AWS EC2 provisioning.\n• Rigorous Foundation: B.Tech IT graduate from Kumaraguru College of Technology with consistent 7.11 CGPA.\n• Availability: Immediate intern, ready to transition into full-time engineering roles.`,
        tags: ['Production NestJS', 'Zero-Touch CI/CD', 'Immediate Availability', 'KCT 7.11 CGPA'],
        links: [
          { label: 'View Live Project', url: 'https://tvrepaircoimbatore.in' },
          { label: 'Direct Email', url: `mailto:${personalInfo.email}` },
        ],
      };
    }

    // 2. tvrepaircoimbatore.in project
    if (q.includes('tvrepair') || q.includes('lead') || q.includes('bloogle') || q.includes('திட்டம்')) {
      return {
        id: Date.now().toString(),
        sender: 'ai',
        text: isTa
          ? `tvrepaircoimbatore.in நேரடி திட்ட விவரங்கள்:\n\n• பாத்திரம்: Bloogle நிறுவனத்தின் பேக்கெண்ட் டெவலப்மென்ட் இன்டர்ன்.\n• தொழில்நுட்பம்: NestJS, TypeScript, Prisma ORM, PostgreSQL, Google OAuth 2.0 & JWT.\n• முக்கிய அம்சங்கள்: பலநிலை பயனர் அங்கீகாரம் (RBAC), தானியங்கு டிவி பழுதுபார்க்கும் லீட் ஒதுக்கீடு, மற்றும் PostgreSQL இன்டெக்ஸ் ஆப்டிமைசேஷன்.`
          : `tvrepaircoimbatore.in Live Production System:\n\n• Role: Backend Development Intern at Bloogle.\n• Stack: NestJS, TypeScript, Prisma ORM, PostgreSQL, Google OAuth 2.0, JWT RBAC.\n• Key Deliverables: Dynamic service lead allocation algorithms, secure Admin/Vendor verification guards, and PostgreSQL index optimization for high-throughput query performance.`,
        tags: ['NestJS', 'Prisma ORM', 'PostgreSQL', 'Google OAuth 2.0', 'Live Production'],
        links: [{ label: 'Visit tvrepaircoimbatore.in', url: 'https://tvrepaircoimbatore.in' }],
      };
    }

    // 3. Backend & REST API Stack
    if (q.includes('backend') || q.includes('api') || q.includes('nestjs') || q.includes('node') || q.includes('பேக்கெண்ட்')) {
      return {
        id: Date.now().toString(),
        sender: 'ai',
        text: isTa
          ? `சிங்கதுரையின் பேக்கெண்ட் திறன்கள்:\n\n• கட்டமைப்புகள்: NestJS (Controllers, Modules, Services, DTOs, Guards, Dependency Injection).\n• மொழிகள்: TypeScript, JavaScript (ES6+), Node.js.\n• தரவுத்தளங்கள்: PostgreSQL, Prisma ORM, MySQL, Relational Schema Design.\n• பாதுகாப்பு: Google OAuth 2.0, JWT, Role-Based Access Control (RBAC).`
          : `Singathurai's Backend & API Expertise:\n\n• Architecture: Modular NestJS architecture utilizing Controllers, Services, DTO validation pipes, and DI.\n• Languages: TypeScript and Node.js.\n• Data Layer: PostgreSQL with Prisma ORM, relational schema modeling, connection pooling, and query index tuning.\n• Security: JWT tokens, Google OAuth 2.0, and granular RBAC authorization guards.`,
        tags: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'RESTful APIs', 'JWT RBAC'],
      };
    }

    // 4. DevOps, AWS & Cloud
    if (q.includes('devops') || q.includes('aws') || q.includes('cloud') || q.includes('jenkins') || q.includes('கிளவுட்') || q.includes('டெவொப்ஸ்')) {
      return {
        id: Date.now().toString(),
        sender: 'ai',
        text: isTa
          ? `கிளவுட் மற்றும் டெவொப்ஸ் திறன்கள்:\n\n• AWS சேவைகள்: EC2, IAM, Security Groups, CloudWatch, SNS, S3, VPC.\n• கண்டெய்னர்கள்: Docker, Docker Compose, Linux Administration.\n• CI/CD: Jenkins GitHub Webhook பைப்லைன், SonarQube SAST மற்றும் Trivy கண்டெய்னர் ஸ்கேனர்.\n• IaC: Terraform மாடுலார் AWS ஸ்கிரிப்ட்கள் & Ansible பிளேபுக்குகள்.\n• கண்காணிப்பு: Prometheus, Node Exporter, Grafana டாஷ்போர்டு.`
          : `DevSecOps, Cloud & Infrastructure Arsenal:\n\n• AWS Cloud: EC2 instances, IAM policies, Security Groups, CloudWatch, SNS, S3, VPC.\n• Containerization: Docker, multi-stage Dockerfiles, Docker Compose, Linux system administration.\n• DevSecOps CI/CD: Jenkins automated pipelines triggered via GitHub Webhooks, SonarQube code quality gates, and Trivy security scanning.\n• Infrastructure as Code: Terraform modular AWS provisioning & Ansible configuration playbooks.\n• Observability: Prometheus metrics, Node Exporter, Grafana dashboards, and Alertmanager SNS notifications.`,
        tags: ['AWS EC2', 'Docker', 'Jenkins CI/CD', 'SonarQube', 'Trivy', 'Terraform', 'Prometheus'],
      };
    }

    // 5. Internships & Experience
    if (q.includes('intern') || q.includes('experience') || q.includes('sureproed') || q.includes('bloogle') || q.includes('இன்டர்ன்ஷிப்') || q.includes('அனுபவம்')) {
      return {
        id: Date.now().toString(),
        sender: 'ai',
        text: isTa
          ? `சிங்கதுரையின் இன்டர்ன்ஷிப் அனுபவங்கள்:\n\n1. Full-Stack Developer Intern • Bloogle (Oct 2026 – Present, கோவை)\n   • நேரடி வணிக தளம்: tvrepaircoimbatore.in (React, Next.js, NestJS, Prisma, PostgreSQL, Google OAuth 2.0).\n\n2. Cloud & DevOps Intern • SURE ProEd (Present, Remote)\n   • கற்றல் தளம் (Next-Gen Learning Platform) கிளவுட் & DevSecOps கட்டமைப்பு (AWS, Docker, CI/CD, Prometheus, Grafana).\n   • வழங்குநர்: sureproed.com`
          : `Singathurai's Active Internships:\n\n1. Full-Stack Developer Intern • Bloogle (Oct 2026 – Present | Coimbatore, India)\n   • Built & shipped live commercial platform: tvrepaircoimbatore.in with React, Next.js, NestJS, Prisma ORM, and PostgreSQL.\n\n2. Cloud & DevOps Intern • SURE ProEd (Present | Remote)\n   • Engineering cloud infrastructure and DevSecOps pipelines for Next-Gen Learning Platform using AWS, Docker, GitHub Actions, and Prometheus/Grafana.\n   • Provider: sureproed.com`,
        tags: ['Bloogle (Full-Stack)', 'SURE ProEd (DevOps)', 'tvrepaircoimbatore.in', 'AWS & Docker'],
        links: [
          { label: 'Live App: tvrepaircoimbatore.in', url: 'https://tvrepaircoimbatore.in' },
          { label: 'Provider: SURE ProEd', url: 'https://sureproed.com/' },
        ],
      };
    }

    // 6. Full-time / Internship Availability
    if (q.includes('available') || q.includes('full-time') || q.includes('role') || q.includes('open') || q.includes('பணி') || q.includes('நேரம்')) {
      return {
        id: Date.now().toString(),
        sender: 'ai',
        text: isTa
          ? `பணியமர்த்தல் விவரங்கள்:\n\n• தற்போதைய நிலை: Bloogle நிறுவனத்தில் பேக்கெண்ட் இன்டர்னாக பணியாற்றுகிறார்.\n• கிடைக்கும் தன்மை: உடனடி இன்டர்ன்ஷிப் அல்லது முழுநேர சாப்ட்வேர் / பேக்கெண்ட் / டெவொப்ஸ் பணிகளுக்கு திறந்த மனதுடன் உள்ளார்.\n• இருப்பிடம்: கோயம்புத்தூர், தமிழ்நாடு (நேரடி அல்லது தொலைதூர / ரிமோட் பணிகளுக்கு விருப்பம்).`
          : `Hiring & Role Availability:\n\n• Current Status: Backend Development Intern at Bloogle.\n• Target Roles: Backend Developer, Full-Stack Engineer, Cloud/DevOps Engineer.\n• Availability: Immediate for internships, ready to sign/join full-time engineering roles.\n• Location: Coimbatore, Tamil Nadu, India (Open to on-site, hybrid, or remote worldwide).`,
        tags: ['Open to Full-Time', 'Coimbatore / Remote', 'Immediate Start'],
        links: [
          { label: 'Send Email Invitation', url: `mailto:${personalInfo.email}` },
          { label: 'Connect on LinkedIn', url: personalInfo.linkedin },
        ],
      };
    }

    // 6. Education / College / CGPA
    if (q.includes('college') || q.includes('kct') || q.includes('education') || q.includes('cgpa') || q.includes('கல்வி')) {
      return {
        id: Date.now().toString(),
        sender: 'ai',
        text: isTa
          ? `கல்வித்தகுதி:\n\n• கல்லூரி: குமரகுரு தொழில்நுட்பக் கல்லூரி (KCT), கோயம்புத்தூர்.\n• பட்டம்: பி.டெக் தகவல் தொழில்நுட்பம் (B.Tech IT).\n• சிஜிபிஏ: 7.11 (71.1%).\n• முக்கிய பாடங்கள்: Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks.`
          : `Academic Foundation:\n\n• Degree: B.Tech in Information Technology.\n• Institution: Kumaraguru College of Technology (KCT), Coimbatore, Tamil Nadu.\n• Academic Performance: CGPA: 7.11 (71.1%).\n• Core Competencies: Data Structures, Algorithms, Relational Database Management, Operating Systems, Computer Networks.`,
        tags: ['KCT Coimbatore', 'B.Tech IT', 'CGPA 7.11 (71.1%)'],
      };
    }

    // 7. LeetCode & Problem Solving
    if (q.includes('leetcode') || q.includes('dsa') || q.includes('algorithm') || q.includes('problem') || q.includes('லீட்கோட்')) {
      return {
        id: Date.now().toString(),
        sender: 'ai',
        text: isTa
          ? `சிங்கதுரையின் லீட்கோட் சுயவிவரம்:\n\n• சுயவிவரம்: leetcode.com/u/singathurai007/\n• அவர் Data Structures மற்றும் Algorithms (DSA) ஆகியவற்றில் தீவிர பயிற்சி பெற்று, சிக்கலான கணக்கீட்டு சிக்கல்களைத் தீர்க்கிறார்.`
          : `Singathurai's LeetCode & Problem-Solving Profile:\n\n• Profile URL: https://leetcode.com/u/singathurai007/\n• Strong grasp of Data Structures & Algorithms applied to optimize backend query latencies, API throughput, and server-side business logic.`,
        tags: ['LeetCode Profile', 'DSA', 'Algorithms', 'Problem Solving'],
        links: [
          { label: 'View LeetCode Profile', url: personalInfo.leetcode },
          { label: 'View GitHub', url: personalInfo.github },
        ],
      };
    }

    // Default Fallback
    return {
      id: Date.now().toString(),
      sender: 'ai',
      text: isTa
        ? `சிங்கதுரை சி குமரகுரு தொழில்நுட்பக் கல்லூரியின் (KCT) தகவல் தொழில்நுட்பப் பட்டதாரி (CGPA 7.11) மற்றும் Bloogle பேக்கெண்ட் இன்டர்ன் ஆவார். அவர் NestJS, PostgreSQL, Prisma ORM, AWS, மற்றும் DevSecOps CI/CD ஆகியவற்றில் அனுபவம் பெற்றவர். அவரது திட்டங்கள், பேக்கெண்ட் திறன்கள் அல்லது தொடர்பு விவரங்கள் பற்றி மேலும் கேட்கலாம்.`
        : `Singathurai C is a B.Tech IT graduate from Kumaraguru College of Technology (CGPA 7.11) and Backend Developer Intern at Bloogle. He builds scalable NestJS + PostgreSQL APIs and automates cloud infrastructure with AWS, Docker, and DevSecOps CI/CD.\n\nYou can ask about his tvrepaircoimbatore.in project, backend stack, DevOps pipelines, or full-time availability!`,
      tags: ['NestJS', 'PostgreSQL', 'AWS', 'tvrepaircoimbatore.in', 'CGPA 7.11'],
      links: [
        { label: 'Download Resume (PDF)', url: personalInfo.resumePdf },
        { label: 'Email Singathurai', url: `mailto:${personalInfo.email}` },
      ],
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputVal;
    if (!query.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateAnswer(query);
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
    }, 450);
  };

  const handleClear = () => {
    setMessages([initialMessage]);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="relative group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#120F1D] text-[#FAFAFA] border border-[#261E3F] hover:border-[#8B5CF6] shadow-[0_8px_24px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all"
          aria-label={t.ai.widgetBtn}
        >
          {/* Subtle ambient ring */}
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] opacity-20 group-hover:opacity-40 blur-sm transition-opacity" />

          <div className="relative flex items-center gap-2 z-10">
            <div className="w-7 h-7 rounded-full bg-[rgba(139,92,246,0.15)] border border-[#261E3F] flex items-center justify-center text-[#8B5CF6]">
              <Bot className="w-4 h-4" />
            </div>
            <span className="text-xs font-mono font-bold tracking-tight text-[#FAFAFA] group-hover:text-[#8B5CF6] transition-colors">
              {t.ai.widgetBtn}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          </div>
        </motion.button>
      </div>

      {/* Floating AI Drawer / Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[580px] h-[82vh] flex flex-col bg-[#120F1D] border border-[#261E3F] rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.6)] overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#171324] border-b border-[#261E3F]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[rgba(139,92,246,0.15)] border border-[#261E3F] flex items-center justify-center text-[#8B5CF6]">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs font-bold text-[#FAFAFA] tracking-tight">{t.ai.title}</h3>
                    <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-[#064E3B]/40 text-[#34D399] border border-[#059669]/40 font-semibold">
                      AI Active
                    </span>
                  </div>
                  <p className="text-[10px] text-[#CBD5E1] font-mono">{t.ai.onlineBadge}</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleClear}
                  className="p-1.5 text-[#CBD5E1] hover:text-[#FAFAFA] rounded-lg hover:bg-[#120F1D] transition-colors text-xs"
                  title={t.ai.clearChat}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-[#CBD5E1] hover:text-[#FAFAFA] rounded-lg hover:bg-[#120F1D] transition-colors text-xs"
                  title={t.ai.close}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs text-[#FAFAFA]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[88%] p-3 rounded-xl whitespace-pre-line leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] text-white font-medium rounded-tr-none shadow-xs'
                        : 'bg-[#171324] border border-[#261E3F] text-[#FAFAFA] rounded-tl-none shadow-xs'
                    }`}
                  >
                    {msg.text}

                    {/* Tag Pills */}
                    {msg.tags && msg.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2.5 pt-2 border-t border-[#261E3F]">
                        {msg.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-[rgba(139,92,246,0.15)] text-[#C4B5FD] border border-[#261E3F] font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Link Actions */}
                    {msg.links && msg.links.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2.5">
                        {msg.links.map((link, lIdx) => (
                          <a
                            key={lIdx}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[rgba(139,92,246,0.15)] text-[#C4B5FD] border border-[#261E3F] text-[10px] font-mono font-semibold hover:bg-[#8B5CF6] hover:text-white transition-colors"
                          >
                            <span>{link.label}</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-1.5 text-[#CBD5E1] font-mono text-[11px] p-2 bg-[#171324] border border-[#261E3F] rounded-lg w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
                  <span>Synthesizing resume context...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Prompt Suggestions Box */}
            <div className="px-3 py-2 bg-[#171324] border-t border-[#261E3F]">
              <span className="text-[10px] text-[#CBD5E1] font-mono uppercase tracking-wider block mb-1.5 font-semibold">
                {t.ai.promptSuggestionsLabel}
              </span>
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
                {t.ai.suggestions.map((sug, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => handleSend(sug)}
                    className="px-2.5 py-1 rounded-lg text-[10px] bg-[#120F1D] hover:bg-[#1f1930] text-[#CBD5E1] hover:text-[#FAFAFA] border border-[#261E3F] hover:border-[#8B5CF6] transition-all shrink-0 text-left truncate max-w-[220px] shadow-2xs"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-2.5 bg-[#120F1D] border-t border-[#261E3F] flex items-center gap-2"
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder={t.ai.inputPlaceholder}
                className="flex-1 bg-[#171324] border border-[#261E3F] rounded-lg px-3 py-2 text-xs text-[#FAFAFA] placeholder-[#64748B] focus:outline-none focus:border-[#8B5CF6] focus:bg-[#120F1D] font-sans"
              />
              <button
                type="submit"
                disabled={!inputVal.trim()}
                className="p-2 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] text-white hover:from-[#7C3AED] hover:to-[#5B21B6] disabled:opacity-40 transition-all shrink-0 font-bold shadow-xs"
                title={t.ai.sendBtn}
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default AiAssistant;

