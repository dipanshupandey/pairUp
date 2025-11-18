import React from 'react';
import ProfilePageForm from '../components/ProfilePageForm';
import ProfilePageProfile from '../components/ProfilePageProfile';

const ProfilePage = () => {
  return (
    <div className='w-full h-screen p-12 flex justify-center items-center'>
  <div className='w-1/2 h-3/4 backdrop-blur-lg bg-gray-500/10 flex justify-between'>
    <ProfilePageForm/>
    <ProfilePageProfile/>
  </div>
</div>

  )
}

export default ProfilePage