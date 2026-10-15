const tones = {
  paper: 'bg-paper',
  white: 'bg-white',
  tint: 'bg-brand-50',
  sand: 'bg-sand',
  brand: 'on-dark bg-brand bg-[radial-gradient(circle_at_85%_0%,rgba(201,164,106,0.2),transparent_45%)] text-white/80',
};

/**
 * Section with an eyebrow label and a real heading. The accent word is a separate
 * <em>, so the heading text reads "Curated Living" for crawlers and screen readers.
 */
export default function Section({ id, eyebrow, title, accent, level = 2, intro, tone = 'paper', center = false, className = '', children }) {
  const H = `h${level}`;
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className={`py-12 md:py-16 ${tones[tone]} ${className}`}>
      <div className="container">
        <header className={`mb-8 md:mb-10 ${center ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'}`}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <H id={headingId} className="heading">
            {title}
            {accent && <> <em>{accent}</em></>}
          </H>
          {intro && <p className={`lead mt-3 ${center ? 'mx-auto' : ''} ${tone === 'brand' ? '!text-white/75' : ''}`}>{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
