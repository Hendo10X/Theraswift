import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SelectMethodPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('phone');
  const navigate = useNavigate();

  const handleMethodChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  const handleSubmit = () => {
    navigate('/verification', { state: { method: selectedMethod } });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-emerald-800 p-4 flex justify-between items-center">
        <img src="/path-to-logo.png" alt="Theraswift Logo" className="w-28" />
        <button className="bg-white text-emerald-800 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-green-500 hover:text-white">
          sign in
        </button>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">How should we send the code?</h1>
          <p className="text-sm mb-6">Phone number/Email</p>

          <div className="mb-8">
            <label className="flex items-center mb-4">
              <input
                type="radio"
                name="method"
                value="phone"
                checked={selectedMethod === 'phone'}
                onChange={handleMethodChange}
                className="mr-3"
              />
              <span>*******6812</span>
            </label>

            <label className="flex items-center">
              <input
                type="radio"
                name="method"
                value="email"
                checked={selectedMethod === 'email'}
                onChange={handleMethodChange}
                className="mr-3"
              />
              <span>*********@gmail.com</span>
            </label>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-emerald-800 text-white py-4 w-full inline-block rounded-md font-semibold shadow-lg hover:bg-emerald-700"
          >
            Send Code
          </button>
        </div>
      </main>
    </div>
  );
};

export default SelectMethodPage;
