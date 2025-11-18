import React from 'react'
import LeftChat from './LeftChat'
import MidChat from './MidChat'
import RightChat from './RightChat'
const Chat = () => {
  const setected=true;
  return (
    <div className='flex h-[100%] justify-center '>
      <LeftChat />
      <MidChat />
      {setected&&<RightChat />}
    </div>
  )
}

export default Chat