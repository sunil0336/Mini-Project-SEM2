import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from "./pages/game";
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className='h-full bg-gradient-to-b from-gray-900 to-black text-white font-sans'>
    <Router>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
