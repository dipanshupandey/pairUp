import React from 'react'
import RightChatButton from './RightChatButton'
import RightChatMedia from './RightChatMedia'
import RightChatProfile from './RightChatProfile'
const RightChat = () => {
  return (
    <div className='bg-white/10 basis-1/4 h-full backdrop-blur-2xl p-8 flex flex-col justify-between'>
      <RightChatProfile/>
      <RightChatMedia/>
      <RightChatButton/>
    </div>
  )
}

export default RightChat