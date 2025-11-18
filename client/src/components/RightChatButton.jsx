import React from 'react';

const RightChatButton = () => {
  return (
    <div className="w-full flex justify-center mt-3">
      <button
        className="px-6 py-2 border border-gray-300 rounded-lg text-white text-sm hover:bg-gray-100 hover:text-black transition-all"
      >
        Logout
      </button>
    </div>
  );
};

export default RightChatButton;
