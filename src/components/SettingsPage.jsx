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

const SettingsPage = () => {
  const [isHMOModalOpen, setIsHMOModalOpen] = useState(false);
  const [isFamilyModalOpen, setIsFamilyModalOpen] = useState(false);
  const [frontCardImage, setFrontCardImage] = useState(null);
  const [backCardImage, setBackCardImage] = useState(null);

  const userInfo = {
    name: 'Alabi Abdullahi',
    email: 'alabiabdulahi@gmail.com',
    phoneNumber: '08089556812',
  };

  const handleImageUpload = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      <h1 className="text-2xl font-bold mb-6">Your Account</h1>
      
      <div className="border rounded-lg p-6 mb-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-sm text-gray-600">Name</h2>
            <p className="font-medium">{userInfo.name}</p>
          </div>
          <div>
            <h2 className="text-sm text-gray-600">E-mail</h2>
            <p className="font-medium">{userInfo.email}</p>
          </div>
          <div>
            <h2 className="text-sm text-gray-600">Phone Number</h2>
            <p className="font-medium">{userInfo.phoneNumber}</p>
          </div>
        </div>
        
        <div className="mt-6">
          <h2 className="text-sm font-semibold mb-2">Family Members</h2>
          <p className="text-sm text-gray-500 italic mb-4">You have not added any family members yet</p>
          <button 
            onClick={() => setIsFamilyModalOpen(true)}
            className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition duration-300"
          >
            Add Family
          </button>
        </div>
      </div>
      
      <div className="border rounded-lg p-6">
        <h2 className="font-semibold mb-4">HMO</h2>
        <p className="text-sm text-gray-500 mb-4">YOU HAVE NO HMO ADDED TO YOUR ACCOUNT</p>
        <button 
          onClick={() => setIsHMOModalOpen(true)}
          className="w-full bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition duration-300"
        >
          Add HMO
        </button>
      </div>

      <Modal isOpen={isHMOModalOpen} onClose={() => setIsHMOModalOpen(false)} title="Add HMO">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Front of Insurance Card</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {frontCardImage ? (
                  <img src={frontCardImage} alt="Front of card" className="mx-auto h-32 w-auto" />
                ) : (
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="front-card-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500">
                    <span>Upload a file</span>
                    <input id="front-card-upload" name="front-card-upload" type="file" className="sr-only" onChange={(e) => handleImageUpload(e, setFrontCardImage)} />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Back of Insurance Card</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {backCardImage ? (
                  <img src={backCardImage} alt="Back of card" className="mx-auto h-32 w-auto" />
                ) : (
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="back-card-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500">
                    <span>Upload a file</span>
                    <input id="back-card-upload" name="back-card-upload" type="file" className="sr-only" onChange={(e) => handleImageUpload(e, setBackCardImage)} />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </form>
      </Modal>

      <Modal isOpen={isFamilyModalOpen} onClose={() => setIsFamilyModalOpen(false)} title="Add Family Member">
        <form className="space-y-4">
          <div>
            <label htmlFor="legal-name" className="block text-sm font-medium text-gray-700">Legal Name</label>
            <input type="text" id="legal-name" name="legal-name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input type="text" id="last-name" name="last-name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
          </div>
          <div>
            <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">Birthdate</label>
            <input type="date" id="birthdate" name="birthdate" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
          </div>
          <div>
            <label htmlFor="sex" className="block text-sm font-medium text-gray-700">Sex</label>
            <select id="sex" name="sex" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="relation" className="block text-sm font-medium text-gray-700">Relation</label>
            <select id="relation" name="relation" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500">
              <option value="">Select</option>
              <option value="spouse">Spouse</option>
              <option value="child">Child</option>
              <option value="parent">Parent</option>
              <option value="sibling">Sibling</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition duration-300">
            Add Family Member
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default SettingsPage;