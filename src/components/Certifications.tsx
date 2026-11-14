import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  ExternalLink, 
  Calendar, 
  CheckCircle2, 
  ChevronRight,
  FileCheck2
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { certificationsData } from '../data/portfolioData';
import { CertificateItem } from '../types/portfolio';
import { MotionReveal } from './MotionReveal';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem>(certificationsData[0]);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="certifications" className="py-20 sm:py-24 relative border-t border-[#261E3F]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <MotionReveal amount={0.2} y={24}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-[#261E3F] text-[#C4B5FD] bg-[rgba(139,92,246,0.15)] mb-2.5 font-semibold">
                <Award className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>Verified Qualifications</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#FAFAFA] font-heading">
                Professional <span className="text-[#8B5CF6]">Certifications</span>
              </h2>
            </div>
            <p className="text-[#CBD5E1] text-xs md:text-sm max-w-md leading-[1.65]">
              Industry credentials in cloud computing, enterprise software modeling, cyber risk management, and systems administration.
            </p>
          </div>
        </MotionReveal>

        {/* Interactive Master-Detail Layout */}
        <MotionReveal amount={0.2} delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Certificate Selector Column (5 cols) */}
            <div className="lg:col-span-5 space-y-2.5">
              {certificationsData.map((cert) => {
                const isSelected = selectedCert.id === cert.id;
                return (
                  <button
                    key={cert.id}
                    onClick={() => setSelectedCert(cert)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-300 flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-[rgba(139,92,246,0.15)] border-[#8B5CF6] shadow-xs'
                        : 'bg-[#120F1D] border-[#261E3F] hover:border-[#8B5CF6] shadow-xs'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] text-white'
                            : 'bg-[#171324] text-[#CBD5E1] border border-[#261E3F]'
                        }`}
                      >
                        {cert.id}
                      </span>
                      <div className="truncate">
                        <h4
                          className={`text-xs sm:text-sm font-bold truncate transition-colors ${
                            isSelected ? 'text-[#FAFAFA]' : 'text-[#CBD5E1]'
                          }`}
                        >
                          {cert.title}
                        </h4>
                        <p className="text-[11px] text-[#94A3B8] font-mono truncate">
                          {cert.provider}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-1.5">
                      {cert.verified && (
                        <ShieldCheck
                          className={`w-3.5 h-3.5 ${
                            isSelected ? 'text-[#8B5CF6]' : 'text-[#64748B]'
                          }`}
                        />
                      )}
                      <ChevronRight
                        className={`w-3.5 h-3.5 transition-transform ${
                          isSelected
                            ? 'text-[#8B5CF6] translate-x-0.5'
                            : 'text-[#261E3F]'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Certificate Showcase Card (7 cols) */}
            <div className="lg:col-span-7 bg-[#120F1D] border border-[#261E3F] hover:border-[#8B5CF6] rounded-2xl p-6 sm:p-7 backdrop-blur-md sticky top-28 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_30px_rgba(139,92,246,0.16)] transition-all duration-300">
              {/* Header / Verified Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-[#261E3F] mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[rgba(139,92,246,0.15)] text-[#C4B5FD] border border-[#261E3F] font-semibold">
                  {selectedCert.label}
                </span>
                <div className="flex items-center gap-1.5 text-[#10B981] text-xs font-mono font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </div>
              </div>

              {/* Certificate Image Preview */}
              <div className="relative aspect-[16/9] max-h-56 w-full rounded-xl overflow-hidden bg-[#171324] border border-[#261E3F] mb-4 group shadow-xs">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              {/* Details */}
              <div className="space-y-2.5 mb-5">
                <h3 className="text-xl font-bold text-[#FAFAFA] font-heading">
                  {selectedCert.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#CBD5E1]">
                  <div className="flex items-center gap-1">
                    <span className="text-[#94A3B8]">Issuer:</span>
                    <span className="text-[#FAFAFA] font-semibold">{selectedCert.provider}</span>
                  </div>
                  <span className="text-[#261E3F]">•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#8B5CF6]" />
                    <span>{selectedCert.date}</span>
                  </div>
                </div>
                <p className="text-[#CBD5E1] text-sm leading-[1.65]">
                  {selectedCert.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#261E3F] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#CBD5E1]">
                  Official accreditation record
                </span>
                <a
                  href={selectedCert.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] text-white font-semibold text-xs font-mono hover:from-[#7C3AED] hover:to-[#5B21B6] shadow-[0_4px_18px_rgba(139,92,246,0.35)] transition-all"
                >
                  <FileCheck2 className="w-3.5 h-3.5" />
                  <span>Open Certificate</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};
export default Certifications;
