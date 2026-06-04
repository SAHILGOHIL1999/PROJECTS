import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';

function BlogListing({ blogs, onDelete }) {
  const [query, setQuery] = useState('');

  const recordsFiltered = blogs.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="list-header">
        <h2>All Documentation Topics</h2>
        <input
          type="text"
          placeholder="🔍 Search files..."
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {recordsFiltered.length === 0 ? (
        <div className="no-results">
          <h3>No matching entries found.</h3>
          <p>Refine your search queries or declare a new index document module.</p>
        </div>
      ) : (
        <div className="content-grid">
          {recordsFiltered.map(item => (
            <BlogCard key={item.id} blog={item} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogListing;