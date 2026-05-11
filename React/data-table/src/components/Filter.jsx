import React from 'react';

const Filter = ({ setCityFilter }) => (
    <select onChange={(e) => setCityFilter(e.target.value)}>
        <option value="">All Cities</option>
        <option value="Gwenborough">Gwenborough</option>
        <option value="Wisokyburgh">Wisokyburgh</option>
    </select>
);

export default Filter;