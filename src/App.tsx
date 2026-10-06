/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SlidePresentation } from './components/SlidePresentation.tsx';
import { SlideLinks } from './components/SlideLinks.tsx';
import { SlideLocation } from './components/SlideLocation.tsx';
import { CarouselControls } from './components/CarouselControls.tsx';
import { ShareModal } from './components/ShareModal.tsx';
import { BARBERSHOP_CONFIG } from './config/barbershop.ts';

const TOTAL_SLIDES = 3;

// Directional slide transition variants
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring' as const, stiffness: 320, damping: 30 },
      opacity: { duration: 0.28 },
      scale: { duration: 0.28 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 80 : -80,
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: 'spring' as const, stiffness: 320, damping: 30 },
      opacity: { duration: 0.2 },
    },
  }),
};

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Touch swipe support
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const goToSlide = useCallback((index: number) => {
    if (index === currentSlide) return;
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(10);
      } catch {
        // ignore
      }
    }
  }, [currentSlide]);

  const handleNext = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, goToSlide]);

  const handlePrev = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const deltaY = e.changedTouches[0].clientY - touchStartYRef.current;

    // Trigger horizontal swipe only if horizontal movement is dominant
    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

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
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center barber-texture barber-fine-lines overflow-x-hidden p-0 sm:p-4 md:p-6 lg:p-8">
      {/* Decorative Vintage Barber Architectural Vignette */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700/15 via-transparent to-black/60"
        aria-hidden="true"
      />

      {/* Main Biosite Device Canvas (Mobile-first card, responsive up to desktop) */}
      <main className="relative z-10 w-full max-w-[440px] h-[100dvh] sm:h-[840px] sm:max-h-[92vh] flex flex-col justify-between bg-gradient-to-b from-[#091B3D] via-[#0A1F44] to-[#051128] sm:rounded-[36px] sm:border sm:border-white/20 sm:shadow-[0_24px_64px_-12px_rgba(1,6,18,0.85),0_0_0_1px_rgba(255,255,255,0.06)_inset] overflow-hidden">
        {/* Top Hairline Ambient Light bar on device */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1.5px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent opacity-80" />

        {/* Carousel Header & Tabs */}
        <CarouselControls
          currentSlide={currentSlide}
          totalSlides={TOTAL_SLIDES}
          onPrev={handlePrev}
          onNext={handleNext}
          onSelectSlide={goToSlide}
          onShare={handleShareClick}
        />

        {/* Central Slide Content Area with Swipe Gesture Detection */}
        <div
          className="relative flex-1 w-full overflow-hidden touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full"
            >
              {currentSlide === 0 && (
                <SlidePresentation
                  onGoToLinks={() => goToSlide(1)}
                  onGoToBooking={() => {
                    // Open booking link directly as user requested
                    window.open(BARBERSHOP_CONFIG.links.booking.url, '_blank', 'noopener,noreferrer');
                  }}
                />
              )}
              {currentSlide === 1 && <SlideLinks />}
              {currentSlide === 2 && <SlideLocation />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Share Modal Dialog */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
}
