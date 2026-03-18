import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { EvokeButton } from '@/components/ui/EvokeButton';

/** Sticky bottom CTA bar for mobile (hidden on /book routes) */
export const StickyBottomBar: React.FC = () => {
  const location = useLocation();
  if (location.pathname.startsWith('/book')) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-evoke-border h-16 flex items-center px-4 gap-3 lg:hidden">
      <a href="tel:+919821530022" className="flex-1">
        <EvokeButton variant="secondary" size="full" leftIcon={<Phone className="h-4 w-4" />}>
          Call Us
        </EvokeButton>
      </a>
      <Link to="/book" className="flex-1">
        <EvokeButton variant="primary" size="full">
          Book Consultation
        </EvokeButton>
      </Link>
    </div>
  );
};
