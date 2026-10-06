import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BARBERSHOP_CONFIG } from '../config/barbershop.ts';
import { X, Copy, Check, MessageCircle, Share2, Sparkles } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://arllonfernandesbarbearia.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const shareViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Conheça a ${BARBERSHOP_CONFIG.name}!\nAgende seu horário online ou fale conosco: ${currentUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#020917]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative z-10 w-full max-w-sm glass-panel p-5 rounded-3xl border border-white/20 shadow-2xl text-center"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#C9CED6] hover:text-white transition-all cursor-pointer"
              aria-label="Fechar modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col items-center mt-1">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#1E4FA3] to-[#2B60C4] border border-white/25 flex items-center justify-center text-white shadow-lg mb-3">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif-brand text-xl font-bold text-white">
                Compartilhar Biosite
              </h3>
              <p className="text-xs text-[#C9CED6] mt-1 max-w-[260px]">
                Envie o link da {BARBERSHOP_CONFIG.name} para amigos e conhecidos.
              </p>
            </div>

            {/* Share Options */}
            <div className="mt-5 space-y-3">
              {/* WhatsApp Share */}
              <button
                onClick={shareViaWhatsApp}
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-[0_6px_16px_rgba(37,211,102,0.35)] transition-all active:scale-98 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>Enviar pelo WhatsApp</span>
              </button>

              {/* Copy Link Input */}
              <div className="flex items-center gap-2 p-1.5 rounded-xl bg-black/30 border border-white/15">
                <input
                  type="text"
                  readOnly
                  value={currentUrl}
                  className="bg-transparent text-xs text-white/90 px-2 flex-1 focus:outline-none truncate font-mono select-all"
                />
                <button
                  onClick={handleCopy}
                  className="py-2 px-3 rounded-lg bg-gradient-to-r from-[#1E4FA3] to-[#2B60C4] hover:brightness-110 text-white text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Small Footer */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-center gap-1 text-[11px] text-[#C9CED6]">
              <Sparkles className="w-3 h-3 text-[#3B82F6]" />
              <span>Link oficial para agendamento online</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
