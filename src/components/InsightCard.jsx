import { Link } from 'react-router-dom';
import Img from './Img.jsx';

export default function InsightCard({ article, level = 3 }) {
  const H = `h${level}`;
  return (
    <article className="insight-card">
      <Img file={article.image} alt={article.alt} width={800} height={500} />
      <div className="insight-body">
        <p className="meta">
          <span>{article.category}</span> · <time dateTime={article.date}>{article.dateLabel}</time>
        </p>
        <H className="insight-title">{article.title}</H>
        <p>{article.excerpt}</p>
        <Link to={`/insights/${article.slug}`} className="text-link">
          Read: {article.title}
        </Link>
      </div>
    </article>
  );
}
