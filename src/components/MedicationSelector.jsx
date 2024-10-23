import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const MedicationSelector = () => {
    const [medications, setMedications] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Load existing medications if any
        const existingMedications = location.state?.selectedMedications || [];
        setMedications(existingMedications);
    }, [location.state]);

    const handleSearch = (term) => {
        setSearchTerm(term);
        // Simulating API search results
        setSearchResults(term ? [
            { name: `${term} 5mg`, dosage: '5 Mg', quantity: '28 Tablets', price: 'N1000' },
            { name: `${term} 10mg`, dosage: '10 Mg', quantity: '14 Tablets', price: 'N1500' },
        ] : []);
    };

    const addMedication = (med) => {
        setMedications([...medications, med]);
        setSearchResults([]);
        setSearchTerm('');
    };

    const removeMedication = (index) => {
        setMedications(medications.filter((_, i) => i !== index));
    };

    const handleContinue = () => {
        if (medications.length > 0) {
            navigate('/dashboard', { state: { selectedMedications: medications } });
        } else {
            alert('Please select at least one medication before continuing.');
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 font-sans flex flex-col min-h-screen">
            <div className="flex-grow">
                <h1 className="text-2xl font-bold mb-2 text-center">What medication are you taking?</h1>
                <p className="text-center mb-6 text-gray-600">Let us know which medications you take</p>

                <div className="relative mb-4">
                    <input
                        type="text"
                        placeholder="Search Medication"
                        value={searchTerm}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>

                {searchResults.map((result, index) => (
                    <div key={index} className="mb-2 p-2 border rounded-md cursor-pointer hover:bg-gray-100" onClick={() => addMedication(result)}>
                        <p className="font-semibold">{result.name}</p>
                        <p className="text-sm text-gray-600">{result.dosage} - {result.quantity}</p>
                    </div>
                ))}

                {medications.map((med, index) => (
                    <div key={index} className="mb-4 border rounded-md shadow-sm">
                        <div className="p-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="font-semibold">{med.name}</h3>
                                    <p className="text-sm text-gray-600">{med.price}</p>
                                </div>
                                <button onClick={() => removeMedication(index)} className="text-gray-400 hover:text-gray-600">
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="flex justify-between mt-2">
                                <span>{med.dosage}</span>
                                <span>{med.quantity}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={handleContinue}
                className="w-full bg-[#1B4332] text-white py-2 rounded-md hover:bg-[#15372A] transition duration-200 mt-4"
            >
                Continue
            </button>
        </div>
    );
};

export default MedicationSelector;