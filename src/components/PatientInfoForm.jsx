import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PatientInfoForm = () => {
    const [patientInfo, setPatientInfo] = useState({
        firstName: '',
        lastName: '',
        month: '',
        day: '',
        year: '',
        gender: '',
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPatientInfo(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, e.g., send data to an API
        console.log('Patient info submitted:', patientInfo);
        // Navigate to the checkout page
        navigate('/CheckoutPage');
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

            <div className="flex-grow flex flex-col items-center justify-start w-full max-w-md mx-auto mb-20">
                <h2 className="text-2xl font-bold mb-4">Who are you buying the medicine for?</h2>
                <p className="mb-8 text-gray-600">Make sure the information below matches the prescription</p>
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block mb-1">Patient first name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={patientInfo.firstName}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block mb-1">Patient last name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={patientInfo.lastName}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4 flex space-x-2">
                        <input
                            type="text"
                            name="month"
                            value={patientInfo.month}
                            onChange={handleInputChange}
                            placeholder="Month"
                            className="w-1/3 p-2 border rounded"
                            required
                        />
                        <input
                            type="text"
                            name="day"
                            value={patientInfo.day}
                            onChange={handleInputChange}
                            placeholder="Day"
                            className="w-1/3 p-2 border rounded"
                            required
                        />
                        <input
                            type="text"
                            name="year"
                            value={patientInfo.year}
                            onChange={handleInputChange}
                            placeholder="Year"
                            className="w-1/3 p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <p className="mb-2">Patient's gender</p>
                        <div className="flex space-x-2">
                            <button
                                type="button"
                                onClick={() => setPatientInfo(prev => ({ ...prev, gender: 'Male' }))}
                                className={`flex-1 p-2 border rounded ${patientInfo.gender === 'Male' ? 'bg-green-800 text-white' : 'bg-white'}`}
                            >
                                Male
                            </button>
                            <button
                                type="button"
                                onClick={() => setPatientInfo(prev => ({ ...prev, gender: 'Female' }))}
                                className={`flex-1 p-2 border rounded ${patientInfo.gender === 'Female' ? 'bg-green-800 text-white' : 'bg-white'}`}
                            >
                                Female
                            </button>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button type="submit" onClick={handleSubmit} className="w-full bg-green-800 text-white py-3 rounded hover:bg-green-700">
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PatientInfoForm;
