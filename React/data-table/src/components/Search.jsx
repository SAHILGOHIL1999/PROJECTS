import React from 'react';

const Search = ({ setSearch }) => (
  <input 
    type="text" 
    placeholder="Search by name..." 
    onChange={(e) => setSearch(e.target.value)} 
  />
);

export default Search;