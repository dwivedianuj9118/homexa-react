import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you are looking for does not exist." path="/404" noindex />
      <section className="section notfound" aria-labelledby="nf-title">
        <div className="container narrow center">
          <p className="eyebrow">Error 404</p>
          <h1 id="nf-title" className="display">Page <em>not found</em></h1>
          <p className="lead">The page you’re looking for has moved or no longer exists.</p>
          <p><Link to="/" className="btn btn-gold">Back to home</Link> <Link to="/projects" className="btn btn-outline">Browse projects</Link></p>
        </div>
      </section>
    </>
  );
}
