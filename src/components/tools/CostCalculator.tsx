import React, { useState } from 'react';
import { EvokeButton } from '@/components/ui/EvokeButton';
import { EvokeCard } from '@/components/ui/EvokeCard';
import { Link } from 'react-router-dom';
import { formatPrice } from '@/lib/utils';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Technique = 'FUE' | 'DHT' | 'FUT';

const costPerGraft: Record<Technique, number> = { FUE: 28, DHT: 35, FUT: 22 };

function getGraftRange(stage: number): [number, number] {
  if (stage <= 2) return [800, 1200];
  if (stage <= 4) return [1500, 2500];
  if (stage <= 6) return [2500, 3500];
  return [3500, 4500];
}

/** Interactive cost calculator for the pricing page */
export const CostCalculator: React.FC = () => {
  const [stage, setStage] = useState(3);
  const [technique, setTechnique] = useState<Technique>('FUE');

  const [minGrafts, maxGrafts] = getGraftRange(stage);
  const minCost = minGrafts * costPerGraft[technique];
  const maxCost = maxGrafts * costPerGraft[technique];
  const emiMin = Math.round(minCost / 12);

  return (
    <EvokeCard className="p-8 max-w-2xl mx-auto">
      <h3 className="display-heading text-evoke-navy text-center mb-8">Estimate Your Cost</h3>

      {/* Stage slider */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-evoke-navy mb-3">
          Hair Loss Stage: Norwood {stage}
        </label>
        <input
          type="range"
          min={1}
          max={7}
          value={stage}
          onChange={(e) => setStage(Number(e.target.value))}
          className="w-full accent-evoke-teal"
          aria-label="Hair loss stage"
        />
        <div className="flex justify-between text-xs text-evoke-textMuted mt-1">
          {Array.from({ length: 7 }, (_, i) => <span key={i}>{i + 1}</span>)}
        </div>
      </div>

      {/* Technique */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-evoke-navy mb-3">Preferred Technique</label>
        <div className="flex gap-3">
          {(['FUE', 'DHT', 'FUT'] as Technique[]).map(t => (
            <button
              key={t}
              onClick={() => setTechnique(t)}
              className={cn(
                'flex-1 py-3 rounded-full border text-sm font-semibold transition-all min-h-[44px]',
                technique === t
                  ? 'bg-evoke-teal text-white border-evoke-teal'
                  : 'border-evoke-border text-evoke-textBody hover:border-evoke-teal'
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <motion.div layout className="bg-evoke-bgLight rounded-card p-6 text-center space-y-3">
        <p className="text-sm text-evoke-textMuted">Estimated Grafts</p>
        <p className="text-2xl font-bold text-evoke-navy">{minGrafts.toLocaleString()} – {maxGrafts.toLocaleString()} grafts</p>
        <p className="text-sm text-evoke-textMuted">Estimated Cost</p>
        <p className="text-3xl font-bold text-evoke-cta">{formatPrice(minCost)} – {formatPrice(maxCost)}</p>
        <p className="text-sm text-evoke-textMuted">EMI from <strong className="text-evoke-navy">{formatPrice(emiMin)}/month</strong> (0% interest)</p>
      </motion.div>

      <Link to="/book" className="block mt-6">
        <EvokeButton variant="primary" size="full">Get Exact Quote →</EvokeButton>
      </Link>

      <p className="text-xs text-evoke-textMuted text-center mt-4">
        Estimates only. Actual cost confirmed after clinical assessment.
      </p>
    </EvokeCard>
  );
};
