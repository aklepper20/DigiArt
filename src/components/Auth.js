import React, { useState, useRef } from "react";
import db, { auth } from "../utils/firebase";
import {
    signInWithEmailAndPassword,
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
import "../style/login.css";

function Auth(
    {
        // title,
        // button,
        // href,
        // link,
        // headerStatement,
        // emailInput,
        // passwordInput,
        // nameInputBlock,
        // btnFunction,
        // googleFunction,
    }
) {
    const emailRef = useRef();
    const passwordRef = useRef();
    // const emailRef = useRef();
    // const passwordRef = useRef();
    const NameInput = useRef();

    // const googleFunction = async () => {
    //     const provider = new GoogleAuthProvider();
    //     const auth = getAuth();
    //     signInWithPopup(auth, provider)
    //         .then((result) => {
    //             // This gives you a Google Access Token. You can use it to access the Google API.
    //             // const credential = GoogleAuthProvider.credentialFromResult(result);
    //             // const token = credential.accessToken;
    //             // The signed-in user info.
    //             const user = result.user;
    //             console.log(user);
    //             const username = user.displayName;

    //             if (user) {
    //                 console.log(user);
    //                 window.location = "/marketplace";
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };
    const googleFunction = async (e) => {
        e.preventDefault();
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        try {
            signInWithPopup(auth, provider).then(async (result) => {
                const user = result.user;
                const username = user.displayName;
                // console.log(username)
                // console.log(user.email
                await setDoc(doc(db, "users", `${user.uid}`), {
                    userData: [
                        {
                            emailID: user.email,
                            name: username,
                        },
                    ],
                });
                if (user) {
                    window.location = "/marketplace";
                }
            });
        } catch (error) {
            alert(error.message);
        }
    };
    const login = async (e) => {
        e.preventDefault();
        console.log("hello");
        try {
            await signInWithEmailAndPassword(
                auth,
                emailRef.current.value,
                passwordRef.current.value
            ).then((user) => {
                if (user) {
                    window.location = "/marketplace";
                }
            });
        } catch (error) {
            alert(error.message);
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
                // console.log(cred)
                await setDoc(doc(db, "users", `${cred.user.uid}`), {
                    userData: [
                        {
                            emailID: emailRef.current.value,
                            name: NameInput.current.value,
                        },
                    ],
                });
                if (cred) {
                    window.location = "/marketplace";
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
        // <div className="login">
        //     <div className="login-container">
        //         <h1 className="login-heading">{title}</h1>
        //         {nameInputBlock}
        //         <input
        //             ref={emailInput}
        //             className="login-email"
        //             type="email"
        //             placeholder="Email"
        //         />
        //         <input
        //             ref={passwordInput}
        //             className="login-password"
        //             type="password"
        //             placeholder="Password"
        //         />
        //         <button onClick={btnFunction} className="login-button">
        //             {button}
        //         </button>
        // <button
        //     id="Gbtn"
        //     onClick={googleFunction}
        //     className="google-button"
        // >
        //     {title} with <GoogleIcon />
        // </button>
        // <div className="links">
        //     <p>{headerStatement}</p>
        //     <a href={href}>{link}</a>
        //     <div className="links">
        //         <p>{headerStatement}</p>
        //         <a href={href}>{link}</a>
        //     </div>
        // </div>
        // </div>
        // </div>
        <div className="outer-form__container">
            <div className={`form-container ${redboxClass}`}>
                <form action="" className="loginContainer">
                    <div className="title-container">
                        <h1>Login</h1>
                    </div>
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
                    <button onClick={login} className="loginBtn">
                        Login
                    </button>
                    <button
                        id="Gbtn"
                        onClick={googleFunction}
                        className="loginBtn"
                    >
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
                    <button
                        id="Gbtn"
                        onClick={googleFunction}
                        className="loginBtn"
                    >
                        <GoogleIcon />
                    </button>
                    <div className="links">
                        <p>Already have an account?</p>
                        <a href="/login">Login</a>
                    </div>
                </form>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>
                                To keep connected with us please login with your
                                personal info
                            </p>
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
                            <p>
                                Enter your personal details and start journey
                                with us
                            </p>
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
