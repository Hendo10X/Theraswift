import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Top seller', image: 'https://placehold.co/300x200/FFA07A/ffffff?text=Top+Seller' },
  { name: 'Anti-Malaria', image: 'https://placehold.co/300x200/98FB98/000000?text=Anti-Malaria' },
  { name: 'Covid Care', image: 'https://placehold.co/300x200/DDA0DD/000000?text=Covid+Care' },
  { name: 'Allergy & Asthma', image: 'https://placehold.co/300x200/87CEEB/000000?text=Allergy+%26+Asthma' },
  { name: 'Cough & Flu', image: 'https://placehold.co/300x200/F0E68C/000000?text=Cough+%26+Flu' },
  { name: 'Diabetes Care', image: 'https://placehold.co/300x200/FFB6C1/000000?text=Diabetes+Care' },
  { name: 'Digestive Care', image: 'https://placehold.co/300x200/20B2AA/ffffff?text=Digestive+Care' },
  { name: 'Eye Care', image: 'https://placehold.co/300x200/6495ED/ffffff?text=Eye+Care' },
  { name: 'First Aid', image: 'https://placehold.co/300x200/FF6347/ffffff?text=First+Aid' },
  { name: 'Infant & Children', image: 'https://placehold.co/300x200/7FFFD4/000000?text=Infant+%26+Children' },
  { name: 'Pain & Fever', image: 'https://placehold.co/300x200/FF69B4/ffffff?text=Pain+%26+Fever' },
  { name: 'Sexual Health', image: 'https://placehold.co/300x200/DA70D6/ffffff?text=Sexual+Health' },
  { name: 'Skin Care', image: 'https://placehold.co/300x200/FFDAB9/000000?text=Skin+Care' },
  { name: 'Vitamins & Supplement', image: 'https://placehold.co/300x200/90EE90/000000?text=Vitamins+%26+Supplement' },
  { name: "Women's Health", image: 'https://placehold.co/300x200/FF69B4/ffffff?text=Women%27s+Health' },
];

const EssentialsPage = ({ isHomepage = false }) => {
  return (
    <div className="bg-white p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Shop Essentials</h1>
        {isHomepage && (
          <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors">
            Sign Up
          </Link>
        )}
      </div>
      <p className="text-sm text-gray-600 mb-6">Free Delivery On Orders Over ₦5000 Or Orders Including A Prescription.</p>

      <div className="flex items-center mb-8">
        <div className="mr-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3H3V10H10V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 3H14V10H21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 14H14V21H21V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 14H3V21H10V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="text-xl font-semibold">Essentials</h2>
      </div>

      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>

      <h2 className="text-xl font-semibold mb-6">Categories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="border border-gray-200 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EssentialsPage;
