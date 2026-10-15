import { Link } from 'react-router-dom';

/** Visible breadcrumb trail. Pair with breadcrumbSchema() in the page's <Seo>. */
export default function Breadcrumbs({ items, className = '' }) {
  return (
    <nav aria-label="Breadcrumb" className={`mb-4 text-[13px] ${className}`}>
      <ol className="flex flex-wrap gap-1.5">
        {items.map((item, i) => (
          <li key={item.to} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true" className="opacity-50">/</span>}
            {i === items.length - 1 ? (
              <span aria-current="page" className="opacity-75">{item.label}</span>
            ) : (
              <Link to={item.to} className="hover:underline">{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
