import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
    const [activeTab, setActiveTab] = useState('current');
    const navigate = useNavigate();

    const mockCurrentOrders = [
        { id: 1, medication: 'Amoxicillin', quantity: 30, status: 'Processing' },
        { id: 2, medication: 'Lisinopril', quantity: 60, status: 'Shipped' },
    ];

    const mockPastOrders = [
        { id: 3, medication: 'Metformin', quantity: 90, date: '2023-05-15' },
        { id: 4, medication: 'Atorvastatin', quantity: 30, date: '2023-04-22' },
        { id: 5, medication: 'Sertraline', quantity: 60, date: '2023-03-10' },
    ];

    const handleContinue = () => {
        navigate('/PatientInfoForm');
    };

    return (
        <div className="flex justify-center items-center min-h-full">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-semibold mb-6 text-center">Your Orders</h2>
                
                <div className="flex mb-6">
                    <button
                        className={`flex-1 py-2 px-4 text-center ${activeTab === 'current' ? 'bg-emerald-800 text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => setActiveTab('current')}
                    >
                        Current
                    </button>
                    <button
                        className={`flex-1 py-2 px-4 text-center ${activeTab === 'past' ? 'bg-emerald-800 text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => setActiveTab('past')}
                    >
                        Past
                    </button>
                </div>
                
                {activeTab === 'current' ? (
                    <div>
                        {mockCurrentOrders.length > 0 ? (
                            mockCurrentOrders.map(order => (
                                <div key={order.id} className="mb-4 p-4 border border-gray-200 rounded">
                                    <p className="font-medium">{order.medication}</p>
                                    <p className="text-sm text-gray-600">Quantity: {order.quantity}</p>
                                    <p className="text-sm text-green-600">Status: {order.status}</p>
                                </div>
                            ))
                        ) : (
                            <div className="text-gray-600 text-center">
                                No current orders
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        {mockPastOrders.length > 0 ? (
                            mockPastOrders.map(order => (
                                <div key={order.id} className="mb-4 p-4 border border-gray-200 rounded">
                                    <p className="font-medium">{order.medication}</p>
                                    <p className="text-sm text-gray-600">Quantity: {order.quantity}</p>
                                    <p className="text-sm text-gray-600">Date: {order.date}</p>
                                </div>
                            ))
                        ) : (
                            <div className="text-gray-600 text-center">
                                No past orders
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'current' && (
                    <button 
                        onClick={handleContinue}
                        className="w-full mt-6 bg-emerald-800 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200"
                    >
                        Continue
                    </button>
                )}
            </div>
        </div>
    );
};

export default OrderPage;

