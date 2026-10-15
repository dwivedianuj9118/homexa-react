import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import Img from '../components/Img.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import NotFound from './NotFound.jsx';
import { PinIcon, ShieldIcon } from '../components/Icons.jsx';
import { findProject, formatPrice, projects } from '../data/projects.js';
import { breadcrumbSchema, projectSchema } from '../seo/schema.js';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = findProject(slug);
  if (!project) return <NotFound />;

  const path = `/projects/${project.slug}`;
  const crumbs = [{ to: '/', label: 'Home' }, { to: '/projects', label: 'Projects' }, { to: path, label: project.name }];
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <Seo
        title={`${project.name} Plots, ${project.location.split(',')[0]}, Lucknow`}
        description={`${project.name}: ${project.tag.toLowerCase()} plots at ${project.location} from ${formatPrice(project.price)}/sq ft. Verified titles, expert guidance and free site visits.`}
        path={path}
        image={project.image}
        jsonLd={[breadcrumbSchema(crumbs), projectSchema(project)]}
      />
      <article className="bg-white py-8 md:py-12">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <div className="grid items-start gap-8 md:grid-cols-[1.2fr_1fr] md:gap-12">
            <Img file={project.image} alt={project.alt} width={1200} height={800} priority className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lift" />
            <div>
              <p className="eyebrow">{project.tag}</p>
              <h1 className="heading text-4xl md:text-5xl">{project.name}</h1>
              <p className="mt-2 flex items-start gap-1.5 text-[14px] text-ink-muted"><PinIcon width={16} height={16} className="mt-0.5 shrink-0 text-gold-dark" /> {project.location}</p>
              <p className="mt-4 inline-flex items-baseline gap-1 rounded-xl bg-brand-50 px-4 py-2 text-[14px]"><strong className="font-serif text-3xl font-semibold text-brand">{formatPrice(project.price)}</strong>/sq ft onwards</p>
              <p className="lead mt-4">{project.summary}</p>
              <h2 className="mt-6 text-2xl">Highlights</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {project.highlights.map((h) => <li key={h} className="flex items-center gap-2 text-[14px] text-ink"><ShieldIcon width={18} height={18} className="shrink-0 text-gold-dark" /> {h}</li>)}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-brand">Book a Site Visit to {project.name}</Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-paper py-12 md:py-16" aria-labelledby="more-title">
        <div className="container">
          <h2 id="more-title" className="heading mb-8">More projects in <em>Lucknow</em></h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
