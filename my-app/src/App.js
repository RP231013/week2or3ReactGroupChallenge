import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/Homepage';
import AddPropertyPage from './components/AddPropertyPage';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/add-property" element={<AddPropertyPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
