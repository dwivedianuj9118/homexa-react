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
      <article className="bg-white py-10 md:py-14">
        <div className="container max-w-3xl">
          <Breadcrumbs items={crumbs} className="text-ink-muted" />
          <header>
            <p className="eyebrow"><span>{article.category}</span> · <time dateTime={article.date}>{article.dateLabel}</time></p>
            <h1 className="text-[2rem] md:text-5xl">{article.title}</h1>
            <p className="lead mt-3">{article.excerpt}</p>
          </header>
          <Img file={article.image} alt={article.alt} width={1200} height={700} priority className="my-7 aspect-[12/7] w-full rounded-2xl object-cover shadow-lift" />
          {article.stat && <p className="mb-6 flex items-center gap-4 rounded-2xl border-l-4 border-gold bg-brand-50 p-5 text-[14px] shadow-card"><strong className="font-serif text-4xl font-semibold leading-none text-brand">{article.stat.value}</strong> {article.stat.label}</p>}
          <div className="prose-body">
            {article.body.map((para, i) => <p key={i}>{para}</p>)}
          </div>
          {others.length > 0 && (
            <aside aria-labelledby="related-title" className="mt-8 rounded-2xl bg-sand p-6">
              <h2 id="related-title" className="text-xl">Related reading</h2>
              <ul className="mt-3 grid gap-2">
                {others.map((a) => <li key={a.slug}><Link className="font-semibold text-brand hover:underline" to={`/insights/${a.slug}`}>{a.title}</Link></li>)}
              </ul>
            </aside>
          )}
        </div>
      </article>
      <CtaBanner />
    </>
  );
}
