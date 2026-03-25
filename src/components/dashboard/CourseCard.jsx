import React from 'react';
import { Clock, BookOpen, Star, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <Link to={`/course/${course.id}`} className="group relative bg-slate-800/50 rounded-2xl border border-white/5 overflow-hidden hover:border-indigo-500/30 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col h-full cursor-pointer">
      {/* Thumbnail */}
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-white px-2.5 py-1 rounded-lg">
          {course.category}
        </div>

        {/* Play Icon overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/30 backdrop-blur-sm">
          <div className="bg-indigo-500 text-white rounded-full p-3 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <PlayCircle className="w-6 h-6 fill-current" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3 text-sm text-slate-400">
          <div className="flex items-center gap-1.5 font-medium">
            <Star className="w-4 h-4 text-amber-400 fill-current" />
            <span className="text-amber-400 font-bold">{course.rating}</span>
            <span className="text-xs">({course.reviews})</span>
          </div>
          <div className="flex items-center gap-3">
             <div className="flex items-center gap-1 text-xs">
                <Clock className="w-3.5 h-3.5" />
                {course.duration}
             </div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 leading-tight group-hover:text-indigo-400 transition-colors">
          {course.title}
        </h3>
        
        <p className="text-sm text-slate-400 mb-4 line-clamp-2 flex-grow">
          {course.description}
        </p>

        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
            <div className="w-6 h-6 rounded-full bg-slate-700 overflow-hidden border border-slate-600">
              <img src={course.instructorAvatar} alt={course.instructor} className="w-full h-full object-cover" />
            </div>
            {course.instructor}
          </div>
          <div className="font-bold text-white bg-indigo-500/10 px-2 py-1 rounded-lg text-sm border border-indigo-500/20">
            {course.price === 0 ? 'Free' : `$${course.price}`}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
