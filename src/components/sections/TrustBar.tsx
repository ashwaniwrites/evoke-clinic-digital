import React from 'react';
import { Users, Stethoscope, Star, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  { icon: Users, text: '10,000+ Happy Patients' },
  { icon: Stethoscope, text: 'AIIMS-Trained Surgeons' },
  { icon: Star, text: '4.7★ Google Rating' },
  { icon: Clock, text: '15+ Years Experience' },
  { icon: Shield, text: 'Govt. Regulated Clinic' },
];

/** Horizontal trust bar with stats and credentials */
export const TrustBar: React.FC = () => (
  <section className="bg-evoke-navy py-4 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="flex items-center gap-6 md:justify-center overflow-x-auto scrollbar-none snap-x snap-mandatory">
        {items.map((item, i) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex items-center gap-2 text-white shrink-0 snap-center"
          >
            <item.icon className="h-5 w-5 text-evoke-gold" />
            <span className="text-sm md:text-base font-semibold whitespace-nowrap">{item.text}</span>
            {i < items.length - 1 && <span className="hidden md:inline text-white/30 ml-4">|</span>}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
