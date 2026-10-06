import { motion } from 'motion/react';
import { Share2, Sparkles, MapPin, Calendar, Home } from 'lucide-react';

interface TopNavBarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onShare: () => void;
}

const SECTIONS = [
  { id: 'inicio', title: 'Início', icon: Home },
  { id: 'links', title: 'Agendamento', icon: Calendar, highlight: true },
  { id: 'localizacao', title: 'Localização', icon: MapPin },
];

export function TopNavBar({
  activeSection,
  onNavigate,
  onShare,
}: TopNavBarProps) {
  return (
    <header className="sticky top-0 z-40 w-full max-w-md mx-auto px-3.5 pt-3 pb-2 transition-all">
      <div className="flex items-center justify-between gap-2 p-1.5 rounded-2xl glass-panel bg-[#081836]/90 border border-white/15 shadow-[0_8px_24px_rgba(2,8,22,0.6)] backdrop-blur-xl">
        {/* Navigation Tabs (ScrollSpy aware) */}
        <nav className="flex items-center gap-1 flex-1" aria-label="Navegação da página">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            const IconComponent = sec.icon;
            return (
              <button
                key={sec.id}
                onClick={() => onNavigate(sec.id)}
                className={`relative flex-1 py-2 px-2 rounded-xl text-xs font-medium transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-[#C9CED6]/75 hover:text-white hover:bg-white/5'
                }`}
                aria-label={`Ir para seção ${sec.title}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 bg-gradient-to-r from-[#1E4FA3] via-[#2A66D0] to-[#1E4FA3] rounded-xl shadow-md border border-white/25"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1 truncate">
                  {sec.highlight && isActive && (
                    <Sparkles className="w-3 h-3 text-yellow-300 shrink-0" />
                  )}
                  <IconComponent className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{sec.title}</span>
                </span>
              </button>
            );
          })}
        </nav>

        {/* Share Button */}
        <button
          onClick={onShare}
          className="shrink-0 w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 hover:border-white/35 flex items-center justify-center text-[#C9CED6] hover:text-white transition-all active:scale-95 cursor-pointer ml-0.5"
          title="Compartilhar biosite"
          aria-label="Compartilhar link do biosite"
        >
          <Share2 className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
