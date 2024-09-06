import React, { useState, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';

const VerificationPage = () => {
  const location = useLocation();
  const [method, setMethod] = useState('phone'); // default method is phone
  const [otp, setOtp] = useState(['', '', '', '']); // four separate fields for OTP
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]; // refs to focus inputs

  const { mobile } = location.state || {};

  const handleMethodChange = (e) => {
    setMethod(e.target.value);
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      // Only accept numeric values
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input field if available
      if (index < 3 && value !== '') {
        inputRefs[index + 1].current.focus();
      }
    } else if (value === '') {
      // Handle deletion (clear current field)
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      // Move back to the previous input field if available
      inputRefs[index - 1].current.focus();
    }
  };

  const sendOtp = () => {
    if (method === 'phone') {
      console.log(`Resending OTP to phone: ${mobile}`);
    } else {
      console.log(`Resending OTP to email`);
    }
  };

  const otpString = otp.join(''); // Combine OTP digits for verification

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
          <h1 className="text-3xl font-bold mb-4">Enter your code</h1>
          <img src="/path-to-phone-icon.png" alt="Phone Icon" className="mx-auto mb-4" style={{ width: '100px', height: '100px' }} />
          <p className="text-lg font-semibold mb-2">Check your {method === 'phone' ? 'text' : 'email'}</p>
          <p className="mb-6">
            Enter the 4-digit code that was sent to {method === 'phone' ? `*******${mobile?.slice(-4)}` : 'your email'}.
          </p>

          <div className="grid grid-cols-4 gap-4 mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={inputRefs[index]}
                maxLength={1}
                className="border-2 p-2 text-center text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            ))}
          </div>

          <Link
            to="/dashboard"
            className="bg-emerald-800 text-white py-4 w-full inline-block rounded-md font-semibold shadow-lg hover:bg-emerald-700"
            onClick={(e) => {
              if (otpString !== '1234') { // Replace with your OTP validation logic
                e.preventDefault(); // prevent navigation if the OTP is wrong
                console.error('Invalid OTP');
              } else {
                console.log('OTP verified successfully');
              }
            }}
          >
            Continue
          </Link>

          <div className="mt-4">
            <p className="text-gray-600">Didn't get a code?</p>
            <button onClick={sendOtp} className="text-emerald-800 font-semibold underline mt-1">
              Try another way
            </button>
          </div>

          <div className="mt-6">
            <label className="text-lg mr-4">Verify via:</label>
            <select
              value={method}
              onChange={handleMethodChange}
              className="border-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="phone">Phone</option>
              <option value="email">Email</option>
            </select>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VerificationPage;
