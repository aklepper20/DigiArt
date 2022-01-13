import React, {useRef} from 'react'
import Login from '../components/Login'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebase'

function Signin() {

  const emailRef= useRef()
  const passwordRef = useRef()
  const login = async()=>{
    console.log("hello")
    try{
      await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((user)=>{
        if(user){
          window.location = '/marketplace'
        }
      })
    }
    catch(error){
      alert(error.message)
    }
  }
  return (
    <div className='signin'>
      <Login 
        title = 'Login'
        button = 'Login'
        href = '/signup'
        link = 'Sign up'
        headerStatement = 'Need an account?'
        emailInput={emailRef}
        passwordInput={passwordRef}
        btnFunction={login}
      />
    </div>
  )
}

export default Signin
