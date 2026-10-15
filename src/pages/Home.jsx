import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider.jsx';
import QuickSearch from '../components/QuickSearch.jsx';
import Seo from '../components/Seo.jsx';
import Section from '../components/Section.jsx';
import Img from '../components/Img.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import InsightCard from '../components/InsightCard.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import { ArrowIcon } from '../components/Icons.jsx';
import { featuredProjects } from '../data/projects.js';
import { insights } from '../data/insights.js';
import { organizationSchema, websiteSchema } from '../seo/schema.js';

const slides = [
  {
    image: 'hero_garden_widescreen_left.png',
    alt: 'Family playing together in a landscaped society garden at sunset',
    eyebrow: 'Plots & gated townships in Lucknow',
    title: 'Where life finds its',
    accent: 'perfect place',
    after: 'to live',
    text: 'Thoughtfully planned plots and gated townships in Lucknow, chosen for families who want a secure community and a sound investment.',
    to: '/projects',
    cta: 'Explore Lucknow Projects',
  },
  {
    image: 'gated_society_entrance_clean.png',
    alt: 'Secure gated entrance of a residential township in Lucknow',
    eyebrow: 'Gated townships',
    title: 'Secure communities,',
    accent: 'planned for families',
    text: 'Boundary walls, controlled entry, internal roads and green spaces in every township we recommend.',
    to: '/projects?type=Gated%20Township',
    cta: 'View Gated Townships',
  },
  {
    image: 'lucknow_ayodhya_plots_dusk.png',
    alt: 'Residential plots near Ayodhya Road, Lucknow at dusk',
    eyebrow: 'Invest in Lucknow’s growth corridors',
    title: 'Plots from',
    accent: '₹650 / sq ft',
    text: 'Verified plots on Sultanpur Road, Ayodhya Road, Outer Ring Road and the Purvanchal Expressway with clear titles.',
    to: '/projects',
    cta: 'See Prices & Locations',
  },
];

const pillars = [
  { title: 'Trust & Transparency', text: 'Every plot is backed by verified documents and honest, upfront pricing.' },
  { title: 'Carefully Selected', text: 'We shortlist only projects that pass our legal, location and quality checks.' },
  { title: 'Local Knowledge', text: 'Over a decade of on-ground experience across Lucknow’s growth corridors.' },
  { title: 'Future-Ready', text: 'Locations chosen for upcoming infrastructure and long-term appreciation.' },
];

const stats = [
  { value: '500+', label: 'Selected plots' },
  { value: '12+', label: 'Years in the Lucknow market' },
  { value: '100%', label: 'Clear, verified titles' },
];

const services = [
  { title: 'Residential Plots', text: 'Approved plots in well-connected localities, ready for you to build your home.' },
  { title: 'Gated Townships', text: 'Secure, planned communities with internal roads, greens and controlled entry.' },
  { title: 'Investment Opportunities', text: 'Plots in emerging corridors chosen for their appreciation potential.' },
  { title: 'Property Guidance', text: 'Help with site visits, documentation, loans and registry, start to finish.' },
];

const advantages = [
  { title: 'Carefully Selected', text: 'A short list of projects we would buy into ourselves.' },
  { title: 'Clear & Transparent', text: 'No hidden charges and every document shared before you commit.' },
  { title: 'Local Expertise', text: 'Advisors who know each corridor, road and upcoming development.' },
  { title: 'Guided Throughout', text: 'One point of contact from first call to registry and possession.' },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Residential Plots & Gated Townships in Lucknow"
        description="Buy verified residential plots and gated township plots in Lucknow on Sultanpur Road, Ayodhya Road, Outer Ring Road and more. Clear titles, local experts and site visits by Homexa Realty."
        path="/"
        jsonLd={[organizationSchema(), websiteSchema()]}
      />

      <HeroSlider slides={slides} />
      <QuickSearch />
      <div className="container trust-strip">
        <ul className="hero-faces" aria-hidden="true">
          <li><Img file="family1.png" alt="" width={96} height={96} /></li>
          <li><Img file="family2.png" alt="" width={96} height={96} /></li>
          <li><Img file="family3.png" alt="" width={96} height={96} /></li>
        </ul>
        <p><strong>Trusted by families across Lucknow</strong> · 500+ selected plots · 100% clear titles · 12+ years of local expertise</p>
      </div>

      <Section id="trust" eyebrow="Why Homexa Realty" title="Built around" accent="trust & value" className="section-white">
        <ul className="grid-4 pillars">
          {pillars.map((p) => (
            <li key={p.title} className="pillar">
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <section className="gallery container" aria-label="Life in our gated townships">
        <figure>
          <Img file="gated_society_entrance_clean.png" alt="Secure gated entrance of a residential society in Lucknow" width={900} height={1100} />
          <figcaption>Gated Townships</figcaption>
        </figure>
        <figure>
          <Img file="family_playing_society_garden.png" alt="Family enjoying the central garden of a gated community in Lucknow" width={900} height={1100} />
          <figcaption>Community Life</figcaption>
        </figure>
        <figure className="gallery-note">
          <figcaption>Safe &amp; Secure</figcaption>
          <p>Boundary walls, controlled entry and planned infrastructure in every township we recommend.</p>
        </figure>
      </section>

      <Section id="legacy" eyebrow="Our Legacy" title="Building the foundation for" accent="better living" className="section-tint">
        <dl className="stats">
          {stats.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="services" eyebrow="What we offer" title="Curated" accent="living" className="section-sand">
        <div className="split">
          <ol className="numbered">
            {services.map((s, i) => (
              <li key={s.title}>
                <span className="num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <Img file="lucknow_ayodhya_plots_dusk.png" alt="Residential plots near Ayodhya Road, Lucknow at dusk" width={900} height={1100} className="split-img" />
        </div>
      </Section>

      <Section id="featured" eyebrow="Featured Projects" title="Find your" accent="place">
        <div className="grid-4 project-grid">
          {featuredProjects.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
        <p className="center"><Link to="/projects" className="text-link">View all projects in Lucknow <ArrowIcon /></Link></p>
      </Section>

      <Section id="advantage" eyebrow="The Homexa Advantage" title="A better way to" accent="find your place" dark>
        <ol className="grid-4 numbered numbered-cards">
          {advantages.map((a, i) => (
            <li key={a.title}>
              <span className="num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="insights" eyebrow="Market Intelligence" title="The" accent="insight" className="section-white">
        <div className="grid-2">
          {insights.map((a) => <InsightCard key={a.slug} article={a} />)}
        </div>
        <p className="center"><Link to="/insights" className="text-link">Read all market insights <ArrowIcon /></Link></p>
      </Section>

      <Section id="testimonial" eyebrow="Client Stories" title="The Homexa" accent="experience" className="section-tint">
        <figure className="testimonial">
          <Img file="testimonial_rajiv_sharma.png" alt="Rajiv Sharma, NRI investor and Homexa Realty client" width={160} height={160} />
          <blockquote>
            <p>
              “Homexa Realty redefined our expectations completely. Their portfolio was carefully chosen and the whole process, from site visit to registry, was transparent and stress-free.”
            </p>
          </blockquote>
          <figcaption><strong>Rajiv Sharma</strong>, NRI Investor</figcaption>
        </figure>
      </Section>

      <CtaBanner />
    </>
  );
}
