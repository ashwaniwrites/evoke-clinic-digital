import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EvokeButton } from '@/components/ui/EvokeButton';
import { EvokeCard } from '@/components/ui/EvokeCard';
import { EvokeInput } from '@/components/ui/EvokeInput';
import { locations, doctors } from '@/lib/data/seed';
import { Check, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Concern = 'transplant' | 'non-surgical' | 'skin' | 'unsure';

const concerns: { value: Concern; icon: string; title: string; desc: string }[] = [
  { value: 'transplant', icon: '💇', title: 'Hair Transplant', desc: 'Permanent hair restoration surgery' },
  { value: 'non-surgical', icon: '💉', title: 'Non-Surgical (PRP/GFC)', desc: 'Regrow hair without surgery' },
  { value: 'skin', icon: '✨', title: 'Skin Care', desc: 'HydraFacial, acne & rejuvenation' },
  { value: 'unsure', icon: '🔍', title: 'Not Sure — Need Assessment', desc: 'We\'ll help you find the right path' },
];

/** Booking funnel — Step 1: Select concern */
export const BookStep1: React.FC = () => {
  const [selected, setSelected] = useState<Concern | null>(null);
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h2 className="display-heading text-evoke-navy text-center mb-3">What brings you to Evoke today?</h2>
      <p className="text-center text-evoke-textMuted mb-10">Select your main concern. We'll match you with the right specialist.</p>

      <div className="grid grid-cols-2 gap-4">
        {concerns.map((c) => (
          <motion.button
            key={c.value}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelected(c.value)}
            className={cn(
              'p-6 rounded-card border-2 text-left transition-all',
              selected === c.value
                ? 'border-evoke-teal bg-evoke-bgLight ring-2 ring-evoke-teal/30'
                : 'border-evoke-border hover:border-evoke-teal/50'
            )}
          >
            <span className="text-4xl block mb-3">{c.icon}</span>
            <h3 className="font-display font-bold text-evoke-navy mb-1">{c.title}</h3>
            <p className="text-sm text-evoke-textMuted">{c.desc}</p>
          </motion.button>
        ))}
      </div>

      <EvokeButton
        variant="primary"
        size="full"
        className="mt-8"
        disabled={!selected}
        onClick={() => navigate('/book/slot')}
      >
        Continue →
      </EvokeButton>
    </div>
  );
};

/** Booking funnel — Step 2: Select slot */
export const BookStep2: React.FC = () => {
  const [locationId, setLocationId] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const navigate = useNavigate();

  const times = ['10:00', '10:30', '11:00', '11:30', '12:00', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'];

  const next7Days = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d.toISOString().split('T')[0];
  });

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="display-heading text-evoke-navy text-center mb-10">When and where would you like to come?</h2>

      {/* Location selector */}
      <div className="mb-8">
        <h3 className="font-semibold text-evoke-navy mb-4">Select Clinic</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setLocationId(loc.id)}
              className={cn(
                'p-4 rounded-card border text-left transition-all min-h-[44px]',
                locationId === loc.id ? 'border-evoke-teal bg-evoke-bgLight' : 'border-evoke-border hover:border-evoke-teal/50'
              )}
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-evoke-teal shrink-0" />
                <span className="font-semibold text-sm text-evoke-navy">{loc.area}</span>
              </div>
              <p className="text-xs text-evoke-textMuted mt-1 ml-6">{loc.address}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Date selector */}
      {locationId && (
        <div className="mb-8">
          <h3 className="font-semibold text-evoke-navy mb-4">Select Date</h3>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {next7Days.map((d) => {
              const date = new Date(d);
              const dayName = date.toLocaleDateString('en-IN', { weekday: 'short' });
              const dayNum = date.getDate();
              const month = date.toLocaleDateString('en-IN', { month: 'short' });
              return (
                <button
                  key={d}
                  onClick={() => { setSelectedDate(d); setSelectedTime(null); }}
                  className={cn(
                    'flex flex-col items-center px-4 py-3 rounded-card border min-w-[72px] transition-all min-h-[44px]',
                    selectedDate === d ? 'bg-evoke-teal text-white border-evoke-teal' : 'border-evoke-border hover:border-evoke-teal/50'
                  )}
                >
                  <span className="text-xs font-medium">{dayName}</span>
                  <span className="text-lg font-bold">{dayNum}</span>
                  <span className="text-xs">{month}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Time selector */}
      {selectedDate && (
        <div className="mb-8">
          <h3 className="font-semibold text-evoke-navy mb-4">Select Time</h3>
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
            {times.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={cn(
                  'px-3 py-2 rounded-full border text-sm font-medium transition-all min-h-[44px]',
                  selectedTime === t
                    ? 'bg-evoke-teal text-white border-evoke-teal'
                    : 'border-evoke-border text-evoke-textBody bg-evoke-bgLight hover:border-evoke-teal hover:text-evoke-teal'
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-3 mt-8">
        <Link to="/book" className="flex-1">
          <EvokeButton variant="secondary" size="full">← Back</EvokeButton>
        </Link>
        <EvokeButton
          variant="primary"
          size="full"
          className="flex-1"
          disabled={!locationId || !selectedDate || !selectedTime}
          onClick={() => navigate('/book/confirm')}
        >
          Continue →
        </EvokeButton>
      </div>
    </div>
  );
};

/** Booking funnel — Step 3: Confirm */
export const BookStep3: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto py-16 px-4 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="w-20 h-20 bg-evoke-success rounded-full mx-auto mb-6 flex items-center justify-center"
        >
          <Check className="h-10 w-10 text-white" />
        </motion.div>
        <h2 className="display-heading text-evoke-navy mb-2">You're confirmed! 🎉</h2>
        <p className="text-evoke-textMuted mb-6">Booking reference: EVK-{Math.random().toString(36).substring(2, 8).toUpperCase()}</p>
        <p className="text-sm text-evoke-textMuted mb-8">We've sent a WhatsApp confirmation to your mobile number.</p>
        <Link to="/">
          <EvokeButton variant="secondary">Back to Home</EvokeButton>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto py-16 px-4">
      <h2 className="display-heading text-evoke-navy text-center mb-10">Confirm Your Booking</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <EvokeInput label="Full Name" required placeholder="Your full name" />
        <EvokeInput label="Mobile Number" required type="tel" placeholder="+91" />
        <EvokeInput label="Email (optional)" type="email" placeholder="your@email.com" />
        <div>
          <label htmlFor="note" className="block text-sm font-medium text-evoke-textBody mb-1.5">
            Note (optional)
          </label>
          <textarea
            id="note"
            className="w-full min-h-[80px] rounded-button border border-evoke-border px-4 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-evoke-teal"
            placeholder="Any specific concerns..."
          />
        </div>

        <label className="flex items-start gap-2 text-sm text-evoke-textBody cursor-pointer">
          <input type="checkbox" required className="mt-1 accent-evoke-teal" />
          I agree to the Privacy Policy
        </label>

        <EvokeButton variant="primary" size="full" loading={loading} type="submit">
          Confirm Booking ▶
        </EvokeButton>
      </form>

      <div className="flex gap-3 mt-4">
        <Link to="/book/slot" className="flex-1">
          <EvokeButton variant="secondary" size="full">← Back</EvokeButton>
        </Link>
      </div>
    </div>
  );
};
