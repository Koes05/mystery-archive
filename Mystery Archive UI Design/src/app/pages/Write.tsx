import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { mockEntries, Category, RiskLevel } from "../data";
import { Save, Image as ImageIcon, Plus, X } from "lucide-react";

export default function Write() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    name: '',
    category: 'Mysteries' as Category,
    country: '',
    place: '',
    form: '',
    effect: '',
    riskLevel: 'Unknown' as RiskLevel,
    shortDescription: '',
    overview: '',
    imageUrl: ''
  });

  const [features, setFeatures] = useState<string[]>(['']);
  const [cases, setCases] = useState<string[]>(['']);
  const [warnings, setWarnings] = useState<string[]>(['']);
  const [tags, setTags] = useState<string[]>(['']);

  useEffect(() => {
    if (isEdit) {
      const entry = mockEntries.find(e => e.id === id);
      if (entry) {
        setFormData({
          name: entry.name,
          category: entry.category,
          country: entry.country,
          place: entry.place,
          form: entry.form,
          effect: entry.effect,
          riskLevel: entry.riskLevel,
          shortDescription: entry.shortDescription,
          overview: entry.overview,
          imageUrl: entry.imageUrl
        });
        setFeatures(entry.features.length ? entry.features : ['']);
        setCases(entry.cases.length ? entry.cases : ['']);
        setWarnings(entry.warnings.length ? entry.warnings : ['']);
        setTags(entry.tags.length ? entry.tags : ['']);
      }
    }
  }, [id, isEdit]);

  const handleArrayChange = (index: number, value: string, setter: React.Dispatch<React.SetStateAction<string[]>>, arr: string[]) => {
    const newArr = [...arr];
    newArr[index] = value;
    setter(newArr);
  };

  const addArrayItem = (setter: React.Dispatch<React.SetStateAction<string[]>>, arr: string[]) => {
    setter([...arr, '']);
  };

  const removeArrayItem = (index: number, setter: React.Dispatch<React.SetStateAction<string[]>>, arr: string[]) => {
    if (arr.length > 1) {
      const newArr = [...arr];
      newArr.splice(index, 1);
      setter(newArr);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate save
    navigate('/my-archive');
  };

  return (
    <div className="flex-1 overflow-y-auto bg-[#0a0a0c] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 border-b border-[#2a2a35] pb-4 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-widest uppercase">
              {isEdit ? 'Update Record' : 'Log New Anomaly'}
            </h1>
            <p className="text-gray-400 mt-2">Enter data securely into the centralized database.</p>
          </div>
          <button onClick={handleSubmit} className="flex items-center gap-2 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium transition-colors rounded-sm shadow-[0_0_15px_rgba(220,38,38,0.3)]">
            <Save className="h-4 w-4" /> Save Record
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-[#121217] border border-[#2a2a35] p-6 space-y-6">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 border-b border-[#2a2a35] pb-2">Basic Identification</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-wider">Designation / Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#1c1c24] border border-[#2a2a35] p-3 text-white focus:border-red-500 focus:outline-none"
                  placeholder="e.g. Entity 404"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-wider">Classification Category</label>
                <select 
                  value={formData.category}
                  onChange={e => setFormData({...formData, category: e.target.value as Category})}
                  className="w-full bg-[#1c1c24] border border-[#2a2a35] p-3 text-white focus:border-red-500 focus:outline-none appearance-none"
                >
                  <option value="Ghosts">Ghosts</option>
                  <option value="Myths">Myths</option>
                  <option value="Creatures">Creatures</option>
                  <option value="Mysteries">Mysteries</option>
                  <option value="Incidents">Incidents</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-wider">Country of Origin</label>
                <input 
                  type="text" 
                  value={formData.country}
                  onChange={e => setFormData({...formData, country: e.target.value})}
                  className="w-full bg-[#1c1c24] border border-[#2a2a35] p-3 text-white focus:border-red-500 focus:outline-none"
                  placeholder="e.g. Unknown, USA, Japan"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-wider">Specific Location / Place</label>
                <input 
                  type="text" 
                  value={formData.place}
                  onChange={e => setFormData({...formData, place: e.target.value})}
                  className="w-full bg-[#1c1c24] border border-[#2a2a35] p-3 text-white focus:border-red-500 focus:outline-none"
                  placeholder="e.g. Sector 7, Deep Woods"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-wider">Visual Form</label>
                <input 
                  type="text" 
                  value={formData.form}
                  onChange={e => setFormData({...formData, form: e.target.value})}
                  className="w-full bg-[#1c1c24] border border-[#2a2a35] p-3 text-white focus:border-red-500 focus:outline-none"
                  placeholder="e.g. Humanoid, Shadow, Object"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-wider">Primary Effect / Behavior</label>
                <input 
                  type="text" 
                  value={formData.effect}
                  onChange={e => setFormData({...formData, effect: e.target.value})}
                  className="w-full bg-[#1c1c24] border border-[#2a2a35] p-3 text-white focus:border-red-500 focus:outline-none"
                  placeholder="e.g. Memory Loss, Hostile"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-xs text-gray-400 uppercase tracking-wider">Risk Level</label>
                <div className="flex gap-4">
                  {['Safe', 'Caution', 'Dangerous', 'Unknown', 'Critical'].map(level => (
                    <label key={level} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="riskLevel" 
                        value={level}
                        checked={formData.riskLevel === level}
                        onChange={e => setFormData({...formData, riskLevel: e.target.value as RiskLevel})}
                        className="accent-red-600"
                      />
                      <span className="text-sm text-gray-300">{level}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#121217] border border-[#2a2a35] p-6 space-y-6">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 border-b border-[#2a2a35] pb-2">Detailed Documentation</h2>
            
            <div className="space-y-2">
              <label className="text-xs text-gray-400 uppercase tracking-wider">Short Description (Summary)</label>
              <textarea 
                rows={2}
                value={formData.shortDescription}
                onChange={e => setFormData({...formData, shortDescription: e.target.value})}
                className="w-full bg-[#1c1c24] border border-[#2a2a35] p-3 text-white focus:border-red-500 focus:outline-none resize-none"
                placeholder="A brief 1-2 sentence summary of the entity/event..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-400 uppercase tracking-wider">Full Overview</label>
              <textarea 
                rows={6}
                value={formData.overview}
                onChange={e => setFormData({...formData, overview: e.target.value})}
                className="w-full bg-[#1c1c24] border border-[#2a2a35] p-3 text-white focus:border-red-500 focus:outline-none resize-y"
                placeholder="Detailed description, history, and known behavioral patterns..."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DynamicList 
              title="Known Features" 
              items={features} 
              setItems={setFeatures} 
              placeholder="e.g. Emits low frequency sound" 
            />
            <DynamicList 
              title="Documented Cases" 
              items={cases} 
              setItems={setCases} 
              placeholder="e.g. Incident 42-B (1998)" 
            />
            <DynamicList 
              title="Safety Warnings" 
              items={warnings} 
              setItems={setWarnings} 
              placeholder="e.g. Do not establish eye contact" 
            />
            <DynamicList 
              title="Tags (keywords)" 
              items={tags} 
              setItems={setTags} 
              placeholder="e.g. paranormal, hostile, shadow" 
            />
          </div>

          <div className="bg-[#121217] border border-[#2a2a35] p-6">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 border-b border-[#2a2a35] pb-2">Media Attachment</h2>
            <div className="border-2 border-dashed border-[#2a2a35] bg-[#1c1c24] hover:border-red-500/50 transition-colors p-8 text-center cursor-pointer flex flex-col items-center justify-center">
              <ImageIcon className="h-10 w-10 text-gray-500 mb-3" />
              <p className="text-sm text-gray-300">Click to upload visual evidence</p>
              <p className="text-xs text-gray-500 mt-1">JPEG, PNG, GIF (Max 5MB)</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function DynamicList({ title, items, setItems, placeholder }: { title: string, items: string[], setItems: any, placeholder: string }) {
  const handleChange = (index: number, val: string) => {
    const newItems = [...items];
    newItems[index] = val;
    setItems(newItems);
  };

  return (
    <div className="bg-[#121217] border border-[#2a2a35] p-6">
      <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 border-b border-[#2a2a35] pb-2">{title}</h2>
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="flex gap-2">
            <input 
              type="text" 
              value={item}
              onChange={e => handleChange(idx, e.target.value)}
              className="flex-1 bg-[#1c1c24] border border-[#2a2a35] p-2.5 text-sm text-white focus:border-red-500 focus:outline-none"
              placeholder={placeholder}
            />
            <button 
              type="button"
              onClick={() => {
                if (items.length > 1) {
                  const newItems = [...items];
                  newItems.splice(idx, 1);
                  setItems(newItems);
                }
              }}
              className="px-3 bg-[#1c1c24] border border-[#2a2a35] text-gray-400 hover:text-red-500 hover:border-red-500 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
        <button 
          type="button"
          onClick={() => setItems([...items, ''])}
          className="text-xs text-red-500 hover:text-red-400 flex items-center gap-1 mt-2 uppercase tracking-wider font-bold"
        >
          <Plus className="h-3 w-3" /> Add Item
        </button>
      </div>
    </div>
  );
}
