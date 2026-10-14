import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import Section from '../components/Section.jsx';
import InsightCard from '../components/InsightCard.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import { insights } from '../data/insights.js';
import { breadcrumbSchema } from '../seo/schema.js';

const crumbs = [{ to: '/', label: 'Home' }, { to: '/insights', label: 'Insights' }];

export default function Insights() {
  const [lead] = insights;
  return (
    <>
      <Seo
        title="Lucknow Real Estate Market Insights & Reports"
        description="Data-backed reports, growth corridor analysis and buying guides for the Lucknow real estate market, from the advisors at Homexa Realty."
        path="/insights"
        image={lead.image}
        jsonLd={[breadcrumbSchema(crumbs)]}
      />
      <PageHero
        eyebrow="Market Intelligence"
        title="Market"
        accent="insights"
        text="Stay informed with data-backed reports, growth corridor analysis and practical guides on Lucknow’s real estate market."
        image={lead.image}
        alt="Lucknow real estate market growth chart over the city skyline"
      >
        <Breadcrumbs items={crumbs} />
      </PageHero>

      <Section id="latest" eyebrow="Latest Articles" title="The" accent="insight">
        {lead.stat && (
          <p className="stat-callout"><strong>{lead.stat.value}</strong> {lead.stat.label}</p>
        )}
        <div className="grid-2">
          {insights.map((a) => <InsightCard key={a.slug} article={a} />)}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
