import React from 'react'
import assets from "../assets/assets"
const LeftChatHeader = () => {
  return (
    <div className=' flex justify-between  items-center'>
        <div className='max-w-40'>
        <img src={assets.logo} alt=""  className='w-full object-cover'/>
        </div>  

        <div className='max-w-6 relative group'>
        <img src={assets.menu_icon} alt="" className='w-full object-cover'/>
        <div className='hidden group-hover:block border-[1px] border-white w-28 absolute bg-purple-900/90 right-4 p-4 flex flex-col items-start text-white '>
            <h4 className='border-b-[1px] border-white cursor-pointer'>Edit profile</h4>
            
            <h4 className='cursor-pointer'>Logout</h4>
        </div>
        </div>
    </div>
  )
}

export default LeftChatHeader