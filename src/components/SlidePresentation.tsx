import { motion } from 'motion/react';
import { BARBERSHOP_CONFIG } from '../config/barbershop.ts';
import { ChevronRight, CalendarCheck, Sparkles } from 'lucide-react';

interface SlidePresentationProps {
  onGoToLinks: () => void;
  onGoToBooking: () => void;
}

export function SlidePresentation({ onGoToLinks, onGoToBooking }: SlidePresentationProps) {
  return (
    <div className="flex flex-col items-center justify-between h-full w-full px-5 py-6 sm:py-8 text-center select-none">
      {/* Decorative Barber Badge Subtle Hairline */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-xs font-medium text-[#C9CED6] tracking-wider uppercase"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-ping" />
        <span>Rio Comprido • Rio de Janeiro</span>
      </motion.div>

      {/* Main Brand Block: Logo grande sem caixa, apenas drop-shadow */}
      <div className="flex flex-col items-center justify-center my-auto w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center w-full my-2"
        >
          {/* Subtle Ambient Radial Glow behind the transparent logo */}
          <div
            className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#1E4FA3]/25 via-[#2A66D0]/35 to-transparent blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <img
            src={BARBERSHOP_CONFIG.logo.src}
            alt={BARBERSHOP_CONFIG.logo.alt}
            className="relative z-10 w-auto h-auto max-h-[160px] sm:max-h-[200px] object-contain drop-shadow-[0_12px_28px_rgba(20,60,130,0.55)] transition-transform duration-500 hover:scale-105"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Title in elegant serif font */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4"
        >
          <h1 className="font-serif-brand text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            {BARBERSHOP_CONFIG.name}
          </h1>
          
          {/* Vintage barber hairline divider with central emblem diamond */}
          <div className="flex items-center justify-center gap-3 my-3 w-3/4 mx-auto opacity-75">
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C9CED6]" />
            <span className="w-1.5 h-1.5 rotate-45 border border-[#C9CED6] bg-[#1E4FA3]" />
            <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C9CED6]" />
          </div>
        </motion.div>

        {/* Highlighted Taglines */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="space-y-2 mt-1 px-3"
        >
          <p className="font-serif-brand italic text-base sm:text-lg text-white font-medium drop-shadow-sm">
            "{BARBERSHOP_CONFIG.taglines.primary}"
          </p>
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#C9CED6] uppercase">
            {BARBERSHOP_CONFIG.taglines.secondary}
          </p>
        </motion.div>
      </div>

      {/* Bottom Interactive & Swipe Call-to-action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="w-full max-w-sm flex flex-col items-center gap-3 pt-2"
      >
        {/* Direct Booking Shortcut Button */}
        <button
          onClick={onGoToBooking}
          className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-[#1E4FA3] via-[#2A66D0] to-[#1E4FA3] text-white font-semibold text-sm shadow-[0_8px_20px_rgba(30,79,163,0.35)] border border-white/20 hover:border-white/50 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
        >
          <CalendarCheck className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
          <span>Agendar Horário Agora</span>
          <Sparkles className="w-3.5 h-3.5 text-blue-200" />
        </button>

        {/* Swipe Affordance Indicator */}
        <button
          onClick={onGoToLinks}
          className="flex items-center gap-2 py-2 px-4 rounded-full text-xs font-medium text-[#C9CED6] hover:text-white hover:bg-white/5 transition-colors cursor-pointer group"
          aria-label="Deslizar para ver links e contatos"
        >
          <span>Deslize ou toque para ver links</span>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="flex items-center text-[#1E4FA3] group-hover:text-white"
          >
            <ChevronRight className="w-4 h-4" />
          </motion.span>
        </button>
      </motion.div>
    </div>
  );
}
