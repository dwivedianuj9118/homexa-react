import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';

export { staticPaths } from './routes.js';
export { SITE_URL } from './data/site.js';

const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

export function render(url) {
  const helmetContext = {};
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter basename={basename || '/'} location={basename + url} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>
  );
  return { html, helmet: helmetContext.helmet };
}
