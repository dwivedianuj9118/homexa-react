import { Link } from 'react-router-dom';
import { formatPrice } from '../data/projects.js';
import Img from './Img.jsx';
import { PinIcon } from './Icons.jsx';

export default function ProjectCard({ project, level = 3 }) {
  const H = `h${level}`;
  return (
    <article className="project-card">
      <div className="project-media">
        <Img file={project.image} alt={project.alt} width={800} height={600} />
        <span className="badge">{project.tag}</span>
      </div>
      <div className="project-body">
        <H className="project-name">
          <Link to={`/projects/${project.slug}`} className="stretched">{project.name}</Link>
        </H>
        <p className="project-loc"><PinIcon width={16} height={16} /> {project.location}</p>
        <p className="project-price">
          <span className="sr-only">Starting price </span>
          <strong>{formatPrice(project.price)}</strong>/sq ft <small>onwards</small>
        </p>
      </div>
    </article>
  );
}
