import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BagCheckoutPage = () => {
    const navigate = useNavigate();
    const [bagItems, setBagItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Fetch bag items from your state management solution or API
        const fetchBagItems = async () => {
            const items = await getBagItems();
            setBagItems(items);
            calculateTotal(items);
        };

        fetchBagItems();
    }, []);

    const calculateTotal = (items) => {
        const newTotal = items.reduce((sum, item) => sum + item.price, 0);
        setTotal(newTotal);
    };

    return (
        <div className="min-h-screen bg-white p-5 flex flex-col">
            <div className="mb-6">
                <button onClick={() => navigate(-1)} className="text-gray-600 flex items-center text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </button>
            </div>

            <div className="flex-grow flex flex-col items-center justify-center">
                <div className="w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-6 text-center">In Your Bag</h1>
                    
                    <div className="space-y-4 rounded-lg p-4">
                        {bagItems.map((item, index) => (
                            <div key={index} className="flex justify-between items-center p-3 border-b">
                                <span className="font-medium">{item.name}</span>
                                <span className="font-bold">N{item.price.toLocaleString()}</span>
                            </div>
                        ))}
                        
                        <div className="flex justify-between items-center p-3 border-b">
                            <span className="font-medium">Item sub total</span>
                            <span className="font-bold">N{total.toLocaleString()}</span>
                        </div>
                        
                        <div className="flex justify-between items-center p-3">
                            <span className="font-medium">Total</span>
                            <span className="font-bold">N{total.toLocaleString()}</span>
                        </div>
                    </div>
                    
                    <div className="flex justify-center mt-6">
                        <button 
                            onClick={() => navigate('/CheckoutPage')} 
                            className="w-full bg-green-800 text-white py-3 rounded-md hover:bg-green-700 transition duration-200 text-base font-semibold"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Mock function to simulate fetching bag items
const getBagItems = async () => {
    // Replace this with your actual API call or state management logic
    return [
        { name: "Anti histamine Eye drop", price: 3000 }
    ];
};

export default BagCheckoutPage;
