import React from 'react';
import CourseCard from './CourseCard';

const DUMMY_COURSES = [
  {
    id: 1,
    title: 'Advanced UI/UX Design with Figma',
    description: 'Master the art of creating beautiful, user-centric interfaces. Learn advanced prototyping, design systems, and component architecture.',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviews: '2.1k',
    duration: '12h 30m',
    instructor: 'Sarah Jenkins',
    instructorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    price: 49.99
  },
  {
    id: 2,
    title: 'Full-Stack React & Node.js Masterclass',
    description: 'Build enterprise-level applications from scratch. Covers Next.js, Express, MongoDB, and deployment strategies.',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviews: '4.5k',
    duration: '32h 15m',
    instructor: 'David Chen',
    instructorAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    price: 89.99
  },
  {
    id: 3,
    title: 'Data Science Fundamentals in Python',
    description: 'Your gateway to Data Science. Learn Pandas, NumPy, Matplotlib, and basic machine learning algorithms.',
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviews: '1.8k',
    duration: '18h 45m',
    instructor: 'Elena Rostova',
    instructorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    price: 0
  },
  {
    id: 4,
    title: 'Financial Analysis Modeling',
    description: 'Real-world financial modeling training. Learn to build dynamic corporate financial models in Excel.',
    category: 'Finance',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviews: '950',
    duration: '8h 20m',
    instructor: 'Marcus Wright',
    instructorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    price: 34.99
  }
];

const CourseGrid = () => {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Recommended for You</h2>
        <button className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
          View all courses &rarr;
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {DUMMY_COURSES.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
