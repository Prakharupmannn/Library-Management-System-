import React from 'react';
import { User, Mail, Shield, Bell, CreditCard, Save } from 'lucide-react';

const Settings = () => {
  return (
    <div className="pb-16 max-w-5xl">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Account Settings</h1>
        <p className="text-slate-400">Manage your account preferences, notifications, and billing details.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Settings Navigation */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-indigo-500/10 text-indigo-400 font-medium rounded-xl border border-indigo-500/20">
              <User className="w-5 h-5" /> Public Profile
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800/50 hover:text-white font-medium rounded-xl transition-colors">
              <Shield className="w-5 h-5" /> Security
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800/50 hover:text-white font-medium rounded-xl transition-colors">
              <Bell className="w-5 h-5" /> Notifications
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800/50 hover:text-white font-medium rounded-xl transition-colors">
              <CreditCard className="w-5 h-5" /> Billing & Plans
            </a>
          </nav>
        </div>

        {/* Settings Content */}
        <div className="flex-1 space-y-8">
          
          <div className="bg-slate-900/50 border border-white/5 rounded-3xl p-8">
            <h2 className="text-xl font-bold text-white mb-6">Profile Information</h2>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="Avatar" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-slate-800"
                />
                <button className="absolute bottom-0 right-0 bg-indigo-500 text-white p-2 rounded-full border-2 border-slate-900 hover:bg-indigo-400 transition-colors">
                  <User className="w-4 h-4" />
                </button>
              </div>
              <div>
                <h3 className="text-white font-medium">Profile Picture</h3>
                <p className="text-sm text-slate-400 mb-3">JPG, GIF or PNG. 1MB max.</p>
                <div className="flex gap-3">
                  <button className="text-sm px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium border border-slate-700">Upload new</button>
                  <button className="text-sm px-4 py-2 text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors font-medium">Remove</button>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">First Name</label>
                  <input type="text" defaultValue="Alex" className="w-full bg-slate-800/50 border border-slate-700/50 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Last Name</label>
                  <input type="text" defaultValue="Morgan" className="w-full bg-slate-800/50 border border-slate-700/50 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input type="email" defaultValue="alex.morgan@example.com" className="w-full bg-slate-800/50 border border-slate-700/50 text-slate-400 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-indigo-500 transition-all" readOnly />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Bio</label>
                <textarea rows="4" className="w-full bg-slate-800/50 border border-slate-700/50 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none" defaultValue="Front-end developer passionate about beautiful UI, user experience, and building accessible web applications."></textarea>
                <p className="text-xs text-slate-500">Brief description for your profile. URLs are hyperlinked.</p>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-end gap-3">
                <button type="button" className="px-5 py-2.5 rounded-xl font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">Cancel</button>
                <button type="button" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2">
                  <Save className="w-4 h-4" /> Save Changes
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Settings;
