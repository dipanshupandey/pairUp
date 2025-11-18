import React from "react";
import assets from "../assets/assets";
import { useRef,useEffect } from "react";
const MidChatInboxMessage = ({ data }) => {
  const scrollEnd=useRef();
  useEffect(()=>{
    if(scrollEnd.current)
    {
      scrollEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  },[]);
  
  const isMe = data.senderId === "680f5116f10f3cd28382ed02";

  const formattedTime = new Date(data.createdAt).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={`flex items-end gap-3 my-2 ${isMe ? "flex-row-reverse" : ""}`}
    >
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
        <img
          className="w-full h-full object-cover"
          src={assets.avatar_icon}
          alt="avatar"
        />
      </div>

      {/* Message Bubble */}
      <div className={`max-w-[70%]`}>
        {data.image ? (
          <div className="w-40 rounded-2xl overflow-hidden">
            <img src={data.image} alt="" />
          </div>
        ) : (
          <div
            className={`p-3 rounded-2xl text-sm 
            ${
              isMe
                ? "bg-purple-500 text-white rounded-br-none"
                : "bg-gray-200 text-black rounded-bl-none"
            }
          `}
          >
            {data.text}
          </div>
        )}

        <span className="block text-[10px] text-right opacity-75 mt-1">
          {formattedTime}
        </span>
      </div>
      <div ref={scrollEnd}>
        
      </div>
    </div>

  );
};

export default MidChatInboxMessage;
