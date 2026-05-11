import React from 'react';

const Filter = ({ setCityFilter }) => (
    <select onChange={(e) => setCityFilter(e.target.value)}>
        <option value="">All Cities</option>
        <option value="Howemouth">Howemouth</option>
        <option value="South Elvis">South Elvis</option>
    </select>
);

export default Filter;