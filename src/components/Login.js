import React from 'react'
import '../style/login.css'
import GoogleIcon from '@mui/icons-material/Google';

<<<<<<< HEAD
function Login({title, button, href, link, headerStatement, emailInput, passwordInput, btnFunction, googleFunction}) {
=======
function Login({title, button, href, link, headerStatement, emailInput, passwordInput, nameInputBlock,btnFunction, googleFunction}) {
>>>>>>> mergenabzbranch


  return (
    <div className='login'>
      <div className='login-container'>
        <h1 className='login-heading'>{title}</h1>
<<<<<<< HEAD
        <input ref= {emailInput} className='login-email' type='email' placeholder='Email'/>
        <input ref= {passwordInput} className='login-password' type='password' placeholder='Password'/>
=======
        {nameInputBlock}
        <input ref= {emailInput} className='login-email' type='email' placeholder='Email'/>
        <input ref= {passwordInput} className='login-password' type='password' placeholder='Password'/>
       
         
>>>>>>> mergenabzbranch
        <button onClick={btnFunction} className='login-button'>{button}</button>
        <button id ='Gbtn'onClick={googleFunction} className='google-button'>{title} with  <GoogleIcon/></button>

        <div className='links'>
          <p>{headerStatement}</p>
          <a href={href}>{link}</a>
        </div>
      </div>
    </div>
  )
}

export default Login
