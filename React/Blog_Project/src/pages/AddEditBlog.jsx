import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function AddEditBlog({ blogs, onSubmit }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [form, setForm] = useState({
    title: '',
    category: 'ReactJS',
    description: '',
    content: ''
  });

  useEffect(() => {
    if (isEditing && blogs) {
      const match = blogs.find(item => item.id === id);
      if (match) setForm(match);
    }
  }, [id, isEditing, blogs]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.content) {
      alert("Missing parameter inputs.");
      return;
    }
    onSubmit(form);
    navigate('/blogs');
  };

  return (
    <div className="form-box">
      <h2>{isEditing ? '🔧 Edit Document Node' : '📝 Append New Document'}</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label className="form-label">Title Header</label>
          <input 
            type="text" 
            name="title" 
            className="form-input" 
            value={form.title} 
            onChange={handleInput} 
          />
        </div>
        <div className="form-group">
          <label className="form-label">Target Category Directory</label>
          <select name="category" className="form-input" value={form.category} onChange={handleInput}>
            <option value="ReactJS">ReactJS</option>
            <option value="Routing">Routing</option>
            <option value="State Management">State Management</option>
            <option value="JavaScript ES6">JavaScript ES6</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Short Summary Abstract</label>
          <input 
            type="text" 
            name="description" 
            className="form-input" 
            value={form.description} 
            onChange={handleInput} 
          />
        </div>
        <div className="form-group">
          <label className="form-label">Body Markdown/Text Payload</label>
          <textarea 
            name="content" 
            className="form-input" 
            rows="8" 
            value={form.content} 
            onChange={handleInput} 
            style={{ resize: 'vertical' }}
          />
        </div>
        <button type="submit" className="btn-submit">
          {isEditing ? 'Commit Structural Changes' : 'Append to Build Stack'}
        </button>
      </form>
    </div>
  );
}

export default AddEditBlog;