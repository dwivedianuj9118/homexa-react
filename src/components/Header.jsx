import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { mainNav, site } from '../data/site.js';
import { ClockIcon, MailIcon, PhoneIcon } from './Icons.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <span className="topbar-hide-sm"><ClockIcon width={14} height={14} /> {site.hours[0].days}, {site.hours[0].time}</span>
          <span>
            <a href={`tel:${site.phoneHref}`}><PhoneIcon width={14} height={14} /> {site.phone}</a>
            <span className="topbar-hide-sm"> &nbsp;·&nbsp; <a href={`mailto:${site.email}`}><MailIcon width={14} height={14} /> {site.email}</a></span>
          </span>
        </div>
      </div>
      <div className="container header-inner">
        <Link to="/" className="logo" aria-label={`${site.name} home`}>
          HOMEXA <span>REALTY</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="menu-bar" aria-hidden="true" />
        </button>

        <nav id="primary-nav" className={`primary-nav${open ? ' is-open' : ''}`} aria-label="Main">
          <ul>
            {mainNav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
          <div className="header-actions">
            <a href={site.crmUrl} className="link-quiet" rel="nofollow noopener" target="_blank">
              Login
            </a>
            <Link to="/contact" className="btn btn-gold">
              Book Site Visit
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
