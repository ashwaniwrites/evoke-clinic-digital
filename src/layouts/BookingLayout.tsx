import React from 'react';
import { Outlet, Link } from 'react-router-dom';

/** Booking funnel layout with stripped nav */
export const BookingLayout: React.FC = () => (
  <div className="min-h-screen bg-evoke-bgLight">
    <header className="bg-white border-b border-evoke-border h-16 flex items-center px-4">
      <Link to="/" className="flex items-center gap-2 text-evoke-navy">
        <span className="font-display text-2xl font-bold">Evoke</span>
        <span className="text-sm text-evoke-textMuted">← Exit</span>
      </Link>
      <div className="flex-1 flex justify-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-evoke-teal" />
          <div className="w-8 h-0.5 bg-evoke-border" />
          <div className="w-3 h-3 rounded-full bg-evoke-border" />
          <div className="w-8 h-0.5 bg-evoke-border" />
          <div className="w-3 h-3 rounded-full bg-evoke-border" />
        </div>
      </div>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);
