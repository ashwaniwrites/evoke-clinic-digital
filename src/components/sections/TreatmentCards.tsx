import React, { useRef } from 'react';
import { Scissors, Droplets, Sparkles, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EvokeCard } from '@/components/ui/EvokeCard';
import { EvokeBadge } from '@/components/ui/EvokeBadge';
import { formatPrice } from '@/lib/utils';
import type { Treatment } from '@/types/treatment';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categoryIcons = {
  transplant: Scissors,
  'non-surgical': Droplets,
  skin: Sparkles,
  replacement: Package,
};

interface Props {
  treatments: Treatment[];
}

/** Treatment category cards grid */
export const TreatmentCards: React.FC<Props> = ({ treatments }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.treatment-card');
    
    cards.forEach((card: any, i) => {
      // Determine direction: even = left, odd = right
      const direction = i % 2 === 0 ? -150 : 150;
      const rotation = i % 2 === 0 ? 15 : -15;

      gsap.fromTo(card, 
        { 
          x: direction, 
          y: 50,
          opacity: 0, 
          rotationY: rotation,
          scale: 0.9 
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotationY: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          }
        }
      );
    });

    // Heading animation
    gsap.fromTo('.treatment-heading',
      { opacity: 0, y: 30, filter: 'blur(10px)' },
      {
        opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.treatment-heading',
          start: 'top 85%',
          toggleActions: "play reverse play reverse",
        }
      }
    );

  }, { scope: containerRef });

  const featured = treatments.reduce((acc, t) => {
    if (!acc.find(a => a.category === t.category)) acc.push(t);
    return acc;
  }, [] as Treatment[]);

  return (
    <section className="section-padding bg-white overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 perspective-[1000px]">
        <h2 className="display-heading text-evoke-navy text-center mb-12 treatment-heading">
          Every Hair & Skin Concern, Solved.
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((t, idx) => {
            const Icon = categoryIcons[t.category];
            // Add slight staggered top margins for a masonry-like feel
            const mtClass = idx % 2 === 1 ? 'lg:mt-8' : '';
            return (
              <Link key={t.id} to={`/treatments/${t.slug}`} className={`treatment-card block ${mtClass}`}>
                <EvokeCard hover className="p-6 h-full text-center relative shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-15px_rgba(0,128,128,0.2)] transition-shadow duration-500">
                  <div className="relative z-10">
                    {t.id === 'fue' && (
                      <EvokeBadge variant="gold" className="absolute -top-2 -right-2">Most Popular</EvokeBadge>
                    )}
                    <div className="w-16 h-16 mx-auto mb-6 bg-evoke-teal/5 text-evoke-teal rounded-2xl flex items-center justify-center -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-evoke-navy mb-2">{t.name}</h3>
                    <p className="text-sm text-evoke-textMuted mb-4 line-clamp-2">{t.tagline}</p>
                    <p className="text-sm font-bold text-evoke-teal uppercase tracking-wide">From {formatPrice(t.startingFrom)}</p>
                  </div>
                </EvokeCard>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
