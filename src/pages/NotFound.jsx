import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you are looking for does not exist." path="/404" noindex />
      <section className="bg-brand-50 py-20 md:py-28" aria-labelledby="nf-title">
        <div className="container max-w-2xl text-center">
          <p className="eyebrow">Error 404</p>
          <h1 id="nf-title" className="heading">Page <em>not found</em></h1>
          <p className="lead mx-auto mt-3">The page you’re looking for has moved or no longer exists.</p>
          <p className="mt-7 flex flex-wrap justify-center gap-3"><Link to="/" className="btn-gold">Back to home</Link> <Link to="/projects" className="btn-outline text-brand">Browse projects</Link></p>
        </div>
      </section>
    </>
  );
}
