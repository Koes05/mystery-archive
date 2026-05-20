import { useState } from "react";
import { Link } from "react-router";
import { mockEntries, currentUser } from "../data";
import { EntryCard } from "../components/EntryCard";
import { Archive, Search } from "lucide-react";

export default function MyArchive() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const myEntries = mockEntries.filter(entry => 
    entry.authorId === currentUser.id && 
    entry.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-y-auto bg-[#0a0a0c] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#2a2a35]">
          <div className="flex items-center gap-3">
            <Archive className="h-8 w-8 text-red-600" />
            <div>
              <h1 className="text-3xl font-bold text-white tracking-widest uppercase">Personal Archive</h1>
              <p className="text-gray-400 mt-1">Records authored and maintained by Agent {currentUser.id}</p>
            </div>
          </div>

          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search your records..." 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-[#1c1c24] border border-[#2a2a35] py-2 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>
        </div>

        {myEntries.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {myEntries.map(entry => (
              <EntryCard key={entry.id} entry={entry} />
            ))}
          </div>
        ) : (
          <div className="bg-[#121217] border border-[#2a2a35] p-12 text-center flex flex-col items-center justify-center">
            <Archive className="h-12 w-12 text-gray-600 mb-4" />
            <h2 className="text-xl text-gray-300 font-bold tracking-wider mb-2">No Records Found</h2>
            <p className="text-gray-500 max-w-md">You haven't logged any anomalies yet, or none match your search criteria.</p>
            <Link to="/write" className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium text-sm transition-colors uppercase tracking-wider">
              Log New Anomaly
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
