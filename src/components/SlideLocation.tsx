import { useState } from 'react';
import { motion } from 'motion/react';
import { BARBERSHOP_CONFIG } from '../config/barbershop.ts';
import { MapPin, Navigation, Copy, Check, Compass } from 'lucide-react';

export function SlideLocation() {
  const { location } = BARBERSHOP_CONFIG;
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(location.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between h-full w-full px-4 sm:px-6 py-5 sm:py-6 select-none overflow-y-auto no-scrollbar">
      {/* Slide 3 Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center w-full max-w-md"
      >
        <span className="text-[11px] font-semibold tracking-widest text-[#C9CED6] uppercase block mb-1">
          Nossa Unidade
        </span>
        <h2 className="font-serif-brand text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center justify-center gap-2">
          <span>{location.title}</span>
          <Compass className="w-5 h-5 text-[#3B82F6]" />
        </h2>
      </motion.div>

      {/* Address Card & Map Container */}
      <div className="w-full max-w-md my-auto flex flex-col gap-3 py-1">
        {/* Exact Address Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-panel p-3.5 sm:p-4 rounded-2xl border border-white/15"
        >
          <div className="flex items-start gap-3">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E4FA3] to-[#0A1F44] border border-[#3B82F6]/30 flex items-center justify-center text-white shadow-md">
              <MapPin className="w-5 h-5 text-white" />
            </div>

            <div className="flex-1 min-w-0 text-left">
              <p className="text-sm font-semibold text-white leading-snug">
                {location.street}
              </p>
              <p className="text-xs text-[#C9CED6] mt-0.5">
                {location.neighborhood}, {location.cityState}
              </p>
              <p className="text-[11px] text-[#C9CED6]/80 font-mono mt-0.5">
                CEP: {location.cep}
              </p>
            </div>

            {/* Quick Copy Button */}
            <button
              onClick={handleCopyAddress}
              className="shrink-0 min-h-[40px] px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 active:scale-95 border border-white/15 text-xs text-[#C9CED6] hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
              title="Copiar endereço completo"
              aria-label="Copiar endereço completo"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300 font-medium text-[11px]">Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="text-[11px]">Copiar</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Embedded Google Maps Container com moldura fina e cantos arredondados */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-full rounded-2xl overflow-hidden border border-[#C9CED6]/25 shadow-[0_12px_28px_rgba(2,8,20,0.6)] bg-[#071735]"
        >
          <div className="w-full h-[220px] sm:h-[260px]">
            <iframe
              src={location.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Localização da Arllon Fernandes Barbearia no Google Maps"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Action Buttons: "Como chegar" + Horário */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full max-w-md flex flex-col gap-2 pt-1"
      >
        <a
          href={location.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full min-h-[48px] py-3 px-5 rounded-xl bg-gradient-to-r from-[#1E4FA3] via-[#245EC4] to-[#1E4FA3] text-white font-semibold text-sm shadow-[0_8px_20px_rgba(30,79,163,0.4)] border border-white/30 hover:border-white/60 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
        >
          <Navigation className="w-4 h-4 text-white group-hover:rotate-45 transition-transform" />
          <span>Como chegar (Abrir no GPS / Maps)</span>
        </a>

        <div className="flex items-center justify-center gap-2 text-[11px] text-[#C9CED6]/80 text-center">
          <span>{BARBERSHOP_CONFIG.hours.schedule}</span>
        </div>
      </motion.div>
    </div>
  );
}
