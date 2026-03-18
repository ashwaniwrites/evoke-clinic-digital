import React from 'react';
import { Link } from 'react-router-dom';
import { EvokeBadge } from '@/components/ui/EvokeBadge';
import { EvokeButton } from '@/components/ui/EvokeButton';
import type { Doctor } from '@/types/doctor';

interface Props {
  doctors: Doctor[];
}

/** Doctor spotlight cards section */
export const DoctorSpotlight: React.FC<Props> = ({ doctors }) => (
  <section className="section-padding bg-white">
    <div className="container mx-auto px-4">
      <h2 className="display-heading text-evoke-navy text-center mb-12">
        Your Care Is Personal. So Are Your Doctors.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {doctors.slice(0, 3).map((doc) => (
          <div key={doc.id} className="text-center">
            <div className="w-24 h-24 rounded-full ring-4 ring-evoke-gold mx-auto mb-4 overflow-hidden">
              <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <h3 className="font-display text-lg font-bold italic text-evoke-navy">{doc.name}</h3>
            <p className="text-sm text-evoke-textMuted mb-3">{doc.designation}</p>
            <div className="flex flex-wrap gap-1.5 justify-center mb-4">
              {doc.credentials.slice(0, 3).map((c) => (
                <EvokeBadge key={c} variant="default">{c}</EvokeBadge>
              ))}
            </div>
            <p className="text-sm text-evoke-textMuted mb-4">{doc.specialities.join(' · ')}</p>
            <Link to={`/doctors/${doc.slug}`}>
              <EvokeButton variant="link" size="sm">Book with {doc.name.split(' ')[0]} →</EvokeButton>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/doctors">
          <EvokeButton variant="secondary">Meet All Our Experts →</EvokeButton>
        </Link>
      </div>
    </div>
  </section>
);
