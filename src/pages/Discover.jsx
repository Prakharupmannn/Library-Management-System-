import React, { useState, useEffect } from 'react';
import { Search, Filter, Sparkles, TrendingUp, Loader } from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';
import CourseCard from '../components/dashboard/CourseCard';
import { getCourses } from '../services/api';

// Extrapolated dummy courses for discovery
const DISCOVER_COURSES = [
  { id: 101, title: 'Introduction to GraphQL and Apollo', category: 'Development', rating: 4.8, reviews: '1.2k', duration: '6h 15m', instructor: 'Mark Rivers', price: 29.99, image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', instructorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&w=100&q=80' },
  { id: 102, title: 'Product Management 101', category: 'Business', rating: 4.6, reviews: '940', duration: '4h 50m', instructor: 'Allison Ray', price: 0, image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', instructorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&w=100&q=80' },
  { id: 103, title: '3D Animation in Blender', category: 'Design', rating: 4.9, reviews: '3.1k', duration: '22h 30m', instructor: 'Felix Wright', price: 59.99, image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', instructorAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&w=100&q=80' },
  { id: 104, title: 'Machine Learning A-Z', category: 'Data Science', rating: 4.7, reviews: '12.4k', duration: '42h 0m', instructor: 'Aarti Patel', price: 89.99, image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', instructorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&w=100&q=80' },
  { id: 105, title: 'The Complete Copywriting Course', category: 'Marketing', rating: 4.5, reviews: '3k', duration: '11h 20m', instructor: 'Chris Lee', price: 19.99, image: 'https://images.unsplash.com/photo-1455390582262-044cdead27d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', instructorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=100&q=80' },
  { id: 106, title: 'Advanced React Patterns', category: 'Development', rating: 4.8, reviews: '5.2k', duration: '14h 0m', instructor: 'Dan Abramov', price: 0, image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=100&q=80' },
];

const CATEGORIES = ['All', 'Development', 'Design', 'Business', 'Marketing', 'Data Science'];

const Discover = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndSetCourses = async () => {
      setLoading(true);
      try {
        const apiCourses = await getCourses();
        const formattedApiCourses = apiCourses.map(course => ({
          ...course,
          category: course.category ? course.category.name : 'Uncategorized',
          instructor: course.mentor ? course.mentor.name : 'Unknown',
          instructorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&w=100&q=80',
          rating: 4.8,
          reviews: '1k+',
          duration: '10h 30m'
        }));
        const baseCourses = formattedApiCourses.length > 0 ? formattedApiCourses : DISCOVER_COURSES;
        
        let filtered = baseCourses;
        if (activeCategory !== 'All') {
          filtered = filtered.filter(c => c.category === activeCategory);
        }
        if (query) {
          filtered = filtered.filter(c => 
            (c.title && c.title.toLowerCase().includes(query.toLowerCase())) || 
            (c.instructor && c.instructor.toLowerCase().includes(query.toLowerCase())) ||
            (c.category && c.category.toLowerCase().includes(query.toLowerCase()))
          );
        }
        setCourses(filtered);
      } catch (err) {
        console.error(err);
        // Fallback filtering on static courses if API fails
        let filtered = DISCOVER_COURSES;
        if (activeCategory !== 'All') filtered = filtered.filter(c => c.category === activeCategory);
        if (query) {
          filtered = filtered.filter(c => 
            (c.title && c.title.toLowerCase().includes(query.toLowerCase())) || 
            (c.instructor && c.instructor.toLowerCase().includes(query.toLowerCase()))
          );
        }
        setCourses(filtered);
      } finally {
        setLoading(false);
      }
    };
    fetchAndSetCourses();
  }, [activeCategory, query]);

  return (
    <div className="pb-12">
      {/* Header & Search */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Explore New Skills</h1>
          <p className="text-slate-400">Join over 2 million students learning new skills.</p>
        </div>
        
        <div className="w-full lg:w-96 flex gap-3">
          <div className="relative flex-1 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-indigo-400">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              placeholder="Search anything..."
              className="block w-full pl-10 pr-3 py-3 border border-slate-700/50 rounded-xl bg-slate-800/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:bg-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
            />
          </div>
          <button className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700/50 transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Featured Block */}
      <div className="relative overflow-hidden cursor-pointer group bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-3xl border border-indigo-500/20 mb-10 flex flex-col md:flex-row shadow-xl">
        <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6 w-max border border-indigo-500/30">
            <Sparkles className="w-4 h-4" /> Just Released
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-indigo-300 transition-colors duration-300">
            Introduction to Spatial Computing
          </h2>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Learn how to design, build, and deploy immersive AR and VR applications for the next generation of headsets.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/course/103" className="bg-white text-indigo-950 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors">
              View Course
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
            alt="VR Headset" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent md:hidden"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent hidden md:block"></div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-4 mb-6">
        {CATEGORIES.map(category => (
          <button 
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`whitespace-nowrap px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 border ${
              activeCategory === category 
                ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20' 
                : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="flex items-center justify-between mb-6 mt-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2"><TrendingUp className="w-5 h-5 text-indigo-400" /> Trending in {activeCategory}</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {loading ? (
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 flex justify-center py-20">
            <Loader className="w-8 h-8 text-indigo-500 animate-spin" />
          </div>
        ) : courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard key={course.id || Math.random()} course={course} />
          ))
        ) : (
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 text-center py-12 text-slate-400">
            No courses found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Discover;
