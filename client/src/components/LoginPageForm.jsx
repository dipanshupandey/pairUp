import React, { useState } from 'react'
import assets from '../assets/assets'

const LoginPageForm = () => {
    const [account,setAccount]=useState(true);
    const [step,setStep]=useState(1);
  return (
    <div className="w-full h-auto p-8 flex flex-col gap-5 overflow-y-auto text-white">
      <h1 className="text-lg font-semibold">{account?"Login":"Sign In"}</h1>
       {step==1&& <>
      


      {!account&&<div className="flex flex-col items-center gap-2">
        <img
          src={assets.avatar_icon}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />

        <label htmlFor="profilePicture" className="text-sm hover:text-black cursor-pointer">
          Upload Profile Image
        </label>

        <input type="file" id="profilePicture" className="hidden" />
      </div>}

      
      {!account&&<input
        type="text"
        placeholder="Full name"
        className="border rounded-md p-2 w-full focus:outline-none"
      />}
      <input
        type="email"
        placeholder="Email"
        className="border rounded-md p-2 w-full focus:outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        className="border rounded-md p-2 w-full focus:outline-none"
      />

     
      

      
      <button className="border rounded-md p-2 hover:bg-white hover:text-black hover:border-white" onClick={()=>setStep(2)}>
        {account?"Login":"Sign In"}
      </button>
      <p>{account?"Create an account?":"Already have an account?"}<span className='ml-1 font-bold cursor-pointer text-purple-400' onClick={()=>{
        setAccount(!account);
      }}>{account?"Login here":"Click here"}</span></p>
        
        </>}
        {
            step==2&&<>
                <textarea
        placeholder="Enter bio..."
        rows="5"
        className="border rounded-md p-2 w-full resize-none focus:outline-none"
      ></textarea>
             <button className="border rounded-md p-2 hover:bg-white hover:text-black hover:border-white" onClick={()=>setStep(1)}>
        Finish Sign in
      </button>
            </>
        }
    </div>
  )
}

export default LoginPageForm
