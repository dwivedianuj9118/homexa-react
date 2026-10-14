import { Link } from 'react-router-dom';
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

      <section className="hero" aria-labelledby="hero-title">
        <Img file="hero_garden_widescreen_left.png" alt="Family playing together in a landscaped society garden at sunset" width={1920} height={1080} priority className="hero-bg" />
        <div className="container hero-content">
          <p className="eyebrow">Plots &amp; gated townships in Lucknow</p>
          <h1 id="hero-title" className="display hero-title">
            Where life finds its <em>perfect place</em> to live
          </h1>
          <p className="lead">
            Thoughtfully planned plots and gated townships in Lucknow, chosen for families who want a secure community and a sound investment.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-gold">Explore Lucknow Projects <ArrowIcon /></Link>
            <Link to="/contact" className="btn btn-outline">Book a Site Visit</Link>
          </div>
          <ul className="hero-faces" aria-label="Families who chose Homexa">
            <li><Img file="family1.png" alt="Young couple with their daughter outside their new home" width={96} height={96} /></li>
            <li><Img file="family2.png" alt="Parents and two children smiling in a garden" width={96} height={96} /></li>
            <li><Img file="family3.png" alt="Grandparents with their grandchildren in a gated community park" width={96} height={96} /></li>
          </ul>
        </div>
      </section>

      <Section id="trust" eyebrow="Why Homexa Realty" title="Built around" accent="trust & value">
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

      <Section id="legacy" eyebrow="Our Legacy" title="Building the foundation for" accent="better living" dark>
        <dl className="stats">
          {stats.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="services" eyebrow="What we offer" title="Curated" accent="living">
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

      <Section id="insights" eyebrow="Market Intelligence" title="The" accent="insight">
        <div className="grid-2">
          {insights.map((a) => <InsightCard key={a.slug} article={a} />)}
        </div>
        <p className="center"><Link to="/insights" className="text-link">Read all market insights <ArrowIcon /></Link></p>
      </Section>

      <Section id="testimonial" eyebrow="Client Stories" title="The Homexa" accent="experience">
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
