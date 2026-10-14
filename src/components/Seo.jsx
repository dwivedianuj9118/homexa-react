import { Helmet } from 'react-helmet-async';
import { site, absImg as img } from '../data/site.js';
import { absUrl } from '../seo/schema.js';

/**
 * Per-page head tags. Every route renders exactly one <Seo>, so each URL gets a
 * unique title, description, canonical and social preview.
 */
export default function Seo({ title, description, path = '/', image, type = 'website', jsonLd = [], noindex = false }) {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | Plots & Gated Townships in Lucknow`;
  const desc = description || site.defaultDescription;
  const url = absUrl(path);
  const ogImage = img(image || site.defaultImage);

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en-IN" />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'} />

      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}
