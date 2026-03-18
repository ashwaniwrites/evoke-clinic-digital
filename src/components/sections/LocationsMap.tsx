import React, { useState } from 'react';
import { MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EvokeButton } from '@/components/ui/EvokeButton';
import type { ClinicLocation } from '@/types/location';
import { cn } from '@/lib/utils';

interface Props {
  locations: ClinicLocation[];
}

/** Locations map and list section */
export const LocationsMap: React.FC<Props> = ({ locations }) => {
  const [activeId, setActiveId] = useState<string>(locations[0]?.id || '');

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="display-heading text-evoke-navy text-center mb-12">
          7 Clinics Across Delhi NCR. One Near You.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Map placeholder */}
          <div className="lg:col-span-3 bg-evoke-bgLight rounded-card min-h-[400px] flex items-center justify-center">
            <div className="text-center text-evoke-textMuted">
              <MapPin className="h-12 w-12 mx-auto mb-3 text-evoke-teal" />
              <p className="font-semibold">Google Maps</p>
              <p className="text-sm">Interactive map loads with API key</p>
            </div>
          </div>

          {/* Location list */}
          <div className="lg:col-span-2 max-h-[500px] overflow-y-auto space-y-2 pr-2">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveId(loc.id)}
                className={cn(
                  'w-full text-left p-4 rounded-card border transition-all',
                  activeId === loc.id
                    ? 'border-evoke-teal bg-evoke-bgLight'
                    : 'border-evoke-border hover:border-evoke-teal/50'
                )}
              >
                <h3 className="font-semibold text-evoke-navy text-sm">{loc.name}</h3>
                <p className="text-xs text-evoke-textMuted mt-1">{loc.address}, {loc.city} {loc.pincode}</p>
                <div className="flex items-center justify-between mt-2">
                  <a href={`tel:${loc.phone}`} className="flex items-center gap-1 text-xs text-evoke-teal" onClick={e => e.stopPropagation()}>
                    <Phone className="h-3 w-3" />{loc.phone}
                  </a>
                  <Link to={`/locations/${loc.slug}`} className="text-xs font-semibold text-evoke-cta" onClick={e => e.stopPropagation()}>
                    Book Here →
                  </Link>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
