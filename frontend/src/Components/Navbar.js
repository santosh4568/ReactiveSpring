import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Student Management</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/searchStudent">Search Student</Link></li>
        <li><Link to="/add-student">Add Student</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
