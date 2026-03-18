export interface Doctor {
  id: string;
  slug: string;
  name: string;
  designation: string;
  credentials: string[];
  specialities: string[];
  bio: string;
  locationIds: string[];
  availableDays: string[];
  image: string;
}
