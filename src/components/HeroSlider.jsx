import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Img from './Img.jsx';
import { ArrowIcon } from './Icons.jsx';

/**
 * Home page banner slider. Only the first slide carries the page's <h1>; the others use
 * <h2> so each page still has exactly one H1. All slides are in the pre-rendered HTML,
 * so crawlers see every headline. Auto-advance pauses on hover/focus and is disabled
 * for visitors who prefer reduced motion.
 */
export default function HeroSlider({ slides, interval = 6000 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;
  const go = useCallback((i) => setIndex((i + count) % count), [count]);
  const timer = useRef();

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (paused || reduce) return undefined;
    timer.current = setTimeout(() => go(index + 1), interval);
    return () => clearTimeout(timer.current);
  }, [index, paused, interval, go]);

  return (
    <section
      className="hero-slider"
      aria-roledescription="carousel"
      aria-label="Featured homes and projects"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {slides.map((s, i) => {
        const H = i === 0 ? 'h1' : 'h2';
        const active = i === index;
        return (
          <div
            key={s.image}
            className={`slide${active ? ' is-active' : ''}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={!active}
          >
            <Img file={s.image} alt={s.alt} width={1920} height={1080} priority={i === 0} className="slide-bg" />
            <div className="container slide-content">
              <p className="eyebrow">{s.eyebrow}</p>
              <H className="display hero-title">
                {s.title} <em>{s.accent}</em>
                {s.after && <> {s.after}</>}
              </H>
              <p className="lead">{s.text}</p>
              <div className="hero-actions">
                <Link to={s.to} className="btn btn-gold" tabIndex={active ? 0 : -1}>{s.cta} <ArrowIcon /></Link>
                <Link to="/contact" className="btn btn-outline" tabIndex={active ? 0 : -1}>Book a Site Visit</Link>
              </div>
            </div>
          </div>
        );
      })}

      <div className="slider-controls container">
        <button type="button" className="slider-arrow" onClick={() => go(index - 1)} aria-label="Previous slide">
          <ArrowIcon style={{ transform: 'rotate(180deg)' }} />
        </button>
        <div className="slider-dots">
          {slides.map((s, i) => (
            <button
              key={s.image}
              type="button"
              className="dot"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <button type="button" className="slider-arrow" onClick={() => go(index + 1)} aria-label="Next slide">
          <ArrowIcon />
        </button>
      </div>
    </section>
  );
}
