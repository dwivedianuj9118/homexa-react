import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import Section from '../components/Section.jsx';
import { jobs } from '../data/careers.js';
import { site } from '../data/site.js';
import { breadcrumbSchema, jobSchema } from '../seo/schema.js';

const crumbs = [{ to: '/', label: 'Home' }, { to: '/career', label: 'Careers' }];

const culture = [
  { title: 'Absolute Integrity', text: 'Clean records, verified titles and complete transparency with every client.' },
  { title: 'Private Advisory Roots', text: 'We act as financial and lifestyle partners, putting client goals before commissions.' },
  { title: 'Design Focus', text: 'We champion architectural quality and sustainable engineering.' },
  { title: 'Elite Compensation', text: 'Competitive base pay with performance-based rewards.' },
];

export default function Career() {
  return (
    <>
      <Seo
        title="Careers in Real Estate in Lucknow"
        description="Join Homexa Realty in Lucknow. Open roles: Senior Luxury Client Advisor, Senior Real Estate Analyst and Creative Marketing Manager."
        path="/career"
        image="career_hero_employees.png"
        jsonLd={[breadcrumbSchema(crumbs), ...jobs.map(jobSchema)]}
      />
      <PageHero
        variant="brand"
        eyebrow="Join Homexa"
        title="Build your"
        accent="legacy"
        text="We are looking for visionary thinkers, market leaders and luxury specialists to help reshape Lucknow’s real estate market."
        image="career_hero_employees.png"
        alt="Homexa Realty team members collaborating in the office"
      >
        <Breadcrumbs items={crumbs} />
      </PageHero>

      <Section
        id="culture"
        eyebrow="Our Culture"
        title="A culture of"
        accent="excellence"
        className="section-white"
        intro="We hold ourselves to a global standard, reject aggressive sales tactics and give our people deep data, strong collateral and a collaborative workspace."
      >
        <ul className="grid-4 pillars">
          {culture.map((c) => <li key={c.title} className="pillar"><h3>{c.title}</h3><p>{c.text}</p></li>)}
        </ul>
      </Section>

      <Section id="openings" eyebrow="We’re hiring" title="Current" accent="openings" dark>
        <div className="jobs">
          {jobs.map((j) => (
            <article key={j.slug} className="job" id={j.slug}>
              <p className="eyebrow">{j.category}</p>
              <h3>{j.title}</h3>
              <p className="meta">{j.location} · {j.workplace} · {j.type}</p>
              <p>{j.description}</p>
              <h4>Key requirements</h4>
              <ul className="bullets">
                {j.requirements.map((r) => <li key={r}>{r}</li>)}
              </ul>
              <a className="btn btn-outline" href={`mailto:${site.email}?subject=${encodeURIComponent(`Application: ${j.title}`)}`}>
                Apply for {j.title}
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section id="profile" eyebrow="Open application" title="Submit your" accent="profile">
        <div className="prose">
          <p>Don’t see the right role? Send your CV and a short cover letter and we’ll reach out when a suitable position opens.</p>
          <p>
            <a className="btn btn-gold" href={`mailto:${site.email}?subject=${encodeURIComponent('General application')}`}>Email your CV</a>{' '}
            <Link to="/contact" className="text-link">or contact our office</Link>
          </p>
        </div>
      </Section>
    </>
  );
}
