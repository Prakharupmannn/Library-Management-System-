import React from 'react';
import { Play, TrendingUp, Users, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative isolate overflow-hidden bg-slate-900 rounded-3xl mb-8 group">
      {/* Background gradients and decorative elements */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-slate-900/10 to-slate-900/90 z-0"></div>
      
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
        alt="Students learning"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
      />

      <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium mb-6 backdrop-blur-md border border-indigo-500/30">
            <TrendingUp className="w-4 h-4" />
            <span>Trending Course</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Master Advanced <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Machine Learning
            </span>
          </h1>
          
          <p className="mt-4 text-lg text-slate-300 mb-8 max-w-xl">
            Deep dive into neural networks, natural language processing, and computer vision with industry experts. Start your journey today!
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-indigo-500/30 transition-all hover:scale-105 active:scale-95">
              <Play className="w-5 h-5 fill-current" />
              Resume Learning
            </button>
            <button className="flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 text-white px-6 py-3 rounded-xl font-semibold backdrop-blur-md border border-slate-700 transition-all hover:scale-105 active:scale-95">
              View Details
            </button>
          </div>
        </div>

        {/* Stats Glass Morphism Card */}
        <div className="hidden lg:flex flex-col gap-4 bg-slate-900/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl w-64 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-500/20 rounded-xl">
              <Users className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400">Students Enrolled</p>
              <p className="text-xl font-bold text-white">24,593</p>
            </div>
          </div>
          <div className="h-px w-full bg-white/10"></div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500/20 rounded-xl">
              <Star className="w-6 h-6 text-purple-400 fill-current" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400">Course Rating</p>
              <div className="flex items-center gap-1">
                <p className="text-xl font-bold text-white">4.9</p>
                <span className="text-xs text-slate-500">(12.4k)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
