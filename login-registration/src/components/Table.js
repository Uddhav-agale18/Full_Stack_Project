import React from 'react';

function Table() {
  // Fetch user data from localStorage and display in a table
  return (
    <div>
      <h1>User Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>1990-01-01</td>
            <td>john@example.com</td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
}

export default Table;
