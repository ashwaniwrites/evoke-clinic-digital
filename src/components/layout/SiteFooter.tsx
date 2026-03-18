import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook } from 'lucide-react';
import { locations, treatments } from '@/lib/data/seed';
import { EvokeButton } from '@/components/ui/EvokeButton';
import { EvokeInput } from '@/components/ui/EvokeInput';

/** Site footer with navigation, contact info, and newsletter */
export const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-evoke-navy text-white">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-lg font-semibold">Get weekly hair care tips</p>
          <form className="flex gap-3 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="min-h-[44px] rounded-button border border-white/20 bg-white/10 px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-evoke-teal w-full md:w-72"
              aria-label="Email for newsletter"
            />
            <EvokeButton variant="secondary" size="sm" className="border-white text-white hover:bg-white hover:text-evoke-navy shrink-0">
              Subscribe
            </EvokeButton>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div>
            <span className="font-display text-2xl font-bold">Evoke</span>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Restoring confidence through advanced hair & skin science. Trusted by 10,000+ patients across Delhi NCR.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" aria-label="Instagram" className="text-white/70 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="text-white/70 hover:text-white transition-colors"><Youtube className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="text-white/70 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Col 2: Treatments */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/50">Treatments</h3>
            <ul className="space-y-2">
              {treatments.slice(0, 6).map((t) => (
                <li key={t.id}>
                  <Link to={`/treatments/${t.slug}`} className="text-sm text-white/70 hover:text-white transition-colors">
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Locations */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/50">Locations</h3>
            <ul className="space-y-2">
              {locations.map((l) => (
                <li key={l.id}>
                  <Link to={`/locations/${l.slug}`} className="text-sm text-white/70 hover:text-white transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/50">Contact</h3>
            <div className="space-y-3 text-sm text-white/70">
              <p><strong className="text-white/90">Grievance Officer:</strong><br />R K Shrivastaw</p>
              <p>
                <a href="mailto:rajiv@evokehair.com" className="hover:text-white transition-colors">rajiv@evokehair.com</a>
              </p>
              <p>
                <a href="tel:+919821530022" className="hover:text-white transition-colors">+91-9821530022</a>
              </p>
              <p>Mon–Sun 10AM–7PM</p>
              <p className="text-xs text-white/40 mt-2">Follifusion Health Pvt. Ltd.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© 2026 Evoke Hair & Skin Care · Privacy Policy · Terms · Sitemap</p>
          <p>Regulated under Clinical Establishments Act 2010</p>
        </div>
      </div>
    </footer>
  );
};
