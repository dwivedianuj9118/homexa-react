import { Link } from 'react-router-dom';

export default function CtaBanner({
  title = 'Ready to find your dream property?',
  text = 'Explore verified plots and gated developments in Lucknow with trusted guidance from enquiry to registry.',
  label = 'Schedule a Site Visit',
}) {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="container cta-inner">
        <h2 id="cta-title" className="display">{title}</h2>
        <p>{text}</p>
        <Link to="/contact" className="btn btn-gold">{label}</Link>
      </div>
    </section>
  );
}
