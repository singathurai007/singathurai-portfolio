import React from 'react';
import { MessageSquareQuote, Star, Plus, Quote } from 'lucide-react';
import { TestimonialItem } from '../types/portfolio';

interface TestimonialsProps {
  testimonials: TestimonialItem[];
  onOpenModal: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials, onOpenModal }) => {
  return (
    <section id="testimonials" className="py-14 relative border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-[var(--primary)]/30 text-[var(--primary)] bg-[var(--primary)]/5 mb-2">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>Recommendations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
              Peer & Team <span className="text-[var(--primary)] text-glow">Feedback</span>
            </h2>
          </div>
          
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/[0.05] hover:bg-[var(--primary)] text-white hover:text-black border border-white/10 hover:border-[var(--primary)] transition-all duration-200 text-xs font-mono self-start md:self-auto"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Write a Recommendation</span>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group bg-[#0b0e14]/90 border border-white/[0.08] hover:border-[var(--primary)]/40 rounded-xl p-4 sm:p-5 flex flex-col justify-between backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_25px_-10px_rgba(0,0,0,0.7)]"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < item.rating
                            ? 'text-[var(--primary)] fill-[var(--primary)]'
                            : 'text-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                  <Quote className="w-4 h-4 text-[var(--primary)]/40 group-hover:text-[var(--primary)] transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-xs leading-relaxed mb-4 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-2.5 pt-3.5 border-t border-white/[0.06]">
                <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] font-bold text-xs flex items-center justify-center shrink-0">
                  {item.initials}
                </div>
                <div className="truncate">
                  <h4 className="text-xs font-bold text-white group-hover:text-[var(--primary)] transition-colors truncate">
                    {item.author}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-mono truncate">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

