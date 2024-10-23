import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

const DeliveryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mockAddress = {
    fullName: "Alabi Abdullahi",
    street: "123 Main Street",
    city: "Lagos",
    state: "Lagos State",
    zipCode: "100001",
    country: "Nigeria"
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Delivery Information</h1>
        
        <div className="border rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-2">Current Delivery Address</h2>
          <p>{mockAddress.fullName}</p>
          <p>{mockAddress.street}</p>
          <p>{mockAddress.city}, {mockAddress.state} {mockAddress.zipCode}</p>
          <p>{mockAddress.country}</p>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition duration-300"
        >
          Add New Address
        </button>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Delivery Address">
          <form className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="fullName" name="fullName" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
            </div>
            <div>
              <label htmlFor="street" className="block text-sm font-medium text-gray-700">Street Address</label>
              <input type="text" id="street" name="street" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input type="text" id="city" name="city" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
              <input type="text" id="state" name="state" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
              <input type="text" id="zipCode" name="zipCode" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
              <input type="text" id="country" name="country" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
            </div>
            <div>
              <label htmlFor="deliveryTime" className="block text-sm font-medium text-gray-700">Preferred Delivery Time</label>
              <select id="deliveryTime" name="deliveryTime" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500">
                <option value="">Select a time</option>
                <option value="morning">Morning (8am - 12pm)</option>
                <option value="afternoon">Afternoon (12pm - 4pm)</option>
                <option value="evening">Evening (4pm - 8pm)</option>
              </select>
            </div>
            <div>
              <label htmlFor="specialInstructions" className="block text-sm font-medium text-gray-700">Special Instructions</label>
              <textarea id="specialInstructions" name="specialInstructions" rows="3" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition duration-300">
              Add Address
            </button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default DeliveryPage;