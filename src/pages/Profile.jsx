import React from 'react';
import { MapPin, Link as LinkIcon, Calendar, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="pb-16">
      {/* Profile Header Background */}
      <div className="h-64 w-full bg-slate-900 rounded-3xl overflow-hidden relative border border-white/5 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900 via-purple-900 to-slate-900 opacity-60"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]"></div>
      </div>

      {/* Profile Info Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col md:flex-row gap-8 items-start">
          
          {/* Avatar */}
          <div className="relative -mt-16 md:mt-0 flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80" 
              alt="Alex Morgan" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-slate-900 shadow-xl"
            />
            <div className="absolute bottom-2 right-2 bg-emerald-500 w-5 h-5 rounded-full border-4 border-slate-900"></div>
          </div>

          <div className="flex-1 w-full">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 w-full">
              <div>
                <h1 className="text-3xl font-extrabold text-white mb-1 tracking-tight">Alex Morgan</h1>
                <p className="text-indigo-400 font-medium text-lg mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Pro Learner
                </p>
              </div>
              <div className="flex gap-3">
                <Link to="/settings" className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium transition-colors border border-slate-700 shadow-sm text-sm">
                  Edit Profile
                </Link>
                <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors shadow-lg shadow-indigo-500/20 text-sm">
                  Share
                 </button>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6 max-w-2xl">
              Front-end developer passionate about beautiful UI, user experience, and building accessible web applications. Currently mastering advanced React patterns and spatial computing.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400 border-t border-white/10 pt-6">
              <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <MapPin className="w-4 h-4" /> San Francisco, CA
              </span>
              <a href="#" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <LinkIcon className="w-4 h-4" /> portfolio.dev
              </a>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Joined March 2026
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 text-center transform transition-transform hover:-translate-y-1 hover:shadow-xl hover:bg-slate-800/50">
            <span className="block text-4xl font-extrabold text-white mb-1">12</span>
            <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Courses Enrolled</span>
          </div>
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 text-center transform transition-transform hover:-translate-y-1 hover:shadow-xl hover:bg-slate-800/50">
            <span className="block text-4xl font-extrabold text-indigo-400 mb-1">4</span>
            <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Certificates</span>
          </div>
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 text-center transform transition-transform hover:-translate-y-1 hover:shadow-xl hover:bg-slate-800/50">
            <span className="block text-4xl font-extrabold text-emerald-400 mb-1">12,450</span>
            <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Learning XP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
