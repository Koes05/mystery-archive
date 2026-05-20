import { useState } from "react";
import { mockEntries, Category } from "../data";
import { EntryCard } from "../components/EntryCard";
import { Filter, ChevronDown } from "lucide-react";

const CATEGORIES: ('All' | Category)[] = ['All', 'Ghosts', 'Myths', 'Creatures', 'Mysteries', 'Incidents'];
const COUNTRIES = ['All', 'United States', 'Japan', 'Russia', 'International Waters', 'Digital'];
const RISK_LEVELS = ['All', 'Safe', 'Caution', 'Dangerous', 'Critical', 'Unknown'];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<'All' | Category>('All');
  const [activeCountry, setActiveCountry] = useState('All');
  const [activeRisk, setActiveRisk] = useState('All');

  const filteredEntries = mockEntries.filter(entry => {
    if (activeCategory !== 'All' && entry.category !== activeCategory) return false;
    if (activeCountry !== 'All' && entry.country !== activeCountry) return false;
    if (activeRisk !== 'All' && entry.riskLevel !== activeRisk) return false;
    return true;
  });

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Sidebar Filters */}
      <aside className="w-64 border-r border-[#2a2a35] bg-[#121217] overflow-y-auto hidden md:block">
        <div className="p-4 border-b border-[#2a2a35] flex items-center gap-2 text-gray-300">
          <Filter className="h-4 w-4" />
          <h2 className="font-semibold tracking-wide uppercase text-sm">Database Filters</h2>
        </div>
        
        <div className="p-4 space-y-6">
          <FilterSection title="Risk Level" options={RISK_LEVELS} active={activeRisk} onChange={setActiveRisk} />
          <FilterSection title="Country / Origin" options={COUNTRIES} active={activeCountry} onChange={setActiveCountry} />
          
          {/* Mock filters for visual completeness per requirements */}
          <FilterSection title="Form" options={['All', 'Humanoid', 'Animal', 'Object', 'Location', 'Phenomenon', 'Digital', 'Uncategorized']} active="All" onChange={() => {}} />
          <FilterSection title="Effect" options={['All', 'Psychological', 'Physical', 'Environmental', 'Lethal']} active="All" onChange={() => {}} />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#0a0a0c]">
        {/* Category Tabs */}
        <div className="border-b border-[#2a2a35] bg-[#121217]">
          <div className="flex overflow-x-auto no-scrollbar">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-6 py-4 text-sm font-medium transition-colors border-b-2 ${
                  activeCategory === category 
                    ? 'border-red-600 text-white bg-[#1c1c24]' 
                    : 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-[#1c1c24]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Area */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white tracking-wider">
              {activeCategory === 'All' ? 'ARCHIVE REGISTRY' : `${activeCategory.toUpperCase()} REGISTRY`}
            </h1>
            <span className="text-sm text-gray-500 font-mono">
              {filteredEntries.length} Records Found
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEntries.map(entry => (
              <EntryCard key={entry.id} entry={entry} />
            ))}
          </div>
          
          {filteredEntries.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-gray-500">
              <p>No records match the current filter parameters.</p>
              <button 
                onClick={() => { setActiveCategory('All'); setActiveCountry('All'); setActiveRisk('All'); }}
                className="mt-4 text-red-500 hover:text-red-400 text-sm underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterSection({ title, options, active, onChange }: { title: string, options: string[], active: string, onChange: (val: string) => void }) {
  return (
    <div>
      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center justify-between">
        {title}
        <ChevronDown className="h-3 w-3" />
      </h3>
      <div className="space-y-2">
        {options.map(opt => (
          <label key={opt} className="flex items-center gap-2 cursor-pointer group">
            <input 
              type="radio" 
              name={title}
              value={opt}
              checked={active === opt}
              onChange={() => onChange(opt)}
              className="appearance-none w-3 h-3 rounded-full border border-[#4a4a55] checked:border-red-600 checked:bg-red-600 transition-colors"
            />
            <span className={`text-sm transition-colors ${active === opt ? 'text-gray-200' : 'text-gray-500 group-hover:text-gray-300'}`}>
              {opt}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
