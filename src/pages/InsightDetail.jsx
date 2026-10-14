import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import Img from '../components/Img.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import NotFound from './NotFound.jsx';
import { findInsight, insights } from '../data/insights.js';
import { articleSchema, breadcrumbSchema } from '../seo/schema.js';

export default function InsightDetail() {
  const { slug } = useParams();
  const article = findInsight(slug);
  if (!article) return <NotFound />;

  const path = `/insights/${article.slug}`;
  const crumbs = [{ to: '/', label: 'Home' }, { to: '/insights', label: 'Insights' }, { to: path, label: article.title }];
  const others = insights.filter((a) => a.slug !== article.slug);

  return (
    <>
      <Seo
        title={article.title}
        description={article.excerpt}
        path={path}
        image={article.image}
        type="article"
        jsonLd={[breadcrumbSchema(crumbs), articleSchema(article)]}
      />
      <article className="detail article">
        <div className="container narrow">
          <Breadcrumbs items={crumbs} />
          <header>
            <p className="meta"><span>{article.category}</span> · <time dateTime={article.date}>{article.dateLabel}</time></p>
            <h1 className="display">{article.title}</h1>
            <p className="lead">{article.excerpt}</p>
          </header>
          <Img file={article.image} alt={article.alt} width={1200} height={700} priority className="detail-img" />
          {article.stat && <p className="stat-callout"><strong>{article.stat.value}</strong> {article.stat.label}</p>}
          <div className="prose">
            {article.body.map((para, i) => <p key={i}>{para}</p>)}
          </div>
          {others.length > 0 && (
            <aside aria-labelledby="related-title" className="related">
              <h2 id="related-title" className="h3">Related reading</h2>
              <ul>
                {others.map((a) => <li key={a.slug}><Link to={`/insights/${a.slug}`}>{a.title}</Link></li>)}
              </ul>
            </aside>
          )}
        </div>
      </article>
      <CtaBanner />
    </>
  );
}
