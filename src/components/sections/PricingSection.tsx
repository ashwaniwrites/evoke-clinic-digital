import React from 'react';
import { Check } from 'lucide-react';
import { EvokeBadge } from '@/components/ui/EvokeBadge';
import { EvokeButton } from '@/components/ui/EvokeButton';
import { EvokeCard } from '@/components/ui/EvokeCard';
import { Link } from 'react-router-dom';
import { formatPrice } from '@/lib/utils';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface PricingTier {
  name: string;
  label: string;
  price: number;
  priceLabel: string;
  features: string[];
  isRecommended?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: 'Basic', label: 'Non-Surgical', price: 6000, priceLabel: '/session',
    features: ['PRP, GFC, Mesotherapy', 'No downtime', 'Same day return to work', 'Visible results in 3–4 sessions'],
  },
  {
    name: 'Standard', label: 'Hair Transplant FUE', price: 24999, priceLabel: '',
    features: ['Permanent results', 'AIIMS-trained surgeon', 'AI diagnostics included', '1-year follow-up', 'Lifetime consultations'],
    isRecommended: true,
  },
  {
    name: 'Premium', label: 'Advanced DHT/DenseGrow', price: 75000, priceLabel: '',
    features: ['Maximum density', 'DHT technique', '3,000+ grafts', '3 PRP sessions included', 'Priority booking', 'VIP recovery kit'],
  },
];

/** Transparent pricing section with tiered cards */
export const PricingSection: React.FC = () => {
  const revealRef = useScrollReveal();

  return (
    <section className="section-padding bg-evoke-navy">
      <div ref={revealRef as any} className="container mx-auto px-4">
        <div className="reveal-item" data-reveal="blur">
          <h2 className="display-heading text-white text-center mb-3">
            No Surprises. Ever. Transparent Pricing.
          </h2>
        </div>
        <p className="text-center text-white/70 mb-12 reveal-item" data-reveal="fade">
          Clear costs before you commit. EMI available on all procedures.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative rounded-card p-6 reveal-item ${tier.isRecommended ? 'bg-white ring-2 ring-evoke-gold' : 'bg-white/10 border border-white/20'}`} data-reveal="lift">
            {tier.isRecommended && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <EvokeBadge variant="gold">Most Popular</EvokeBadge>
              </div>
            )}
            <p className={`text-sm font-semibold uppercase tracking-wider mb-1 ${tier.isRecommended ? 'text-evoke-teal' : 'text-white/50'}`}>{tier.name}</p>
            <h3 className={`font-display text-xl font-bold mb-1 ${tier.isRecommended ? 'text-evoke-navy' : 'text-white'}`}>{tier.label}</h3>
            <p className={`text-3xl font-bold mb-4 ${tier.isRecommended ? 'text-evoke-cta' : 'text-white'}`}>
              {formatPrice(tier.price)}<span className="text-sm font-normal">{tier.priceLabel}</span>
            </p>
            <ul className="space-y-2.5 mb-6">
              {tier.features.map((f) => (
                <li key={f} className={`flex items-start gap-2 text-sm ${tier.isRecommended ? 'text-evoke-textBody' : 'text-white/80'}`}>
                  <Check className={`h-4 w-4 shrink-0 mt-0.5 ${tier.isRecommended ? 'text-evoke-success' : 'text-evoke-gold'}`} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

        <p className="text-center text-white/60 text-sm mt-8 reveal-item" data-reveal="fade">
          Or pay from just ₹2,999/month — 0% EMI with HDFC/ICICI
        </p>
        <div className="text-center mt-6 reveal-item" data-reveal="lift">
          <Link to="/pricing">
            <EvokeButton variant="ghost" size="lg">Get My Exact Quote →</EvokeButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

