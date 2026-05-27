import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">📘 DocBlog</Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/blogs" className="navbar-link">Blog</Link>
        <Link to="/add" className="navbar-button">+ New Post</Link>
      </div>
    </nav>
  );
}

export default Navbar;