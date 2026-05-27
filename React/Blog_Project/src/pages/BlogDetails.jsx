import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function BlogDetails({ blogs, onDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = blogs.find(item => item.id === id);

  if (!article) {
    return (
      <div className="no-results">
        <h2>Documentation missing or corrupt.</h2>
        <Link to="/blogs" className="back-link">Return to Index</Link>
      </div>
    );
  }

  return (
    <article className="article-view">
      <Link to="/blogs" className="back-link">← Back to Index</Link>
      <div className="article-header">
        <span className="blog-card-category">{article.category}</span>
        <h1 className="article-title">{article.title}</h1>
        <p className="article-desc"><em>{article.description}</em></p>
      </div>
      <hr className="article-divider" />
      <div className="article-body">
        <p>{article.content}</p>
      </div>
      <div className="admin-toolbar">
        <Link to={`/edit/${article.id}`} className="btn-admin-edit">Modify Record</Link>
        <button
          onClick={() => { onDelete(article.id); navigate('/blogs'); }}
          className="btn-admin-delete"
        >
          Purge File
        </button>
      </div>
    </article>
  );
}

export default BlogDetails;