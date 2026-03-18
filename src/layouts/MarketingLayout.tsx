import React from 'react';
import { Outlet } from 'react-router-dom';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { StickyBottomBar } from '@/components/layout/StickyBottomBar';

/** Marketing layout with full header, footer, and mobile sticky bar */
export const MarketingLayout: React.FC = () => (
  <>
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:text-evoke-navy focus:font-bold"
    >
      Skip to main content
    </a>
    <SiteHeader />
    <main id="main-content">
      <Outlet />
    </main>
    <SiteFooter />
    <StickyBottomBar />
  </>
);
