import React from 'react';
import { Star, Play } from 'lucide-react';
import type { Testimonial } from '@/types/booking';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Props {
  testimonials: Testimonial[];
}

/** Social proof section with video testimonial and reviews */
export const SocialProof: React.FC<Props> = ({ testimonials }) => {
  const featured = testimonials[0];
  const written = testimonials.slice(1, 3);
  const revealRef = useScrollReveal();

  return (
    <section className="section-padding bg-evoke-bgWarm">
      <div ref={revealRef as any} className="container mx-auto px-4">
        <div className="reveal-item" data-reveal="blur">
          <h2 className="display-heading text-evoke-navy text-center mb-12">
            10,000 Patients. Real Results. Real Lives Changed.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Video testimonial */}
          <div className="reveal-item lg:col-span-3" data-reveal="zoom">
            <div className="relative aspect-video bg-evoke-navy rounded-card overflow-hidden group cursor-pointer">
              <img
                src="https://placeholder.co/800x450?text=Patient+Testimonial"
                alt="Patient testimonial video — real hair transplant results"
                className="w-full h-full object-cover opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 text-evoke-navy ml-1" />
                </div>
              </div>
            </div>
            <p className="mt-3 font-semibold text-evoke-navy">{featured.patientName}</p>
            <p className="text-sm text-evoke-textMuted">{featured.treatment}</p>
          </div>

          {/* Written testimonials */}
          <div className="reveal-item lg:col-span-2 flex flex-col gap-6" data-reveal="lift">
            {written.map((t) => (
              <div key={t.id} className="bg-white rounded-card p-6 shadow-card">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < t.rating ? 'text-evoke-gold fill-evoke-gold' : 'text-evoke-border'}`} />
                  ))}
                </div>
                <blockquote className="font-display italic text-evoke-navy text-sm leading-relaxed mb-4">
                  "{t.text}"
                </blockquote>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-evoke-textBody">{t.patientName}</span>
                  <span className="text-xs bg-evoke-bgLight text-evoke-teal px-2 py-0.5 rounded-full">{t.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Reviews strip */}
        <div className="reveal-item bg-white rounded-card p-6 shadow-card" data-reveal="lift">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold text-evoke-navy">4.7 / 5</span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 text-evoke-gold fill-evoke-gold" />
              ))}
            </div>
            <span className="text-sm text-evoke-textMuted">(177 reviews on Google)</span>
          </div>
          <div className="flex gap-4 overflow-x-auto scrollbar-none pb-2">
            {testimonials.slice(0, 4).map((t) => (
              <div key={t.id} className="min-w-[250px] bg-evoke-bgLight rounded-lg p-4">
                <p className="text-sm font-semibold text-evoke-navy mb-1">{t.patientName}</p>
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-evoke-gold fill-evoke-gold" />
                  ))}
                </div>
                <p className="text-xs text-evoke-textBody line-clamp-3">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
