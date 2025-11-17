import React from 'react'
import assets from '../assets/assets'
const MidChatHeader = () => {
    
  return (
    <div className='flex justify-between items-center border-b-1 border-white p-2'>

      <div className='flex justify-center items-center gap-2'>
        <div className='max-w-11 max-h-11 rounded-full overflow-hidden'>
            <img className='w-full' src={assets.avatar_icon} alt="" />    
        </div>
        
        <div>
              <h1 className='text-white'>Name</h1>
        </div>
      </div>
        <div className='w-6'>
          <img src={assets.help_icon} alt="" srcset="" />
        </div>
    </div>
  )
}

export default MidChatHeader