import { motion } from 'motion/react';
import { BARBERSHOP_CONFIG } from '../config/barbershop.ts';
import { Calendar3DIcon } from './icons3d/Calendar3DIcon.tsx';
import { Whatsapp3DIcon } from './icons3d/Whatsapp3DIcon.tsx';
import { Instagram3DIcon } from './icons3d/Instagram3DIcon.tsx';
import { ExternalLink, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

export function SlideLinks() {
  const { booking, whatsapp, instagram } = BARBERSHOP_CONFIG.links;

  return (
    <div className="flex flex-col items-center justify-between h-full w-full px-4 sm:px-6 py-6 sm:py-7 select-none">
      {/* Header of Slide 2 */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center w-full max-w-md"
      >
        <span className="text-[11px] font-semibold tracking-widest text-[#C9CED6] uppercase block mb-1">
          Atendimento & Redes
        </span>
        <h2 className="font-serif-brand text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Agendamento & Contatos
        </h2>
        <p className="text-xs sm:text-sm text-[#C9CED6] mt-1">
          Toque para agendar online ou falar diretamente com a gente.
        </p>
      </motion.div>

      {/* 3 Large Touch-Friendly Buttons */}
      <div className="flex flex-col gap-3.5 sm:gap-4 w-full max-w-md my-auto py-2">
        {/* 1) AGENDAMENTO: BOTÃO PRINCIPAL COM DESTAQUE MÁXIMO */}
        <motion.a
          href={booking.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.025, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="relative group block w-full p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#173F8A] via-[#245EC4] to-[#1E4FA3] text-white border-2 border-white/60 shadow-[0_12px_32px_rgba(30,79,163,0.5)] overflow-hidden cursor-pointer"
          style={{ minHeight: '88px' }}
        >
          {/* Shimmer sweep effect */}
          <div className="animate-shimmer" />

          {/* Ambient background glow ring */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-400/20 via-sky-300/30 to-blue-500/20 blur-md group-hover:opacity-100 opacity-60 transition-opacity" />

          <div className="relative z-10 flex items-center justify-between gap-3.5 sm:gap-4">
            {/* 3D Calendar Icon (Larger size) */}
            <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Calendar3DIcon size={56} />
            </div>

            {/* Content Text */}
            <div className="flex-1 text-left min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-wider text-white border border-white/30 backdrop-blur-sm">
                  <Sparkles className="w-2.5 h-2.5 text-yellow-300" />
                  {booking.badgeText}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-tight flex items-center gap-1.5">
                <span>{booking.title}</span>
              </h3>
              <p className="text-xs text-blue-100/90 truncate mt-0.5 font-normal">
                {booking.description}
              </p>
            </div>

            {/* Action Arrow / Chip */}
            <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 border border-white/30 text-white shadow-inner group-hover:bg-white group-hover:text-[#1E4FA3] transition-all">
              <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </motion.a>

        {/* 2) WHATSAPP: Ícone Oficial em 3D */}
        <motion.a
          href={whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="relative group block w-full p-3.5 sm:p-4 rounded-2xl glass-panel hover:bg-[#0c244f]/80 text-white border border-[#25D366]/30 hover:border-[#25D366]/70 shadow-[0_8px_24px_rgba(3,10,24,0.45)] hover:shadow-[0_10px_28px_rgba(37,211,102,0.2)] transition-all cursor-pointer"
          style={{ minHeight: '74px' }}
        >
          <div className="flex items-center justify-between gap-3.5 sm:gap-4">
            {/* 3D WhatsApp Icon */}
            <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Whatsapp3DIcon size={48} />
            </div>

            {/* Text details */}
            <div className="flex-1 text-left min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[10px] font-semibold text-[#4FF087] uppercase tracking-wider">
                  Contato Direto
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                {whatsapp.title}
              </h3>
              <p className="text-xs text-[#C9CED6] truncate mt-0.5">
                {whatsapp.description}
              </p>
            </div>

            {/* Action Icon */}
            <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-[#C9CED6] group-hover:text-[#25D366] group-hover:border-[#25D366]/50 group-hover:bg-[#25D366]/10 transition-all">
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </motion.a>

        {/* 3) INSTAGRAM: Ícone Oficial em 3D */}
        <motion.a
          href={instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="relative group block w-full p-3.5 sm:p-4 rounded-2xl glass-panel hover:bg-[#0c244f]/80 text-white border border-[#E1306C]/30 hover:border-[#E1306C]/70 shadow-[0_8px_24px_rgba(3,10,24,0.45)] hover:shadow-[0_10px_28px_rgba(225,48,108,0.2)] transition-all cursor-pointer"
          style={{ minHeight: '74px' }}
        >
          <div className="flex items-center justify-between gap-3.5 sm:gap-4">
            {/* 3D Instagram Icon */}
            <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Instagram3DIcon size={48} />
            </div>

            {/* Text details */}
            <div className="flex-1 text-left min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[10px] font-semibold text-[#F77737] uppercase tracking-wider">
                  Galeria & Cortes
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                {instagram.title}
              </h3>
              <p className="text-xs text-[#C9CED6] truncate mt-0.5">
                {instagram.handle}
              </p>
            </div>

            {/* Action Icon */}
            <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-[#C9CED6] group-hover:text-[#E1306C] group-hover:border-[#E1306C]/50 group-hover:bg-[#E1306C]/10 transition-all">
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </motion.a>
      </div>

      {/* Bottom Trust/Security Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center justify-center gap-4 text-[11px] text-[#C9CED6]/80 pt-2"
      >
        <span className="flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
          Confirmação Imediata
        </span>
        <span aria-hidden="true">•</span>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-blue-400" />
          Atendimento com Hora Marcada
        </span>
      </motion.div>
    </div>
  );
}
