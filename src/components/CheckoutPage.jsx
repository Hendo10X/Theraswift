import React from 'react';
import { useNavigate } from 'react-router-dom';
import DateTimePicker from './DateTimePicker';

const CheckoutPage = () => {
    const navigate = useNavigate();

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
                <h2 className="text-2xl font-bold mb-4">Checkout</h2>
                <div className="space-y-4">
                    <CheckoutItem 
                        icon="bag" 
                        text="Bag" 
                        subtext="Check your bag" 
                        onClick={() => navigate('/BagCheckoutPage')}
                    />
                    <CheckoutItem 
                        icon="location" 
                        text="Address" 
                        subtext="Choose delivery address" 
                        onClick={() => navigate('/AddressPage')}
                    />
                    <CheckoutItem 
                        icon="clock" 
                        text="Choose time" 
                        subtext="Free Delivery" 
                        onClick={() => navigate('/DateTimePicker')}
                    />
                    <CheckoutItem 
                        icon="profile" 
                        text="Profile" 
                        subtext="Profile details" 
                        onClick={() => navigate('/ProfilePage')}
                    />
                    
                    <div className="text-sm text-gray-600 py-2 px-3">
                        Welcome to Theraswift! Enjoy N500 off your first fill
                    </div>
                    
                    <CheckoutItem icon="payment" text="Payment" />
                </div>
                
                <div className="flex justify-between items-center mt-6 mb-6 text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-medium text-md ml-8">N9,000</span>
                </div>
                
                <div className="flex justify-center mt-2">
                    <button className="w-3/4 min-w-max bg-green-800 text-white py-3 px-4 rounded-md hover:bg-green-700 transition duration-200 text-base font-semibold whitespace-nowrap">
                        Proceed to Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

const CheckoutItem = ({ icon, text, subtext, onClick }) => (
    <div className="flex justify-between items-center p-3 border-b cursor-pointer" onClick={onClick}>
        <div className="flex items-center">
            <IconComponent icon={icon} />
            <div>
                <div className="text-base">{text}</div>
                {subtext && <div className="text-sm text-gray-500">{subtext}</div>}
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    </div>
);

const IconComponent = ({ icon }) => {
    const iconMap = {
        bag: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        ),
        location: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        clock: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        profile: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        ),
        payment: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
        ),
    };

    return iconMap[icon] || null;
};

export default CheckoutPage;