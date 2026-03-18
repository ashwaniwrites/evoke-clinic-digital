export interface ClinicLocation {
  id: string;
  slug: string;
  name: string;
  area: string;
  address: string;
  city: string;
  pincode: string;
  phone: string;
  coordinates: { lat: number; lng: number };
  nearestMetro: string;
  doctorIds: string[];
  openHours: string;
}
