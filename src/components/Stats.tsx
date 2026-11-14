import React from 'react';
import { statsData } from '../data/portfolioData';

export const Stats: React.FC = () => {
  return (
    <section className="container mx-auto px-6 max-w-6xl mt-8 mb-12 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {statsData.map((stat, idx) => (
          <div
            key={idx}
            className="group relative bg-[#120F1D] border border-[#261E3F] hover:border-[#8B5CF6] rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_30px_rgba(139,92,246,0.16)] overflow-hidden"
          >
            {/* Top Electric Violet line on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="font-heading font-bold text-2xl sm:text-3xl text-[#FAFAFA] tracking-tight mb-1 flex items-center justify-center">
              <span>{stat.value}</span>
              <span className="text-[#8B5CF6] ml-0.5">{stat.suffix}</span>
            </div>

            <div className="text-[11px] font-mono font-medium text-[#CBD5E1] uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Stats;
