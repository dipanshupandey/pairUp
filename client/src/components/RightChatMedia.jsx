import React from 'react';
import { imagesDummyData } from '../assets/assets';

const RightChatMedia = () => {
  return (
    <div className="flex flex-wrap gap-3 overflow-y-scroll h-[250px] w-full p-2">

      {imagesDummyData.map((item, index) => (
        <div
          key={index}
          className="w-32 h-32  overflow-hidden "
        >
          <img
            src={item}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}

    </div>
  );
};

export default RightChatMedia;
