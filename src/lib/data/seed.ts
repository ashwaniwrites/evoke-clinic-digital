import type { ClinicLocation } from '@/types/location';
import type { Doctor } from '@/types/doctor';
import type { Treatment } from '@/types/treatment';
import type { Testimonial, BlogArticle } from '@/types/booking';

export const locations: ClinicLocation[] = [
  {
    id: 'dwarka', slug: 'dwarka', name: 'Evoke Dwarka', area: 'Dwarka',
    address: '4th Floor, Plot 17, Sector 11, Dwarka', city: 'New Delhi', pincode: '110075',
    phone: '+91-9821530022', coordinates: { lat: 28.5921, lng: 77.0460 },
    nearestMetro: 'Dwarka Sector 11 Metro', doctorIds: ['shayista', 'sunakshi'],
    openHours: 'Mon–Sun 10AM–7PM',
  },
  {
    id: 'lajpat-nagar', slug: 'lajpat-nagar', name: 'Evoke Lajpat Nagar', area: 'Lajpat Nagar',
    address: '17A, Ring Road, Lajpat Nagar-IV', city: 'New Delhi', pincode: '110024',
    phone: '+91-9821530022', coordinates: { lat: 28.5700, lng: 77.2400 },
    nearestMetro: 'Lajpat Nagar Metro', doctorIds: ['shayista', 'megha'],
    openHours: 'Mon–Sun 10AM–7PM',
  },
  {
    id: 'rajouri-garden', slug: 'rajouri-garden', name: 'Evoke Rajouri Garden', area: 'Rajouri Garden',
    address: '12A, Third Floor, Rajouri Garden', city: 'New Delhi', pincode: '110027',
    phone: '+91-9821530022', coordinates: { lat: 28.6491, lng: 77.1219 },
    nearestMetro: 'Rajouri Garden Metro', doctorIds: ['megha', 'sunakshi'],
    openHours: 'Mon–Sun 10AM–7PM',
  },
  {
    id: 'gurgaon', slug: 'gurgaon', name: 'Evoke Gurgaon', area: 'Gurgaon',
    address: 'A 26/11, 2nd Floor, Golf Course Rd, DLF Phase 1', city: 'Gurgaon', pincode: '122002',
    phone: '+91-9821530022', coordinates: { lat: 28.4595, lng: 77.0266 },
    nearestMetro: 'HUDA City Centre Metro', doctorIds: ['aishwarya', 'shayista'],
    openHours: 'Mon–Sun 10AM–7PM',
  },
  {
    id: 'rohini', slug: 'rohini', name: 'Evoke Rohini', area: 'Rohini',
    address: 'C9/63, Pocket 9, Sector 8, Rohini', city: 'New Delhi', pincode: '110085',
    phone: '+91-9821530022', coordinates: { lat: 28.7158, lng: 77.1164 },
    nearestMetro: 'Rohini Sector 18 Metro', doctorIds: ['sunakshi'],
    openHours: 'Mon–Sun 10AM–7PM',
  },
  {
    id: 'preet-vihar', slug: 'preet-vihar', name: 'Evoke Preet Vihar', area: 'Preet Vihar',
    address: '10, First Floor, Bharati Artist Colony, Vikas Marg', city: 'New Delhi', pincode: '110092',
    phone: '+91-9821530022', coordinates: { lat: 28.6353, lng: 77.2952 },
    nearestMetro: 'Preet Vihar Metro', doctorIds: ['megha'],
    openHours: 'Mon–Sun 10AM–7PM',
  },
  {
    id: 'noida', slug: 'noida', name: 'Evoke Noida', area: 'Noida',
    address: '1st Floor, 595 Link Road, Above Soyi Restaurant, Sector 49', city: 'Noida', pincode: '201304',
    phone: '+91-9821530022', coordinates: { lat: 28.5855, lng: 77.3553 },
    nearestMetro: 'Noida Sector 51 Metro', doctorIds: ['shayista', 'sunakshi'],
    openHours: 'Mon–Sun 10AM–7PM',
  },
];

export const doctors: Doctor[] = [
  {
    id: 'shayista', slug: 'dr-shayista-kazi', name: 'Dr. Shayista Kazi',
    designation: 'Dermatologist', credentials: ['MBBS', 'MD Dermatology', 'Fellowship in Trichology'],
    specialities: ['Hair & Skin', 'Alopecia Areata', 'Hair Transplant'],
    bio: 'Dr. Shayista Kazi is a highly experienced dermatologist specializing in advanced hair restoration techniques. With over 10 years of experience, she has performed 3,000+ successful hair transplant procedures.',
    locationIds: ['dwarka', 'lajpat-nagar', 'gurgaon', 'noida'],
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    image: 'https://placeholder.co/400x400?text=Dr+Shayista+Kazi',
  },
  {
    id: 'megha', slug: 'dr-megha-tandon', name: 'Dr. Megha Tandon',
    designation: 'Dermatologist', credentials: ['MBBS', 'MD Dermatology', 'AIIMS Certified'],
    specialities: ['Acne Treatment', 'Skin Rejuvenation', 'PRP Therapy'],
    bio: 'Dr. Megha Tandon is a board-certified dermatologist with expertise in skin care and non-surgical hair restoration. She brings evidence-based approaches to every patient consultation.',
    locationIds: ['lajpat-nagar', 'rajouri-garden', 'preet-vihar'],
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    image: 'https://placeholder.co/400x400?text=Dr+Megha+Tandon',
  },
  {
    id: 'sunakshi', slug: 'dr-sunakshi', name: 'Dr. Sunakshi',
    designation: 'Cosmetologist', credentials: ['MBBS', 'Diploma in Cosmetology', 'Certified in Mesotherapy'],
    specialities: ['Mesotherapy', 'Personalised Medicine', 'GFC Treatment'],
    bio: 'Dr. Sunakshi is a leading cosmetologist focused on cutting-edge non-surgical treatments. She specializes in personalized treatment plans combining the latest in regenerative medicine.',
    locationIds: ['dwarka', 'rajouri-garden', 'rohini', 'noida'],
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    image: 'https://placeholder.co/400x400?text=Dr+Sunakshi',
  },
  {
    id: 'aishwarya', slug: 'dr-aishwarya-kumar', name: 'Dr. Aishwarya Kumar',
    designation: 'Oral & Maxillofacial Surgeon', credentials: ['BDS', 'MDS', 'Fellowship in Hair Restoration'],
    specialities: ['Hair Transplant Surgery', 'FUE', 'DHT Technique'],
    bio: 'Dr. Aishwarya Kumar is a skilled surgeon specializing in advanced hair transplant techniques at the Gurgaon location. His surgical precision ensures natural-looking results.',
    locationIds: ['gurgaon'],
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    image: 'https://placeholder.co/400x400?text=Dr+Aishwarya+Kumar',
  },
];

export const treatments: Treatment[] = [
  {
    id: 'fue', slug: 'fue-hair-transplant', name: 'FUE Hair Transplant', category: 'transplant',
    tagline: 'Gold-standard follicular unit extraction for permanent, natural results.',
    description: 'Follicular Unit Extraction (FUE) is the most advanced hair transplant technique available today. Individual hair follicles are extracted from the donor area and precisely transplanted to thinning or balding areas, creating natural-looking, permanent results with minimal scarring and quick recovery.',
    startingFrom: 24999, technique: 'FUE', duration: '6–8 hours', recoveryTime: '3–5 days',
    metaTitle: 'FUE Hair Transplant in Delhi | From ₹24,999 | Evoke Clinic',
    metaDescription: 'Advanced FUE hair transplant by AIIMS-trained surgeons. Natural results, minimal scarring. Starting ₹24,999. 10,000+ happy patients in Delhi NCR.',
  },
  {
    id: 'dht', slug: 'dht-densegrow', name: 'DHT / DenseGrow', category: 'transplant',
    tagline: 'Maximum density transplant for advanced hair loss.',
    description: 'DHT (Direct Hair Transplant) is our premium technique for achieving maximum hair density. Using advanced implantation technology, we can transplant 3,000+ grafts in a single session with exceptional precision and natural results.',
    startingFrom: 75000, technique: 'DHT', duration: '8–10 hours', recoveryTime: '5–7 days',
    metaTitle: 'DHT DenseGrow Hair Transplant Delhi | Evoke Clinic',
    metaDescription: 'Premium DHT hair transplant for maximum density. 3,000+ grafts per session. AIIMS surgeons. Book at Evoke Clinic Delhi.',
  },
  {
    id: 'fut', slug: 'fut-hair-transplant', name: 'FUT Hair Transplant', category: 'transplant',
    tagline: 'Strip method for maximum graft yield in a single session.',
    description: 'Follicular Unit Transplantation (FUT) involves harvesting a strip of scalp from the donor area to extract individual follicular units. This technique offers the highest graft yield per session, ideal for patients with advanced hair loss.',
    startingFrom: 19999, technique: 'FUT', duration: '5–7 hours', recoveryTime: '10–14 days',
    metaTitle: 'FUT Hair Transplant Delhi | Affordable | Evoke Clinic',
    metaDescription: 'FUT strip method hair transplant in Delhi. Maximum graft yield. Experienced surgeons. Starting ₹19,999.',
  },
  {
    id: 'bio-fue', slug: 'bio-fue', name: 'Bio FUE', category: 'transplant',
    tagline: 'FUE enhanced with PRP for faster healing and better growth.',
    description: 'Bio FUE combines traditional FUE hair transplant with PRP (Platelet-Rich Plasma) therapy. The PRP application during transplantation promotes faster healing, reduces recovery time, and enhances graft survival rate for superior results.',
    startingFrom: 35000, technique: 'Bio FUE', duration: '7–9 hours', recoveryTime: '3–5 days',
    metaTitle: 'Bio FUE Hair Transplant Delhi | Enhanced Results | Evoke',
    metaDescription: 'Bio FUE combines hair transplant with PRP for faster healing and better growth. Advanced technique at Evoke Clinic Delhi.',
  },
  {
    id: 'prp', slug: 'prp-therapy', name: 'PRP Therapy', category: 'non-surgical',
    tagline: 'Harness your body\'s own healing power to regrow hair.',
    description: 'Platelet-Rich Plasma therapy uses concentrated growth factors from your own blood to stimulate dormant hair follicles. A simple, minimally invasive procedure with no downtime — perfect for early-stage hair loss or as a complement to transplant surgery.',
    startingFrom: 6000, sessionsRequired: '4–6 sessions', duration: '45 minutes',
    metaTitle: 'PRP Hair Treatment Delhi | From ₹6,000 | Evoke Clinic',
    metaDescription: 'PRP therapy for hair regrowth in Delhi. Non-surgical, no downtime. Starting ₹6,000/session. Book at Evoke Clinic.',
  },
  {
    id: 'gfc', slug: 'gfc-treatment', name: 'GFC Treatment', category: 'non-surgical',
    tagline: 'Next-gen growth factor concentrate for stronger, thicker hair.',
    description: 'Growth Factor Concentrate (GFC) therapy is an advanced non-surgical treatment that delivers concentrated growth factors directly to hair follicles. More potent than traditional PRP, GFC stimulates robust hair growth with longer-lasting results.',
    startingFrom: 8000, sessionsRequired: '3–4 sessions', duration: '30 minutes',
    metaTitle: 'GFC Hair Treatment Delhi | Advanced | Evoke Clinic',
    metaDescription: 'GFC growth factor treatment for hair loss. More effective than PRP. Starting ₹8,000. Evoke Clinic Delhi NCR.',
  },
  {
    id: 'qr678', slug: 'qr678-therapy', name: 'QR678 Therapy', category: 'non-surgical',
    tagline: 'Patented Indian hair growth formula with proven clinical results.',
    description: 'QR678 is a patented, clinically-proven hair growth formula developed in India. This non-surgical injection therapy targets hair follicle stem cells to restart the growth cycle, particularly effective for androgenetic alopecia.',
    startingFrom: 7000, sessionsRequired: '6–8 sessions', duration: '20 minutes',
    metaTitle: 'QR678 Therapy Delhi | Proven Hair Growth | Evoke Clinic',
    metaDescription: 'QR678 patented hair growth therapy. Clinically proven results. Available at Evoke Clinic Delhi. Book consultation.',
  },
  {
    id: 'mesotherapy', slug: 'mesotherapy', name: 'Mesotherapy', category: 'non-surgical',
    tagline: 'Vitamin-rich micro-injections for scalp nourishment.',
    description: 'Mesotherapy delivers a customized cocktail of vitamins, minerals, and amino acids directly into the scalp through micro-injections. This treatment nourishes hair follicles, improves blood circulation, and promotes healthier, stronger hair growth.',
    startingFrom: 5000, sessionsRequired: '4–6 sessions', duration: '30 minutes',
    metaTitle: 'Mesotherapy for Hair Delhi | From ₹5,000 | Evoke Clinic',
    metaDescription: 'Scalp mesotherapy for hair growth in Delhi. Vitamin-rich micro-injections. Starting ₹5,000/session. Evoke Clinic.',
  },
  {
    id: 'hydrafacial', slug: 'hydrafacial', name: 'HydraFacial', category: 'skin',
    tagline: 'Deep cleanse, extract, and hydrate for instant glow.',
    description: 'HydraFacial is a medical-grade facial treatment that cleanses, extracts, and hydrates your skin in one session. Using patented Vortex technology, it removes impurities while delivering nourishing serums for immediately visible, radiant results.',
    startingFrom: 3500, duration: '45 minutes',
    metaTitle: 'HydraFacial in Delhi | Instant Glow | Evoke Skin Clinic',
    metaDescription: 'Professional HydraFacial treatment in Delhi. Deep cleanse and hydration. Instant results. Book at Evoke Skin Clinic.',
  },
  {
    id: 'acne', slug: 'acne-treatment', name: 'Acne Treatment', category: 'skin',
    tagline: 'Clinical-grade solutions for clear, confident skin.',
    description: 'Our comprehensive acne treatment program combines medical-grade facials, targeted peels, and advanced light therapy to treat active acne and reduce scarring. Personalized protocols designed by our dermatologists for lasting results.',
    startingFrom: 4000, sessionsRequired: '4–8 sessions', duration: '30–60 minutes',
    metaTitle: 'Acne Treatment Delhi | Dermatologist-Led | Evoke Clinic',
    metaDescription: 'Professional acne treatment by certified dermatologists. Customized plans for clear skin. Evoke Skin Clinic Delhi.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1', patientName: 'Rajesh K.', city: 'Dwarka', treatment: 'FUE Hair Transplant',
    rating: 5, text: 'I was losing confidence every day watching my hairline recede. Dr. Shayista and the team at Evoke Dwarka changed everything. 8 months post-transplant and I look 10 years younger!',
    beforeImageUrl: 'https://placeholder.co/400x300?text=Before+FUE+1', afterImageUrl: 'https://placeholder.co/400x300?text=After+FUE+1', monthsPostTreatment: 8,
  },
  {
    id: '2', patientName: 'Amit S.', city: 'Gurgaon', treatment: 'DHT / DenseGrow',
    rating: 5, text: 'The DHT technique gave me incredible density. I had advanced hair loss and was skeptical, but the results speak for themselves. Worth every rupee.',
    beforeImageUrl: 'https://placeholder.co/400x300?text=Before+DHT+2', afterImageUrl: 'https://placeholder.co/400x300?text=After+DHT+2', monthsPostTreatment: 12,
  },
  {
    id: '3', patientName: 'Priya M.', city: 'Noida', treatment: 'PRP Therapy',
    rating: 5, text: 'After just 4 PRP sessions, I noticed significantly less hair fall and new baby hair growth. Dr. Sunakshi made the whole experience comfortable and reassuring.',
    beforeImageUrl: 'https://placeholder.co/400x300?text=Before+PRP+3', afterImageUrl: 'https://placeholder.co/400x300?text=After+PRP+3', monthsPostTreatment: 6,
  },
  {
    id: '4', patientName: 'Vikram R.', city: 'Lajpat Nagar', treatment: 'FUE Hair Transplant',
    rating: 5, text: 'Transparent pricing, no hidden costs, and incredible results. The AI scalp scan gave me clarity about my condition before I even visited the clinic.',
    beforeImageUrl: 'https://placeholder.co/400x300?text=Before+FUE+4', afterImageUrl: 'https://placeholder.co/400x300?text=After+FUE+4', monthsPostTreatment: 10,
  },
  {
    id: '5', patientName: 'Sneha T.', city: 'Rajouri Garden', treatment: 'GFC Treatment',
    rating: 4, text: 'GFC treatment worked wonders for my thinning hair. Visible improvement after 3 sessions. The clinic is spotless and the staff is incredibly caring.',
    beforeImageUrl: 'https://placeholder.co/400x300?text=Before+GFC+5', afterImageUrl: 'https://placeholder.co/400x300?text=After+GFC+5', monthsPostTreatment: 4,
  },
  {
    id: '6', patientName: 'Arjun D.', city: 'Rohini', treatment: 'Bio FUE',
    rating: 5, text: 'Bio FUE with PRP gave me faster recovery than I expected. Was back at work in 3 days. The results at 6 months are already amazing and still improving.',
    beforeImageUrl: 'https://placeholder.co/400x300?text=Before+BioFUE+6', afterImageUrl: 'https://placeholder.co/400x300?text=After+BioFUE+6', monthsPostTreatment: 6,
  },
  {
    id: '7', patientName: 'Meera K.', city: 'Preet Vihar', treatment: 'HydraFacial',
    rating: 5, text: 'The HydraFacial left my skin absolutely glowing. Dr. Megha recommended the perfect treatment for my skin type. I now get it done every month.',
    beforeImageUrl: 'https://placeholder.co/400x300?text=Before+Hydra+7', afterImageUrl: 'https://placeholder.co/400x300?text=After+Hydra+7', monthsPostTreatment: 3,
  },
  {
    id: '8', patientName: 'Rohit P.', city: 'Dwarka', treatment: 'FUE Hair Transplant',
    rating: 5, text: 'From the initial AI scan to the final result — every step was professional and transparent. 12 months in and I couldn\'t be happier with my new hairline.',
    beforeImageUrl: 'https://placeholder.co/400x300?text=Before+FUE+8', afterImageUrl: 'https://placeholder.co/400x300?text=After+FUE+8', monthsPostTreatment: 12,
  },
];

export const blogArticles: BlogArticle[] = [
  {
    id: '1', slug: 'fue-vs-fut-which-is-right', title: 'FUE vs FUT: Which Hair Transplant is Right for You?',
    category: 'Hair Transplant', author: 'Dr. Shayista Kazi', authorImage: 'https://placeholder.co/48x48?text=SK',
    readTime: '8 min', excerpt: 'A comprehensive comparison of the two most popular hair transplant techniques, helping you make an informed decision.',
    thumbnail: 'https://placeholder.co/600x340?text=FUE+vs+FUT', content: '',
  },
  {
    id: '2', slug: 'prp-therapy-complete-guide', title: 'PRP Therapy: Complete Guide to Non-Surgical Hair Restoration',
    category: 'Non-Surgical', author: 'Dr. Megha Tandon', authorImage: 'https://placeholder.co/48x48?text=MT',
    readTime: '6 min', excerpt: 'Everything you need to know about PRP therapy — how it works, expected results, and who is the ideal candidate.',
    thumbnail: 'https://placeholder.co/600x340?text=PRP+Guide', content: '',
  },
  {
    id: '3', slug: 'hair-transplant-cost-delhi', title: 'Hair Transplant Cost in Delhi: Complete 2026 Price Guide',
    category: 'Cost & Finance', author: 'Dr. Shayista Kazi', authorImage: 'https://placeholder.co/48x48?text=SK',
    readTime: '10 min', excerpt: 'Transparent breakdown of hair transplant costs in Delhi. Understand what affects pricing and how to budget for your procedure.',
    thumbnail: 'https://placeholder.co/600x340?text=Cost+Guide+2026', content: '',
  },
];

export const navItems = [
  { label: 'Treatments', href: '/treatments' },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Results', href: '/results' },
  { label: 'Locations', href: '/locations' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
];
