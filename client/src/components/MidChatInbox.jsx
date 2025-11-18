import React from 'react'
import { messagesDummyData } from '../assets/assets'
import MidChatInboxMessage from './MidChatInboxMessage'
const MidChatInbox = () => {
  return (
    <div className='overflow-y-scroll h-[470px]'>
      {
      messagesDummyData.map((data,index)=>
      <MidChatInboxMessage data={data} key={index}/>
      )
      }
    </div>
  )
}

export default MidChatInbox