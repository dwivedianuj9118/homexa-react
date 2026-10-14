import Seo from '../components/Seo.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import NotFound from './NotFound.jsx';
import { policies } from '../data/policies.js';
import { breadcrumbSchema } from '../seo/schema.js';

export default function Policy({ slug }) {
  const policy = policies[slug];
  if (!policy) return <NotFound />;
  const path = `/${slug}`;
  const crumbs = [{ to: '/', label: 'Home' }, { to: path, label: policy.title }];

  return (
    <>
      <Seo title={policy.title} description={policy.description} path={path} jsonLd={[breadcrumbSchema(crumbs)]} />
      <article className="detail">
        <div className="container narrow prose">
          <Breadcrumbs items={crumbs} />
          <h1 className="display">{policy.title}</h1>
          <p className="lead">{policy.description}</p>
          {policy.sections.map(([h, p]) => (
            <section key={h}>
              <h2 className="h3">{h}</h2>
              <p>{p}</p>
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
