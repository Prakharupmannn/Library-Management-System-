import React from 'react';
import { PlayCircle, Award, Clock, BookOpen, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ENROLLED_COURSES = [
  {
    id: 1,
    title: 'Advanced UI/UX Design with Figma',
    progress: 68,
    totalModules: 12,
    completedModules: 8,
    nextLesson: 'Component Architecture Deep Dive',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    lastAccessed: '2 hours ago'
  },
  {
    id: 3,
    title: 'Data Science Fundamentals in Python',
    progress: 100,
    totalModules: 8,
    completedModules: 8,
    nextLesson: 'Completed',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    lastAccessed: '3 days ago'
  },
  {
    id: 5,
    title: 'Modern Front-End Architectures',
    progress: 12,
    totalModules: 20,
    completedModules: 2,
    nextLesson: 'State Management with Redux Toolkit',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    lastAccessed: 'Just now'
  }
];

const MyCourses = () => {
  return (
    <div className="pb-12">
      <div className="mb-8 border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight mb-2">My Courses</h1>
          <p className="text-slate-400 text-lg">Track your progress and pick up right where you left off.</p>
        </div>
        <div className="flex bg-slate-800/50 p-1 rounded-xl w-max border border-white/5">
          <button className="px-4 py-2 bg-indigo-500 rounded-lg text-white text-sm font-medium shadow-sm">In Progress</button>
          <button className="px-4 py-2 text-slate-400 hover:text-white text-sm font-medium transition-colors">Completed</button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {ENROLLED_COURSES.map((course) => (
          <Link 
            to={`/course/${course.id}`} 
            key={course.id}
            className="group flex flex-col sm:flex-row bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden hover:border-indigo-500/30 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10"
          >
            {/* Image */}
            <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-2 py-1 bg-slate-800 rounded-md text-slate-300 border border-white/10">
                    {course.progress === 100 ? 'Completed' : 'Active'}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {course.lastAccessed}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-indigo-400 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-sm text-slate-400 mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-slate-500" />
                  Next: <span className="text-slate-300 font-medium">{course.nextLesson}</span>
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-400 font-medium">
                    {course.completedModules} / {course.totalModules} Modules
                  </span>
                  <span className="text-indigo-400 font-bold">{course.progress}%</span>
                </div>
                
                <div className="w-full bg-slate-800 rounded-full h-2 mb-4 overflow-hidden">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ${course.progress === 100 ? 'bg-emerald-500' : 'bg-gradient-to-r from-indigo-500 to-purple-500'}`} 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>

                <div className="flex justify-end">
                  <button className="flex items-center gap-2 text-sm font-semibold bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg transition-colors border border-white/10 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10">
                    {course.progress === 100 ? (
                      <>
                        <Award className="w-4 h-4 text-emerald-400" /> View Certificate
                      </>
                    ) : (
                      <>
                        <PlayCircle className="w-4 h-4 text-indigo-400" /> Continue Learning
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
