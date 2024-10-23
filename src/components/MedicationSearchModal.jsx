import React, { useState } from 'react';

const MedicationSearchModal = ({ isOpen, onClose, onAddMedication }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMedication, setSelectedMedication] = useState(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">What medication are you taking?</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="mb-4 text-gray-600">Let us know which medications you take</p>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search Medication"
            className="w-full p-2 pl-10 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg className="w-6 h-6 absolute left-2 top-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        {selectedMedication && (
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{selectedMedication.name}</h3>
                <p className="text-sm text-gray-600">{selectedMedication.description}</p>
              </div>
              <p className="font-bold">N{selectedMedication.price}</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p>{selectedMedication.dosage}</p>
              <p>{selectedMedication.quantity} Tablets</p>
            </div>
            <button
              onClick={() => onAddMedication(selectedMedication)}
              className="w-full mt-2 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200"
            >
              ADD TO BAG
            </button>
          </div>
        )}
        <button
          onClick={onClose}
          className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-200 text-base font-semibold"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default MedicationSearchModal;
