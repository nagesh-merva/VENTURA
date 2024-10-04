import React from 'react';
import { Routes, Route } from 'react-router-dom'
import IndexPage from "./pages/Index"
import TeamPage from './pages/Team';

function App() {

  return (
    <div className='h-full w-full bg-slate-950'>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </div>
  )
}

export default App
