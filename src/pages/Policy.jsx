import Seo from '../components/Seo.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import NotFound from './NotFound.jsx';
import { policies } from '../data/policies.js';
import { breadcrumbSchema } from '../seo/schema.js';

// Turns email addresses and URLs inside policy text into real links.
function Linkify({ text }) {
  return text.split(/(\S+@\S+\.[a-z]+|https?:\/\/[^\s]+?(?=\.?(?:\s|$)))/i).map((part, i) => {
    if (/^\S+@\S+\.[a-z]+$/i.test(part)) return <a key={i} href={`mailto:${part}`}>{part}</a>;
    if (/^https?:\/\//.test(part)) return <a key={i} href={part} target="_blank" rel="noopener">{part.replace(/^https?:\/\//, '')}</a>;
    return part;
  });
}

const formatDate = (iso) => new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export default function Policy({ slug }) {
  const policy = policies[slug];
  if (!policy) return <NotFound />;
  const path = `/${slug}`;
  const crumbs = [{ to: '/', label: 'Home' }, { to: path, label: policy.title }];

  return (
    <>
      <Seo title={policy.title} description={policy.description} path={path} jsonLd={[breadcrumbSchema(crumbs)]} />
      <article className="bg-white py-10 md:py-14">
        <div className="container max-w-3xl prose-body [&_a]:text-brand [&_a]:underline">
          <Breadcrumbs items={crumbs} className="text-ink-muted" />
          <p className="eyebrow">Corporate</p>
          <h1 className="text-[2rem] md:text-5xl">{policy.title}</h1>
          <p className="!mb-2 mt-2 !text-[13px] text-ink-muted">Last updated <time dateTime={policy.updated}>{formatDate(policy.updated)}</time></p>
          <p className="lead !mb-6 border-b border-ink/10 pb-6">{policy.description}</p>
          {policy.sections.map(([h, p], i) => (
            <section key={h} aria-labelledby={`${slug}-${i}`}>
              <h2 id={`${slug}-${i}`} className="!mt-6 !text-xl">{i + 1}. {h}</h2>
              <p><Linkify text={p} /></p>
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
