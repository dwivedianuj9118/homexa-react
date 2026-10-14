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
      <article className="detail">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <div className="detail-grid">
            <Img file={project.image} alt={project.alt} width={1200} height={800} priority className="detail-img" />
            <div>
              <p className="eyebrow">{project.tag}</p>
              <h1 className="display">{project.name}</h1>
              <p className="project-loc"><PinIcon /> {project.location}</p>
              <p className="detail-price"><strong>{formatPrice(project.price)}</strong>/sq ft onwards</p>
              <p className="lead">{project.summary}</p>
              <h2 className="h3">Highlights</h2>
              <ul className="checklist">
                {project.highlights.map((h) => <li key={h}><ShieldIcon width={18} height={18} /> {h}</li>)}
              </ul>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-gold">Book a Site Visit to {project.name}</Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="section" aria-labelledby="more-title">
        <div className="container">
          <h2 id="more-title" className="display">More projects in <em>Lucknow</em></h2>
          <div className="grid-3 project-grid">
            {others.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
