"use client";

import { useState } from 'react';

export default function CreateUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Função para validar o e-mail
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    // Validar inputs
    if (!name || !email) {
      setErrorMessage('Name and email are required.');
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage('Invalid email address.');
      return;
    }

    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      const data = await response.json();
      console.log(data)
      setSuccessMessage('User created successfully!');
      setName('');
      setEmail('');
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded-md">
      <h2 className="text-xl font-bold mb-4">Create User</h2>
      
      {successMessage && <div className="mb-4 text-green-600">{successMessage}</div>}
      {errorMessage && <div className="mb-4 text-red-600">{errorMessage}</div>}
      
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="Enter name"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="Enter email"
        />
      </div>

      <button
        type="submit"
        className={`bg-blue-500 text-white px-4 py-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading}
      >
        {loading ? 'Creating...' : 'Create User'}
      </button>
    </form>
  );
}
