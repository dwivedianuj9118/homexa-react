import { Component } from 'react';

/**
 * If anything crashes while React swaps pages in the browser (for example a browser
 * extension or auto-translate editing the page), reload the URL once so the visitor
 * gets the pre-rendered page instead of a blank screen.
 */
export default class ErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    console.error(error);
    try {
      const key = `reloaded:${window.location.pathname}`;
      if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, '1');
        window.location.reload();
      }
    } catch {
      window.location.reload();
    }
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <section className="py-20">
        <div className="container max-w-xl text-center">
          <h1 className="heading">Something went wrong</h1>
          <p className="lead mx-auto mt-3">Please reload the page.</p>
          <p className="mt-6"><a className="btn-gold" href={typeof window !== 'undefined' ? window.location.href : '/'}>Reload</a></p>
        </div>
      </section>
    );
  }
}
