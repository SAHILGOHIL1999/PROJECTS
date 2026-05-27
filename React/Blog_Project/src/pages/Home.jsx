import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';

function Home({ blogs }) {
  return (
    <div>
      <header className="hero">
        <h1 className="hero-headline">Knowledge Base Documentation</h1>
        <p className="hero-subline">Organize structural component workflows, notes, and technical files cleanly.</p>
        <Link to="/blogs" className="hero-cta">Explore All Documents</Link>
      </header>

      <section className="featured-section">
        <h2 className="section-title">Featured Articles</h2>
        <div className="content-grid">
          {blogs.map(blog => (
            <div key={blog.id} className="blog-card">
              <span className="blog-card-category">{blog.category}</span>
              <h3 className="blog-card-title">{blog.title}</h3>
              <p className="blog-card-desc">{blog.description}</p>
              <Link to={`/blog/${blog.id}`} className="blog-card-link">Read Blueprint →</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;