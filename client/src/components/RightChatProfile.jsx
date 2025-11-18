import React from 'react';
import { userDummyData } from '../assets/assets';

const RightChatProfile = () => {
  const user = userDummyData[0];

  return (
    <div className="flex flex-col items-center gap-4 p-4 h-[200px] border-b-[1px] border-white">

     
      <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-300">
        <img
          src={user.profilePic}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      
      <div className="flex flex-col items-center text-center gap-1">
        <p className="text-lg text-white font-semibold">{user.fullName}</p>
        <p className="text-sm text-white">{user.email}</p>
        <p className="text-sm text-white max-w-xs">{user.bio}</p>
      </div>

    </div>
  );
};

export default RightChatProfile;
