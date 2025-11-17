import React, { useEffect, useState } from 'react'
import LeftChatHeader from './LeftChatHeader'
import LeftChatPeople from './LeftChatPeople'
import LeftChatSearch from './LeftChatSearch'

import { userDummyData } from '../assets/assets'

const LeftChat = () => {
  console.log(userDummyData)
  const [data,setData]=useState(null);
  useEffect(()=>{
    setData(userDummyData);
  
  },[]);
  
  return (
    <div className='bg-white/10 basis-1/4 h-full backdrop-blur-2xl p-8 '>
      <LeftChatHeader/>
      <LeftChatSearch/>
      {
      data?.map((details,index)=>{
        return <LeftChatPeople key={index} details={details} index={index}/>
      })
      
      }
      </div>
  )
}

export default LeftChat