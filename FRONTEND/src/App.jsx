import React, { Suspense } from 'react';
// import { Routes, Route } from 'react-router-dom'
import IndexPage from "./pages/Index"
import LoadingScreen from './components/LoadingScreen';

function App() {

  return (
    <div className='h-full w-full bg-slate-950'>
      {/* <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes> */}
      <Suspense fallback={<LoadingScreen />}>
        <IndexPage />
      </Suspense>
    </div>
  )
}

export default App
