import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ onMenuClick }) => {
  return (
    <nav className="sticky top-0 z-30 w-full bg-slate-900/80 backdrop-blur-md border-b border-white/10 shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 lg:px-6">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuClick}
            className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg lg:hidden transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <Link to="/" className="hidden sm:flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/20">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">LearnIQ</span>
          </Link>
        </div>

        {/* Middle Section - Search */}
        <div className="flex-1 max-w-xl px-4 hidden md:block">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-400">
              <Search className="h-4 w-4" />
            </div>
            <input
              type="text"
              placeholder="Search courses, skills, or mentors..."
              className="block w-full pl-10 pr-3 py-2 border border-slate-700/50 rounded-xl leading-5 bg-slate-800/80 text-slate-200 placeholder-slate-400 focus:outline-none focus:bg-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm transition-all duration-200 ease-in-out"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
            <Search className="w-5 h-5" />
          </button>
          
          <button className="relative p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors group">
            <Bell className="w-5 h-5 group-hover:animate-swing" />
            <span className="absolute top-1.5 right-2 block h-2 w-2 rounded-full bg-rose-500 ring-2 ring-slate-900" />
          </button>

          <Link to="/profile" className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-[2px] cursor-pointer hover:scale-105 transition-transform shadow-lg">
            <img 
              className="h-full w-full rounded-full object-cover border border-slate-800" 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
              alt="User Avatar" 
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
