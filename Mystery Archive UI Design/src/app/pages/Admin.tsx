import { useState } from "react";
import { Link } from "react-router";
import { mockEntries, currentUser } from "../data";
import { ShieldAlert, Edit2, Trash2, ExternalLink } from "lucide-react";

export default function Admin() {
  const [entries, setEntries] = useState(mockEntries);

  if (currentUser.role !== 'admin') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-red-500 bg-[#0a0a0c]">
        <ShieldAlert className="h-16 w-16 mb-4" />
        <h2 className="text-2xl font-bold uppercase tracking-widest">Access Denied</h2>
        <p className="mt-2 text-gray-400">Clearance level insufficient for administrative access.</p>
      </div>
    );
  }

  const deleteEntry = (id: string) => {
    if (confirm("Are you sure you want to expunge this record from the database?")) {
      setEntries(entries.filter(e => e.id !== id));
    }
  };

  return (
    <div className="flex-1 overflow-y-auto bg-[#0a0a0c] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#2a2a35]">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-widest uppercase flex items-center gap-3">
              <ShieldAlert className="h-8 w-8 text-red-600" />
              Overwatch Terminal
            </h1>
            <p className="text-gray-400 mt-2">Administrative management of the global anomaly registry.</p>
          </div>
        </div>

        <div className="bg-[#121217] border border-[#2a2a35] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#1c1c24] border-b border-[#2a2a35] text-xs uppercase tracking-wider text-gray-400">
                <tr>
                  <th className="px-6 py-4 font-semibold">Designation</th>
                  <th className="px-6 py-4 font-semibold">Category</th>
                  <th className="px-6 py-4 font-semibold">Class</th>
                  <th className="px-6 py-4 font-semibold">Location</th>
                  <th className="px-6 py-4 font-semibold">Author</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2a2a35]">
                {entries.map(entry => (
                  <tr key={entry.id} className="hover:bg-[#1c1c24]/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={entry.imageUrl} alt="" className="w-10 h-10 object-cover border border-[#2a2a35] grayscale" />
                        <span className="font-bold text-gray-200">{entry.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-400">{entry.category}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider border ${
                        entry.riskLevel === 'Critical' ? 'text-red-500 border-red-500/30' :
                        entry.riskLevel === 'Dangerous' ? 'text-orange-500 border-orange-500/30' :
                        entry.riskLevel === 'Caution' ? 'text-yellow-500 border-yellow-500/30' :
                        entry.riskLevel === 'Safe' ? 'text-green-500 border-green-500/30' :
                        'text-gray-400 border-gray-500/30'
                      }`}>
                        {entry.riskLevel}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-400">{entry.country}</td>
                    <td className="px-6 py-4 text-gray-500 font-mono text-xs">{entry.authorId}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link to={`/entry/${entry.id}`} className="p-2 text-gray-400 hover:text-white bg-[#1c1c24] border border-[#2a2a35] transition-colors" title="View">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                        <Link to={`/edit/${entry.id}`} className="p-2 text-gray-400 hover:text-white bg-[#1c1c24] border border-[#2a2a35] transition-colors" title="Edit">
                          <Edit2 className="h-4 w-4" />
                        </Link>
                        <button onClick={() => deleteEntry(entry.id)} className="p-2 text-red-500 hover:text-white bg-red-900/20 border border-red-900/50 hover:bg-red-600 hover:border-red-600 transition-colors" title="Delete">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
