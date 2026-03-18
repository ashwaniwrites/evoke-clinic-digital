import React from 'react';
import { Scissors, Droplets, Sparkles, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EvokeCard } from '@/components/ui/EvokeCard';
import { EvokeBadge } from '@/components/ui/EvokeBadge';
import { formatPrice } from '@/lib/utils';
import type { Treatment } from '@/types/treatment';

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
  const featured = treatments.reduce((acc, t) => {
    if (!acc.find(a => a.category === t.category)) acc.push(t);
    return acc;
  }, [] as Treatment[]);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="display-heading text-evoke-navy text-center mb-12">
          Every Hair & Skin Concern, Solved.
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((t) => {
            const Icon = categoryIcons[t.category];
            return (
              <Link key={t.id} to={`/treatments/${t.slug}`}>
                <EvokeCard hover className="p-6 h-full text-center">
                  <div className="relative">
                    {t.id === 'fue' && (
                      <EvokeBadge variant="gold" className="absolute -top-2 -right-2">Most Popular</EvokeBadge>
                    )}
                    <Icon className="h-12 w-12 mx-auto mb-4 text-evoke-teal" />
                    <h3 className="font-display text-lg font-bold text-evoke-navy mb-2">{t.name}</h3>
                    <p className="text-sm text-evoke-textMuted mb-3 line-clamp-2">{t.tagline}</p>
                    <p className="text-sm font-semibold text-evoke-teal">From {formatPrice(t.startingFrom)}</p>
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
