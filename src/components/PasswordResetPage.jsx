import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PasswordResetPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send a request to your backend to initiate the password reset process
    console.log('Password reset requested for:', email);
    // The actual navigation now happens via the Link component in the form
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md px-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Forget your password?</h1>
        <p className="text-gray-600 mb-8 text-center">
          Please enter the email associated with your account. We will email
          a link to reset your password.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Link 
            to="/phone-login" 
            className="block w-full bg-emerald-800 text-white py-2 px-4 rounded-lg text-center hover:bg-emerald-700 hover:text-whitefocus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={handleSubmit}
          >
            Reset Password
          </Link>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-emerald-500 hover:underline text-sm">See Instructions</a>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetPage;