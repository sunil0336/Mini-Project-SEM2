import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from "./pages/game";
import About from './components/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
