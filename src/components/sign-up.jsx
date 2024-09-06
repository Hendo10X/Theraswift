import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';  

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setIsValid(e.target.value.includes('@')); // Simple email validation
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-emerald-800 p-4 flex justify-between items-center">
        <img src="/path-to-logo.png" alt="Theraswift Logo" className="w-28" />
        <button className="bg-white text-emerald-800 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-green-500 hover:text-white">
          sign in
        </button>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4 relative">
        <button className="absolute top-8 left-8">
          <ArrowLeft size={24} />
        </button>

        <div className="w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-8">
            Awesome! add your email address
          </h1>

          <form className="space-y-6">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 pb-2 text-lg focus:outline-none focus:border-emerald-800"
              required
            />

            {/* Button remains disabled if email is not valid */}
            <Link to="/Personalnform" className="block">
              <button
                type="button"
                className={`w-full bg-emerald-800 text-white py-4 rounded-md font-semibold shadow-lg hover:bg-emerald-700 hover:text-white ${
                  !isValid ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={!isValid} // Disable button if invalid
              >
                Continue
              </button>
            </Link>
          </form>

          <p className="text-center mt-4">
            Already have an account?{' '}
            <a href="#" className="text-emerald-800 font-semibold">
              Sign-in
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignUpPage;
