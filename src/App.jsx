import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard';
import MyCourses from './pages/MyCourses';
import CourseDetails from './pages/CourseDetails';
import Login from './pages/Login';
import Discover from './pages/Discover';
import Achievements from './pages/Achievements';
import Upgrade from './pages/Upgrade';
import Logout from './pages/Logout';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Messages from './pages/Messages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="discover" element={<Discover />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="messages" element={<Messages />} />
          <Route path="course/:courseId" element={<CourseDetails />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="upgrade" element={<Upgrade />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
