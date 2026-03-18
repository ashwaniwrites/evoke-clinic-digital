import React from 'react';
import { Microscope, ChevronDown } from 'lucide-react';
import { EvokeButton } from '@/components/ui/EvokeButton';
import { EvokeBadge } from '@/components/ui/EvokeBadge';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';

/** Hero section with CTA and scalp scan widget */
export const HeroSection: React.FC = () => {
  const scrollY = useScrollPosition();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <img
        src="https://placeholder.co/1920x1080?text=Evoke+Clinic+Hero"
        alt="Inside Evoke Hair & Skin Clinic — modern, clean treatment facility"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-evoke-navy/90 via-evoke-navy/60 to-transparent pointer-events-none" />

      <div className="relative container mx-auto px-4 py-24 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Copy block */}
          <div className="lg:col-span-7 text-white">
            <EvokeBadge variant="gold" className="mb-6">Delhi's #1 AI-Powered Hair Clinic</EvokeBadge>
            <h1 className="display-hero text-white mb-6 whitespace-pre-line">
              {"Restore Your Hair.\nReclaim Your Confidence."}
            </h1>
            <p className="body-large text-white/85 mb-8 max-w-xl">
              AIIMS-trained surgeons. AI scalp diagnostics. Transparent pricing from ₹24,999. Results that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link to="/book?source=scan">
                <EvokeButton variant="primary" size="lg" leftIcon={<Microscope className="h-5 w-5" />}>
                  Try Free AI Scalp Scan
                </EvokeButton>
              </Link>
              <Link to="/book">
                <EvokeButton variant="ghost" size="lg">
                  Book Consultation — Fee Waived
                </EvokeButton>
              </Link>
            </div>
            <p className="text-sm text-white/60">
              ★★★★★ 4.7/5 from 177 patients • Dwarka • Lajpat Nagar • Gurgaon + 4 more
            </p>
          </div>

          {/* Scalp scan widget */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-card shadow-cardHover p-6 max-w-[380px] mx-auto lg:mx-0">
              <h4 className="font-display text-xl font-bold text-evoke-navy mb-2">Free AI Scalp Analysis</h4>
              <p className="text-sm text-evoke-textMuted mb-4">
                Upload a photo. Get your hair loss stage + personalised treatment plan in 60 seconds.
              </p>
              <div className="border-2 border-dashed border-evoke-border rounded-xl py-8 text-center cursor-pointer hover:border-evoke-teal transition-colors">
                <div className="text-evoke-textMuted">
                  <Microscope className="h-10 w-10 mx-auto mb-2 text-evoke-teal" />
                  <p className="text-sm font-medium">Drop your photo here or click to browse</p>
                  <p className="text-xs mt-1 text-evoke-textMuted">JPG, PNG or WebP • Max 5MB</p>
                </div>
              </div>
              <Link to="/book?source=scan">
                <EvokeButton variant="primary" size="full" className="mt-4">
                  Analyse My Hair ▶
                </EvokeButton>
              </Link>
              <p className="text-xs text-evoke-textMuted text-center mt-3">
                🔒 Photo not stored. Analysis is instant & free.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ opacity: scrollY > 100 ? 0 : 0.7 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown className="h-8 w-8 text-white animate-bounce" />
      </motion.div>
    </section>
  );
};
