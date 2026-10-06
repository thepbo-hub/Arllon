import { useState } from 'react';
import { motion } from 'motion/react';
import { BARBERSHOP_CONFIG } from '../config/barbershop.ts';
import { MapPin, Navigation, Copy, Check, Compass, Clock, ArrowUp } from 'lucide-react';

interface SlideLocationProps {
  onScrollToTop?: () => void;
}

export function SlideLocation({ onScrollToTop }: SlideLocationProps) {
  const { location, hours } = BARBERSHOP_CONFIG;
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(location.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="localizacao"
      className="relative flex flex-col items-center justify-between min-h-[92vh] sm:min-h-[88vh] w-full px-4 sm:px-6 py-8 sm:py-12 select-none"
    >
      {/* Section 3 Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
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
        <p className="text-xs sm:text-sm text-[#C9CED6] mt-1 max-w-xs mx-auto">
          Visite nosso espaço no tradicional bairro do Rio Comprido.
        </p>
      </motion.div>

      {/* Address Card & Map Container */}
      <div className="w-full max-w-md my-auto flex flex-col gap-3.5 py-4">
        {/* Exact Address Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-panel p-4 rounded-2xl border border-white/15"
        >
          <div className="flex items-start gap-3.5">
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
              className="shrink-0 min-h-[42px] px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 active:scale-95 border border-white/15 text-xs text-[#C9CED6] hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
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
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
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

      {/* Action Buttons: "Como chegar" + Horário + Back to Top */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full max-w-md flex flex-col gap-3 pt-2"
      >
        <a
          href={location.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full min-h-[50px] py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#1E4FA3] via-[#245EC4] to-[#1E4FA3] text-white font-semibold text-sm shadow-[0_8px_20px_rgba(30,79,163,0.4)] border border-white/30 hover:border-white/60 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
        >
          <Navigation className="w-4 h-4 text-white group-hover:rotate-45 transition-transform" />
          <span>Como chegar (Abrir no GPS / Maps)</span>
        </a>

        {/* Schedule box */}
        <div className="flex items-center justify-center gap-2 text-xs text-[#C9CED6]/80 text-center py-1">
          <Clock className="w-3.5 h-3.5 text-[#3B82F6]" />
          <span>{hours.schedule}</span>
        </div>

        {/* Return to top */}
        {onScrollToTop && (
          <button
            onClick={onScrollToTop}
            className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs text-[#C9CED6]/70 hover:text-white transition-colors cursor-pointer mt-1"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Voltar ao topo</span>
          </button>
        )}
      </motion.div>
    </section>
  );
}
