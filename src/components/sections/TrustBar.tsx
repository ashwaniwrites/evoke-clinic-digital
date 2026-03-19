import React, { useRef } from 'react';
import { Users, Stethoscope, Star, Clock, Shield } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const items = [
  { icon: Users, text: '10,000+ Happy Patients' },
  { icon: Stethoscope, text: 'AIIMS-Trained Surgeons' },
  { icon: Star, text: '4.7★ Google Rating' },
  { icon: Clock, text: '15+ Years Experience' },
  { icon: Shield, text: 'Govt. Regulated Clinic' },
];

/** Horizontal trust bar with infinite marquee loop */
export const TrustBar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Infinite horizontal panning (moves container to -50% of its width, then seamlessly resets)
    const marquee = gsap.to('.marquee-track', {
      xPercent: -50,
      ease: 'none',
      duration: 30, // 30 seconds for a full loop is a nice ambient speed
      repeat: -1,
    });

    // Pause on hover for accessibility
    containerRef.current?.addEventListener('mouseenter', () => marquee.pause());
    containerRef.current?.addEventListener('mouseleave', () => marquee.play());

    return () => {
      containerRef.current?.removeEventListener('mouseenter', () => marquee.pause());
      containerRef.current?.removeEventListener('mouseleave', () => marquee.play());
    };
  }, { scope: containerRef });

  return (
    <section className="bg-evoke-navy py-4 overflow-hidden" ref={containerRef}>
      <div className="flex w-fit marquee-track cursor-default">
        {/* We render 4 identical copies array so it wraps cleanly even on massive ultrawide monitors */}
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div
            key={`${item.text}-${i}`}
            className="flex items-center gap-3 text-white shrink-0 px-8 lg:px-12"
          >
            <item.icon className="h-5 w-5 text-evoke-gold" />
            <span className="text-sm md:text-base font-semibold whitespace-nowrap tracking-wide">{item.text}</span>
            <span className="text-white/20 ml-8 lg:ml-12 hidden md:inline-block">★</span>
          </div>
        ))}
      </div>
    </section>
  );
};
