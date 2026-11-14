import React from 'react';
import { 
  Server, 
  Database, 
  ShieldCheck, 
  Code2, 
  Cloud, 
  Activity, 
  Sparkles,
  ArrowUpRight 
} from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { servicesData } from '../data/portfolioData';
import { MotionReveal } from './MotionReveal';

const iconMap: Record<string, React.ElementType> = {
  Server,
  Database,
  ShieldCheck,
  Code2,
  Cloud,
  Activity
};

export const Services: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

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
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <section id="services" className="py-14 relative border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <MotionReveal amount={0.2} y={24}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-[#38BDF8]/25 text-[#38BDF8] bg-[#38BDF8]/10 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Core Expertise</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#FAFAFA]">
                Engineering <span className="text-[#38BDF8]">Services</span>
              </h2>
            </div>
            <p className="text-[#A1A1AA] text-xs md:text-sm max-w-md">
              Production-grade server-side systems, secure authentication pipelines, and automated cloud deployments tailored for scale.
            </p>
          </div>
        </MotionReveal>

        {/* Services Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || Server;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                className="group relative bg-[#121215] border border-[#27272A] hover:border-[#38BDF8]/60 rounded-xl p-5 transition-all duration-300 hover:shadow-[0_12px_25px_-10px_rgba(0,0,0,0.7),0_0_20px_rgba(56,189,248,0.12)] flex flex-col justify-between backdrop-blur-md shadow-md"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] font-bold text-[#A1A1AA] tracking-wider">
                      {service.num}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8] group-hover:scale-105 group-hover:bg-[#38BDF8]/20 transition-all">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-[#FAFAFA] mb-2 group-hover:text-[#38BDF8] transition-colors flex items-center justify-between">
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-[#38BDF8]" />
                  </h3>

                  <p className="text-[#A1A1AA] text-xs leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="pt-3 border-t border-[#27272A] flex flex-wrap gap-1.5">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#09090B] text-[#FAFAFA] border border-[#27272A] group-hover:border-[#38BDF8]/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

