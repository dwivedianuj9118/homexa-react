import { useState } from 'react';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from '../components/Icons.jsx';
import { site } from '../data/site.js';
import { breadcrumbSchema, organizationSchema } from '../seo/schema.js';

const crumbs = [{ to: '/', label: 'Home' }, { to: '/contact', label: 'Contact' }];
const interests = ['Residential Plot', 'Gated Township', 'Residential Property', 'Investment Opportunity', 'Commercial Property'];
const budgets = ['Under ₹20 Lakhs', '₹20–35 Lakhs', '₹35–50 Lakhs', '₹50 Lakhs–1 Crore', 'Above ₹1 Crore'];

// Set VITE_FORM_ENDPOINT to a form backend (Formspree, a CRM webhook, etc.) to receive
// enquiries as JSON. Without it, the form hands the enquiry off to WhatsApp.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

const empty = { firstName: '', lastName: '', email: '', phone: '', interest: '', location: '', budget: '', message: '' };

function validate(v) {
  const e = {};
  if (!v.firstName.trim()) e.firstName = 'Please enter your first name.';
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Please enter a valid email address.';
  if (!/^[+\d][\d\s-]{7,}$/.test(v.phone.trim())) e.phone = 'Please enter a valid phone number.';
  if (!v.interest) e.interest = 'Please choose what you are interested in.';
  return e;
}

function Field({ id, label, required, error, children }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-1.5 block text-[13px] font-semibold text-ink">
        {label} {required && <span aria-hidden="true" className="text-red-700">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-[13px] text-red-700" id={`${id}-error`} role="alert">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const bind = (name, required = false) => ({
    id: name,
    name,
    value: values[name],
    required,
    'aria-required': required || undefined,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
    onChange: (e) => setValues((v) => ({ ...v, [name]: e.target.value })),
  });

  async function onSubmit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(Object.keys(found)[0])?.focus();
      return;
    }
    setStatus('sending');
    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(values) });
        if (!res.ok) throw new Error(res.statusText);
      } else {
        const text = Object.entries(values).filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join('\n');
        window.open(`${site.whatsapp}?text=${encodeURIComponent(`New enquiry\n${text}`)}`, '_blank', 'noopener');
      }
      setStatus('sent');
      setValues(empty);
    } catch {
      setStatus('error');
    }
  }

  const { address } = site;
  const mapQuery = encodeURIComponent(`${address.street}, ${address.locality} ${address.postalCode}`);

  return (
    <>
      <Seo
        title="Contact Us & Book a Site Visit in Lucknow"
        description={`Talk to Homexa Realty’s property experts in Gomti Nagar, Lucknow. Call ${site.phone}, email us or send an enquiry to book a free site visit.`}
        path="/contact"
        image="luxury_real_estate_guidance_dark.png"
        jsonLd={[breadcrumbSchema(crumbs), organizationSchema()]}
      />
      <PageHero
        variant="overlay"
        eyebrow="Get in touch"
        title="Let’s find your"
        accent="right property"
        text="Connect with our property experts to explore verified plots and developments in Lucknow, with clear guidance from enquiry to site visit."
        image="luxury_real_estate_guidance_dark.png"
        alt="Homexa Realty advisor guiding a client through property documents"
      >
        <Breadcrumbs items={crumbs} />
      </PageHero>

      <section className="bg-white py-12 md:py-16" aria-label="Contact details and enquiry form">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div>
            <h2 className="text-2xl">Contact information</h2>
            <address className="not-italic">
              <dl className="mt-5 grid gap-4 [&_a]:text-brand [&_a:hover]:underline [&_dd]:mt-0.5 [&_dd]:pl-6 [&_dt]:flex [&_dt]:items-center [&_dt]:gap-2 [&_dt]:text-[12px] [&_dt]:font-bold [&_dt]:uppercase [&_dt]:tracking-[0.12em] [&_dt]:text-gold-dark [&_dd]:text-ink [&_svg]:h-4 [&_svg]:w-4">
                <div><dt><PinIcon /> Corporate office</dt><dd>{address.street}, {address.locality} {address.postalCode}</dd></div>
                <div><dt><PhoneIcon /> Phone</dt><dd><a href={`tel:${site.phoneHref}`}>{site.phone}</a></dd></div>
                <div><dt><MailIcon /> Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
                <div><dt><ClockIcon /> Working hours</dt><dd>{site.hours.map((h) => <span key={h.days} className="block">{h.days}: {h.time}</span>)}</dd></div>
              </dl>
            </address>
            <a href={site.whatsapp} className="btn-outline mt-6 text-brand" target="_blank" rel="noopener">Chat on WhatsApp</a>
            <iframe
              title="Map showing Homexa Realty office at Levana Cyber Heights, Gomti Nagar, Lucknow"
              className="mt-6 h-64 w-full rounded-2xl border-0 shadow-card"
              src={`https://www.google.com/maps?q=${mapQuery}&z=15&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-card md:p-8">
            <h2 className="text-2xl">Tell us what you’re looking for</h2>
            <p className="mb-5 mt-1.5 text-[14px]">Share your requirements and our team will help you explore the right property options in Lucknow. Fields marked <span className="text-red-700">*</span> are required.</p>
            <form onSubmit={onSubmit} noValidate>
              <div className="grid sm:grid-cols-2 sm:gap-4">
                <Field id="firstName" label="First name" required error={errors.firstName}><input className="field-input" type="text" autoComplete="given-name" {...bind('firstName', true)} /></Field>
                <Field id="lastName" label="Last name"><input className="field-input" type="text" autoComplete="family-name" {...bind('lastName')} /></Field>
              </div>
              <div className="grid sm:grid-cols-2 sm:gap-4">
                <Field id="email" label="Email address" required error={errors.email}><input className="field-input" type="email" autoComplete="email" {...bind('email', true)} /></Field>
                <Field id="phone" label="Phone number" required error={errors.phone}><input className="field-input" type="tel" autoComplete="tel" inputMode="tel" {...bind('phone', true)} /></Field>
              </div>
              <div className="grid sm:grid-cols-2 sm:gap-4">
                <Field id="interest" label="Interested in" required error={errors.interest}>
                  <select className="field-input" {...bind('interest', true)}>
                    <option value="">Select an option</option>
                    {interests.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </Field>
                <Field id="budget" label="Budget range">
                  <select className="field-input" {...bind('budget')}>
                    <option value="">Select a budget</option>
                    {budgets.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </Field>
              </div>
              <Field id="location" label="Preferred location"><input className="field-input" type="text" placeholder="e.g. Sultanpur Road" {...bind('location')} /></Field>
              <Field id="message" label="Message"><textarea className="field-input" rows={4} {...bind('message')} /></Field>
              <button type="submit" className="btn-gold mt-1 disabled:opacity-60" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
              </button>
              <p className="mt-3 text-[14px] font-semibold text-brand" role="status" aria-live="polite">
                {status === 'sent' && 'Thank you. Our team will contact you shortly.'}
                {status === 'error' && 'Something went wrong. Please call or WhatsApp us instead.'}
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
