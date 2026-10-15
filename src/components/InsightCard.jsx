import { Link } from 'react-router-dom';
import Img from './Img.jsx';

export default function InsightCard({ article, level = 3 }) {
  const H = `h${level}`;
  return (
    <article className="card group flex flex-col overflow-hidden">
      <div className="overflow-hidden">
        <Img file={article.image} alt={article.alt} width={800} height={500} className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[12px] text-ink-muted">
          <span className="font-bold uppercase tracking-[0.12em] text-gold-dark">{article.category}</span> · <time dateTime={article.date}>{article.dateLabel}</time>
        </p>
        <H className="mt-2 text-[1.6rem]">{article.title}</H>
        <p className="mt-2 text-[15px]">{article.excerpt}</p>
        <Link to={`/insights/${article.slug}`} className="text-link mt-auto self-start pt-4">
          <span className="sr-only">Read: {article.title}</span><span aria-hidden="true">Read article →</span>
        </Link>
      </div>
    </article>
  );
}
