import { Link } from 'react-router-dom';
import { legalNav, mainNav, site } from '../data/site.js';
import { SocialIcon } from './Icons.jsx';

export default function Footer() {
  const social = site.social.filter((s) => s.url);
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo" aria-label={`${site.name} home`}>
            HOMEXA <span>REALTY</span>
          </Link>
          <p>{site.tagline}</p>
          {social.length > 0 && (
            <ul className="social" aria-label="Social media">
              {social.map((s) => (
                <li key={s.name}>
                  <a href={s.url} target="_blank" rel="noopener" aria-label={`${site.name} on ${s.name}`}>
                    <SocialIcon name={s.name} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-labelledby="footer-nav-title">
          <h2 id="footer-nav-title" className="footer-title">Navigation</h2>
          <ul>
            {mainNav.map((item) => (
              <li key={item.to}><Link to={item.to}>{item.label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-legal-title">
          <h2 id="footer-legal-title" className="footer-title">Corporate</h2>
          <ul>
            {legalNav.map((item) => (
              <li key={item.to}><Link to={item.to}>{item.label}</Link></li>
            ))}
          </ul>
        </nav>

        <address className="footer-contact">
          <h2 className="footer-title">Visit Us</h2>
          <p>{site.address.street}, {site.address.locality} {site.address.postalCode}</p>
          <p><a href={`tel:${site.phoneHref}`}>{site.phone}</a></p>
          <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
        </address>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
