import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import About from './pages/About.jsx';
import Insights from './pages/Insights.jsx';
import InsightDetail from './pages/InsightDetail.jsx';
import Career from './pages/Career.jsx';
import Contact from './pages/Contact.jsx';
import Policy from './pages/Policy.jsx';
import NotFound from './pages/NotFound.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import FloatingContact from './components/FloatingContact.jsx';
import { policies } from './data/policies.js';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  return (
    <>
      <ScrollToTop />
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <ErrorBoundary key={pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightDetail />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            {Object.keys(policies).map((slug) => (
              <Route key={slug} path={`/${slug}`} element={<Policy slug={slug} />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
