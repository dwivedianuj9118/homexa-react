/**
 * Section with an eyebrow label and a real heading. The live site deleted spaces to
 * force line breaks ("CURATEDLIVING"); here `accent` is a separate span, so the
 * heading text stays "Curated Living" for crawlers and screen readers.
 */
export default function Section({ id, eyebrow, title, accent, level = 2, intro, className = '', children, dark = false }) {
  const H = `h${level}`;
  const headingId = `${id}-title`;
  return (
    <section id={id} className={`section ${dark ? 'section-dark ' : ''}${className}`} aria-labelledby={headingId}>
      <div className="container">
        <header className="section-head">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <H id={headingId} className="display">
            {title}
            {accent && <> <em>{accent}</em></>}
          </H>
          {intro && <p className="lead">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
