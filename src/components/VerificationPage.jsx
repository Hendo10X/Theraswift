import React, { useState, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Smartphone } from 'lucide-react';

const VerificationPage = () => {
  const location = useLocation();
  const [method, setMethod] = useState('phone');
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const { mobile } = location.state || {};

  const handleMethodChange = (e) => {
    setMethod(e.target.value);
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== '' && index < 3) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const sendOtp = () => {
    console.log(`Resending OTP to ${method}: ${method === 'phone' ? mobile : 'email'}`);
  };

  const otpString = otp.join('');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-emerald-800 p-4 flex justify-between items-center">
        <img src="/api/placeholder/112/28" alt="Theraswift Logo" className="h-7" />
        <Link to="/LoginPage" className="bg-white text-emerald-800 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-green-500 hover:text-white">
          sign in
        </Link>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md text-center">
          <h1 className="text-3xl font-bold mb-8">Enter your code</h1>
          
          <div className="bg-emerald-100 rounded-full p-6 inline-block mb-6">
            <Smartphone className="w-16 h-16 text-emerald-800" />
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Check your text</h2>
          
          <p className="mb-8 text-gray-600">
            Enter the 4-digit code that was sent to {method === 'phone' ? `*******${mobile?.slice(-4) || '6812'}` : 'your email'}.
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={inputRefs[index]}
                maxLength={1}
                className="w-14 h-14 text-center text-xl border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            ))}
          </div>

          <Link
            to="/MedicationSelector"
            className="bg-emerald-800 text-white py-4 px-8 rounded-md font-semibold text-lg shadow-lg hover:bg-emerald-700 inline-block w-full"
            onClick={(e) => {
              if (otpString !== '1234') {
                e.preventDefault();
                console.error('Invalid OTP');
              } else {
                console.log('OTP verified successfully');
              }
            }}
          >
            Continue
          </Link>

          <div className="mt-6 text-sm">
            <span className="text-gray-600">Didn't get a code?</span>{' '}
            <Link to="/SelectMethod" className="text-emerald-800 font-semibold hover:underline">
              Try another way
            </Link>
          </div>

          {/* Removed the "Verify via" dropdown as it's not in the new design */}
        </div>
      </main>
    </div>
  );
};

export default VerificationPage;