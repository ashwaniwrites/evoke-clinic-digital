export type TreatmentCategory = 'transplant' | 'non-surgical' | 'skin' | 'replacement';

export interface Treatment {
  id: string;
  slug: string;
  name: string;
  category: TreatmentCategory;
  tagline: string;
  description: string;
  startingFrom: number;
  technique?: string;
  duration?: string;
  recoveryTime?: string;
  sessionsRequired?: string;
  metaTitle: string;
  metaDescription: string;
}
