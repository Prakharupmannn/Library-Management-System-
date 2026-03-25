import React, { useEffect } from 'react';
import { LogOut as LogOutIcon, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate API logout call then redirect to login after 3 seconds
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"></div>

      <div className="relative z-10 w-full max-w-sm bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center mb-6 shadow-lg relative">
           <LogOutIcon className="w-8 h-8 text-slate-400" />
           <div className="absolute -bottom-2 -right-2 bg-emerald-500 rounded-full p-1 border-2 border-slate-900 shadow-sm animate-bounce">
             <CheckCircle className="w-4 h-4 text-white" />
           </div>
        </div>

        <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">You've been signed out</h1>
        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
          Thank you for using LearnIQ securely. Redirecting you exactly where you need to be...
        </p>

        <Link 
          to="/login"
          className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl py-3 text-sm font-semibold transition-colors shadow-lg shadow-indigo-500/20"
        >
          Return to Login immediately
        </Link>
      </div>
    </div>
  );
};

export default Logout;
