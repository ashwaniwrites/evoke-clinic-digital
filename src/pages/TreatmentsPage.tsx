import React from 'react';
import { Link } from 'react-router-dom';
import { treatments } from '@/lib/data/seed';
import { EvokeCard } from '@/components/ui/EvokeCard';
import { EvokeBadge } from '@/components/ui/EvokeBadge';
import { formatPrice } from '@/lib/utils';
import { Scissors, Droplets, Sparkles, Package } from 'lucide-react';

const categoryIcons = {
  transplant: Scissors,
  'non-surgical': Droplets,
  skin: Sparkles,
  replacement: Package,
};

/** Treatments overview page */
const TreatmentsPage: React.FC = () => (
  <div className="pt-[72px]">
    <section className="bg-evoke-navy py-16 text-white text-center">
      <div className="container mx-auto px-4">
        <h1 className="display-hero text-white mb-4">Our Treatments</h1>
        <p className="body-large text-white/70 max-w-2xl mx-auto">
          Comprehensive hair restoration and skin care solutions backed by science and delivered by experts.
        </p>
      </div>
    </section>
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t) => {
            const Icon = categoryIcons[t.category] || Scissors;
            return (
              <Link key={t.id} to={`/treatments/${t.slug}`}>
                <EvokeCard hover className="p-6 h-full">
                  <div className="flex items-start gap-4">
                    <Icon className="h-10 w-10 text-evoke-teal shrink-0" />
                    <div>
                      <EvokeBadge variant="teal" className="mb-2">{t.category}</EvokeBadge>
                      <h2 className="font-display text-xl font-bold text-evoke-navy mb-1">{t.name}</h2>
                      <p className="text-sm text-evoke-textMuted mb-3">{t.tagline}</p>
                      <p className="text-sm font-semibold text-evoke-cta">From {formatPrice(t.startingFrom)}</p>
                    </div>
                  </div>
                </EvokeCard>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  </div>
);

export default TreatmentsPage;
