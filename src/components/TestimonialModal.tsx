import React, { useState } from 'react';
import { X, Star, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TestimonialItem } from '../types/portfolio';

interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTestimonial: (item: TestimonialItem) => void;
}

export const TestimonialModal: React.FC<TestimonialModalProps> = ({
  isOpen,
  onClose,
  onAddTestimonial
}) => {
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('');
  const [quote, setQuote] = useState('');
  const [rating, setRating] = useState(5);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !quote) return;

    // Get initials
    const words = author.trim().split(/\s+/);
    const initials = words.length >= 2 
      ? (words[0][0] + words[1][0]).toUpperCase()
      : author.substring(0, 2).toUpperCase();

    const newTestimonial: TestimonialItem = {
      id: Date.now().toString(),
      author,
      role: role || 'Software Colleague',
      quote,
      initials,
      rating
    };

    onAddTestimonial(newTestimonial);

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 max-w-lg w-full bg-[#0b0e14] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <h3 className="text-xl font-bold text-white">
            Write a Recommendation
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
              Rating
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className="p-1 text-slate-500 hover:scale-110 transition-transform"
                >
                  <Star
                    className={`w-6 h-6 ${
                      star <= rating
                        ? 'text-[var(--primary)] fill-[var(--primary)]'
                        : 'text-slate-600'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
              Your Full Name *
            </label>
            <input
              type="text"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="e.g. Alex Rivera"
              className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[var(--primary)] text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
              Your Role / Company
            </label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g. Senior Tech Lead at Fintech"
              className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[var(--primary)] text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
              Recommendation / Feedback *
            </label>
            <textarea
              rows={4}
              required
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              placeholder="Describe Singathurai's technical impact, code quality, or engineering collaboration..."
              className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[var(--primary)] text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--primary)] text-black font-bold text-sm font-mono hover:brightness-110 shadow-[0_0_20px_rgba(250,204,21,0.3)] transition-all"
          >
            <Send className="w-4 h-4" />
            <span>Publish Recommendation</span>
          </button>
        </form>
      </div>
    </div>
  );
};

