import React from 'react';
import { Microscope, Calendar, Scissors, TrendingUp, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  { icon: Microscope, title: 'Free AI Scalp Scan', description: 'Upload a photo. Know your hair loss stage and best treatment path in 60 seconds.' },
  { icon: Calendar, title: 'Expert Consultation', description: 'Meet an AIIMS-trained doctor. Get a personalised plan with transparent pricing. No pressure.' },
  { icon: Scissors, title: 'Your Procedure', description: 'Advanced FUE, DHT or non-surgical treatment. Minimal pain. Back to work in days.' },
  { icon: TrendingUp, title: 'Watch It Grow', description: 'Full results in 6–12 months. Lifetime free follow-up consultations. Your transformation, supported.' },
];

/** Four-step process explanation section */
export const HowItWorks: React.FC = () => {
  const revealRef = useScrollReveal();
  
  return (
    <section className="section-padding bg-evoke-bgLight">
      <div className="container mx-auto px-4">
        <h2 className="display-heading text-evoke-navy text-center mb-12">
          From Concern to Confidence — in 4 Steps.
        </h2>

        <div ref={revealRef as any} className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
          <div
            key={step.title}
            className="reveal-item relative text-center"
            data-reveal="lift"
          >
            <span className="font-display text-6xl font-bold text-evoke-teal/20 block mb-2">{i + 1}</span>
            <step.icon className="h-12 w-12 mx-auto text-evoke-teal mb-4" />
            <h3 className="font-display text-lg font-bold text-evoke-navy mb-2">{step.title}</h3>
            <p className="text-sm text-evoke-textMuted">{step.description}</p>
            {i < steps.length - 1 && (
              <ArrowRight className="hidden md:block absolute top-16 -right-4 h-6 w-6 text-evoke-gold" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};
