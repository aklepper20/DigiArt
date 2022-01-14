import React, { useRef } from "react";
import Login from "../components/Login";
import db, { auth } from "../utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const NameInput = useRef();

    const googleFunction = async () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        try {
            signInWithPopup(auth, provider).then(async (result) => {
                const user = result.user;
                const username = user.displayName;
                // console.log(username)
                // console.log(user.email)

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
    const register = async () => {
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

    return (
        <div className="signup">
            <Login
                nameInputBlock={
                    <input
                        ref={NameInput}
                        className="login-name"
                        type="text"
                        placeholder="Enter your name"
                    />
                }
                title="Sign Up"
                button="Sign Up"
                href="/login"
                link="Login"
                headerStatement="Already have an account?"
                btnFunction={register}
                emailInput={emailRef}
                passwordInput={passwordRef}
                googleFunction={googleFunction}
                // NameInput = {NameInput}
            />
        </div>
    );
}

export default Signup;
