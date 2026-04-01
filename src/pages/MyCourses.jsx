import React, { useState, useEffect } from 'react';
import { PlayCircle, Award, Clock, BookOpen, CheckCircle, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getUserEnrollments } from '../services/api';

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const MOCK_USER_ID = 1;
        const data = await getUserEnrollments(MOCK_USER_ID);
        
        const mapped = data.map(enr => ({
          id: enr.course.id,
          title: enr.course.title || 'Untitled Course',
          progress: Math.floor(Math.random() * 60) + 5,
          totalModules: 12,
          completedModules: Math.floor(Math.random() * 5) + 1,
          nextLesson: 'Continuing Core Concepts',
          image: enr.course.image || 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&w=400&q=80',
          lastAccessed: enr.enrolledAt ? new Date(enr.enrolledAt).toLocaleDateString() : 'Just now'
        }));
        
        setCourses(mapped);
      } catch (err) {
        console.error("Failed to fetch enrollments", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchEnrollments();
  }, []);

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
        {loading ? (
          <div className="col-span-1 xl:col-span-2 flex justify-center py-20">
            <Loader className="w-10 h-10 text-indigo-500 animate-spin" />
          </div>
        ) : courses.length > 0 ? (
          courses.map((course) => (
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
        ))
      ) : (
        <div className="col-span-1 xl:col-span-2 text-center py-16 bg-slate-900/40 rounded-2xl border border-white/5">
          <h3 className="text-xl font-bold text-white mb-2">You aren't enrolled in any courses</h3>
          <p className="text-slate-400 mb-6">Discover new skills and start learning today.</p>
          <Link to="/discover" className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-xl transition-all">
            Browse Courses
          </Link>
        </div>
      )}
      </div>
    </div>
  );
};

export default MyCourses;
