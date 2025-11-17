import React from 'react'
import assets from '../assets/assets'
const MidChatNotClicked = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-2 h-full'>
        <div className='w-28'>
            <img src={assets.logo_icon} alt="" srcset="" />
        </div>
        <div>
            <h1 className='text-white font-semi-bold text-xl'>Create, Chat, Code</h1>
        </div>
    </div>
  )
}

export default MidChatNotClicked