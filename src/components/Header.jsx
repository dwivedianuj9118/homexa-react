import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { mainNav, site } from '../data/site.js';
import { ClockIcon, MailIcon, PhoneIcon } from './Icons.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [pathname]);

  const navLink = ({ isActive }) =>
    `relative py-1 text-[14px] font-medium transition-colors hover:text-brand after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-gold after:transition-transform ${
      isActive ? 'text-brand after:scale-x-100' : 'text-ink-soft after:scale-x-0 hover:after:scale-x-100'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-[0_8px_24px_-18px_rgba(15,76,71,0.5)] backdrop-blur">
      <div className="bg-brand text-[12px] text-white/85">
        <div className="container flex items-center justify-center gap-4 py-1.5 sm:justify-between">
          <span className="hidden items-center gap-1.5 sm:inline-flex"><ClockIcon width={13} height={13} /> {site.hours[0].days}, {site.hours[0].time}</span>
          <span className="inline-flex items-center gap-4">
            <a href={`tel:${site.phoneHref}`} className="inline-flex items-center gap-1.5 hover:text-gold"><PhoneIcon width={13} height={13} /> {site.phone}</a>
            <a href={`mailto:${site.email}`} className="hidden items-center gap-1.5 hover:text-gold sm:inline-flex"><MailIcon width={13} height={13} /> {site.email}</a>
          </span>
        </div>
      </div>

      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="whitespace-nowrap font-serif text-[22px] font-semibold tracking-[0.14em] text-ink" aria-label={`${site.name} home`}>
          HOMEXA <span className="text-gold-dark">REALTY</span>
        </Link>

        <button
          type="button"
          className="relative grid h-11 w-11 place-items-center lg:hidden"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span aria-hidden="true" className="flex w-6 flex-col gap-1.5">
            <span className={`h-0.5 bg-ink transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 bg-ink transition ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 bg-ink transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>

        <nav
          id="primary-nav"
          aria-label="Main"
          className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col gap-4 bg-white px-5 pb-6 pt-2 shadow-lift lg:static lg:flex lg:flex-row lg:items-center lg:gap-8 lg:p-0 lg:shadow-none`}
        >
          <ul className="flex flex-col lg:flex-row lg:gap-7">
            {mainNav.map((item) => (
              <li key={item.to} className="border-b border-ink/10 py-2.5 lg:border-0 lg:py-0">
                <NavLink to={item.to} className={navLink}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between gap-5">
            <a href={site.crmUrl} className="text-[14px] font-medium text-ink hover:text-brand" rel="nofollow noopener" target="_blank">Login</a>
            <Link to="/contact" className="btn-brand px-5 py-2.5">Book Site Visit</Link>
          </div>
        </nav>
      </div>
      <div className="h-0.5 bg-gradient-to-r from-gold/10 via-gold to-gold/10" />
    </header>
  );
}
