import { Link } from 'react-router-dom';
import { legalNav, mainNav, site } from '../data/site.js';
import { SocialIcon } from './Icons.jsx';

const title = 'mb-3 font-sans text-[11px] font-bold uppercase tracking-eyebrow text-brand';
const link = 'text-[14px] text-ink-soft transition-colors hover:text-brand';

export default function Footer() {
  const social = site.social.filter((s) => s.url);
  return (
    <footer className="border-t-4 border-brand bg-sand">
      <div className="container grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
        <div>
          <Link to="/" className="font-serif text-xl font-semibold tracking-[0.14em] text-ink" aria-label={`${site.name} home`}>
            HOMEXA <span className="text-gold-dark">REALTY</span>
          </Link>
          <p className="mt-3 max-w-xs text-[14px] leading-relaxed">{site.tagline}</p>
          {social.length > 0 && (
            <ul className="mt-4 flex gap-2" aria-label="Social media">
              {social.map((s) => (
                <li key={s.name}>
                  <a href={s.url} target="_blank" rel="noopener" aria-label={`${site.name} on ${s.name}`} className="grid h-9 w-9 place-items-center rounded-full bg-white text-brand shadow-sm hover:bg-brand hover:text-white">
                    <SocialIcon name={s.name} width={17} height={17} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-labelledby="footer-nav-title">
          <h2 id="footer-nav-title" className={title}>Navigation</h2>
          <ul className="space-y-2">
            {mainNav.map((item) => <li key={item.to}><Link to={item.to} className={link}>{item.label}</Link></li>)}
          </ul>
        </nav>

        <nav aria-labelledby="footer-legal-title">
          <h2 id="footer-legal-title" className={title}>Corporate</h2>
          <ul className="space-y-2">
            {legalNav.map((item) => <li key={item.to}><Link to={item.to} className={link}>{item.label}</Link></li>)}
          </ul>
        </nav>

        <address className="not-italic">
          <h2 className={title}>Visit Us</h2>
          <p className="text-[14px] leading-relaxed">{site.address.street}, {site.address.locality} {site.address.postalCode}</p>
          <p className="mt-2"><a href={`tel:${site.phoneHref}`} className={link}>{site.phone}</a></p>
          <p><a href={`mailto:${site.email}`} className={link}>{site.email}</a></p>
        </address>
      </div>
      <div className="bg-sand-200">
        <div className="container flex flex-wrap justify-between gap-2 py-3.5 text-[13px] text-ink-muted">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Verified plots &amp; gated townships in Lucknow</p>
        </div>
      </div>
    </footer>
  );
}
