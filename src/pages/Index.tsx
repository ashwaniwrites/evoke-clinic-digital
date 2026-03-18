import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustBar } from '@/components/sections/TrustBar';
import { TreatmentCards } from '@/components/sections/TreatmentCards';
import { SocialProof } from '@/components/sections/SocialProof';
import { GalleryPreview } from '@/components/sections/GalleryPreview';
import { DoctorSpotlight } from '@/components/sections/DoctorSpotlight';
import { PricingSection } from '@/components/sections/PricingSection';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { LocationsMap } from '@/components/sections/LocationsMap';
import { BlogPreview } from '@/components/sections/BlogPreview';
import { treatments, testimonials, doctors, locations, blogArticles } from '@/lib/data/seed';

/** Evoke Hair & Skin Clinic — Homepage */
const Index: React.FC = () => (
  <>
    <HeroSection />
    <TrustBar />
    <TreatmentCards treatments={treatments} />
    <SocialProof testimonials={testimonials} />
    <GalleryPreview testimonials={testimonials} />
    <DoctorSpotlight doctors={doctors} />
    <PricingSection />
    <HowItWorks />
    <LocationsMap locations={locations} />
    <BlogPreview articles={blogArticles} />
  </>
);

export default Index;
