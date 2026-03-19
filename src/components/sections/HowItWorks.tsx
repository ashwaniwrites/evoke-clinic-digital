import React, { useRef } from 'react';
import { Microscope, Calendar, Scissors, TrendingUp } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { icon: Microscope, title: 'Free AI Scalp Scan', description: 'Upload a photo. Know your hair loss stage and best treatment path in 60 seconds.' },
  { icon: Calendar, title: 'Expert Consultation', description: 'Meet an AIIMS-trained doctor. Get a personalised plan with transparent pricing. No pressure.' },
  { icon: Scissors, title: 'Your Procedure', description: 'Advanced FUE, DHT or non-surgical treatment. Minimal pain. Back to work in days.' },
  { icon: TrendingUp, title: 'Watch It Grow', description: 'Full results in 6–12 months. Lifetime free follow-up consultations. Your transformation, supported.' },
];

/** Four-step process explanation section */
export const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // 1. Line drawing scrub animation
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.steps-container',
        start: 'top 75%',
        end: 'bottom 60%',
        scrub: 1, // Smooth scrub
      }
    });

    timeline.fromTo('.trace-line-fill .w-full', 
      { scaleX: 0, transformOrigin: 'left center' }, 
      { scaleX: 1, ease: 'none', duration: 1 },
      0
    );
    timeline.fromTo('.trace-line-fill-mobile .h-full', 
      { scaleY: 0, transformOrigin: 'top center' }, 
      { scaleY: 1, ease: 'none', duration: 1 },
      0
    );

    // 2. Active states for steps exactly when line hits them
    const stepElements = gsap.utils.toArray('.process-step');
    stepElements.forEach((step: any, i) => {
      // The scrub timeline is 1 progress unit long, we divide it by the number of steps
      const startProgress = i * (1 / (steps.length - 1));
      
      timeline.fromTo(step,
        { filter: 'grayscale(100%) opacity(0.4)', scale: 0.9 },
        { 
          filter: 'grayscale(0%) opacity(1)', 
          scale: 1, 
          duration: 0.2, 
          ease: 'back.out(1.5)' 
        },
        startProgress - 0.1 // animate just slightly before the line hits
      );
    });

    // Heading entrance independent
    gsap.fromTo('.how-heading',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.how-heading', start: 'top 85%' }
      }
    );

  }, { scope: containerRef });

  return (
    <section className="section-padding bg-evoke-bgLight overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <h2 className="how-heading display-heading text-evoke-navy text-center mb-16 md:mb-24 relative z-10">
          From Concern to Confidence — in 4 Steps.
        </h2>

        <div className="steps-container relative">
          
          {/* Desktop connecting line track & fill */}
          <div className="hidden md:block absolute top-[44px] left-[12.5%] right-[12.5%] h-1 bg-evoke-border rounded-full z-0 overflow-hidden">
            <div className="trace-line-fill w-full h-full">
              <div className="w-full h-full bg-gradient-to-r from-evoke-teal to-evoke-gold scale-x-0" />
            </div>
          </div>

          {/* Mobile connecting line track & fill */}
          <div className="md:hidden absolute top-8 bottom-8 left-[38px] w-1 bg-evoke-border rounded-full z-0 overflow-hidden">
            <div className="trace-line-fill-mobile w-full h-full">
              <div className="w-full h-full bg-gradient-to-b from-evoke-teal to-evoke-gold scale-y-0" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="process-step relative flex md:block items-start gap-6 text-left md:text-center"
              >
                {/* Step Number Background */}
                <span className="hidden md:block absolute -top-12 left-1/2 -translate-x-1/2 font-display text-8xl font-black text-evoke-teal/5 z-0 select-none">
                  {i + 1}
                </span>

                {/* Icon Circle */}
                <div className="relative shrink-0 w-20 h-20 md:mx-auto bg-white rounded-full shadow-[0_10px_30px_-10px_rgba(0,128,128,0.2)] border-4 border-evoke-bgLight flex items-center justify-center z-10">
                  <step.icon className="h-8 w-8 text-evoke-teal" />
                  {/* Floating badge for mobile step number */}
                  <div className="md:hidden absolute -top-2 -right-2 w-6 h-6 bg-evoke-gold text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md">
                    {i + 1}
                  </div>
                </div>

                <div className="mt-2 md:mt-6 z-10 relative">
                  <h3 className="font-display text-lg font-bold text-evoke-navy mb-2">{step.title}</h3>
                  <p className="text-sm text-evoke-textMuted leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
