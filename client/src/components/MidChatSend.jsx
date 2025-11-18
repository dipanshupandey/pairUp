import React from "react";
import assets from "../assets/assets";

const MidChatSend = () => {
  return (
    <div className="p-4 flex items-center justify-center ">
      <div className="flex items-center bg-[#40444b] rounded-xl px-4 py-3 gap-3 w-full">

        {/* File Upload */}
        <div>
          <input type="file" id="file" className="hidden" />
          <label htmlFor="file" className="cursor-pointer">
            <img
              src={assets.gallery_icon}
              className="w-6 opacity-80 hover:opacity-100 transition"
              alt="upload"
            />
          </label>
        </div>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Send a message"
          className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
        />

        {/* Send Button */}
        <button>
          <img
            className="w-7 cursor-pointer opacity-80 hover:opacity-100 transition"
            src={assets.send_button}
            alt="send"
          />
        </button>
      </div>
    </div>
  );
};

export default MidChatSend;
