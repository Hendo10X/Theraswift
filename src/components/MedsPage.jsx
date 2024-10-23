import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MedicationSearchModal from './MedicationSearchModal';

const MedsPage = ({ selectedMedications, setSelectedMedications }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddMedication = (medication) => {
        setSelectedMedications([...selectedMedications, medication]);
        setIsModalOpen(false);
    };

    return (
        <div className="flex items-center justify-center min-h-full">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4 text-center">Your Selected Medications</h2>
                {selectedMedications.length > 0 ? (
                    <>
                        <ul className="list-disc pl-5 mb-4">
                            {selectedMedications.map((med, index) => (
                                <li key={index}>{med.name}</li>
                            ))}
                        </ul>
                        <Link 
                            to="/CheckoutPage"
                            className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200 inline-block text-center"
                        >
                            Proceed to Checkout
                        </Link>
                    </>
                ) : (
                    <div className="text-center">
                        <p className="text-gray-600 mb-4 text-lg">No medications selected.</p>
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200"
                        >
                            Add Prescription
                        </button>
                    </div>
                )}
            </div>
            <MedicationSearchModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddMedication={handleAddMedication}
            />
        </div>
    );
};

export default MedsPage;
