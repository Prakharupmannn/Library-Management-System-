import React from 'react';
import { Award, Target, Zap, Crown, Flame, Star, Hexagon } from 'lucide-react';

const Achievements = () => {
  const BADGES = [
    { id: 1, name: 'Fast Learner', description: 'Completed a course in half the average time.', icon: Zap, color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20' },
    { id: 2, name: 'Consistency King', description: 'Maintained a 14-day learning streak.', icon: Flame, color: 'text-rose-400', bg: 'bg-rose-400/10', border: 'border-rose-400/20' },
    { id: 3, name: 'Top Performer', description: 'Scored 100% in 5 consecutive quizzes.', icon: Crown, color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20' },
    { id: 4, name: 'Design Master', description: 'Completed 3 Design courses.', icon: Hexagon, color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/20' },
  ];

  const LOCKED_BADGES = [
    { id: 5, name: 'Developer Legend', description: 'Complete 5 Advanced Development courses.', icon: CodeSquareIcon, color: 'text-slate-500', bg: 'bg-slate-800', border: 'border-slate-700' },
    { id: 6, name: 'Problem Solver', description: 'Solve 100 coding challenges.', icon: Target, color: 'text-slate-500', bg: 'bg-slate-800', border: 'border-slate-700' },
  ];

  return (
    <div className="pb-12">
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2 flex justify-center md:justify-start items-center gap-3">
          <Award className="w-8 h-8 text-indigo-500 fill-indigo-500/20" /> 
          Achievements & Certificates
        </h1>
        <p className="text-slate-400">Showcase your hard work to employers and peers.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Stats & Current Streak */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900/80 rounded-3xl border border-indigo-500/20 p-8 shadow-xl text-center relative overflow-hidden">
             <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/30 blur-[40px] rounded-full"></div>
             <Flame className="w-16 h-16 text-rose-500 fill-rose-500/20 mx-auto mb-4 animate-bounce" />
             <h2 className="text-5xl font-extrabold text-white mb-2">12 <span className="text-xl text-slate-400 font-medium">Days</span></h2>
             <p className="text-slate-300 font-medium tracking-wide">Current Learning Streak</p>
             <div className="flex gap-2 justify-center mt-6">
               {['M','T','W','T','F','S','S'].map((day, i) => (
                 <div key={i} className="flex flex-col items-center gap-1">
                   <span className="text-xs text-slate-500">{day}</span>
                   <div className={`w-6 h-6 rounded-full flex items-center justify-center ${i < 4 ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30' : 'bg-slate-800 text-transparent border border-white/5'}`}>
                     {i < 4 && <Star className="w-3 h-3 fill-current" />}
                   </div>
                 </div>
               ))}
             </div>
          </div>

          <div className="bg-slate-900/50 rounded-3xl border border-white/5 p-6 space-y-4">
            <h3 className="text-white font-bold mb-4">Quick Stats</h3>
            <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-xl border border-white/5">
              <span className="text-slate-400 font-medium">Total Learning XP</span>
              <span className="text-lg font-bold text-indigo-400">12,450 XP</span>
            </div>
            <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-xl border border-white/5">
              <span className="text-slate-400 font-medium">Rank</span>
              <span className="text-lg font-bold text-amber-400 flex items-center gap-1">
                <Crown className="w-4 h-4 fill-current" /> Gold Tier
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Badges & Certificates */}
        <div className="lg:col-span-2 space-y-8">
          
          <div className="bg-slate-900/50 rounded-3xl border border-white/5 p-8">
            <h3 className="text-xl font-bold text-white mb-6">Earned Badges</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BADGES.map((badge) => (
                <div key={badge.id} className="flex gap-4 p-4 rounded-2xl bg-slate-800/30 border border-white/5 hover:bg-slate-800/60 transition-colors">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${badge.bg} ${badge.border} border`}>
                    <badge.icon className={`w-8 h-8 ${badge.color}`} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{badge.name}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mt-8 mb-4">Locked Badges</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              {LOCKED_BADGES.map((badge) => (
                <div key={badge.id} className="flex gap-4 p-4 rounded-2xl bg-slate-800/30 border border-white/5">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${badge.bg} ${badge.border} border`}>
                    <LockIcon className={`w-6 h-6 ${badge.color}`} />
                  </div>
                  <div>
                    <h4 className="text-slate-300 font-bold flex items-center gap-2">
                       {badge.name} <LockIcon className="w-3 h-3" />
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Dumb icons for locked state to avoid huge import lists
const LockIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);
const CodeSquareIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m10 10-2 2 2 2"/><path d="m14 14 2-2-2-2"/></svg>
);

export default Achievements;
