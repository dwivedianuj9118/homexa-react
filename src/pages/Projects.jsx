import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import Section from '../components/Section.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import { projects } from '../data/projects.js';
import { breadcrumbSchema, projectListSchema } from '../seo/schema.js';

const crumbs = [{ to: '/', label: 'Home' }, { to: '/projects', label: 'Projects' }];
const tags = ['All', ...new Set(projects.map((p) => p.tag))];

export default function Projects() {
  const [params] = useSearchParams();
  const [tag, setTag] = useState('All');
  const [max, setMax] = useState(0);

  // Apply filters from the home page search (?type=&max=) after hydration, so the
  // pre-rendered HTML (which has no query string) still matches the first render.
  useEffect(() => {
    const t = params.get('type');
    setTag(t && tags.includes(t) ? t : 'All');
    setMax(Number(params.get('max')) || 0);
  }, [params]);

  const list = projects.filter((p) => (tag === 'All' || p.tag === tag) && (!max || p.price <= max));

  return (
    <>
      <Seo
        title="Plot & Gated Township Projects in Lucknow"
        description="Compare verified plotted projects in Lucknow: Green Country, Kohinoor, Vaidehi Enclave, Exotica Green and Purwanchal Estate. Prices from ₹650/sq ft with clear titles."
        path="/projects"
        jsonLd={[breadcrumbSchema(crumbs), projectListSchema(projects)]}
      />
      <PageHero
        variant="split"
        eyebrow="All Projects"
        title="Plots & gated townships"
        accent="in Lucknow"
        text="Verified gated townships, residential plots and investment opportunities across Lucknow’s fastest-growing corridors."
        image="gated_township.png"
        alt="Aerial view of a gated township with plotted streets and green spaces in Lucknow"
      >
        <Breadcrumbs items={crumbs} />
      </PageHero>

      <Section id="projects" eyebrow="Featured Projects" title="Find your" accent="place">
        <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter projects by type">
          {tags.map((t) => (
            <button key={t} type="button" className={`rounded-full border px-4 py-1.5 text-[13px] font-medium transition ${tag === t ? 'border-brand bg-brand text-white' : 'border-ink/15 bg-white hover:border-brand hover:text-brand'}`} aria-pressed={tag === t} onClick={() => setTag(t)}>
              {t}
            </button>
          ))}
        </div>
        {max > 0 && (
          <p className="mb-4 text-[14px] text-ink-muted">
            Showing projects up to ₹{max.toLocaleString('en-IN')}/sq ft.{' '}
            <button type="button" className="font-semibold text-brand underline" onClick={() => setMax(0)}>Clear budget</button>
          </p>
        )}
        <p className="sr-only" aria-live="polite">{list.length} projects shown</p>
        {list.length === 0 && <p className="mb-6 text-[14px] text-ink-muted">No projects match this search yet. Try another type or budget, or contact us for upcoming launches.</p>}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
        <p className="mt-6 text-[13px] text-ink-muted">Prices are starting rates per sq ft and may vary by plot size and location within the project. Contact us for the latest price list.</p>
      </Section>

      <CtaBanner text="Explore plots and gated developments in Lucknow with trusted guidance and a free site visit." />
    </>
  );
}
