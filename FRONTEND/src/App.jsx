import React from 'react';
// import { Routes, Route } from 'react-router-dom'
import IndexPage from "./pages/Index"

function App() {

  return (
    <div className='h-full w-full bg-slate-950'>
      {/* <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes> */}
      <IndexPage />
    </div>
  )
}

export default App
