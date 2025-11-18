import React from 'react'
import assets from '../assets/assets'

const ProfilePageForm = () => {
  return (
    <div className="w-1/2 h-full p-6 flex flex-col gap-4 overflow-y-auto text-white">

      <h1 className="text-lg font-semibold">Edit Profile</h1>


      <div className="flex flex-col items-center gap-2">
        <img
          src={assets.avatar_icon}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />

        <label htmlFor="profilePicture" className="text-sm hover:text-black cursor-pointer">
          Upload Profile Image
        </label>

        <input type="file" id="profilePicture" className="hidden" />
      </div>

      
      <input
        type="text"
        placeholder="Edit name"
        className="border rounded-md p-2 w-full focus:outline-none"
      />

     
      <textarea
        placeholder="Edit bio..."
        rows="5"
        className="border rounded-md p-2 w-full resize-none focus:outline-none"
      ></textarea>

      
      <button className="border rounded-md p-2 hover:bg-white hover:text-black">
        Save Changes
      </button>
    </div>
  )
}

export default ProfilePageForm
