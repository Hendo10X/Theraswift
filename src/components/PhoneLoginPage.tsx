import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PhoneLoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your phone login logic here
    console.log('Phone login attempted with:', phoneNumber);
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

      {/* Right side - Phone Login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          <h2 className="text-sm text-gray-600 mb-2">log in</h2>
          <h1 className="text-3xl font-bold mb-8">Welcome back</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="081-234-567-89"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            
            <p className="text-sm text-gray-600 mb-6">
              We will send you verification code for authentication
            </p>
            
            <button
              type="submit"
              className="w-full bg-emerald-800 text-white py-2 px-4 rounded-md hover:bg-emerald-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
            >
              Log in
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <Link to="/" className="text-sm text-emerald-600 hover:underline">
              Use my email instead?
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

export default PhoneLoginPage;