import React, {useRef} from 'react'
import Login from '../components/Login'
import db, { auth } from '../utils/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Signup() {

  const emailRef= useRef()
  const passwordRef = useRef()

  const googleFunction = async()=>{
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      const username = user.displayName;
      console.log(username)
      // if(user){
      //   window.location = '/marketplace'
      // }
    }).catch((error) => {
      console.log(error);
    });
}
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
        googleFunction={googleFunction}
      />
    </div>
  )
}

export default Signup
