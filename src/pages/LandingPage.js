import React, { useState } from "react";
import ImageSlider from "../components/ImageSlider";
import "../style/LandingPage.css";

function LandingPage({ slides }) {
    const [isActive, setActive] = useState("false");
    const randomNum = () => Math.floor(Math.random() * 50);
    let getSlides = slides.slice(0, 15);
    const handleToggle = () => {
        setActive(!isActive);
    };
    // const [loginRedboxClass, setLoginRedboxClass] = useState("");
    // const [signupRedboxClass, setSignupRedboxClass] = useState("right-panel-active");

    // const toggleLogin = (e) => {
    //     e.preventDefault();
    //     if (loginRedboxClass === "") {
    //         setLoginRedboxClass("right-panel-active");
    //     } else if (loginRedboxClass === "right-panel-active") {
    //         setLoginRedboxClass("");
    //     }
    // };
    // const toggleSignup = (e) => {
    //     e.preventDefault();
    //     if (signupRedboxClass === "right-panel-active") {
    //         setSignupRedboxClass("");
    //     } else if (signupRedboxClass === "") {
    //         setSignupRedboxClass("right-panel-active");
    //     }
    // };
    return (
        <div className="landingPage">
            <nav className="nav">
                <div className="navbar__logo">
                    <img src="./images/logo.png" alt="DigiArt Logo" />
                    <h2>
                        <a href="#">DigiArt</a>
                    </h2>
                </div>
                <div
                    className={`hamburger ${!isActive ? "toggle" : ""}`}
                    onClick={handleToggle}
                >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul className={`nav-links ${!isActive ? "open" : ""}`}>
                    <li className={`${!isActive ? "fade" : ""}`}>
                        <button className="join-button">
                            <a href="/login">Login</a>
                        </button>
                    </li>
                    <li className={`${!isActive ? "fade" : ""}`}>
                        <button className="join-button" href="/login">
                            <a href="/login">Join</a>
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="landingPage-wrapper">
                <div className="container">
                    <div className="blockRight">
                        <p>
                            Sell effortlessly using blockchain. Earn big and
                            sell easy with any item
                        </p>
                        <p id="smallerText">Get ahead of the future...</p>
                        <div class="join-logo" href="/login">
                            <a href="/login">
                                <p>
                                    j<span>oi</span>n <span>u</span>s!
                                </p>
                            </a>
                        </div>
                    </div>
                    <div className="leftImg">
                        <ImageSlider getSlides={getSlides} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
