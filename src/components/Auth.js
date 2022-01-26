import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import db, { auth } from "../utils/firebase";
import {
  userID,
  setUserID,
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
import "../style/login.css";

function Auth({ userID, setUserID, loginRedboxClass }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const NameInput = useRef();
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();

  const navigate = useNavigate();

  const googleFunction = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    try {
      signInWithPopup(auth, provider).then(async (result) => {
        const user = result.user;
        const username = user.displayName;

        await setDoc(doc(db, "users", `${user.uid}`), {
          userData: {
            emailID: user.email,
            name: username,
          },
        });
        if (user) {
          navigate("/marketplace");
        }
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        loginEmailRef.current.value,
        loginPasswordRef.current.value
      ).then((user) => {
        if (user) {
          navigate("/marketplace");
        }
      });
    } catch (error) {
      console.log(error.message, "error message for login issues");
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      ).then(async (cred) => {
        setUserID(cred.user.uid);
        console.log(userID, "this is user ?");
        await setDoc(doc(db, "users", `${cred.user.uid}`), {
          userData: [
            {
              emailID: emailRef.current.value,
              name: NameInput.current.value,
            },
          ],
        });
        if (cred) {
          navigate("/marketplace");
        }
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const [redboxClass, setRedboxClass] = useState("");
  const toggleRedbox = (e) => {
    e.preventDefault();
    if (redboxClass === "") {
      setRedboxClass("right-panel-active");
    } else if (redboxClass === "right-panel-active") {
      setRedboxClass("");
    }
  };
  return (
    <div className="outer-form__container">
      <div className={`form-container ${redboxClass}`}>
        <form action="" className="loginContainer">
          <div className="title-container">
            <h1>Login</h1>
          </div>
          <input
            ref={loginEmailRef}
            className="login-email"
            type="email"
            placeholder="Email"
          />
          <input
            ref={loginPasswordRef}
            className="login-password"
            type="password"
            placeholder="Password"
          />
          <button onClick={login} className="loginBtn">
            Login
          </button>
          <button id="Gbtn" onClick={googleFunction} className="loginBtn">
            <GoogleIcon />
          </button>
          <div className="links">
            <p>Need an account?</p>
            <a href="/signup">Sign up</a>
          </div>
        </form>
        <form action="" className="register-form-container">
          <div className="title-container">
            <h1>Sign UP</h1>
          </div>
          <input
            ref={NameInput}
            className="login-name"
            type="text"
            placeholder="Enter your name"
          />
          <input
            ref={emailRef}
            className="login-email"
            type="email"
            placeholder="Email"
          />
          <input
            ref={passwordRef}
            className="login-password"
            type="password"
            placeholder="Password"
          />
          <button onClick={register} className="loginBtn">
            Sign Up
          </button>
          <button id="Gbtn" onClick={googleFunction} className="loginBtn">
            <GoogleIcon />
          </button>
          <div className="links">
            <p>Already have an account?</p>
            <a href="/login">Login</a>
          </div>
        </form>
        <div className="overlay-container">
          <div className="auth-overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>Stay connected with us please login with your personal info</p>
              <button
                className="form-toggle-btn"
                id="signIn"
                onClick={(e) => toggleRedbox(e)}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="form-toggle-btn"
                id="signUp"
                href="/signup"
                onClick={(e) => toggleRedbox(e)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
