import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { EvokeButton } from '@/components/ui/EvokeButton';
import { navItems } from '@/lib/data/seed';
import { cn } from '@/lib/utils';

/** Site header with transparent-to-solid scroll transition */
export const SiteHeader: React.FC = () => {
  const scrollY = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isScrolled = scrollY > 80;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
          isScrolled ? 'bg-white shadow-[0_2px_12px_rgba(0,0,0,0.1)]' : 'bg-transparent'
        )}
      >
        <div className="container mx-auto flex items-center justify-between h-[60px] md:h-[72px] px-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className={cn(
              'font-display text-2xl md:text-3xl font-bold tracking-tight transition-colors',
              isScrolled ? 'text-evoke-navy' : 'text-white'
            )}>
              Evoke
            </span>
            <span className={cn(
              'hidden sm:inline text-xs font-medium uppercase tracking-widest transition-colors',
              isScrolled ? 'text-evoke-textMuted' : 'text-white/70'
            )}>
              Hair & Skin
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'text-base font-semibold transition-colors border-b-2 border-transparent hover:border-evoke-teal pb-1',
                  isScrolled ? 'text-evoke-textBody' : 'text-white',
                  location.pathname === item.href && 'border-evoke-teal'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <EvokeButton variant="secondary" size="sm" className={cn(!isScrolled && 'border-white text-white hover:bg-white hover:text-evoke-navy')}>
              WhatsApp Us
            </EvokeButton>
            <Link to="/book">
              <EvokeButton variant="primary" size="sm">Book Consultation</EvokeButton>
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <a href="tel:+919821530022" className={cn('p-2 rounded-button', isScrolled ? 'text-evoke-navy' : 'text-white')} aria-label="Call us">
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn('p-2 rounded-button', isScrolled ? 'text-evoke-navy' : 'text-white')}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <nav className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl flex flex-col p-6 pt-20" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-lg font-semibold text-evoke-textBody border-b border-evoke-border/50 hover:text-evoke-teal transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <Link to="/book" onClick={() => setMobileOpen(false)}>
                <EvokeButton variant="primary" size="full">Book Consultation</EvokeButton>
              </Link>
              <EvokeButton variant="secondary" size="full">WhatsApp Us</EvokeButton>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
