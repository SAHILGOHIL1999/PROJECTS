import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ blog, onDelete }) {
    return (
        <div className="blog-card">
            <span className="blog-card-category">{blog.category}</span>
            <h3 className="blog-card-title">{blog.title}</h3>
            <p className="blog-card-desc">{blog.description}</p>
            <div className="blog-card-actions">
                <Link to={`/blog/${blog.id}`} className="blog-card-link">Read Article →</Link>
                <div className="blog-card-buttons">
                    <Link to={`/edit/${blog.id}`} className="btn-secondary">Edit</Link>
                    <button onClick={() => onDelete(blog.id)} className="btn-danger">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;