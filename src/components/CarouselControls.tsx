import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Share2, Sparkles } from 'lucide-react';

interface CarouselControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectSlide: (index: number) => void;
  onShare: () => void;
}

const SLIDE_TITLES = ['Início', 'Links & Agendamento', 'Localização'];

export function CarouselControls({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onSelectSlide,
  onShare,
}: CarouselControlsProps) {
  return (
    <>
      {/* Top Bar with Brand Badge & Quick Segmented Tabs */}
      <header className="w-full max-w-md mx-auto px-4 pt-3 pb-1 flex items-center justify-between gap-2 z-30">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 p-1 rounded-xl glass-pill bg-[#0A1F44]/70 border border-white/10 shadow-sm flex-1">
          {SLIDE_TITLES.map((title, idx) => {
            const isActive = currentSlide === idx;
            return (
              <button
                key={idx}
                onClick={() => onSelectSlide(idx)}
                className={`relative flex-1 py-1.5 px-2 rounded-lg text-[11px] sm:text-xs font-medium transition-all text-center truncate ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-[#C9CED6]/70 hover:text-white'
                }`}
                aria-label={`Ir para ${title}`}
                aria-current={isActive ? 'true' : 'false'}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-tab-indicator"
                    className="absolute inset-0 bg-gradient-to-r from-[#1E4FA3] to-[#2B60C4] rounded-lg shadow-sm border border-white/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center gap-1">
                  {idx === 1 && <Sparkles className="w-2.5 h-2.5 text-yellow-300" />}
                  {title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Share Button */}
        <button
          onClick={onShare}
          className="shrink-0 w-9 h-9 rounded-xl glass-pill bg-[#0A1F44]/70 border border-white/10 hover:border-white/30 flex items-center justify-center text-[#C9CED6] hover:text-white transition-all active:scale-95 cursor-pointer"
          title="Compartilhar biosite"
          aria-label="Compartilhar link do biosite"
        >
          <Share2 className="w-4 h-4" />
        </button>
      </header>

      {/* Discreet Side Arrow - Left */}
      {currentSlide > 0 && (
        <button
          onClick={onPrev}
          className="hidden sm:flex absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-panel hover:bg-[#1E4FA3] text-[#C9CED6] hover:text-white border border-white/15 items-center justify-center shadow-lg transition-all active:scale-90 cursor-pointer"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {/* Discreet Side Arrow - Right */}
      {currentSlide < totalSlides - 1 && (
        <button
          onClick={onNext}
          className="hidden sm:flex absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-panel hover:bg-[#1E4FA3] text-[#C9CED6] hover:text-white border border-white/15 items-center justify-center shadow-lg transition-all active:scale-90 cursor-pointer"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      {/* Bottom Indicator Dots */}
      <footer className="w-full max-w-md mx-auto px-4 pb-4 pt-1 flex flex-col items-center gap-2 z-30">
        <div className="flex items-center gap-2 py-1 px-3 rounded-full bg-[#0A1F44]/50 border border-white/10 backdrop-blur-md">
          {Array.from({ length: totalSlides }).map((_, idx) => {
            const isActive = currentSlide === idx;
            return (
              <button
                key={idx}
                onClick={() => onSelectSlide(idx)}
                className={`transition-all rounded-full cursor-pointer ${
                  isActive
                    ? 'w-6 h-2 bg-gradient-to-r from-white to-[#3B82F6] shadow-[0_0_8px_rgba(59,130,246,0.6)]'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            );
          })}
        </div>

        <p className="text-[10px] text-[#C9CED6]/60 tracking-wider uppercase font-medium">
          Arllon Fernandes Barbearia • Rio de Janeiro
        </p>
      </footer>
    </>
  );
}
