import React, { useState } from 'react';
import {
  Lock,
  Eye,
  EyeOff,
  ClipboardList,
} from 'lucide-react';
import ItemList from './ItemList'; // Import your ItemList component

const LoginPage = () => {
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsLoggedIn(true);
        setError('');
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    }
  };

  // If logged in, show the donation list
  if (isLoggedIn) {
    return <ItemList />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex flex-col items-center mb-6">
          <Lock className="text-blue-600 mb-2" size={48} />
          <h1 className="text-2xl font-bold text-gray-800">Access Donations</h1>
          <p className="text-gray-600 text-center">
            Enter the password to view the available donations.
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                placeholder="Enter the common password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition shadow"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
