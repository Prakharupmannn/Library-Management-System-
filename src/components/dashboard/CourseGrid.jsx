import React, { useState, useEffect } from 'react';
import { Loader } from 'lucide-react';
import CourseCard from './CourseCard';
import { getCourses } from '../../services/api';

const CourseGrid = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch courses');
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 mb-12">
        <Loader className="w-8 h-8 text-indigo-500 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 mb-12 text-red-400 bg-slate-900/50 rounded-2xl border border-red-500/20">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Recommended for You</h2>
        <button className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
          View all courses &rarr;
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard key={course.id || course.courseId || Math.random()} course={course} />
          ))
        ) : (
          <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 text-center py-12 text-slate-400">
            No courses found.
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseGrid;
