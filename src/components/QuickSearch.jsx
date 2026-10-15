import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects.js';

const types = [...new Set(projects.map((p) => p.tag))];
const budgets = [
  { label: 'Any budget', value: '' },
  { label: 'Under ₹800 / sq ft', value: '800' },
  { label: 'Under ₹1,000 / sq ft', value: '1000' },
  { label: 'Under ₹2,500 / sq ft', value: '2500' },
];

/** Property search bar under the home banner, a common pattern on real estate sites. */
export default function QuickSearch() {
  const navigate = useNavigate();
  const [type, setType] = useState('');
  const [max, setMax] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    const q = new URLSearchParams();
    if (type) q.set('type', type);
    if (max) q.set('max', max);
    navigate(`/projects${q.toString() ? `?${q}` : ''}`);
  }

  return (
    <form className="quick-search container" onSubmit={onSubmit} aria-label="Search projects">
      <div className="qs-field">
        <label htmlFor="qs-location">Location</label>
        <select id="qs-location" defaultValue="Lucknow"><option>Lucknow</option></select>
      </div>
      <div className="qs-field">
        <label htmlFor="qs-type">Property type</label>
        <select id="qs-type" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">All types</option>
          {types.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div className="qs-field">
        <label htmlFor="qs-budget">Budget</label>
        <select id="qs-budget" value={max} onChange={(e) => setMax(e.target.value)}>
          {budgets.map((b) => <option key={b.label} value={b.value}>{b.label}</option>)}
        </select>
      </div>
      <button type="submit" className="btn btn-gold">Search Projects</button>
    </form>
  );
}
