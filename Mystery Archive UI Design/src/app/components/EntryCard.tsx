import { Link } from "react-router";
import { Entry } from "../data";
import { AlertTriangle, MapPin } from "lucide-react";

export function EntryCard({ entry }: { entry: Entry }) {
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
    <Link to={`/entry/${entry.id}`} className="group block">
      <article className="bg-[#121217] border border-[#2a2a35] overflow-hidden hover:border-red-600/50 transition-colors h-full flex flex-col">
        <div className="relative h-48 overflow-hidden bg-[#1c1c24]">
          <img 
            src={entry.imageUrl} 
            alt={entry.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-transparent to-transparent" />
          <div className="absolute top-3 right-3">
            <span className={`text-xs px-2 py-1 border font-bold uppercase tracking-wider backdrop-blur-md ${getRiskColor(entry.riskLevel)}`}>
              {entry.riskLevel}
            </span>
          </div>
          <div className="absolute bottom-3 left-3 flex gap-2">
            <span className="text-xs bg-black/60 text-gray-200 px-2 py-1 border border-[#2a2a35] backdrop-blur-sm">
              {entry.category}
            </span>
          </div>
        </div>
        
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
            {entry.name}
          </h3>
          
          <div className="flex flex-col gap-1.5 mb-4 text-xs text-gray-400">
            <div className="flex items-start gap-2">
              <span className="font-semibold text-gray-500 w-12 shrink-0">Place:</span>
              <span className="line-clamp-1">{entry.place}, {entry.country}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-semibold text-gray-500 w-12 shrink-0">Form:</span>
              <span className="line-clamp-1 text-gray-300">{entry.form}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-semibold text-gray-500 w-12 shrink-0">Effect:</span>
              <span className="line-clamp-1 text-gray-300">{entry.effect}</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-400 mb-4 line-clamp-2 flex-1">
            {entry.shortDescription}
          </p>
          
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {entry.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-wider text-gray-500 bg-[#1c1c24] px-1.5 py-0.5 border border-[#2a2a35]">
                #{tag}
              </span>
            ))}
            {entry.tags.length > 3 && (
              <span className="text-[10px] uppercase tracking-wider text-gray-500 bg-[#1c1c24] px-1.5 py-0.5 border border-[#2a2a35]">
                +{entry.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
