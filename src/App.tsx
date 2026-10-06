/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { SlidePresentation } from './components/SlidePresentation.tsx';
import { SlideLinks } from './components/SlideLinks.tsx';
import { SlideLocation } from './components/SlideLocation.tsx';
import { TopNavBar } from './components/TopNavBar.tsx';
import { ShareModal } from './components/ShareModal.tsx';
import { BARBERSHOP_CONFIG } from './config/barbershop.ts';
import { CalendarCheck } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [showFloatingBooking, setShowFloatingBooking] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Smooth scroll to target section
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // ScrollSpy to track active section while scrolling with finger or mouse
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop;

      // Show floating booking button when scrolled past top section
      if (scrollPos > 380) {
        setShowFloatingBooking(true);
      } else {
        setShowFloatingBooking(false);
      }

      const sections = ['inicio', 'links', 'localizacao'];
      const triggerOffset = window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerOffset) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShareClick = () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator
        .share({
          title: BARBERSHOP_CONFIG.name,
          text: `${BARBERSHOP_CONFIG.name} — ${BARBERSHOP_CONFIG.taglines.primary}`,
          url: window.location.href,
        })
        .catch(() => {
          setIsShareModalOpen(true);
        });
    } else {
      setIsShareModalOpen(true);
    }
  };

  return (
    <div
      ref={scrollContainerRef}
      className="relative min-h-screen w-full barber-texture barber-fine-lines text-white selection:bg-[#1E4FA3] selection:text-white flex flex-col items-center justify-start overflow-x-hidden scroll-smooth"
    >
      {/* Decorative Vintage Barber Architectural Vignette */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700/15 via-transparent to-black/60"
        aria-hidden="true"
      />

      {/* Main Container - Responsive phone canvas on desktop, 100% full width on mobile */}
      <div className="relative z-10 w-full max-w-[480px] min-h-screen flex flex-col sm:my-6 sm:rounded-[36px] sm:border sm:border-white/15 sm:shadow-[0_24px_64px_-12px_rgba(1,6,18,0.85),0_0_0_1px_rgba(255,255,255,0.06)_inset] sm:bg-gradient-to-b sm:from-[#081836] sm:via-[#0A1F44] sm:to-[#051126] transition-all">
        
        {/* Sticky Top Navigation Bar with ScrollSpy tabs */}
        <TopNavBar
          activeSection={activeSection}
          onNavigate={scrollToSection}
          onShare={handleShareClick}
        />

        {/* Section 1: Apresentação */}
        <SlidePresentation
          onScrollToLinks={() => scrollToSection('links')}
          onGoToBooking={() => {
            window.open(BARBERSHOP_CONFIG.links.booking.url, '_blank', 'noopener,noreferrer');
          }}
        />

        {/* Subtle Ornamental Section Separator */}
        <div className="w-full flex items-center justify-center gap-3 px-8 opacity-40 py-2">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C9CED6]" />
          <span className="w-1.5 h-1.5 rotate-45 border border-[#C9CED6] bg-[#1E4FA3]" />
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C9CED6]" />
        </div>

        {/* Section 2: Links & Contato */}
        <SlideLinks
          onScrollToLocation={() => scrollToSection('localizacao')}
        />

        {/* Subtle Ornamental Section Separator */}
        <div className="w-full flex items-center justify-center gap-3 px-8 opacity-40 py-2">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C9CED6]" />
          <span className="w-1.5 h-1.5 rotate-45 border border-[#C9CED6] bg-[#1E4FA3]" />
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C9CED6]" />
        </div>

        {/* Section 3: Localização & Mapa */}
        <SlideLocation
          onScrollToTop={() => scrollToSection('inicio')}
        />

        {/* Website Footer */}
        <footer className="w-full py-6 px-6 text-center border-t border-white/10 mt-4">
          <div className="flex flex-col items-center gap-2">
            <p className="font-serif-brand text-sm font-semibold text-white tracking-wide">
              {BARBERSHOP_CONFIG.name}
            </p>
            <p className="text-[11px] text-[#C9CED6]/70 leading-relaxed max-w-xs">
              {BARBERSHOP_CONFIG.taglines.primary}
            </p>
            <p className="text-[10px] text-[#C9CED6]/50 uppercase tracking-widest mt-2">
              © {new Date().getFullYear()} • Todos os direitos reservados
            </p>
          </div>
        </footer>
      </div>

      {/* Floating Quick Action Button when scrolling */}
      {showFloatingBooking && (
        <aside
          aria-label="Ações rápidas"
          className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6 animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <a
            href={BARBERSHOP_CONFIG.links.booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#1E4FA3] to-[#2563EB] text-white font-semibold text-xs shadow-[0_8px_20px_rgba(30,79,163,0.6)] border border-white/40 hover:scale-105 active:scale-95 transition-all cursor-pointer backdrop-blur-md"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Agendar</span>
          </a>
        </aside>
      )}

      {/* Share Modal Dialog */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
}
