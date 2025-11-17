import React from 'react'
import LeftChat from './LeftChat'
import MidChat from './MidChat'
import RightChat from './RightChat'
const Chat = () => {
  return (
    <div className='flex h-full'>
      <LeftChat />
      <MidChat />
      <RightChat />
    </div>
  )
}

export default Chat