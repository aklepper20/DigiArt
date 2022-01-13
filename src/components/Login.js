import React from 'react'
import '../style/login.css'

function Login({title, button, href, link, headerStatement, emailInput, passwordInput, btnFunction, googleFunction}) {


  return (
    <div className='login'>
      <div className='login-container'>
        <h1 className='login-heading'>{title}</h1>
        <input ref= {emailInput} className='login-email' type='email' placeholder='Email'/>
        <input ref= {passwordInput} className='login-password' type='password' placeholder='Password'/>
        <button onClick={btnFunction} className='login-button'>{button}</button>
        <button onClick={googleFunction} className='google-button'>G</button>

        <div className='links'>
          <p>{headerStatement}</p>
          <a href={href}>{link}</a>
        </div>
      </div>
    </div>
  )
}

export default Login
