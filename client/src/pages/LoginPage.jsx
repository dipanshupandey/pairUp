import React from 'react'
import LoginPageForm from '../components/LoginPageForm'
const LoginPage = () => {
  return (
    <div className='w-full h-screen p-12 flex justify-center items-center'>
      <div className='w-3/12  backdrop-blur-lg bg-gray-500/10 flex justify-betweens'>
      <LoginPageForm/>
      </div>
    </div>
  )
}

export default LoginPage