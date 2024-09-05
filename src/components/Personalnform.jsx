import React, { useState } from 'react';

const PersonalInfoForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    mobileNo: '',
    password: '',
    confirmPassword: '',
    sex: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-emerald-800 p-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl flex items-center">
          <span className="text-3xl mr-1">+</span> Theraswift
        </div>
        <button className="bg-white text-emerald-800 px-4 py-2 rounded-full font-semibold">
          SIGN-IN
        </button>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl">
          <h1 className="text-3xl font-bold mb-2">Awesome!</h1>
          <p className="text-xl mb-8">start by confirming your personal info</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-gray-700 mb-2" htmlFor="firstName">
                  Legal First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block text-gray-700 mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
            </div>
            
            <div className="flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-gray-700 mb-2" htmlFor="dateOfBirth">
                  Date Of Birth
                </label>
                <input
                  type="text"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  placeholder="MM/DD/YYYY"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block text-gray-700 mb-2" htmlFor="mobileNo">
                  Mobile No.
                </label>
                <input
                  type="tel"
                  id="mobileNo"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
            </div>
            
            <div className="flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Sex</label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className={`px-4 py-2 rounded-md ${formData.sex === 'Male' ? 'bg-emerald-800 text-white' : 'bg-white border border-gray-300'}`}
                  onClick={() => setFormData(prev => ({ ...prev, sex: 'Male' }))}
                >
                  Male
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 rounded-md ${formData.sex === 'Female' ? 'bg-emerald-800 text-white' : 'bg-white border border-gray-300'}`}
                  onClick={() => setFormData(prev => ({ ...prev, sex: 'Female' }))}
                >
                  Female
                </button>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-emerald-800 text-white py-3 rounded-md font-semibold"
            >
              Confirm
            </button>
          </form>
          
          <p className="text-center mt-4">
            Already have an account?{' '}
            <a href="#" className="text-emerald-800 font-semibold">
              Sign-In
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default PersonalInfoForm;