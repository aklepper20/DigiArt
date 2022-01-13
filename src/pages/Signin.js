import React, {useRef} from 'react'
import Login from '../components/Login'
import { auth, app } from '../utils/firebase'
import { signInWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
function Signin() {

  const emailRef= useRef()
  const passwordRef = useRef()

  const googleFunction = async()=>{
    const provider = new GoogleAuthProvider();
   

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        if(user){
          window.location = '/marketplace'
        }
      }).catch((error) => {
        console.log(error);
      });

  }
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
        googleFunction={googleFunction}
      />
    </div>
  )
}

export default Signin
