"use client"

import { useEffect, useState } from 'react';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Post List</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="border-b py-2">
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
