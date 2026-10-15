import { Link } from 'react-router-dom';
import { formatPrice } from '../data/projects.js';
import Img from './Img.jsx';
import { PinIcon } from './Icons.jsx';

export default function ProjectCard({ project, level = 3 }) {
  const H = `h${level}`;
  return (
    <article className="card group relative overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative overflow-hidden">
        <Img file={project.image} alt={project.alt} width={800} height={600} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand">{project.tag}</span>
      </div>
      <div className="p-5">
        <H className="text-[1.45rem]">
          <Link to={`/projects/${project.slug}`} className="after:absolute after:inset-0">{project.name}</Link>
        </H>
        <p className="mt-1 flex items-start gap-1.5 text-[13px] text-ink-muted"><PinIcon width={15} height={15} className="mt-0.5 shrink-0 text-gold-dark" /> {project.location}</p>
        <div className="mt-4 flex items-end justify-between border-t border-ink/10 pt-3">
          <p className="text-[13px] text-ink-muted">
            <span className="sr-only">Starting price </span>
            <strong className="font-serif text-2xl font-semibold text-brand">{formatPrice(project.price)}</strong>/sq ft
          </p>
          <span className="text-[12px] font-semibold text-gold-dark">View details →</span>
        </div>
      </div>
    </article>
  );
}
