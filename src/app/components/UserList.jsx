"use client"
import { useEffect, useState } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} className="border-b py-2">{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}
