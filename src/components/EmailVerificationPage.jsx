import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const EmailVerificationPage = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold text-center mb-8">Enter your code</h1>
        
        <div className="flex justify-center mb-8">
          <div className="bg-red-50 p-4 rounded-full">
            <Mail className="w-16 h-16 text-red-500" />
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold text-center mb-4">Check your email</h2>
        
        <p className="text-center text-gray-600 mb-6">
          Enter the 6-digit code that was sent to *********@gmail.com
        </p>
        
        <div className="flex justify-center space-x-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleOtpChange(e, index)}
              maxLength={1}
              className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-300 rounded-md focus:border-green-500 focus:outline-none"
            />
          ))}
        </div>
        
        <button
          className="w-full py-3 bg-green-700 text-white rounded-md font-semibold hover:bg-green-800 transition duration-300"
          onClick={(e) => {
            if (otp.join('') !== '123456') {
              e.preventDefault();
              console.error('Invalid OTP');
            } else {
              console.log('OTP verified successfully');
            }
          }}
        >
          Continue
        </button>
        
        <p className="text-center mt-4">
          <Link to="/select-method" className="text-green-700 hover:underline">
            Didn't get a code? Try another way
          </Link>
        </p>
      </div>
    </div>
  );
};

export default EmailVerificationPage;