import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import Section from '../components/Section.jsx';
import Img from '../components/Img.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import { breadcrumbSchema } from '../seo/schema.js';

const crumbs = [{ to: '/', label: 'Home' }, { to: '/about', label: 'Our Story' }];

const founders = [
  { name: 'Mr. Vivek Kumar Vishwakarma', role: 'Co-Founder & Director', quote: 'We hold every project to one standard: legal clarity first. A home is a generational decision, and our clients deserve complete transparency.' },
  { name: 'Mr. Om Nath', role: 'Co-Founder & Director', quote: 'We treat each acquisition as a strategic asset, advising clients long after the registry is signed.' },
];

const pillars = [
  { title: 'Legal Purity', text: 'A three-tier legal audit on every property, so titles are clean and free of outstanding liabilities.' },
  { title: 'Architectural Integrity', text: 'We select for ventilation, sustainable materials, thoughtful layouts and lasting detail.' },
  { title: 'Generational Value', text: 'We focus on micro-markets with strong demand and projected appreciation.' },
];

const steps = [
  { title: 'Bespoke Consulting', text: 'We start with your lifestyle and investment goals before showing a single property.' },
  { title: 'Off-Market Discovery', text: 'Access to off-market and pre-launch opportunities that never reach public portals.' },
  { title: 'White-Glove Legal Representation', text: 'Our legal partners handle paperwork, tax compliance and title transfer.' },
];

const corridors = [
  { name: 'Gomti Nagar Extension', growth: '18%', text: 'The city’s premium residential hub.' },
  { name: 'Sushant Golf City', growth: '14%', text: 'Golf-course township with luxury villas.' },
  { name: 'Shaheed Path', growth: '16%', text: 'Commercial corridor linking the airport to Gomti Nagar.' },
  { name: 'Vibhuti Khand', growth: '20%', text: 'Lucknow’s central business district.' },
];

const concierge = [
  { title: 'Private Chauffeur & Previews', text: 'Chauffeured site visits on your schedule.' },
  { title: 'Off-Market Portfolios', text: 'Curated shortlists matched to your brief.' },
  { title: 'Bespoke Styling Partners', text: 'Introductions to trusted architects and interior designers.' },
  { title: 'Private Office Advisory', text: 'Dedicated support for NRI and corporate acquisitions.' },
];

export default function About() {
  return (
    <>
      <Seo
        title="Our Story: Trusted Real Estate Advisors in Lucknow"
        description="Meet the founders of Homexa Realty and learn how our legal-first, curated approach helps families and NRIs buy property in Lucknow’s best growth corridors."
        path="/about"
        image="story_office_team.png"
        jsonLd={[breadcrumbSchema(crumbs)]}
      />
      <PageHero
        variant="centered"
        eyebrow="Our Story"
        title="The architecture"
        accent="of trust"
        text="We curate Lucknow’s finest properties for clients worldwide who value quality, thoughtful design and complete transparency."
        image="story_office_team.png"
        alt="Homexa Realty executive and advisory team in the Lucknow office"
      >
        <Breadcrumbs items={crumbs} />
      </PageHero>

      <Section id="leadership" eyebrow="Founders’ Vision" title="Leadership" accent="perspective">
        <div className="grid gap-5 md:grid-cols-2">
          {founders.map((f) => (
            <figure key={f.name} className="card p-7">
              <span className="font-serif text-5xl leading-none text-gold" aria-hidden="true">“</span>
              <blockquote className="-mt-3 font-serif text-xl italic leading-snug text-ink"><p>{f.quote}</p></blockquote>
              <figcaption className="mt-5 border-t border-ink/10 pt-4">
                <h3 className="text-lg">{f.name}</h3>
                <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold-dark">{f.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section id="philosophy" eyebrow="Our Pillars" title="The philosophy" accent="of curation" tone="tint">
        <ul className="grid gap-4 md:grid-cols-3">
          {pillars.map((p) => <li key={p.title} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card border-t-2 border-t-gold"><h3>{p.title}</h3><p className="mt-1.5 text-[14px]">{p.text}</p></li>)}
        </ul>
      </Section>

      <Section id="approach" eyebrow="Our Approach" title="Bespoke property" accent="acquisition">
        <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
          <ol className="grid gap-3">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-4 rounded-xl bg-white p-4 shadow-card">
                <span className="font-serif text-3xl font-semibold leading-none text-gold-dark" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div><h3>{s.title}</h3><p className="mt-1 text-[14px]">{s.text}</p></div>
              </li>
            ))}
          </ol>
          <Img file="hero.png" alt="Bright, modern living room in a premium Lucknow residence" width={900} height={1000} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lift" />
        </div>
      </Section>

      <Section id="corridors" eyebrow="Lucknow Real Estate" title="The Lucknow" accent="growth corridors" tone="brand">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {corridors.map((c) => (
            <li key={c.name} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
              <h3>{c.name}</h3>
              <p className="mt-2 font-serif text-5xl font-semibold leading-none text-gold">{c.growth}<small className="ml-1 font-sans text-sm text-white/60">Y-o-Y</small></p>
              <p className="mt-2 text-[14px] text-white/70">{c.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[13px] text-white/60">Appreciation figures are indicative estimates of annual capital growth and are not a guarantee of future returns.</p>
      </Section>

      <Section id="why" eyebrow="Exclusivity" title="Why" accent="Homexa Realty" tone="white">
        <dl className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="flex flex-col-reverse rounded-2xl border border-ink/10 bg-paper p-6"><dt className="mt-1 text-[12px] font-bold uppercase tracking-[0.14em] text-ink-muted">Transactions advised</dt><dd className="font-serif text-5xl font-semibold leading-none text-brand">₹5B+</dd></div>
          <div className="flex flex-col-reverse rounded-2xl border border-ink/10 bg-paper p-6"><dt className="mt-1 text-[12px] font-bold uppercase tracking-[0.14em] text-ink-muted">Legal diligence record</dt><dd className="font-serif text-5xl font-semibold leading-none text-brand">100%</dd></div>
          <div className="flex flex-col-reverse rounded-2xl border border-ink/10 bg-paper p-6"><dt className="mt-1 text-[12px] font-bold uppercase tracking-[0.14em] text-ink-muted">Listing requests declined</dt><dd className="font-serif text-5xl font-semibold leading-none text-brand">80%</dd></div>
        </dl>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="border-l-2 border-gold pl-5"><h3>We reject 80% of listing requests.</h3><p className="mt-1.5 text-[14px]">Turning down most listings is how we protect buyers. Only projects that pass our legal and quality checks reach you.</p></div>
          <div className="border-l-2 border-gold pl-5"><h3>Private wealth real estate counsel.</h3><p className="mt-1.5 text-[14px]">Our advisors act as analysts, not sales brokers, and put your long-term goals ahead of commissions.</p></div>
        </div>
      </Section>

      <Section id="concierge" eyebrow="The Experience" title="The signature" accent="concierge" tone="sand">
        <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
          <ul className="grid gap-4 sm:grid-cols-2">
            {concierge.map((c) => <li key={c.title} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card"><h3>{c.title}</h3><p className="mt-1.5 text-[14px]">{c.text}</p></li>)}
          </ul>
          <Img file="project1.png" alt="Minimal modern kitchen detail in a Homexa-curated home" width={900} height={1000} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lift" />
        </div>
      </Section>

      <CtaBanner title="Begin your curation." text="Book a confidential discussion or request a custom portfolio matched to your goals." label="Schedule Private Advisory" />
    </>
  );
}
