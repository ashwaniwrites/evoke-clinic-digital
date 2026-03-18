export interface BookingState {
  step: 1 | 2 | 3 | 'confirmed';
  concern: 'transplant' | 'non-surgical' | 'skin' | 'unsure' | null;
  locationId: string | null;
  doctorId: string | null;
  date: string | null;
  time: string | null;
  name: string;
  mobile: string;
  email: string;
  note: string;
  bookingRef: string | null;
}

export interface Testimonial {
  id: string;
  patientName: string;
  city: string;
  treatment: string;
  rating: number;
  text: string;
  videoUrl?: string;
  beforeImageUrl: string;
  afterImageUrl: string;
  monthsPostTreatment: number;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  authorImage: string;
  readTime: string;
  excerpt: string;
  thumbnail: string;
  content: string;
}
