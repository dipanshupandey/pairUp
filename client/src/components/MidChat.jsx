import React from 'react';
import MidChatClicked from './MidChatClicked';
import MidChatNotClicked from './MidChatNotClicked';

const MidChat = () => {
  const clicked=true;
  return (
    <div className='bg-white/30 backdrop-blur-lg basis-1/2 '>
      {
            clicked?<MidChatClicked/>:<MidChatNotClicked/>
        }
    </div>
  )
}

export default MidChat