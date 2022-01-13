import React, {useRef} from 'react'
import Login from '../components/Login'
import db, { auth } from '../utils/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Signup() {

  const emailRef= useRef()
  const passwordRef = useRef()
  const register = async() =>{
    try{
      await  createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then(async(cred)=>{
        
        await setDoc(doc(db,'users',`${cred.user.uid}`),
        {
          tasks:[
            {
              text: 'create your todo',
              status: true
            }
          ]
        }) 
      if(cred){
        window.location = '/marketplace'
      } 
    })
  }

    catch(error){
      alert(error.message)
    }
  }

  return (
    <div className='signup'>
      <Login
        title = 'Sign Up'
        button = 'Sign Up'
        href = '/login'
        link = 'Login'
        headerStatement = 'Already have an account?'
        btnFunction={register}
        emailInput={emailRef}
        passwordInput={passwordRef}
      />
    </div>
  )
}

export default Signup
