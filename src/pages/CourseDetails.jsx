import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, PlayCircle, Lock, Star, Clock, FileText, CheckCircle, Loader } from 'lucide-react';
import { getCourse, enrollCourse } from '../services/api';

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(false);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const data = await getCourse(courseId);
        // Map backend data + add some static decorative data for UI
        setCourse({
          id: data.id,
          title: data.title,
          description: data.description,
          price: data.price,
          image: data.image || 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
          instructor: data.mentor ? data.mentor.name : 'Unknown Instructor',
          rating: 4.8,
          students: '24,593',
          duration: '12h 30m',
          lessons: 42,
          curriculum: [
            { section: 'Introduction to Core Concepts', duration: '45m', completed: true },
            { section: 'Advanced Techniques', duration: '1h 20m', completed: true },
            { section: 'Architecture Deep Dive', duration: '2h 15m', completed: false },
            { section: 'Interactive Masterclass', duration: '3h 30m', completed: false, locked: true },
            { section: 'Best Practices', duration: '1h 0m', completed: false, locked: true },
          ]
        });
      } catch (err) {
        console.error("Failed to load course details", err);
      } finally {
        setLoading(false);
      }
    };
    if (courseId) {
      fetchCourseDetails();
    }
  }, [courseId]);

  const handleEnroll = async () => {
    try {
      setEnrolling(true);
      // Hardcoded student logic: We assume userId=1 is logged in for testing integration
      const MOCK_USER_ID = 1; 
      await enrollCourse(MOCK_USER_ID, course.id);
      navigate('/my-courses');
    } catch (err) {
      console.error("Failed to enroll in course", err);
      alert("Error enrolling in course");
    } finally {
      setEnrolling(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader className="w-10 h-10 text-indigo-500 animate-spin" />
      </div>
    );
  }

  if (!course) {
    return <div className="text-center py-12 text-slate-400">Course not found.</div>;
  }

  return (
    <div className="pb-16">
      <Link to="/my-courses" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 text-sm font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to My Courses
      </Link>

      {/* Video Player Placeholder Area */}
      <div className="relative w-full aspect-video md:aspect-[21/9] bg-slate-900 rounded-2xl overflow-hidden mb-8 border border-white/10 group shadow-2xl">
        <img 
          src={course.image} 
          alt="Course video thumbnail" 
          className="absolute inset-0 w-full h-full object-cover opacity-30" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-indigo-600/90 hover:bg-indigo-500 text-white p-6 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-[0_0_30px_rgba(99,102,241,0.5)]">
            <PlayCircle className="w-12 h-12 fill-current" />
          </button>
        </div>
        
        {/* Course Info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-3">
             <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md">
               {course.price === 0 ? 'Free' : `$${course.price}`}
             </span>
             <span className="flex items-center gap-1 text-slate-300 text-sm font-medium">
               <Star className="w-4 h-4 text-amber-400 fill-current" /> {course.rating}
             </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
            {course.title}
          </h1>
          <p className="text-slate-300 max-w-2xl text-lg drop-shadow line-clamp-2 md:line-clamp-none">
            {course.description}
          </p>
          <div className="mt-6">
            <button 
              onClick={handleEnroll} 
              disabled={enrolling}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-indigo-500/30 transition-all active:scale-95 disabled:opacity-70 flex items-center gap-2"
            >
              {enrolling ? <Loader className="w-5 h-5 animate-spin" /> : null}
              {enrolling ? 'Enrolling...' : 'Enroll Now'}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Curriculum */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6">
             <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-400" /> Course Curriculum
             </h2>
             
             <div className="space-y-3">
                {course.curriculum.map((item, idx) => (
                  <div 
                    key={idx}
                    className={`flex items-center justify-between p-4 rounded-xl border ${
                      item.completed 
                        ? 'bg-slate-800/80 border-white/5 text-slate-300' 
                        : item.locked 
                        ? 'bg-slate-900/30 border-transparent text-slate-500 opacity-60' 
                        : 'bg-indigo-900/20 border-indigo-500/30 text-white'
                    } transition-colors`}
                  >
                    <div className="flex items-center gap-4">
                      {item.completed ? (
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      ) : item.locked ? (
                        <Lock className="w-5 h-5 text-slate-600 flex-shrink-0" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-indigo-400 flex-shrink-0"></div>
                      )}
                      <div>
                        <p className={`font-medium ${item.completed ? 'text-slate-300' : item.locked ? 'text-slate-500' : 'text-indigo-200'}`}>
                          {idx + 1}. {item.section}
                        </p>
                        <p className="text-xs mt-1 text-slate-500">{item.duration}</p>
                      </div>
                    </div>
                    
                    {!item.locked && !item.completed && (
                      <button className="text-sm font-semibold text-indigo-400 hover:text-indigo-300">
                        Start
                      </button>
                    )}
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Sidebar info */}
        <div className="space-y-6">
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6">
             <h3 className="text-white font-bold mb-4">Course Progress</h3>
             <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400">2 of 5 sections</span>
                <span className="text-indigo-400 font-bold">40%</span>
             </div>
             <div className="w-full bg-slate-800 rounded-full h-2 mb-6">
               <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style={{ width: '40%' }}></div>
             </div>

             <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3 text-slate-300">
                  <Clock className="w-5 h-5 text-slate-500" />
                  <span>{course.duration} total time</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <FileText className="w-5 h-5 text-slate-500" />
                  <span>{course.lessons} lessons</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Star className="w-5 h-5 text-slate-500" />
                  <span>{course.rating} rating from {course.students}</span>
                </div>
             </div>
          </div>
          
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6">
             <h3 className="text-white font-bold mb-4">Instructor</h3>
             <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="Instructor" 
                  className="w-12 h-12 rounded-full border border-slate-700"
                />
                <div>
                  <p className="text-white font-medium">{course.instructor}</p>
                  <p className="text-sm text-slate-400">Senior UI Designer</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
