import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* Future routes can be added here */}
        <Route path="shop" element={<div className="bg-cream section-padding text-center"><h1>Shop Coming Soon</h1></div>} />
        <Route path="journal" element={<div className="bg-cream section-padding text-center"><h1>Journal Coming Soon</h1></div>} />
      </Route>
    </Routes>
  );
}

export default App;
