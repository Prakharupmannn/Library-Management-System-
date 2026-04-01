import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Generic interceptors can be added here
api.interceptors.request.use((config) => {
  // e.g. add authorization token if available
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const loginUser = async (email, password) => {
  const response = await api.post('/users/login', { email, password });
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await api.post('/users/register', userData);
  return response.data;
};

export const getCourses = async () => {
  const response = await api.get('/courses/');
  return response.data;
};

export const getCourse = async (id) => {
  const response = await api.get(`/courses/${id}`);
  return response.data;
};

export const enrollCourse = async (userId, courseId) => {
  const response = await api.post('/enrollments/enroll', {
    user: { id: userId },
    course: { id: courseId },
    enrolledAt: new Date().toISOString()
  });
  return response.data;
};

export const getUserEnrollments = async (userId) => {
  const response = await api.get(`/enrollments/user/${userId}`);
  return response.data;
};

export default api;
