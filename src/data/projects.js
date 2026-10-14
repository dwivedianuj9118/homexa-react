export const projects = [
  {
    slug: 'green-country-sultanpur-road',
    name: 'Green Country',
    price: 999,
    tag: 'Gated Township',
    location: 'Sultanpur Road, Lucknow',
    image: 'green_country_sultanpur_road.png',
    alt: 'Entrance and plotted streets of Green Country gated township on Sultanpur Road, Lucknow',
    summary:
      'A gated township on Sultanpur Road with planned internal roads and green spaces, close to the city’s eastern growth corridor.',
    highlights: ['Gated township with controlled entry', 'Planned internal roads', 'Sultanpur Road connectivity', 'Clear title verification'],
  },
  {
    slug: 'kohinoor-outer-ring-road',
    name: 'Kohinoor',
    price: 2100,
    tag: 'Ready to Move',
    location: 'Outer Ring Road, Near Ayodhya Highway, Lucknow',
    image: 'kohinoor_outer_ring_road.png',
    alt: 'Ready-to-move residential plots at Kohinoor on Outer Ring Road near Ayodhya Highway, Lucknow',
    summary:
      'Ready-to-move plots on the Outer Ring Road near Ayodhya Highway, suited to buyers who want to start construction right away.',
    highlights: ['Ready to move', 'Outer Ring Road frontage', 'Near Ayodhya Highway', 'Clear title verification'],
  },
  {
    slug: 'vaidehi-enclave-ayodhya-road',
    name: 'Vaidehi Enclave',
    price: 799,
    tag: 'Close to Metro',
    location: 'Near Ayodhya Road, Lucknow',
    image: 'vaidehi_enclave_ayodhya_road.png',
    alt: 'Residential plots at Vaidehi Enclave near Ayodhya Road and the Lucknow Metro',
    summary:
      'Residential plots near Ayodhya Road with easy access to the metro, offering city convenience at an entry-level price.',
    highlights: ['Close to metro', 'Ayodhya Road access', 'Entry-level pricing', 'Clear title verification'],
  },
  {
    slug: 'exotica-green-nagram',
    name: 'Exotica Green',
    price: 650,
    tag: 'Gated Township',
    location: 'Nagram, Near Raebareli Road, Lucknow',
    image: 'exotica_city_nagram_road.png',
    alt: 'Gated township layout at Exotica Green in Nagram near Raebareli Road, Lucknow',
    summary:
      'A gated township in Nagram near Raebareli Road, aimed at long-term investors looking at Lucknow’s southern expansion.',
    highlights: ['Gated township', 'Raebareli Road access', 'Long-term investment potential', 'Clear title verification'],
  },
  {
    slug: 'purwanchal-estate-expressway',
    name: 'Purwanchal Estate',
    price: 999,
    tag: 'Gated Township',
    location: 'Lucknow to Purwanchal Expressway, Lucknow',
    image: 'purwanchal_estate_expressway.png',
    alt: 'Plotted gated township at Purwanchal Estate along the Purvanchal Expressway, Lucknow',
    summary:
      'A gated plotted development along the Lucknow to Purvanchal Expressway, positioned on one of the region’s key infrastructure corridors.',
    highlights: ['Gated township', 'Expressway connectivity', 'Infrastructure-led growth', 'Clear title verification'],
  },
];

export const featuredProjects = projects.slice(0, 4);

export const formatPrice = (n) => `₹${n.toLocaleString('en-IN')}`;
export const findProject = (slug) => projects.find((p) => p.slug === slug);
