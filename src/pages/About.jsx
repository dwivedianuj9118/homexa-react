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
        <div className="grid-2">
          {founders.map((f) => (
            <figure key={f.name} className="quote-card">
              <blockquote><p>“{f.quote}”</p></blockquote>
              <figcaption>
                <h3>{f.name}</h3>
                <p>{f.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section id="philosophy" eyebrow="Our Pillars" title="The philosophy" accent="of curation" dark>
        <ul className="grid-3 pillars">
          {pillars.map((p) => <li key={p.title} className="pillar"><h3>{p.title}</h3><p>{p.text}</p></li>)}
        </ul>
      </Section>

      <Section id="approach" eyebrow="Our Approach" title="Bespoke property" accent="acquisition">
        <div className="split">
          <ol className="numbered">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div><h3>{s.title}</h3><p>{s.text}</p></div>
              </li>
            ))}
          </ol>
          <Img file="hero.png" alt="Bright, modern living room in a premium Lucknow residence" width={900} height={1100} className="split-img" />
        </div>
      </Section>

      <Section id="corridors" eyebrow="Lucknow Real Estate" title="The Lucknow" accent="growth corridors" dark>
        <ul className="grid-4 corridors">
          {corridors.map((c) => (
            <li key={c.name}>
              <h3>{c.name}</h3>
              <p className="big">{c.growth}<small> Y-o-Y</small></p>
              <p>{c.text}</p>
            </li>
          ))}
        </ul>
        <p className="note">Appreciation figures are indicative estimates of annual capital growth and are not a guarantee of future returns.</p>
      </Section>

      <Section id="why" eyebrow="Exclusivity" title="Why" accent="Homexa Realty">
        <dl className="stats stats-light">
          <div><dt>Transactions advised</dt><dd>₹5B+</dd></div>
          <div><dt>Legal diligence record</dt><dd>100%</dd></div>
          <div><dt>Listing requests declined</dt><dd>80%</dd></div>
        </dl>
        <div className="grid-2 prose">
          <div><h3>We reject 80% of listing requests.</h3><p>Turning down most listings is how we protect buyers. Only projects that pass our legal and quality checks reach you.</p></div>
          <div><h3>Private wealth real estate counsel.</h3><p>Our advisors act as analysts, not sales brokers, and put your long-term goals ahead of commissions.</p></div>
        </div>
      </Section>

      <Section id="concierge" eyebrow="The Experience" title="The signature" accent="concierge">
        <div className="split">
          <ul className="grid-2 pillars">
            {concierge.map((c) => <li key={c.title} className="pillar"><h3>{c.title}</h3><p>{c.text}</p></li>)}
          </ul>
          <Img file="project1.png" alt="Minimal modern kitchen detail in a Homexa-curated home" width={900} height={1100} className="split-img" />
        </div>
      </Section>

      <CtaBanner title="Begin your curation." text="Book a confidential discussion or request a custom portfolio matched to your goals." label="Schedule Private Advisory" />
    </>
  );
}
