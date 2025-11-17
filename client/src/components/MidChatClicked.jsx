import React from 'react'
import MidChatHeader from './MidChatHeader';
import MidChatInbox from './MidChatInbox';

const MidChatClicked = () => {
  return (
    <div className='p-1'>
      <MidChatHeader/>
      <MidChatInbox/>
    </div>
  )
}

export default MidChatClicked;