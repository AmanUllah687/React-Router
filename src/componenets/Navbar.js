// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './auth';

export const Navbar = () => {
  const navlinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
    };
  };

  const auth = useAuth();

  return (
    <nav className="primary-nav">
      <NavLink style={navlinkStyle} to="/">Home</NavLink>
      <NavLink style={navlinkStyle} to="/about">About</NavLink>
      <NavLink style={navlinkStyle} to="/products">Products</NavLink>
      <NavLink style={navlinkStyle} to="/profile">Profile</NavLink>
      {
        !auth.user && (
          <NavLink style={navlinkStyle} to="/login">Login</NavLink>
        )
      }
      {
        auth.user && (
          <span>Welcome, {auth.user}</span>
        )
      }
    </nav>
  );
};
