import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberDevice, setRememberDevice] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login attempted with:', { email, password, rememberDevice });
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left side - Brand information */}
      <div className="hidden lg:flex lg:w-1/2 bg-emerald-800 text-white p-12 flex-col justify-between">
        <div>
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-green-400 rounded-full mr-4"></div>
            <h1 className="text-4xl font-bold">Theraswift Rx</h1>
          </div>
          <p className="text-xl">
            A quicker, smarter, simpler and<br />
            kinder <span className="text-green-400">pharmacy</span>.
          </p>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          <h2 className="text-sm text-gray-600 mb-2">log in</h2>
          <h1 className="text-3xl font-bold mb-8">Welcome back</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  checked={rememberDevice}
                  onChange={(e) => setRememberDevice(e.target.checked)}
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Remember this device
                </label>
              </div>
              <Link to="/PasswordResetPage" className="text-sm text-emerald-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            
            <button
              type="submit"
              className="w-full bg-emerald-800 text-white py-2 px-4 rounded-md hover:bg-emerald-700 hover:text-whitefocus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
            >
              Log in
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <Link to="/PhoneLoginPage" className="text-sm text-emerald-600 hover:underline">
              Use my phone number instead?
            </Link>
          </div>
          
          <div className="mt-4 text-center">
            <Link to="/sign-up" className="text-sm text-emerald-600 hover:underline">
              Don't have an account? Sign-up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;