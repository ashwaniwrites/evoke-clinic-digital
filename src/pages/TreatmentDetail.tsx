import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { treatments, testimonials, doctors } from '@/lib/data/seed';
import { EvokeButton } from '@/components/ui/EvokeButton';
import { EvokeBadge } from '@/components/ui/EvokeBadge';
import { EvokeCard } from '@/components/ui/EvokeCard';
import { BeforeAfterSlider } from '@/components/sections/GalleryPreview';
import { formatPrice } from '@/lib/utils';
import { CheckCircle, ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

/** Individual treatment page */
const TreatmentDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const treatment = treatments.find(t => t.slug === slug);

  if (!treatment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-evoke-textMuted">Treatment not found.</p>
      </div>
    );
  }

  const relatedTreatments = treatments.filter(t => t.category === treatment.category && t.id !== treatment.id).slice(0, 3);
  const filteredTestimonials = testimonials.slice(0, 4);
  const candidateChecks = [
    'You are experiencing visible hair thinning or bald patches',
    'You are in good general health with no uncontrolled conditions',
    'You have sufficient donor hair on the back or sides of your head',
    'You have realistic expectations about the results',
    'You are committed to following post-procedure care instructions',
  ];

  const recoverySteps = [
    { day: 'Day 0', title: 'Procedure Day', desc: 'Walk out the same day. Mild tenderness.' },
    { day: 'Day 3', title: 'Return to Work', desc: 'Resume normal activities. Minimal visible signs.' },
    { day: 'Week 2', title: 'Scabs Gone', desc: 'Transplanted area heals. Initial growth starts.' },
    { day: 'Month 1', title: 'Shock Loss', desc: 'Temporary shedding — completely normal.' },
    { day: 'Month 3', title: 'Growth Begins', desc: 'New hair starts growing visibly.' },
    { day: 'Month 12', title: 'Full Results', desc: 'Complete, natural-looking results.' },
  ];

  return (
    <div className="pt-[72px]">
      {/* Breadcrumb */}
      <div className="bg-evoke-bgLight border-b border-evoke-border">
        <div className="container mx-auto px-4 py-3 flex items-center gap-2 text-sm text-evoke-textMuted">
          <Link to="/" className="hover:text-evoke-teal"><Home className="h-4 w-4" /></Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/treatments" className="hover:text-evoke-teal">Treatments</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-evoke-navy font-medium">{treatment.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Hero */}
            <section>
              <EvokeBadge variant="teal" className="mb-4">{treatment.category.replace('-', ' ')}</EvokeBadge>
              <h1 className="display-hero text-evoke-navy mb-4">{treatment.name}</h1>
              <p className="body-large text-evoke-textMuted mb-6">{treatment.tagline}</p>
              <div className="grid grid-cols-2 gap-4">
                <BeforeAfterSlider
                  beforeUrl={`https://placeholder.co/500x375?text=Before+${treatment.slug}`}
                  afterUrl={`https://placeholder.co/500x375?text=After+${treatment.slug}`}
                  alt={`Before and after ${treatment.name}`}
                />
              </div>
              <div className="mt-6">
                <Link to="/book">
                  <EvokeButton variant="primary" size="lg">Book Consultation</EvokeButton>
                </Link>
              </div>
            </section>

            {/* Description */}
            <section>
              <h2 className="display-heading text-evoke-navy mb-4">What is {treatment.name}?</h2>
              <p className="text-evoke-textBody leading-relaxed mb-6">{treatment.description}</p>
              <img
                src={`https://placeholder.co/600x400?text=${treatment.slug}-diagram`}
                alt={`Diagram explaining ${treatment.name} procedure`}
                className="rounded-card w-full"
                loading="lazy"
              />
            </section>

            {/* Candidate checklist */}
            <section>
              <h2 className="display-heading text-evoke-navy mb-6">Am I a Candidate?</h2>
              <ul className="space-y-3">
                {candidateChecks.map((check) => (
                  <li key={check} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-evoke-success shrink-0 mt-0.5" />
                    <span className="text-evoke-textBody">{check}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-evoke-teal shrink-0 mt-0.5" />
                  <span className="text-evoke-teal font-medium">
                    Not sure? <Link to="/book?source=quiz" className="underline">Take our 2-minute assessment →</Link>
                  </span>
                </li>
              </ul>
            </section>

            {/* Gallery */}
            <section>
              <h2 className="display-heading text-evoke-navy mb-6">Before & After Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {filteredTestimonials.map((t) => (
                  <div key={t.id}>
                    <BeforeAfterSlider
                      beforeUrl={t.beforeImageUrl}
                      afterUrl={t.afterImageUrl}
                      alt={`Before and after - ${t.patientName}`}
                    />
                    <p className="text-xs text-evoke-textMuted mt-1">{t.patientName} · {t.monthsPostTreatment}mo</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Recovery timeline */}
            <section>
              <h2 className="display-heading text-evoke-navy mb-6">Recovery Timeline</h2>
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
                {recoverySteps.map((step, i) => (
                  <motion.div
                    key={step.day}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="min-w-[160px] text-center"
                  >
                    <div className={`w-4 h-4 rounded-full mx-auto mb-2 ${i <= 2 ? 'bg-evoke-teal' : 'bg-evoke-border'}`} />
                    <p className="text-xs font-bold text-evoke-teal uppercase">{step.day}</p>
                    <p className="text-sm font-semibold text-evoke-navy mt-1">{step.title}</p>
                    <p className="text-xs text-evoke-textMuted mt-1">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Pricing */}
            <section>
              <EvokeCard className="p-6 border-evoke-teal">
                <h2 className="display-heading text-evoke-navy mb-2">Starting from {formatPrice(treatment.startingFrom)}</h2>
                {treatment.duration && <p className="text-sm text-evoke-textMuted">Duration: {treatment.duration}</p>}
                {treatment.recoveryTime && <p className="text-sm text-evoke-textMuted">Recovery: {treatment.recoveryTime}</p>}
                <div className="mt-4">
                  <Link to="/pricing">
                    <EvokeButton variant="primary">Get My Exact Quote</EvokeButton>
                  </Link>
                </div>
              </EvokeCard>
            </section>

            {/* Related */}
            {relatedTreatments.length > 0 && (
              <section>
                <h2 className="display-heading text-evoke-navy mb-6">Related Treatments</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedTreatments.map((rt) => (
                    <Link key={rt.id} to={`/treatments/${rt.slug}`}>
                      <EvokeCard hover className="p-5">
                        <h3 className="font-display font-bold text-evoke-navy mb-1">{rt.name}</h3>
                        <p className="text-sm text-evoke-textMuted mb-2 line-clamp-2">{rt.tagline}</p>
                        <p className="text-sm font-semibold text-evoke-teal">From {formatPrice(rt.startingFrom)}</p>
                      </EvokeCard>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sticky sidebar */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-[96px]">
              <EvokeCard className="p-6 shadow-cardHover">
                <h3 className="font-display text-lg font-bold text-evoke-navy mb-4">Book a Consultation</h3>
                <p className="text-sm text-evoke-textMuted mb-4">{treatment.name}</p>
                <div className="space-y-3">
                  <select className="w-full min-h-[44px] rounded-button border border-evoke-border px-3 text-sm text-evoke-textBody" aria-label="Select location">
                    <option>Select location</option>
                    <option>Dwarka</option>
                    <option>Lajpat Nagar</option>
                    <option>Rajouri Garden</option>
                    <option>Gurgaon</option>
                    <option>Rohini</option>
                    <option>Preet Vihar</option>
                    <option>Noida</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Mobile number"
                    className="w-full min-h-[44px] rounded-button border border-evoke-border px-3 text-sm"
                    aria-label="Mobile number"
                  />
                  <Link to="/book" className="block">
                    <EvokeButton variant="primary" size="full">Book Consultation — Fee Waived</EvokeButton>
                  </Link>
                </div>
                <p className="text-xs text-evoke-textMuted text-center mt-3">
                  📞 Or call +91-9821530022
                </p>
              </EvokeCard>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default TreatmentDetail;
