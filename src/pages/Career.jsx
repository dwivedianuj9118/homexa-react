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
        tone="white"
        intro="We hold ourselves to a global standard, reject aggressive sales tactics and give our people deep data, strong collateral and a collaborative workspace."
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {culture.map((c) => <li key={c.title} className="rounded-2xl border border-ink/10 border-t-2 border-t-gold bg-paper p-6"><h3>{c.title}</h3><p className="mt-1.5 text-[14px]">{c.text}</p></li>)}
        </ul>
      </Section>

      <Section id="openings" eyebrow="We’re hiring" title="Current" accent="openings" tone="brand">
        <div className="grid gap-5 lg:grid-cols-3">
          {jobs.map((j) => (
            <article key={j.slug} className="flex flex-col rounded-2xl bg-white p-6 text-ink-soft shadow-lift" id={j.slug}>
              <p className="eyebrow !text-gold-dark">{j.category}</p>
              <h3 className="!text-ink">{j.title}</h3>
              <p className="mt-1 text-[13px] font-semibold text-ink-muted">{j.location} · {j.workplace} · {j.type}</p>
              <p className="mt-3 text-[14px]">{j.description}</p>
              <h4 className="mt-4 text-base">Key requirements</h4>
              <ul className="mb-5 mt-2 grid list-disc gap-1 pl-5 text-[14px] marker:text-gold">
                {j.requirements.map((r) => <li key={r}>{r}</li>)}
              </ul>
              <a className="btn-brand mt-auto self-start" href={`mailto:${site.email}?subject=${encodeURIComponent(`Application: ${j.title}`)}`}>
                Apply for {j.title}
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section id="profile" eyebrow="Open application" title="Submit your" accent="profile">
        <div className="max-w-2xl">
          <p className="lead">Don’t see the right role? Send your CV and a short cover letter and we’ll reach out when a suitable position opens.</p>
          <p className="mt-5 flex flex-wrap items-center gap-4">
            <a className="btn-gold" href={`mailto:${site.email}?subject=${encodeURIComponent('General application')}`}>Email your CV</a>
            <Link to="/contact" className="text-link">or contact our office</Link>
          </p>
        </div>
      </Section>
    </>
  );
}
