import React from 'react';
import { Link } from 'react-router-dom';

// Importing the images used in the grid
import prescriptionImage from '../../assets/drugimage.png';
import weightLossImage from '../../assets/looseweight.png';
import fertilityImage from '../../assets/Fertilitydrug.png';

const Hero = () => {
  return (
    <div className="w-full px-5 lg:px-[90px] py-[60px] bg-white">
      <section className="container mx-auto">
        {/* Title and List Section */}
        <div className="lg:flex lg:items-start lg:justify-between lg:mb-8">
          <div className="lg:w-[660px]">
            <h1
              className="text-4xl lg:text-5xl font-bold mb-5 leading-tight"
              style={{
                color: '#2DA44E',
              }}
            >
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Prescription Box */}
          <div className="bg-[#F2F2F2] p-6 rounded-lg flex items-center">
            <img src={prescriptionImage} alt="Prescription" className="w-1/2 h-auto object-contain mr-6 animate-subtle-bounce" />
            <div>
              <h2 className="text-2xl font-bold mb-3">Prescriptions (Rx)</h2>
              <Link to="/find-your-meds">
                <button className="px-4 py-2 border-2 border-black rounded-full text-base text-black hover:bg-black hover:text-white transition">
                  Find your meds
                </button>
              </Link>
            </div>
          </div>

          {/* Weight Loss Box */}
          <div className="bg-[#E5F4E3] p-6 rounded-lg flex items-center flex-row-reverse">
            <img src={weightLossImage} alt="Weight Loss" className="w-1/2 h-auto object-contain ml-6 animate-subtle-bounce" />
            <div>
              <h2 className="text-2xl font-bold mb-3">Loose Weight With GLP-1s</h2>
              <Link to="/get-started">
                <button className="px-4 py-2 rounded-full text-base text-white bg-green-500 hover:bg-black transition">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Essentials Box */}
          <div className="bg-[#D9E4F2] p-6 rounded-lg flex flex-col col-span-full">
            <div className="flex items-center mb-4">
              <img src={fertilityImage} alt="Essentials" className="w-1/3 h-auto object-contain mr-6 animate-subtle-bounce" />
              <div>
                <h2 className="text-2xl font-bold mb-2">Essentials</h2>
                <p className="text-base text-gray-600">Browse over the counter meds</p>
              </div>
            </div>
            <div className="self-end mt-auto">
              <Link to="/essentials">
                <button className="px-5 py-2 rounded-full text-base text-white bg-green-500 hover:bg-black transition">
                  →
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Check If We Deliver Section */}
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <p className="text-lg font-medium text-black">
            Check if we deliver to you
          </p>
          <div className="flex items-center border rounded-full p-2 lg:flex-grow">
            <input
              type="text"
              placeholder="Enter your home or work LGA"
              className="flex-grow px-4 py-2 text-black outline-none"
            />
            <Link to="/check-if-we-deliver">
              <button className="px-6 py-2 rounded-full text-white bg-green-500 hover:bg-black transition">
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