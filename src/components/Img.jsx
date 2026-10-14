import { img } from '../data/site.js';

/** Image with explicit dimensions (prevents layout shift) and lazy loading by default. */
export default function Img({ file, alt, width = 1200, height = 800, priority = false, className }) {
  return (
    <img
      src={img(file)}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      fetchpriority={priority ? 'high' : undefined}
      decoding="async"
      className={className}
    />
  );
}
