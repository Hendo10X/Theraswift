import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ConfirmPersonalInfo = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    sex: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password === formData.confirmPassword) {
      // Simulate sending OTP to the phone number
      const otp = Math.floor(1000 + Math.random() * 9000);
      console.log(`OTP sent to ${formData.mobile}: ${otp}`);
      // No need to navigate here since we are using <Link> for routing
    } else {
      console.error('Passwords do not match');
    }
  };

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.dob &&
    formData.mobile &&
    formData.password &&
    formData.confirmPassword &&
    formData.sex &&
    formData.password === formData.confirmPassword;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-emerald-800 p-4 flex justify-between items-center">
        <img src="/path-to-logo.png" alt="Theraswift Logo" className="w-28" />
        <button className="bg-white text-emerald-800 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-green-500 hover:text-white">
          sign in
        </button>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-2xl">
          <h1 className="text-3xl font-bold mb-2">Awesome!</h1>
          <p className="text-xl mb-8">Start by confirming your personal info</p>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            {/* Form Fields */}
            <div>
              <label>Legal First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border-2 p-2 rounded-md"
                required
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border-2 p-2 rounded-md"
                required
              />
            </div>
            <div>
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full border-2 p-2 rounded-md"
                required
              />
            </div>
            <div>
              <label>Mobile No.</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full border-2 p-2 rounded-md"
                required
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border-2 p-2 rounded-md"
                required
              />
            </div>
            <div>
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border-2 p-2 rounded-md"
                required
              />
            </div>
            <div>
              <label>Sex</label>
              <div className="flex gap-4">
                <button
                  type="button"
                  className={`border-2 p-2 w-full rounded-md ${
                    formData.sex === 'Male' ? 'border-emerald-800' : ''
                  }`}
                  onClick={() => setFormData({ ...formData, sex: 'Male' })}
                >
                  Male
                </button>
                <button
                  type="button"
                  className={`border-2 p-2 w-full rounded-md ${
                    formData.sex === 'Female' ? 'border-emerald-800' : ''
                  }`}
                  onClick={() => setFormData({ ...formData, sex: 'Female' })}
                >
                  Female
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-span-2">
              <Link
                to="/VerificationPage"
                state={{ mobile: formData.mobile }}
                className={`w-full block text-center bg-emerald-800 text-white py-4 rounded-md font-semibold shadow-lg hover:bg-emerald-700 ${
                  !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={(e) => {
                  if (!isFormValid) e.preventDefault();
                }}
              >
                Continue
              </Link>
            </div>
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

export default ConfirmPersonalInfo;
