import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing-page/landing-page';

function App() {
  return (
    <Router>
      <Routes>
        {/* Your primary public route */}
        <Route path="/" element={<LandingPage />} />
        
        {/* If you add more pages later, add them here */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;