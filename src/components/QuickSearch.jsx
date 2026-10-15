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
const label = 'mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-brand';

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
    <div className="container relative z-20 -mt-10">
      <form onSubmit={onSubmit} aria-label="Search projects" className="card grid grid-cols-2 items-end gap-3 p-4 md:grid-cols-[1fr_1fr_1fr_auto] md:gap-4 md:p-5">
        <div className="hidden md:block">
          <label htmlFor="qs-location" className={label}>Location</label>
          <select id="qs-location" defaultValue="Lucknow" className="field-input"><option>Lucknow</option></select>
        </div>
        <div>
          <label htmlFor="qs-type" className={label}>Property type</label>
          <select id="qs-type" value={type} onChange={(e) => setType(e.target.value)} className="field-input">
            <option value="">All types</option>
            {types.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="qs-budget" className={label}>Budget</label>
          <select id="qs-budget" value={max} onChange={(e) => setMax(e.target.value)} className="field-input">
            {budgets.map((b) => <option key={b.label} value={b.value}>{b.label}</option>)}
          </select>
        </div>
        <button type="submit" className="btn-gold col-span-2 h-[46px] md:col-span-1">Search Projects</button>
      </form>
    </div>
  );
}
