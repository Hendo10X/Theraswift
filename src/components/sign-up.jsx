import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';



const SignUpPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    onSubmit(email);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-emerald-800 p-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">Theraswift</div>
        <button className="bg-white text-emerald-800 px-4 py-2 rounded-md font-semibold">
          SIGN-IN
        </button>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <button className="self-start mb-2">
          <ArrowLeft size={24} />
        </button>
        
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Awesome! add your email address
          </h1>
          
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b-2 border-gray-300 pb-2 text-lg focus:outline-none focus:border-emerald-800"
              required
            />
            
            <button
              type="submit"
              className="w-full bg-emerald-800 text-white py-3 rounded-md mt-8 font-semibold"
            >
              CONTINUE
            </button>
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