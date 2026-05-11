import React from 'react';

const Table = ({ data }) => (
  <table border="1" width="100%" style={{ borderCollapse: "collapse" }}>
    <thead style={{ backgroundColor: "#eee" }}> {/* [cite: 81] */}
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>City</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {data.map(user => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.address.city}</td>
          <td>
            <button>Edit</button> {/* [cite: 84] */}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;