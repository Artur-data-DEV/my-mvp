import { useState, useEffect } from 'react';

export default function UserDetails({ userId }) {
  const [color, setColor] = useState({color: "red"});

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/users/${userId}`);
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, [userId]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4 border border-gray-300 rounded">
      <h3 className="text-xl font-bold">{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Posts: {user.posts.length}</p>
      <button onClick={()=> {setColor("blue")}}></button>
    </div>
  );
}
