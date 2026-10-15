import Img from './Img.jsx';

/**
 * Inner-page banner. `variant` gives each section of the site its own look:
 *  - overlay:   full-bleed photo with a teal tint (default)
 *  - split:     light background, text left, framed photo right
 *  - centered:  full-bleed photo, centred headline
 *  - editorial: white background, centred headline above a wide rounded photo
 *  - brand:     solid brand colour with an offset photo card
 */
export default function PageHero({ eyebrow, title, accent, text, image, alt, children, variant = 'overlay' }) {
  const photoBehind = variant === 'overlay' || variant === 'centered';
  return (
    <section className={`page-hero page-hero--${variant}`} aria-labelledby="page-title">
      {photoBehind && <Img file={image} alt={alt} width={1920} height={900} priority className="page-hero-bg" />}
      <div className="container page-hero-inner">
        <div className="page-hero-content">
          {children}
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 id="page-title" className="display">
            {title}
            {accent && <> <em>{accent}</em></>}
          </h1>
          {text && <p className="lead">{text}</p>}
        </div>
        {!photoBehind && (
          <div className="page-hero-media">
            <Img file={image} alt={alt} width={1200} height={800} priority />
          </div>
        )}
      </div>
    </section>
  );
}
