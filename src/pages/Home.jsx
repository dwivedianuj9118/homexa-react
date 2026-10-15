import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider.jsx';
import QuickSearch from '../components/QuickSearch.jsx';
import Seo from '../components/Seo.jsx';
import Section from '../components/Section.jsx';
import Img from '../components/Img.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import InsightCard from '../components/InsightCard.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import { ArrowIcon } from '../components/Icons.jsx';
import { featuredProjects } from '../data/projects.js';
import { insights } from '../data/insights.js';
import { organizationSchema, websiteSchema } from '../seo/schema.js';

const slides = [
  {
    image: 'hero_garden_widescreen_left.png',
    alt: 'Family playing together in a landscaped society garden at sunset',
    eyebrow: 'Plots & gated townships in Lucknow',
    title: 'Where life finds its',
    accent: 'perfect place',
    after: 'to live',
    text: 'Thoughtfully planned plots and gated townships in Lucknow, chosen for families who want a secure community and a sound investment.',
    to: '/projects',
    cta: 'Explore Lucknow Projects',
  },
  {
    image: 'gated_society_entrance_clean.png',
    alt: 'Secure gated entrance of a residential township in Lucknow',
    eyebrow: 'Gated townships',
    title: 'Secure communities,',
    accent: 'planned for families',
    text: 'Boundary walls, controlled entry, internal roads and green spaces in every township we recommend.',
    to: '/projects?type=Gated%20Township',
    cta: 'View Gated Townships',
  },
  {
    image: 'lucknow_ayodhya_plots_dusk.png',
    alt: 'Residential plots near Ayodhya Road, Lucknow at dusk',
    eyebrow: 'Invest in Lucknow’s growth corridors',
    title: 'Plots from',
    accent: '₹650 / sq ft',
    text: 'Verified plots on Sultanpur Road, Ayodhya Road, Outer Ring Road and the Purvanchal Expressway with clear titles.',
    to: '/projects',
    cta: 'See Prices & Locations',
  },
];

const pillars = [
  { title: 'Trust & Transparency', text: 'Every plot is backed by verified documents and honest, upfront pricing.' },
  { title: 'Carefully Selected', text: 'We shortlist only projects that pass our legal, location and quality checks.' },
  { title: 'Local Knowledge', text: 'Over a decade of on-ground experience across Lucknow’s growth corridors.' },
  { title: 'Future-Ready', text: 'Locations chosen for upcoming infrastructure and long-term appreciation.' },
];

const stats = [
  { value: '500+', label: 'Selected plots' },
  { value: '12+', label: 'Years in the Lucknow market' },
  { value: '100%', label: 'Clear, verified titles' },
];

const services = [
  { title: 'Residential Plots', text: 'Approved plots in well-connected localities, ready for you to build your home.' },
  { title: 'Gated Townships', text: 'Secure, planned communities with internal roads, greens and controlled entry.' },
  { title: 'Investment Opportunities', text: 'Plots in emerging corridors chosen for their appreciation potential.' },
  { title: 'Property Guidance', text: 'Help with site visits, documentation, loans and registry, start to finish.' },
];

const advantages = [
  { title: 'Carefully Selected', text: 'A short list of projects we would buy into ourselves.' },
  { title: 'Clear & Transparent', text: 'No hidden charges and every document shared before you commit.' },
  { title: 'Local Expertise', text: 'Advisors who know each corridor, road and upcoming development.' },
  { title: 'Guided Throughout', text: 'One point of contact from first call to registry and possession.' },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Residential Plots & Gated Townships in Lucknow"
        description="Buy verified residential plots and gated township plots in Lucknow on Sultanpur Road, Ayodhya Road, Outer Ring Road and more. Clear titles, local experts and site visits by Homexa Realty."
        path="/"
        jsonLd={[organizationSchema(), websiteSchema()]}
      />

      <HeroSlider slides={slides} />
      <QuickSearch />
      <div className="container flex flex-col items-center justify-center gap-3 py-6 text-center text-[14px] text-ink-muted sm:flex-row">
        <ul className="flex -space-x-3" aria-hidden="true">
          {['family1.png', 'family2.png', 'family3.png'].map((f) => (
            <li key={f}><Img file={f} alt="" width={80} height={80} className="h-10 w-10 rounded-full border-2 border-white object-cover shadow" /></li>
          ))}
        </ul>
        <p><strong className="text-brand">Trusted by families across Lucknow</strong> · 500+ selected plots · 100% clear titles · 12+ years of local expertise</p>
      </div>

      <Section id="trust" eyebrow="Why Homexa Realty" title="Built around" accent="trust & value" tone="white">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <li key={p.title} className="group rounded-2xl border border-ink/10 bg-paper p-6 transition hover:border-gold hover:bg-white hover:shadow-card">
              <span className="font-serif text-2xl font-semibold text-gold" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 text-xl">{p.title}</h3>
              <p className="mt-1.5 text-[14px]">{p.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <section aria-label="Life in our gated townships" className="bg-white pb-12 md:pb-16">
        <div className="container grid gap-4 md:grid-cols-[1fr_1fr_0.8fr]">
          {[
            ['gated_society_entrance_clean.png', 'Secure gated entrance of a residential society in Lucknow', 'Gated Townships'],
            ['family_playing_society_garden.png', 'Family enjoying the central garden of a gated community in Lucknow', 'Community Life'],
          ].map(([file, alt, cap]) => (
            <figure key={file} className="group relative overflow-hidden rounded-2xl">
              <Img file={file} alt={alt} width={900} height={700} className="aspect-[4/3] h-full w-full object-cover transition duration-500 group-hover:scale-105 md:aspect-[4/5]" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 font-serif text-2xl text-white">{cap}</figcaption>
            </figure>
          ))}
          <figure className="flex flex-col justify-end rounded-2xl bg-brand p-7 text-white/80">
            <figcaption className="font-serif text-2xl text-gold">Safe &amp; Secure</figcaption>
            <p className="mt-2 text-[14px]">Boundary walls, controlled entry and planned infrastructure in every township we recommend.</p>
          </figure>
        </div>
      </section>

      <Section id="legacy" eyebrow="Our Legacy" title="Building the foundation for" accent="better living" tone="tint">
        <dl className="grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse rounded-2xl bg-white p-6 shadow-card">
              <dt className="mt-1 text-[12px] font-bold uppercase tracking-[0.14em] text-ink-muted">{s.label}</dt>
              <dd className="font-serif text-5xl font-semibold leading-none text-brand">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="services" eyebrow="What we offer" title="Curated" accent="living" tone="sand">
        <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
          <ol className="grid gap-3">
            {services.map((s, i) => (
              <li key={s.title} className="flex gap-4 rounded-xl bg-white/70 p-4 transition hover:bg-white hover:shadow-card">
                <span className="font-serif text-3xl font-semibold leading-none text-gold-dark" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-xl">{s.title}</h3>
                  <p className="mt-1 text-[14px]">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <Img file="lucknow_ayodhya_plots_dusk.png" alt="Residential plots near Ayodhya Road, Lucknow at dusk" width={900} height={1000} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lift md:aspect-[4/4.4]" />
        </div>
      </Section>

      <Section id="featured" eyebrow="Featured Projects" title="Find your" accent="place">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
        <p className="mt-8 text-center"><Link to="/projects" className="text-link">View all projects in Lucknow <ArrowIcon width={16} height={16} /></Link></p>
      </Section>

      <Section id="advantage" eyebrow="The Homexa Advantage" title="A better way to" accent="find your place" tone="brand">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a, i) => (
            <li key={a.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 transition hover:bg-white/10">
              <span className="font-serif text-3xl font-semibold text-gold" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 text-xl">{a.title}</h3>
              <p className="mt-1.5 text-[14px] text-white/70">{a.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="insights" eyebrow="Market Intelligence" title="The" accent="insight" tone="white">
        <div className="grid gap-6 md:grid-cols-2">
          {insights.map((a) => <InsightCard key={a.slug} article={a} />)}
        </div>
        <p className="mt-8 text-center"><Link to="/insights" className="text-link">Read all market insights <ArrowIcon width={16} height={16} /></Link></p>
      </Section>

      <Section id="testimonial" eyebrow="Client Stories" title="The Homexa" accent="experience" tone="tint" center>
        <figure className="card mx-auto max-w-3xl p-8 text-center md:p-10">
          <Img file="testimonial_rajiv_sharma.png" alt="Rajiv Sharma, NRI investor and Homexa Realty client" width={160} height={160} className="mx-auto h-20 w-20 rounded-full border-[3px] border-gold object-cover" />
          <blockquote className="mt-5 font-serif text-xl italic leading-snug text-ink md:text-2xl">
            <p>“Homexa Realty redefined our expectations completely. Their portfolio was carefully chosen and the whole process, from site visit to registry, was transparent and stress-free.”</p>
          </blockquote>
          <figcaption className="mt-4 text-[14px]"><strong className="text-ink">Rajiv Sharma</strong> · NRI Investor</figcaption>
        </figure>
      </Section>

      <CtaBanner />
    </>
  );
}
