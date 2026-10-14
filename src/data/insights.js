export const insights = [
  {
    slug: 'why-lucknow-is-emerging-as-a-key-real-estate-market',
    title: 'Why Lucknow Is Emerging as a Key Real Estate Market',
    category: 'Market Report',
    date: '2026-08-01',
    dateLabel: 'Aug 2026',
    image: 'lucknow_market_growth.png',
    alt: 'Lucknow skyline and growth corridors illustrating rising residential demand',
    excerpt:
      'Infrastructure, connectivity and urban expansion are driving strong residential demand across Lucknow’s growth corridors.',
    stat: { value: '20%', label: 'CAGR in residential demand, FY2021 to FY2026 (CRISIL)' },
    body: [
      'Lucknow has moved from a steady regional market to one of North India’s most active residential destinations. New expressways, the Outer Ring Road and metro expansion have opened up corridors that were once considered peripheral.',
      'According to CRISIL, residential demand in the city grew at a compound annual rate of about 20% between FY2021 and FY2026. Much of that demand is coming from end users moving out of rented housing and from NRIs buying in their home city.',
      'For buyers, the takeaway is that location within the city now matters more than the city itself. Corridors such as Sultanpur Road, Ayodhya Road and the Purvanchal Expressway belt each have their own timeline for infrastructure and price movement.',
    ],
  },
  {
    slug: 'why-gated-plots-are-gaining-ground',
    title: 'Why Gated Plots Are Gaining Ground',
    category: 'Plotted Developments',
    date: '2026-08-15',
    dateLabel: 'Aug 2026',
    image: 'gated_plots_growth.png',
    alt: 'Gated plotted community with boundary wall, internal roads and landscaped greens',
    excerpt:
      'Families are choosing gated plots for security, planned infrastructure and the freedom to build their own home.',
    body: [
      'Gated plotted developments combine the freedom of an independent house with the security and amenities of a planned community.',
      'Buyers get controlled access, internal roads, drainage and common green spaces, while keeping the flexibility to design and build on their own schedule.',
      'Because land appreciates while buildings depreciate, plots in well-connected gated townships have also become a preferred long-term investment for families and NRIs.',
    ],
  },
];

export const findInsight = (slug) => insights.find((a) => a.slug === slug);
