import React from 'react'
import  { userDummyData } from '../assets/assets'

const ProfilePageProfile = () => {
    const user=userDummyData[0];
  return (
    <div className="w-5/12 h-full p-6 flex flex-col gap-4 overflow-y-auto text-white">

      <h1 className="text-lg font-semibold">{user.fullName}</h1>

      <img
        src={user.profilePic}
        className="w-32 h-32 rounded-full object-cover mx-auto"
        alt="Profile"
      />

      <div className="flex flex-col gap-1">
        <p className="font-medium">{`Name: ${user.fullName}`}</p>
        <p className="text-sm opacity-70">
          {user.bio||"Bio"}
        </p>
      </div>
    </div>
  )
}

export default ProfilePageProfile
