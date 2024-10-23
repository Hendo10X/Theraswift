import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSaveProfile = () => {
        // Here you would typically save the profile information
        console.log('Profile saved:', { name, email, phone });
        // Navigate to the medical information page
        navigate('/MedicalInfoPage');
    };

    return (
        <div className="flex flex-col min-h-screen bg-white p-5">
            <div className="flex items-center mb-6">
                <button onClick={() => navigate(-1)} className="text-gray-600 flex items-center text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </button>
            </div>

            <div className="flex-grow flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Your Profile</h2>
                <div className="w-full max-w-md space-y-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                </div>
                <button 
                    onClick={handleSaveProfile}
                    className="w-full max-w-md bg-green-800 text-white py-3 rounded-md hover:bg-green-700 transition duration-200 text-base font-semibold mt-8"
                >
                    Save Profile
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;
