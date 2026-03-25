import React from 'react';
import { LayoutDashboard, BookOpen, MessageSquare, Settings, Award, Compass, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, setOpen }) => {
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'Discover', icon: Compass, path: '/discover' },
    { name: 'My Courses', icon: BookOpen, path: '/my-courses' },
    { name: 'Achievements', icon: Award, path: '/achievements' },
    { name: 'Messages', icon: MessageSquare, path: '/messages', badge: '3' },
  ];

  const bottomItems = [
    { name: 'Settings', icon: Settings, path: '/settings' },
    { name: 'Log out', icon: LogOut, path: '/logout', danger: true },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed lg:sticky top-0 lg:top-0 left-0 z-40 h-screen w-64 bg-slate-900 border-r border-white/5 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } flex flex-col`}
      >
        {/* Logo area */}
        <div className="flex h-16 items-center px-6 border-b border-white/5">
          <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center flex-shrink-0 mr-3 shadow-lg shadow-indigo-500/20">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">LearnIQ</span>
        </div>

        <div className="flex flex-col flex-1 py-6 overflow-y-auto custom-scrollbar px-4 space-y-8">
          
          <nav className="space-y-1">
            <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Menu
            </p>
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => `flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? 'bg-indigo-500/10 text-indigo-400' 
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                }`}
                onClick={() => setOpen(false)}
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <item.icon className={`h-5 w-5 ${isActive ? 'text-indigo-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                      <span className="font-medium text-sm">{item.name}</span>
                    </div>
                    {item.badge && (
                      <span className="bg-indigo-500 rounded-full px-2 py-0.5 text-xs font-medium text-white shadow-sm">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto">
             <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 rounded-2xl p-4 mb-6 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl"></div>
                <h4 className="text-sm font-semibold text-white mb-1 relative z-10">Go Premium</h4>
                <p className="text-xs text-slate-400 mb-3 relative z-10 font-medium">Unlock full access to all 500+ courses</p>
                <button className="w-full bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-semibold py-2 rounded-lg transition-colors relative z-10 shadow-[0_0_15px_rgba(99,102,241,0.4)] hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]">
                  Upgrade Now
                </button>
             </div>

            <nav className="space-y-1 border-t border-white/5 pt-4">
              {bottomItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors duration-200 ${
                    item.danger
                      ? 'text-rose-400 hover:bg-rose-500/10 hover:text-rose-300'
                      : isActive 
                        ? 'bg-slate-800/80 text-white' 
                        : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                  }`}
                >
                  <item.icon className="h-5 w-5 opacity-80" />
                  <span className="font-medium text-sm">{item.name}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
