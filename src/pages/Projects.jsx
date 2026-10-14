import { useState } from 'react';
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
  const [tag, setTag] = useState('All');
  const list = tag === 'All' ? projects : projects.filter((p) => p.tag === tag);

  return (
    <>
      <Seo
        title="Plot & Gated Township Projects in Lucknow"
        description="Compare verified plotted projects in Lucknow: Green Country, Kohinoor, Vaidehi Enclave, Exotica Green and Purwanchal Estate. Prices from ₹650/sq ft with clear titles."
        path="/projects"
        jsonLd={[breadcrumbSchema(crumbs), projectListSchema(projects)]}
      />
      <PageHero
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
        <div className="filters" role="group" aria-label="Filter projects by type">
          {tags.map((t) => (
            <button key={t} type="button" className="chip" aria-pressed={tag === t} onClick={() => setTag(t)}>
              {t}
            </button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">{list.length} projects shown</p>
        <div className="grid-3 project-grid">
          {list.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
        <p className="note">Prices are starting rates per sq ft and may vary by plot size and location within the project. Contact us for the latest price list.</p>
      </Section>

      <CtaBanner text="Explore plots and gated developments in Lucknow with trusted guidance and a free site visit." />
    </>
  );
}
