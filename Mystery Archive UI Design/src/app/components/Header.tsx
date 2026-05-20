import { Link } from "react-router";
import { Search, User, Archive, PenTool, Skull } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2a2a35] bg-[#0a0a0c]/90 backdrop-blur-sm">
      <div className="flex h-16 items-center px-6 gap-6">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Skull className="h-7 w-7 text-red-600" />
          <span className="text-xl font-bold tracking-widest uppercase text-white">
            Mystery<span className="text-red-600">Archive</span>
          </span>
        </Link>
        
        <div className="flex-1 max-w-2xl ml-4">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 group-focus-within:text-red-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search anomalies, creatures, locations..." 
              className="w-full bg-[#1c1c24] border border-[#2a2a35] rounded-none py-2 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
            />
          </div>
        </div>

        <nav className="ml-auto flex items-center gap-4">
          <Link 
            to="/write" 
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-colors rounded-sm"
          >
            <PenTool className="h-4 w-4" />
            <span>Write</span>
          </Link>
          <Link 
            to="/my-archive" 
            className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white transition-colors"
            title="My Archive"
          >
            <Archive className="h-5 w-5" />
          </Link>
          <div className="w-px h-6 bg-[#2a2a35] mx-1"></div>
          <Link 
            to="/admin" 
            className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white transition-colors"
            title="Profile / Admin"
          >
            <div className="h-8 w-8 rounded bg-[#1c1c24] border border-[#2a2a35] flex items-center justify-center">
              <User className="h-4 w-4" />
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
