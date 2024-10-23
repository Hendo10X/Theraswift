import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddressPage = () => {
    const navigate = useNavigate();
    const [address, setAddress] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const mockAddresses = [
        '123 Main St, City, State',
        '456 Elm St, Town, State',
        '789 Oak Ave, Village, State',
        '101 Pine Rd, Suburb, State',
        '202 Maple Ln, County, State'
    ];

    useEffect(() => {
        if (address.length > 2) {
            const filteredAddresses = mockAddresses.filter(a => 
                a.toLowerCase().includes(address.toLowerCase())
            );
            setSuggestions(filteredAddresses);
        } else {
            setSuggestions([]);
        }
    }, [address]);

    const handleAddAddress = () => {
        console.log('Address added:', address);
        navigate('/checkout');
    };

    return (
        <div className="bg-white p-5 max-w-md mx-auto h-screen flex flex-col">
            <div className="flex items-center mb-6">
                <button onClick={() => navigate(-1)} className="text-gray-600 flex items-center text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </button>
            </div>
            
            <div className="flex-grow flex flex-col justify-center items-center space-y-6">
                <h2 className="text-3xl font-bold text-gray-800 text-center">Input your address</h2>
                <p className="text-gray-600 text-center text-base">
                    Add a more discrete address with a landmark for better services
                </p>
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Enter Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full p-3 bg-gray-200 rounded-md pl-10 text-gray-700"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                
                {suggestions.length > 0 && (
                    <div className="bg-white shadow-md rounded-md w-full">
                        {suggestions.map((suggestion, index) => (
                            <div 
                                key={index} 
                                className="p-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => setAddress(suggestion)}
                            >
                                {suggestion}
                            </div>
                        ))}
                    </div>
                )}
                
                <button 
                    onClick={handleAddAddress}
                    className="w-full bg-green-800 text-white py-3 rounded-md hover:bg-green-700 transition duration-200 text-base font-semibold"
                >
                    Add Address
                </button>
            </div>
        </div>
    );
};

export default AddressPage;
