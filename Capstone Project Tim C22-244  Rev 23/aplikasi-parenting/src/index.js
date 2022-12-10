import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Materi from '../src/Pages/Materi';
import Home from '../src/Pages/Home';
import TipsTriks from '../src/Pages/TipsTriks';
import '../src/style.css/style.css';
import Video from '../src/Pages/Video';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Materi" element={<Materi />} />
          <Route path="/TipsTriks" element={<TipsTriks />} />
          <Route path="/Video" element={<Video />} />
        </Routes>
      </main>
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
