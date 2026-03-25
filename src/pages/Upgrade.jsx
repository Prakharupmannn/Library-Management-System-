import React from 'react';
import { Check, Zap, Sparkles, ShieldCheck } from 'lucide-react';

const Upgrade = () => {
  return (
    <div className="pb-16 flex flex-col items-center">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6 border border-indigo-500/30">
          <Sparkles className="w-4 h-4" /> Go Premium
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Unlock Your Full Potential
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          Get unrestricted access to over 500+ premium courses, expert mentorship, and industry-recognized certificates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        
        {/* Basic Plan */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2">Free Plan</h3>
          <p className="text-slate-400 text-sm mb-6 h-10">Perfect for getting started and exploring basics.</p>
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-5xl font-extrabold text-white">$0</span>
            <span className="text-slate-500 font-medium">/ forever</span>
          </div>
          
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-center gap-3 text-slate-300">
              <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" /> Access to 50 free courses
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" /> Community forum access
            </li>
            <li className="flex items-center gap-3 text-slate-500 opacity-50">
              <Check className="w-5 h-5 text-slate-600 flex-shrink-0" /> Professional certificates
            </li>
            <li className="flex items-center gap-3 text-slate-500 opacity-50">
              <Check className="w-5 h-5 text-slate-600 flex-shrink-0" /> 1-on-1 Mentorship
            </li>
          </ul>

          <button className="w-full py-4 rounded-xl border-2 border-slate-700 text-slate-300 font-bold hover:bg-slate-800 transition-colors">
            Current Plan
          </button>
        </div>

        {/* Pro Plan */}
        <div className="relative bg-gradient-to-br from-indigo-900/80 to-purple-900/80 backdrop-blur-md rounded-3xl p-1 border border-indigo-500 shadow-2xl transform md:-translate-y-4">
          <div className="absolute top-0 right-8 transform -translate-y-1/2">
            <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
              Most Popular
            </span>
          </div>
          
          <div className="bg-slate-950/80 rounded-[22px] p-8 h-full flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]"></div>
            
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400 fill-amber-400/20" /> LearnIQ Pro
            </h3>
            <p className="text-indigo-200 text-sm mb-6 h-10">Everything you need to master new career skills.</p>
            
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-extrabold text-white">$29</span>
              <span className="text-slate-400 font-medium whitespace-nowrap">/ month, billed annually</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-white">
                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" /> <span className="font-semibold">Unlimited access</span> to all 500+ courses
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" /> Verified professional certificates
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" /> Unlimited AI practice quizzes
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" /> <span className="font-semibold">1-on-1 Mentorship sessions</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" /> Download resources for offline viewing
              </li>
            </ul>

            <button className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(99,102,241,0.4)]">
              Subscribe to Pro
            </button>
            <p className="text-center text-xs text-slate-500 mt-4 flex items-center justify-center gap-1">
               <ShieldCheck className="w-4 h-4" /> 7-day money-back guarantee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upgrade;
