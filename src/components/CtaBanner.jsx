import { Link } from 'react-router-dom';
import { site } from '../data/site.js';

export default function CtaBanner({
  title = 'Ready to find your dream property?',
  text = 'Explore verified plots and gated developments in Lucknow with trusted guidance from enquiry to registry.',
  label = 'Schedule a Site Visit',
}) {
  return (
    <section aria-labelledby="cta-title" className="py-12 md:py-14">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-600 px-6 py-10 text-center text-white/80 md:px-14 md:py-12">
          <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-2xl" />
          <h2 id="cta-title" className="relative text-3xl text-white md:text-4xl">{title}</h2>
          <p className="relative mx-auto mt-3 max-w-xl">{text}</p>
          <div className="relative mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-gold">{label}</Link>
            <a href={site.whatsapp} target="_blank" rel="noopener" className="btn-outline text-white">WhatsApp Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
