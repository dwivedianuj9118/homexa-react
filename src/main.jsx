import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './styles/global.css';

const container = document.getElementById('root');
const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

// Pre-rendered pages already contain markup: hydrate them. In `npm run dev` the root is empty.
if (container.hasChildNodes()) hydrateRoot(container, app);
else createRoot(container).render(app);
