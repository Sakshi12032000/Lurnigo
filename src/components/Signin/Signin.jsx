import React, { useState } from 'react'
import './Signin.css'
import user_icon from '../../assets/user-icon.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'

const Signin = () => {

    const [action, setAction]= useState("Sign in");
  return (
    <div className='container'>
      <div className='header'>
    
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
            <img src={user_icon} alt=''/>
            <input type="text" placeholder='Name'/>
        </div>
        <div className='input'>
            <img src={email_icon} alt=''/>
            <input type="email" placeholder='Email Id'/>
        </div>
        <div className='input'>
            <img src={password_icon} alt=''/>
            <input type="password" placeholder='Password'/>
        </div>
      </div>
      <div className='submit-container'>
        <div className={action==="Signin"?"submit gray":"submit"}>Sign up</div>
        <div className={action==="Signup"?"submit gray":"submit"}>Sign in</div>
      </div>
    </div>
  )
}

export default Signin