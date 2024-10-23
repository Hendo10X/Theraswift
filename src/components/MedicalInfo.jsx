import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MedicalInfoPage = () => {
    const navigate = useNavigate();
    const [allergies, setAllergies] = useState('');
    const [medicalConditions, setMedicalConditions] = useState('');
    const [otherMedications, setOtherMedications] = useState('');

    const handleSubmit = () => {
        // Handle submission of medical information
        console.log('Medical info submitted:', { allergies, medicalConditions, otherMedications });
        // Navigate to the next step (e.g., checkout)
        navigate('/BagCheckoutPage');
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

            <div className="flex-grow flex flex-col items-center justify-start w-full max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Let Your Pharmacist Know You</h2>
                
                <div className="w-full mb-6">
                    <p className="mb-2 font-semibold ">Do you have any allergies?</p>
                    <div className="flex space-x-4">
                        <button className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">No</button>
                        <button className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">Yes</button>
                    </div>
                    <input
                        type="text"
                        placeholder="If yes, specify:"
                        value={allergies}
                        onChange={(e) => setAllergies(e.target.value)}
                        className="w-full mt-4 border-b border-gray-300 focus:outline-none focus:border-green-500 "
                    />
                </div>

                <div className="w-full mb-6">
                    <p className="mb-2 font-semibold ">Do you have any medical conditions?</p>
                    <div className="flex space-x-4">
                        <button className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">No</button>
                        <button className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">Yes</button>
                    </div>
                    <input
                        type="text"
                        placeholder="If yes, specify:"
                        value={medicalConditions}
                        onChange={(e) => setMedicalConditions(e.target.value)}
                        className="w-full mt-4 border-b border-gray-300 focus:outline-none focus:border-green-500"
                    />
                </div>

                <div className="w-full mb-6">
                    <p className="mb-2 font-semibold ">Are you taking any other medications</p>
                    <div className="flex space-x-4">
                        <button className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">No</button>
                        <button className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">Yes</button>
                    </div>
                    <input
                        type="text"
                        placeholder="If yes, specify:"
                        value={otherMedications}
                        onChange={(e) => setOtherMedications(e.target.value)}
                        className="w-full mt-4 border-b border-gray-300 focus:outline-none focus:border-green-500"
                    />
                </div>

                <button 
                    onClick={handleSubmit}
                    className="w-full bg-green-800 text-white py-3 rounded-md hover:bg-green-700 transition duration-200 text-base font-semibold mt-8"
                >
                    + Add medications
                </button>
            </div>
        </div>
    );
};

export default MedicalInfoPage;
