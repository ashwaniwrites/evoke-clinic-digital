import React from 'react';
import { CostCalculator } from '@/components/tools/CostCalculator';
import { PricingSection } from '@/components/sections/PricingSection';

/** Pricing page with calculator */
const PricingPage: React.FC = () => (
  <div className="pt-[72px]">
    <PricingSection />
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="display-heading text-evoke-navy text-center mb-3">Calculate Your Cost</h2>
        <p className="text-center text-evoke-textMuted mb-12">Get a personalised estimate based on your hair loss stage.</p>
        <CostCalculator />
      </div>
    </section>
  </div>
);

export default PricingPage;
