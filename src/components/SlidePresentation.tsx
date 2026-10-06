import { motion } from 'motion/react';
import { BARBERSHOP_CONFIG } from '../config/barbershop.ts';
import { ChevronDown, CalendarCheck, Sparkles, MapPin } from 'lucide-react';

interface SlidePresentationProps {
  onScrollToLinks: () => void;
  onGoToBooking: () => void;
}

export function SlidePresentation({ onScrollToLinks, onGoToBooking }: SlidePresentationProps) {
  return (
    <section
      id="inicio"
      className="relative flex flex-col items-center justify-between min-h-[92vh] sm:min-h-[88vh] w-full px-5 py-6 sm:py-10 text-center select-none"
    >
      {/* Decorative Barber City Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-medium text-[#C9CED6] tracking-wider uppercase"
      >
        <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
        <span>Rio Comprido • Rio de Janeiro</span>
      </motion.div>

      {/* Main Brand Block: Logo grande sem caixa, apenas drop-shadow */}
      <div className="flex flex-col items-center justify-center my-auto w-full max-w-md py-4 sm:py-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center w-full my-2"
        >
          {/* Subtle Ambient Radial Glow behind the transparent logo */}
          <div
            className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#1E4FA3]/25 via-[#2A66D0]/35 to-transparent blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <img
            src={BARBERSHOP_CONFIG.logo.src}
            alt={BARBERSHOP_CONFIG.logo.alt}
            className="relative z-10 w-auto h-auto max-h-[170px] sm:max-h-[220px] object-contain drop-shadow-[0_12px_32px_rgba(20,60,130,0.6)] transition-transform duration-500 hover:scale-105"
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
          className="space-y-2.5 mt-1 px-3 max-w-sm"
        >
          <p className="font-serif-brand italic text-base sm:text-lg text-white font-medium drop-shadow-sm leading-relaxed">
            "{BARBERSHOP_CONFIG.taglines.primary}"
          </p>
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#C9CED6] uppercase">
            {BARBERSHOP_CONFIG.taglines.secondary}
          </p>
        </motion.div>
      </div>

      {/* Bottom Interactive Call to Action & Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="w-full max-w-sm flex flex-col items-center gap-3 pt-2"
      >
        {/* Direct Booking Shortcut Button */}
        <button
          onClick={onGoToBooking}
          className="w-full min-h-[50px] py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#1E4FA3] via-[#2A66D0] to-[#1E4FA3] text-white font-semibold text-sm shadow-[0_8px_24px_rgba(30,79,163,0.45)] border border-white/20 hover:border-white/50 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
        >
          <CalendarCheck className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
          <span>Agendar Horário Online</span>
          <Sparkles className="w-3.5 h-3.5 text-blue-200" />
        </button>

        {/* Scroll Down Indication */}
        <button
          onClick={onScrollToLinks}
          className="flex flex-col items-center gap-1 py-2 px-4 rounded-full text-xs font-medium text-[#C9CED6] hover:text-white transition-colors cursor-pointer group"
          aria-label="Rolar para baixo e ver links"
        >
          <span className="tracking-wide">Deslize para ver contatos e localização</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="flex items-center text-[#3B82F6] group-hover:text-white mt-0.5"
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
