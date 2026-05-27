import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogListing from './pages/BlogListing';
import BlogDetails from './pages/BlogDetails';
import AddEditBlog from './pages/AddEditBlog';
import './App.css';

const defaultData = [
  {
    id: '1',
    title: 'Component Architecture Basics',
    category: 'ReactJS',
    description: 'Learn the core building blocks of component UI rendering models.',
    content: 'React applications are structured cleanly via modular components. Reusability helps decouple view files from core parent logic rules easily.'
  },
  {
    id: '2',
    title: 'SPA Routing Methods',
    category: 'Routing',
    description: 'Declarative front-end mapping using client side browser page routes.',
    content: 'React Router DOM seamlessly loads path intersections without demanding full browser reload pipelines.'
  }
];

function App() {
  const [blogs, setBlogs] = useState(() => {
    const data = localStorage.getItem('doc_blogs');
    return data ? JSON.parse(data) : defaultData;
  });

  useEffect(() => {
    localStorage.setItem('doc_blogs', JSON.stringify(blogs));
  }, [blogs]);

  const handleCreate = (newDoc) => {
    setBlogs([...blogs, { ...newDoc, id: Date.now().toString() }]);
  };

  const handleUpdate = (updatedDoc) => {
    setBlogs(blogs.map(item => item.id === updatedDoc.id ? updatedDoc : item));
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter(item => item.id !== id));
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home blogs={blogs.slice(0, 2)} />} />
            <Route path="/blogs" element={<BlogListing blogs={blogs} onDelete={handleDelete} />} />
            <Route path="/blog/:id" element={<BlogDetails blogs={blogs} onDelete={handleDelete} />} />
            <Route path="/add" element={<AddEditBlog onSubmit={handleCreate} />} />
            <Route path="/edit/:id" element={<AddEditBlog blogs={blogs} onSubmit={handleUpdate} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;