import React from 'react';
import { Counter } from './features/Counter';
import './App.css';
import Sidebar from './components/sidebarComponents/Sidebar';
import Chat from './components/chatComponents/Chat'
function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar/>
      {/* Chat */}
      <Chat />
    </div>
  );
}

export default App;
