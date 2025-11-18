import React from 'react'
import MidChatHeader from './MidChatHeader';
import MidChatInbox from './MidChatInbox';
import MidChatSend from './MidChatSend';

const MidChatClicked = () => {
  return (
    <div className='p-1'>
      <MidChatHeader/>
      <MidChatInbox/>
      <MidChatSend/>
    </div>
  )
}

export default MidChatClicked;