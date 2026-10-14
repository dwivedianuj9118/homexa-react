import Img from './Img.jsx';

export default function PageHero({ eyebrow, title, accent, text, image, alt, children }) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <Img file={image} alt={alt} width={1920} height={900} priority className="page-hero-bg" />
      <div className="container page-hero-content">
        {children}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 id="page-title" className="display">
          {title}
          {accent && <> <em>{accent}</em></>}
        </h1>
        {text && <p className="lead">{text}</p>}
      </div>
    </section>
  );
}
