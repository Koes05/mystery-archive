import { useParams, Link, useNavigate } from "react-router";
import { mockEntries, currentUser } from "../data";
import { AlertTriangle, MapPin, Tag, ArrowLeft, ShieldAlert, Edit2, Trash2 } from "lucide-react";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const entry = mockEntries.find(e => e.id === id);

  if (!entry) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
        <h2 className="text-2xl mb-4 text-white">Record Not Found</h2>
        <p>The requested anomaly dossier does not exist or has been expunged.</p>
        <Link to="/" className="mt-6 text-red-500 hover:text-red-400 underline">Return to Archive</Link>
      </div>
    );
  }

  const isOwnerOrAdmin = currentUser.role === 'admin' || currentUser.id === entry.authorId;

  const similarEntries = mockEntries
    .filter(e => e.id !== entry.id && (e.category === entry.category || e.riskLevel === entry.riskLevel))
    .slice(0, 3);

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Critical': return 'text-red-500 border-red-500/30 bg-red-500/10';
      case 'Dangerous': return 'text-orange-500 border-orange-500/30 bg-orange-500/10';
      case 'Caution': return 'text-yellow-500 border-yellow-500/30 bg-yellow-500/10';
      case 'Safe': return 'text-green-500 border-green-500/30 bg-green-500/10';
      default: return 'text-gray-400 border-gray-500/30 bg-gray-500/10';
    }
  };

  return (
    <div className="flex-1 overflow-y-auto bg-[#0a0a0c]">
      {/* Banner */}
      <div className="relative h-64 md:h-96 w-full bg-[#121217]">
        <img src={entry.imageUrl} alt={entry.name} className="w-full h-full object-cover opacity-40 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/60 to-transparent" />
        
        <div className="absolute top-6 left-6">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-black/50 px-3 py-1.5 rounded-sm backdrop-blur-md border border-[#2a2a35]">
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className={`px-3 py-1 text-xs font-bold tracking-widest uppercase border backdrop-blur-md ${getRiskColor(entry.riskLevel)}`}>
                Class: {entry.riskLevel}
              </span>
              <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase border border-[#2a2a35] bg-[#1c1c24] text-gray-300 backdrop-blur-md">
                {entry.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wider mb-2">{entry.name}</h1>
            <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
              <MapPin className="h-4 w-4" />
              <span>{entry.place}, {entry.country}</span>
            </div>
          </div>

          {isOwnerOrAdmin && (
            <div className="flex gap-3">
              <Link to={`/edit/${entry.id}`} className="flex items-center gap-2 px-4 py-2 bg-[#1c1c24] hover:bg-[#2a2a35] border border-[#2a2a35] text-white text-sm transition-colors rounded-sm">
                <Edit2 className="h-4 w-4" /> Edit Record
              </Link>
              <button className="flex items-center gap-2 px-4 py-2 bg-red-900/20 hover:bg-red-900/40 border border-red-900/50 text-red-500 text-sm transition-colors rounded-sm">
                <Trash2 className="h-4 w-4" /> Expunge
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-10">
          <section>
            <h2 className="text-xl font-bold text-white uppercase tracking-widest border-b border-[#2a2a35] pb-2 mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed">{entry.overview}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white uppercase tracking-widest border-b border-[#2a2a35] pb-2 mb-4">Identified Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 marker:text-red-600">
              {entry.features.map((feature, idx) => (
                <li key={idx} className="leading-relaxed">{feature}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white uppercase tracking-widest border-b border-[#2a2a35] pb-2 mb-4">Documented Cases</h2>
            <div className="space-y-3">
              {entry.cases.map((c, idx) => (
                <div key={idx} className="p-4 bg-[#121217] border border-[#2a2a35] border-l-4 border-l-gray-600">
                  <p className="text-gray-200 font-mono text-sm">{c}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-red-500 uppercase tracking-widest border-b border-red-900/30 pb-2 mb-4 flex items-center gap-2">
              <ShieldAlert className="h-5 w-5" /> Safety Warnings
            </h2>
            <div className="bg-red-950/20 border border-red-900/30 p-5 rounded-sm">
              <ul className="list-disc list-inside space-y-2 text-red-200/80 marker:text-red-500">
                {entry.warnings.map((warning, idx) => (
                  <li key={idx} className="leading-relaxed">{warning}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <div className="bg-[#121217] border border-[#2a2a35] p-6">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Classification Data</h3>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-gray-500 uppercase tracking-wider text-xs mb-1">Form</dt>
                <dd className="text-gray-200">{entry.form}</dd>
              </div>
              <div>
                <dt className="text-gray-500 uppercase tracking-wider text-xs mb-1">Primary Effect</dt>
                <dd className="text-gray-200">{entry.effect}</dd>
              </div>
              <div>
                <dt className="text-gray-500 uppercase tracking-wider text-xs mb-1">Tags</dt>
                <dd className="flex flex-wrap gap-2 mt-2">
                  {entry.tags.map(tag => (
                    <span key={tag} className="text-xs flex items-center gap-1 text-gray-400 bg-[#1c1c24] px-2 py-1 border border-[#2a2a35]">
                      <Tag className="h-3 w-3" /> {tag}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Related Entries</h3>
            <div className="space-y-4">
              {similarEntries.map(sim => (
                <Link key={sim.id} to={`/entry/${sim.id}`} className="block group">
                  <div className="flex gap-3 items-center bg-[#121217] border border-[#2a2a35] p-2 hover:border-red-900/50 transition-colors">
                    <img src={sim.imageUrl} alt={sim.name} className="w-16 h-16 object-cover grayscale group-hover:grayscale-0 transition-all" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-200 group-hover:text-white">{sim.name}</h4>
                      <p className="text-xs text-gray-500">{sim.category}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
