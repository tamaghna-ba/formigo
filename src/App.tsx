import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('authToken'));

  // Recheck authentication when token changes in localStorage
  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      setIsAuthenticated(localStorage.getItem('authToken') ? true : false);
    }
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;