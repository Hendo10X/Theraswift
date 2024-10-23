import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';  // Add useNavigate

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();  // Initialize useNavigate

  const handleChange = (e) => {
    setEmail(e.target.value);
    setIsValid(e.target.value.includes('@')); // Simple email validation
  };

  const handleBackClick = () => {
    navigate('/');  // Navigate to the homepage
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-emerald-800 p-4 sm:p-6 flex justify-between items-center">
        <img src="/TheraSwiftLogo.svg" alt="Theraswift Logo" className="w-24 sm:w-28 md:w-32" />
        <Link to="/LoginPage" className="bg-white text-emerald-800 px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:bg-green-500 hover:text-white transition duration-300">
          sign in
        </Link>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 relative">
        <button 
          className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8"
          onClick={handleBackClick}  // Add onClick handler
        >
          <ArrowLeft size={20} className="text-emerald-800" />
        </button>

        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">
            Awesome! add your email address
          </h1>

          <form className="space-y-6">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 pb-2 text-base sm:text-lg focus:outline-none focus:border-emerald-800"
              required
            />

            {/* Button remains disabled if email is not valid */}
            <Link to="/Personalnform" className="block">
              <button
                type="button"
                className={`w-full bg-emerald-800 text-white py-3 sm:py-4 rounded-md text-sm sm:text-base font-semibold shadow-lg hover:bg-emerald-700 hover:text-white transition duration-300 ${
                  !isValid ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={!isValid} // Disable button if invalid
              >
                Continue
              </button>
            </Link>
          </form>

          <p className="text-center mt-4 text-sm sm:text-base">
            Already have an account?{' '}
            <Link to="/LoginPage" className="text-emerald-800 hover:text-emerald-600 font-semibold">
              Sign-in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignUpPage;
