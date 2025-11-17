import React from 'react'
import assets from '../assets/assets'
const LeftChatSearch = () => {
  return (
    <div className='flex justify-between p-1 items-center bg-purple-950/50 mt-8 m-auto w-68 rounded-full'>
        <div className='w-5 m-2'>
        <img src={assets.search_icon} className="w-full" alt="" srcset="" />
        </div>
        <input className='focus:outline-none focus:ring-0 border-none text-white' type="text" placeholder='Search user...'/>
    </div>
  )
}

export default LeftChatSearch