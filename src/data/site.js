// Single source of truth for business details. Values marked TODO were found on the
// live site but look like placeholders or typos; confirm them before launch.
export const SITE_URL = 'https://www.homexarealty.com';

// Images default to the live site's /images folder. Run `npm run fetch-images`
// and set VITE_IMAGE_BASE=/images in .env to self-host them.
const IMAGE_BASE = (import.meta.env.VITE_IMAGE_BASE || `${SITE_URL}/images`).replace(/\/$/, '');
export const img = (file) => `${IMAGE_BASE}/${file}`;

export const site = {
  name: 'Homexa Realty',
  legalName: 'Homexa Realty',
  tagline: "Curating Lucknow's most exceptional real estate opportunities for a discerning global clientele.",
  defaultDescription:
    'Homexa Realty offers verified residential plots and gated townships in Lucknow, with clear titles, local market expertise and guidance from enquiry to registry.',
  defaultImage: 'hero_garden_widescreen_left.png',
  phone: '+91 98765 43210', // TODO: looks like a placeholder number
  phoneHref: '+919876543210',
  whatsapp: 'https://wa.me/919876543210',
  email: 'info@homexrealty.com', // TODO: domain differs from homexarealty.com
  crmUrl: 'https://crm.homexrealty.com', // TODO: domain differs from homexarealty.com
  address: {
    street: '401, Levana Cyber Heights, Vibhuti Khand, Gomti Nagar',
    locality: 'Lucknow',
    region: 'Uttar Pradesh',
    postalCode: '226010',
    country: 'IN',
  },
  geo: { lat: 26.8606, lng: 81.0034 },
  hours: [
    { days: 'Monday to Saturday', time: '10:00 AM to 6:00 PM' },
    { days: 'Sunday', time: 'By appointment only' },
  ],
  // Live site links these to "#". Add real profile URLs here; empty entries are not rendered.
  social: [
    { name: 'Instagram', url: '' },
    { name: 'Facebook', url: '' },
    { name: 'LinkedIn', url: '' },
    { name: 'YouTube', url: '' },
  ],
};

export const mainNav = [
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'Story' },
  { to: '/insights', label: 'Insights' },
  { to: '/career', label: 'Career' },
  { to: '/contact', label: 'Contact' },
];

export const legalNav = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-conditions', label: 'Terms & Conditions' },
  { to: '/payment-policy', label: 'Payment Policy' },
  { to: '/rera-compliance', label: 'RERA Compliance' },
];
