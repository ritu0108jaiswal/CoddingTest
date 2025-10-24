import React, { useState, useEffect } from "react";

function FetchBooks() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const apiKey = "https://jsonplaceholder.typicode.com/users";

    fetch(apiKey)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const topFive = data.slice(0, 5);
        setUsers(topFive);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <table>
        <tr>
          <td>User Name</td>
          <td>User email</td>
        </tr>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default FetchBooks;
