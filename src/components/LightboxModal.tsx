import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  images,
  title
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  if (!isOpen || images.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl w-full bg-[#120F1D] border border-[#261E3F] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#261E3F] bg-[#171324]">
          <div className="flex items-center gap-3">
            <ImageIcon className="w-4 h-4 text-[#8B5CF6]" />
            <h3 className="text-sm font-bold text-[#FAFAFA] truncate max-w-md font-heading">
              {title}
            </h3>
            <span className="text-xs font-mono text-[#CBD5E1]">
              ({currentIndex + 1} of {images.length})
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#120F1D] border border-[#261E3F] hover:border-[#8B5CF6] text-[#CBD5E1] hover:text-[#FAFAFA] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Image Preview Container */}
        <div className="relative flex-1 flex items-center justify-center p-4 bg-[#090710] min-h-[350px] overflow-hidden">
          <img
            src={images[currentIndex]}
            alt={`${title} - view ${currentIndex + 1}`}
            className="max-h-[60vh] max-w-full object-contain rounded-lg shadow-md bg-[#120F1D] border border-[#261E3F]"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#120F1D]/90 border border-[#261E3F] hover:border-[#8B5CF6] hover:text-[#8B5CF6] text-[#FAFAFA] flex items-center justify-center transition-all shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#120F1D]/90 border border-[#261E3F] hover:border-[#8B5CF6] hover:text-[#8B5CF6] text-[#FAFAFA] flex items-center justify-center transition-all shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail Selector (if multiple) */}
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2 p-3 bg-[#171324] border-t border-[#261E3F] overflow-x-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-16 h-12 rounded-md overflow-hidden border-2 transition-all shrink-0 ${
                  currentIndex === idx
                    ? 'border-[#8B5CF6] scale-105 shadow-sm'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

