import React from 'react';
import { Counter } from './features/Counter';
import './App.css';
import Sidebar from './components/sidebarComponents/Sidebar';

function App() {
  return (
    <div className="App">
      {/* Sidebar */}
      <Sidebar/>
      {/* Chat */}
    </div>
  );
}

export default App;
