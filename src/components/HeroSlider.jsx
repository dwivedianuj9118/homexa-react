import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Img from './Img.jsx';
import { ArrowIcon } from './Icons.jsx';

/**
 * Home page banner slider. Only the first slide carries the page's <h1>; the others use
 * <h2>, so the page keeps exactly one H1. All slides are in the pre-rendered HTML.
 * Auto-advance pauses on hover/focus and is off for reduced-motion visitors.
 */
export default function HeroSlider({ slides, interval = 6000 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;
  const go = useCallback((i) => setIndex((i + count) % count), [count]);

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (paused || reduce) return undefined;
    const t = setTimeout(() => go(index + 1), interval);
    return () => clearTimeout(t);
  }, [index, paused, interval, go]);

  return (
    <section
      className="relative isolate overflow-hidden bg-brand text-white"
      aria-roledescription="carousel"
      aria-label="Featured homes and projects"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="grid">
        {slides.map((s, i) => {
          const H = i === 0 ? 'h1' : 'h2';
          const active = i === index;
          return (
            <div
              key={s.image}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={!active}
              className={`relative col-start-1 row-start-1 flex min-h-[440px] items-center transition-opacity duration-700 md:min-h-[500px] ${active ? 'z-10 opacity-100' : 'invisible opacity-0'}`}
            >
              <Img file={s.image} alt={s.alt} width={1920} height={1080} priority={i === 0} className={`absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-[7000ms] ease-out ${active ? 'scale-100' : 'scale-105'}`} />
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[rgba(10,52,49,0.9)] via-[rgba(10,52,49,0.55)] to-transparent" />
              <div className="container pb-24 pt-10 md:pb-28">
                <p className="eyebrow !text-gold">{s.eyebrow}</p>
                <H className="max-w-2xl text-[2rem] font-semibold leading-[1.08] !text-white sm:text-4xl md:text-[3.1rem]">
                  {s.title} <em className="font-medium italic text-gold">{s.accent}</em>
                  {s.after && <> {s.after}</>}
                </H>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/85 md:text-[17px]">{s.text}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to={s.to} className="btn-gold" tabIndex={active ? 0 : -1}>{s.cta} <ArrowIcon width={18} height={18} /></Link>
                  <Link to="/contact" className="btn-outline text-white" tabIndex={active ? 0 : -1}>Book a Site Visit</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container absolute inset-x-0 bottom-14 z-20 flex items-center gap-3 md:bottom-16">
        <button type="button" onClick={() => go(index - 1)} aria-label="Previous slide" className="grid h-10 w-10 place-items-center rounded-full border border-white/50 bg-white/10 transition hover:border-gold hover:bg-gold hover:text-ink">
          <ArrowIcon width={18} height={18} className="rotate-180" />
        </button>
        <div className="flex gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.image}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => go(i)}
              className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-gold' : 'w-2 bg-white/50 hover:bg-white'}`}
            />
          ))}
        </div>
        <button type="button" onClick={() => go(index + 1)} aria-label="Next slide" className="grid h-10 w-10 place-items-center rounded-full border border-white/50 bg-white/10 transition hover:border-gold hover:bg-gold hover:text-ink">
          <ArrowIcon width={18} height={18} />
        </button>
      </div>
    </section>
  );
}
