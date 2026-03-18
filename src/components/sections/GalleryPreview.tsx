import React, { useState, useRef, useCallback } from 'react';
import { EvokeBadge } from '@/components/ui/EvokeBadge';
import { EvokeButton } from '@/components/ui/EvokeButton';
import { Link } from 'react-router-dom';
import type { Testimonial } from '@/types/booking';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface SliderProps {
  beforeUrl: string;
  afterUrl: string;
  alt: string;
}

/** Before/After image comparison slider with drag and keyboard support */
export const BeforeAfterSlider: React.FC<SliderProps> = ({ beforeUrl, afterUrl, alt }) => {
  const [position, setPosition] = useState(30);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onPointerDown = () => { isDragging.current = true; };
  const onPointerMove = (e: React.PointerEvent) => { if (isDragging.current) updatePosition(e.clientX); };
  const onPointerUp = () => { isDragging.current = false; };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') setPosition(p => Math.min(100, p + 10));
    if (e.key === 'ArrowLeft') setPosition(p => Math.max(0, p - 10));
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] rounded-card overflow-hidden cursor-ew-resize select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      tabIndex={0}
      onKeyDown={onKeyDown}
      role="slider"
      aria-label={alt}
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <img src={beforeUrl} alt="Before treatment" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <img src={afterUrl} alt="After treatment" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="absolute top-0 bottom-0" style={{ left: `${position}%` }}>
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-evoke-teal rounded-full flex items-center justify-center shadow-lg">
          <span className="text-evoke-teal text-xs font-bold">↔</span>
        </div>
        <div className="absolute top-0 bottom-0 w-0.5 bg-white -translate-x-1/2" />
      </div>
    </div>
  );
};

interface GalleryProps {
  testimonials: Testimonial[];
}

/** Before/After gallery preview section */
export const GalleryPreview: React.FC<GalleryProps> = ({ testimonials }) => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Hair Transplant', 'Non-Surgical', 'Skin'];
  const revealRef = useScrollReveal();

  const filtered = filter === 'All'
    ? testimonials
    : testimonials.filter(t => t.treatment.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section className="section-padding bg-evoke-bgLight">
      <div ref={revealRef as any} className="container mx-auto px-4">
        <div className="reveal-item" data-reveal="blur">
          <h2 className="display-heading text-evoke-navy text-center mb-3">See What's Possible.</h2>
        </div>
        <p className="text-center text-evoke-textMuted mb-8 reveal-item" data-reveal="fade">
          100+ documented patient journeys. Before and after — no filters, no tricks.
        </p>

        <div className="flex gap-2 justify-center mb-8 flex-wrap reveal-item">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors min-h-[44px] ${
                filter === f
                  ? 'bg-evoke-teal text-white'
                  : 'bg-white text-evoke-textBody border border-evoke-border hover:border-evoke-teal'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {filtered.slice(0, 6).map((t) => (
            <div key={t.id} className="reveal-item" data-reveal="zoom">
              <BeforeAfterSlider
                beforeUrl={t.beforeImageUrl}
                afterUrl={t.afterImageUrl}
                alt={`Before and after comparison - ${t.treatment}`}
              />
              <div className="flex items-center gap-2 mt-2">
                <EvokeBadge variant="teal">{t.treatment}</EvokeBadge>
                <span className="text-xs text-evoke-textMuted">{t.city} · {t.monthsPostTreatment}mo</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 reveal-item" data-reveal="lift">
          <Link to="/results">
            <EvokeButton variant="secondary">View All 100+ Results →</EvokeButton>
          </Link>
        </div>
      </div>
    </section>
  );
};
