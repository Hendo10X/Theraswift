import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Keeping the original image imports
import prescriptionImage from '../../assets/drugimage.png';
import weightLossImage from '../../assets/looseweight.png';
import fertilityImage from '../../assets/Fertilitydrug.png';

const Hero = () => {
  const navigate = useNavigate();

  const handleEssentialsClick = () => {
    navigate('/EssentialsPage');
  };

  return (
    <div className="w-full px-5 lg:px-[90px] py-[60px] bg-white">
      <section className="container mx-auto">
        {/* Title and List Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight text-green-600">
              Meds <br /> made simple.
            </h1>
          </div>
          <ul className="list-disc list-inside text-base space-y-2 text-gray-600">
            <li>Free at home or office delivery</li>
            <li>Private care</li>
            <li>Ongoing care</li>
          </ul>
        </div>

        {/* Grid of Content Boxes */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {/* Prescription Box */}
          <div className="bg-[#F2F2F2] p-6 rounded-lg flex items-center justify-between">
            <div className="w-1/2 pr-4">
              <h2 className="text-2xl font-bold mb-4">Prescriptions (Rx)</h2>
              <Link to="/find-your-meds">
                <button className="px-4 py-2 border border-black rounded-full text-sm text-black hover:bg-black hover:text-white transition">
                  Find your meds →
                </button>
              </Link>
            </div>
            <div className="w-1/2 flex justify-end">
              <img src={prescriptionImage} alt="Prescription" className="max-w-full h-auto object-contain" />
            </div>
          </div>

          {/* Weight Loss Box */}
          <div className="bg-[#E5F4E3] p-6 rounded-lg flex items-center justify-between">
            <div className="w-1/2 pr-4">
              <h2 className="text-2xl font-bold mb-4">Loose Weight With GLP - 1s</h2>
              <Link to="/check-if-we-deliver">
                <button className="px-4 py-2 rounded-full text-sm text-white bg-green-500 hover:bg-black transition">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="w-1/2 flex justify-end">
              <img src={weightLossImage} alt="Weight Loss" className="max-w-full h-auto object-contain" />
            </div>
          </div>

          {/* Essentials Box */}
          <div className="bg-[#D9E4F2] p-6 rounded-lg flex items-center col-span-2">
            <div className="w-1/4 flex justify-center">
              <img src={fertilityImage} alt="Essentials" className="max-w-full h-auto object-contain" />
            </div>
            <div className="w-3/4 pl-6">
              <h2 className="text-2xl font-bold mb-2">Essentials</h2>
              <p className="text-base text-gray-600 mb-4">Browse over the counter meds</p>
              <button onClick={handleEssentialsClick} className="px-4 py-2 rounded-full text-sm text-white bg-green-500 hover:bg-black transition">
                  →
                </button>
            </div>
          </div>
        </div>

        {/* Check If We Deliver Section */}
        <div className="flex items-center gap-4">
          <p className="text-lg font-medium text-black whitespace-nowrap">
            Check if we deliver to you
          </p>
          <div className="flex items-center border rounded-full p-2 flex-grow">
            <input
              type="text"
              placeholder="Enter your home or work LGA"
              className="flex-grow px-4 py-2 text-black outline-none"
            />
            <Link to="/check-if-we-deliver">
              <button className="px-4 py-2 rounded-full text-white bg-green-500 hover:bg-black transition">
                →
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;