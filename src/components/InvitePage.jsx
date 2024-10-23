import React, { useState } from 'react';

const InvitePage = () => {
  const inviteCode = '1001';
  const [copyButtonText, setCopyButtonText] = useState('Copy');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteCode);
    setCopyButtonText('Copied');
    setTimeout(() => setCopyButtonText('Copy'), 2000); // Reset after 2 seconds
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-green-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-center mb-4">
        Help people save on meds and earn ₦500 credit for each referral
      </h1>

      <div className="bg-green-700 text-white p-4 rounded-lg flex justify-between items-center mb-4">
        <span className="text-2xl font-bold">{inviteCode}</span>
        <button 
          onClick={copyToClipboard} 
          className={`px-3 py-1 rounded-md font-semibold transition-colors duration-200 ${
            copyButtonText === 'COPIED' ? 'bg-green-500 text-white' : 'bg-white text-green-700'
          }`}
        >
          {copyButtonText}
        </button>
      </div>

      <button className="w-full bg-green-700 text-white py-3 rounded-lg flex justify-center items-center mb-6">
        {/* Share SVG */}
        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
        SHARE
      </button>

      <p className="text-center text-gray-600 mb-6">Share your invite link on your own</p>

      <div className="mb-6">
        <div className="flex justify-between text-lg font-semibold mb-2">
          <span>Referral Credit</span>
          <span>₦0.00</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div className="h-2 bg-green-500 rounded-full" style={{width: '0%'}}></div>
        </div>
      </div>

      <h2 className="text-xl font-bold text-center mb-4">It's easy to get started</h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold mb-2">Step 1: Invite your friends</h3>
          <p className="text-gray-600">Send an email invite above or share your unique link or invitation code with your friends and family.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Step 2: You get ₦500.00</h3>
          <p className="text-gray-600">We will give them ₦500.00 towards their first purchase, just for being your friend.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Step 3: You get ₦500.00</h3>
          <p className="text-gray-600">Once they make a purchase, you will receive ₦500.00 credit on your account.</p>
        </div>
      </div>
    </div>
  );
};

export default InvitePage;
