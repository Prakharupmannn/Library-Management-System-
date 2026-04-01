import React, { useState } from 'react';
import { Send, Phone, Video, Search, MoreVertical, Paperclip, Check, CheckCheck } from 'lucide-react';

const DUMMY_CHATS = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    lastMessage: 'Great work on the UI/UX assignment! The prototype looks amazing.',
    time: '10:42 AM',
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: 'David Chen',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    lastMessage: 'Can we schedule a call to discuss the React module?',
    time: 'Yesterday',
    unread: 0,
    online: false,
  },
  {
    id: 3,
    name: 'Elena Rostova',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    lastMessage: 'Here are the Python datasets you asked for.',
    time: 'Tue',
    unread: 0,
    online: true,
  },
  {
    id: 4,
    name: 'Study Group - Full Stack',
    avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    lastMessage: 'Marcus: I pushed the backend code to GitHub.',
    time: 'Mon',
    unread: 5,
    online: false,
  }
];

const Messages = () => {
  const [activeChat, setActiveChat] = useState(DUMMY_CHATS[0]);
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'them', text: 'Hi! How are you progressing with the UI/UX assignment?', time: '10:30 AM' },
    { id: 2, sender: 'me', text: "I'm doing well! I've just finished the high-fidelity mockups.", time: '10:35 AM' },
    { id: 3, sender: 'them', text: 'Great work on the UI/UX assignment! The prototype looks amazing.', time: '10:42 AM' },
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: 'me',
      text: messageInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setMessageInput('');
  };

  return (
    <div className="h-[calc(100vh-8rem)] bg-slate-900 border border-white/10 rounded-3xl overflow-hidden flex shadow-2xl">
      {/* Sidebar / Chat List */}
      <div className="w-full md:w-80 border-r border-white/10 flex flex-col bg-slate-900/50">
        <div className="p-4 border-b border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Messages</h2>
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="w-full bg-slate-800 text-sm text-slate-200 pl-10 pr-4 py-2.5 rounded-xl border border-white/5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-500"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {DUMMY_CHATS.map(chat => (
            <div 
              key={chat.id}
              onClick={() => setActiveChat(chat)}
              className={`flex items-center gap-3 p-4 cursor-pointer transition-colors border-b border-white/5 ${activeChat.id === chat.id ? 'bg-indigo-500/10' : 'hover:bg-slate-800/50'}`}
            >
              <div className="relative flex-shrink-0">
                <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full object-cover border border-slate-700" />
                {chat.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full"></div>}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-sm font-semibold text-slate-100 truncate pr-2">{chat.name}</h3>
                  <span className="text-xs text-slate-400 flex-shrink-0">{chat.time}</span>
                </div>
                <p className="text-xs text-slate-400 truncate pr-6">{chat.lastMessage}</p>
              </div>
              {chat.unread > 0 && (
                <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">
                  {chat.unread}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="hidden md:flex flex-col flex-1 bg-slate-950/30">
        {/* Chat Header */}
        <div className="h-16 border-b border-white/10 px-6 flex items-center justify-between bg-slate-900/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src={activeChat.avatar} alt={activeChat.name} className="w-10 h-10 rounded-full object-cover border border-slate-700" />
              {activeChat.online && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-900 rounded-full"></div>}
            </div>
            <div>
              <h3 className="font-semibold text-white">{activeChat.name}</h3>
              <p className="text-xs text-slate-400">{activeChat.online ? 'Online' : 'Offline'}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <button className="hover:text-indigo-400 transition-colors p-2 hover:bg-slate-800 rounded-lg"><Phone className="w-5 h-5" /></button>
            <button className="hover:text-indigo-400 transition-colors p-2 hover:bg-slate-800 rounded-lg"><Video className="w-5 h-5" /></button>
            <div className="w-px h-6 bg-slate-700 mx-1"></div>
            <button className="hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"><Search className="w-5 h-5" /></button>
            <button className="hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"><MoreVertical className="w-5 h-5" /></button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          <div className="flex justify-center">
            <span className="text-xs text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full border border-white/5">Today</span>
          </div>
          
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div className="flex gap-3 max-w-[70%]">
                {msg.sender === 'them' && (
                  <img src={activeChat.avatar} alt="Avatar" className="w-8 h-8 rounded-full object-cover flex-shrink-0 mt-auto" />
                )}
                <div className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
                  <div 
                    className={`px-4 py-3 rounded-2xl ${
                      msg.sender === 'me' 
                        ? 'bg-indigo-600 text-white rounded-br-sm shadow-md shadow-indigo-500/20' 
                        : 'bg-slate-800 text-slate-200 rounded-bl-sm border border-white/5'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                  <div className="flex items-center gap-1 mt-1 text-[10px] text-slate-500 font-medium px-1">
                    <span>{msg.time}</span>
                    {msg.sender === 'me' && <CheckCheck className="w-3 h-3 text-indigo-400 ml-1" />}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="p-4 bg-slate-900 border-t border-white/10">
          <form onSubmit={handleSendMessage} className="flex items-center gap-3">
            <button type="button" className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors flex-shrink-0">
              <Paperclip className="w-5 h-5" />
            </button>
            <input 
              type="text" 
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Type a message..." 
              className="flex-1 bg-slate-800 text-sm text-slate-200 px-4 py-3 rounded-xl border border-white/5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-500"
            />
            <button 
              type="submit" 
              disabled={!messageInput.trim()}
              className="p-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed text-white rounded-xl shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95 flex-shrink-0"
            >
              <Send className="w-5 h-5 -ml-1 mt-px" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Messages;
