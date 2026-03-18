import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { locations, doctors, testimonials } from '@/lib/data/seed';
import { EvokeButton } from '@/components/ui/EvokeButton';
import { EvokeCard } from '@/components/ui/EvokeCard';
import { EvokeBadge } from '@/components/ui/EvokeBadge';
import { MapPin, Phone, Clock, Train } from 'lucide-react';
import { Star } from 'lucide-react';

/** Individual location page */
const LocationDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = locations.find(l => l.slug === slug);

  if (!location) return <div className="min-h-screen flex items-center justify-center pt-20"><p>Location not found.</p></div>;

  const localDoctors = doctors.filter(d => d.locationIds.includes(location.id));
  const localTestimonials = testimonials.slice(0, 3);

  return (
    <div className="pt-[72px]">
      <section className="bg-evoke-navy py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="display-hero text-white mb-4">
            Hair Transplant in {location.area}, Delhi — Expert Care at Evoke
          </h1>
          <p className="body-large text-white/70">Trusted by thousands of patients in {location.area} and surrounding areas.</p>
        </div>
      </section>

      {/* Key info */}
      <div className="bg-white border-b border-evoke-border">
        <div className="container mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-start gap-2">
            <MapPin className="h-5 w-5 text-evoke-teal shrink-0 mt-0.5" />
            <div><p className="text-sm font-medium text-evoke-navy">Address</p><p className="text-xs text-evoke-textMuted">{location.address}, {location.city} {location.pincode}</p></div>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="h-5 w-5 text-evoke-teal shrink-0 mt-0.5" />
            <div><p className="text-sm font-medium text-evoke-navy">Phone</p><a href={`tel:${location.phone}`} className="text-xs text-evoke-teal">{location.phone}</a></div>
          </div>
          <div className="flex items-start gap-2">
            <Clock className="h-5 w-5 text-evoke-teal shrink-0 mt-0.5" />
            <div><p className="text-sm font-medium text-evoke-navy">Hours</p><p className="text-xs text-evoke-textMuted">{location.openHours}</p></div>
          </div>
          <div className="flex items-start gap-2">
            <Train className="h-5 w-5 text-evoke-teal shrink-0 mt-0.5" />
            <div><p className="text-sm font-medium text-evoke-navy">Nearest Metro</p><p className="text-xs text-evoke-textMuted">{location.nearestMetro}</p></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Map placeholder */}
        <div className="bg-evoke-bgLight rounded-card h-[300px] flex items-center justify-center">
          <MapPin className="h-12 w-12 text-evoke-teal" />
        </div>

        {/* Clinic photos */}
        <section>
          <h2 className="display-heading text-evoke-navy mb-6">Our {location.area} Clinic</h2>
          <div className="grid grid-cols-3 gap-4">
            {['Reception', 'Treatment+Room', 'Team'].map(label => (
              <img
                key={label}
                src={`https://placeholder.co/600x400?text=${location.area}+${label}`}
                alt={`${location.area} clinic ${label.toLowerCase()}`}
                className="rounded-card w-full aspect-video object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </section>

        {/* Doctors */}
        {localDoctors.length > 0 && (
          <section>
            <h2 className="display-heading text-evoke-navy mb-6">Doctors at {location.area}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {localDoctors.map(doc => (
                <EvokeCard key={doc.id} className="p-6 flex items-start gap-4">
                  <img src={doc.image} alt={doc.name} className="w-16 h-16 rounded-full ring-2 ring-evoke-gold object-cover" loading="lazy" />
                  <div>
                    <h3 className="font-display font-bold text-evoke-navy">{doc.name}</h3>
                    <p className="text-sm text-evoke-textMuted">{doc.designation}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {doc.credentials.map(c => <EvokeBadge key={c} variant="default">{c}</EvokeBadge>)}
                    </div>
                  </div>
                </EvokeCard>
              ))}
            </div>
          </section>
        )}

        {/* Testimonials */}
        <section>
          <h2 className="display-heading text-evoke-navy mb-6">Patients near {location.area} trust Evoke</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {localTestimonials.map(t => (
              <EvokeCard key={t.id} className="p-5">
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 text-evoke-gold fill-evoke-gold" />)}
                </div>
                <p className="text-sm text-evoke-textBody italic mb-3">"{t.text}"</p>
                <p className="text-xs font-semibold text-evoke-navy">{t.patientName} · {t.city}</p>
              </EvokeCard>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link to="/book">
            <EvokeButton variant="primary" size="lg">Book at {location.area} →</EvokeButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LocationDetail;
