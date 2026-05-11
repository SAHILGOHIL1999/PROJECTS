import React from 'react';
import '../App.css';

const Table = ({ data }) => {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address.city}</td>
            <td>
              <button className="edit-btn">Edit</button> {/* [cite: 84] */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;