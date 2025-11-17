import React from 'react'
import assets from '../assets/assets'

const LeftChatPeople = ({details,index}) => {
    
  return (
    <div className='flex  m-4 justify-start gap-2 items-center'>
        <div className='max-w-11 max-h-11 rounded-full overflow-hidden'>
            <img className='w-full' src={details.profilePic?details.profilePic:assets.avatar_icon} alt="" />
        </div>
        <div>
            <div>
                <h1 className='text-white'>
                    {details.fullName?details.fullName:"Username"}
                </h1>
            </div>
            <div className='-mt-1'>
            <p className={`${index%2===0?"text-gray-600":"text-green-600"} text-s`}>
                 {index%2===0?"Offline":"Online"}
            </p>
            </div>
        </div>
        {index%2===0&&<div className='bg-pink-800 rounded-full h-4 w-4 ml-auto'>
            <h1 className='text-white text-xs text-center '>2</h1>
        </div>}
    </div>
  )
}

export default LeftChatPeople