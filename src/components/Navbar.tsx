import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';

const Navbar: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem('authToken');
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="p-4 bg-blue-500">
      <Link to="/" className="text-white mr-4">Home</Link>
      {!isAuthenticated ? (
        <>
          <Link to="/login" className="text-white mr-4">Login</Link>
          <Link to="/register" className="text-white">Register</Link>
        </>
      ) : (
        <button onClick={handleLogout} className="text-white">Logout</button>
      )}
    </nav>
  );
};

export default Navbar;