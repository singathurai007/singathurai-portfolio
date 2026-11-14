import React from 'react';
import { Server, Database, Cloud, ShieldCheck, Terminal, Layers, GitBranch, Activity, Lock, Box } from 'lucide-react';

export const Marquee: React.FC = () => {
  const items = [
    { label: "NestJS & Node.js", icon: Server },
    { label: "TypeScript", icon: Terminal },
    { label: "PostgreSQL & Prisma", icon: Database },
    { label: "AWS Cloud (EC2, IAM, SNS)", icon: Cloud },
    { label: "Docker & Compose", icon: Box },
    { label: "DevSecOps CI/CD", icon: ShieldCheck },
    { label: "Terraform IaC", icon: Layers },
    { label: "Ansible Automation", icon: GitBranch },
    { label: "Prometheus & Grafana", icon: Activity },
    { label: "SonarQube & Trivy", icon: Lock },
    { label: "Linux Administration", icon: Terminal },
    { label: "Google OAuth 2.0 & JWT", icon: Lock },
  ];

  return (
    <div className="w-full overflow-hidden py-4 sm:py-5 bg-[#120F1D]/80 backdrop-blur-md border-y border-[#261E3F] relative z-10">
      {/* Edge gradient masks */}
      <div className="absolute top-0 left-0 w-24 sm:w-40 h-full bg-gradient-to-r from-[#090710] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 sm:w-40 h-full bg-gradient-to-l from-[#090710] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
        {/* Double items for continuous loop */}
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2.5 mx-5 text-[#CBD5E1] hover:text-[#FAFAFA] font-mono text-xs sm:text-sm font-medium tracking-wide transition-colors cursor-default whitespace-nowrap">
              <Icon className="w-4 h-4 text-[#8B5CF6]" />
              <span>{item.label}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#261E3F] ml-3" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Marquee;
