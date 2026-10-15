import Img from './Img.jsx';

/**
 * Inner-page banner. `variant` gives each section of the site its own look:
 *  - overlay:   full-bleed photo with a teal tint (default)
 *  - split:     sand background, text left, framed photo right
 *  - centered:  full-bleed photo, centred headline
 *  - editorial: white background, centred headline above a wide rounded photo
 *  - brand:     brand colour with an arched photo card
 */
export default function PageHero({ eyebrow, title, accent, text, image, alt, children, variant = 'overlay' }) {
  const photoBehind = variant === 'overlay' || variant === 'centered';
  const dark = photoBehind || variant === 'brand';

  const wrap = {
    overlay: 'py-14 md:py-20',
    centered: 'py-16 md:py-24 text-center',
    split: 'bg-sand py-10 md:py-14',
    editorial: 'bg-white pt-10 md:pt-14 text-center',
    brand: 'bg-brand bg-[radial-gradient(circle_at_10%_90%,rgba(201,164,106,0.25),transparent_40%)] py-10 md:py-14',
  }[variant];

  const inner = {
    split: 'grid items-center gap-8 md:grid-cols-2 md:gap-12',
    brand: 'grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12',
  }[variant] || '';

  return (
    <section aria-labelledby="page-title" className={`relative isolate overflow-hidden ${dark ? 'on-dark bg-brand text-white/85' : ''} ${wrap}`}>
      {photoBehind && (
        <>
          <Img file={image} alt={alt} width={1920} height={900} priority className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div aria-hidden="true" className={`absolute inset-0 -z-10 ${variant === 'centered' ? 'bg-[radial-gradient(ellipse_at_center,rgba(10,52,49,0.55),rgba(10,52,49,0.88))]' : 'bg-gradient-to-r from-[rgba(10,52,49,0.88)] to-[rgba(10,52,49,0.35)]'}`} />
        </>
      )}
      <div className={`container ${inner}`}>
        <div className={variant === 'centered' || variant === 'editorial' ? 'mx-auto max-w-3xl [&_ol]:justify-center' : ''}>
          <div className={dark ? 'text-white/75' : 'text-ink-muted'}>{children}</div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 id="page-title" className={`heading text-[2.2rem] md:text-5xl ${dark ? '!text-white' : ''}`}>
            {title}
            {accent && <> <em>{accent}</em></>}
          </h1>
          {text && <p className={`lead mt-3 ${variant === 'centered' || variant === 'editorial' ? 'mx-auto' : ''} ${dark ? '!text-white/80' : ''}`}>{text}</p>}
        </div>
        {variant === 'split' && (
          <Img file={image} alt={alt} width={1200} height={800} priority className="aspect-[4/3] w-full rounded-[1.5rem_1.5rem_1.5rem_6rem] object-cover shadow-lift" />
        )}
        {variant === 'brand' && (
          <Img file={image} alt={alt} width={900} height={900} priority className="mx-auto aspect-square w-full max-w-sm rounded-t-full rounded-b-3xl border-[6px] border-white/15 object-cover" />
        )}
      </div>
      {variant === 'editorial' && (
        <div className="container mt-8">
          <Img file={image} alt={alt} width={1600} height={600} priority className="aspect-[21/8] w-full rounded-t-3xl object-cover" />
        </div>
      )}
    </section>
  );
}
