import { SITE_URL, site, absImg as img } from '../data/site.js';
import { formatPrice } from '../data/projects.js';

export const absUrl = (path = '/') => `${SITE_URL}${path === '/' ? '/' : path.replace(/\/$/, '')}`;

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': `${SITE_URL}/#organization`,
  name: site.name,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/favicon.svg`,
  image: img(site.defaultImage),
  description: site.defaultDescription,
  telephone: site.phone,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
  areaServed: { '@type': 'City', name: 'Lucknow' },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '18:00',
    },
  ],
  sameAs: site.social.map((s) => s.url).filter(Boolean),
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: site.name,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-IN',
});

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.label,
    item: absUrl(item.to),
  })),
});

export const projectListSchema = (list) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: list.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: absUrl(`/projects/${p.slug}`),
    name: p.name,
  })),
});

export const projectSchema = (p) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: `${p.name}, ${p.location}`,
  description: p.summary,
  image: img(p.image),
  category: p.tag,
  brand: { '@id': `${SITE_URL}/#organization` },
  offers: {
    '@type': 'Offer',
    url: absUrl(`/projects/${p.slug}`),
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: p.price,
      priceCurrency: 'INR',
      unitText: `${formatPrice(p.price)} per sq ft`,
      unitCode: 'FTK',
    },
    seller: { '@id': `${SITE_URL}/#organization` },
  },
});

export const articleSchema = (a) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: a.title,
  description: a.excerpt,
  image: img(a.image),
  datePublished: a.date,
  dateModified: a.date,
  articleSection: a.category,
  mainEntityOfPage: absUrl(`/insights/${a.slug}`),
  author: { '@id': `${SITE_URL}/#organization` },
  publisher: { '@id': `${SITE_URL}/#organization` },
});

export const jobSchema = (j) => ({
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: j.title,
  description: `<p>${j.description}</p><ul>${j.requirements.map((r) => `<li>${r}</li>`).join('')}</ul>`,
  datePosted: '2026-10-01',
  employmentType: j.employmentType,
  hiringOrganization: { '@type': 'Organization', name: site.name, sameAs: `${SITE_URL}/` },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
  },
});
