import React from "react";
import Card from "../components/Card";
import ImageSlider from "../components/ImageSlider";
import Navbar from "../components/Navbar";
import "../style/LandingPage.css";

function LandingPage({ slides }) {
    const randomNum = () => Math.floor(Math.random() * 50);
    let getSlides = slides.slice(0, 8);
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
            <div className="landingNavbar">
                <div className="navbar__logo">
                    <img
                        src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                        alt="DigiArt Logo"
                    />
                    <h2>
                        <a href="/">DigiArt</a>
                    </h2>
                </div>
                <div className="landingbtns">
                    <button className="btns">
                        <a href="/login">Sign Up</a>
                    </button>
                    <button className="btns">
                        <a href="/login  ">Login</a>
                    </button>
                </div>
            </div>
            <div className="landingPage-wrapper">
                <div className="container">
                    <div className="blockRight">
                        <p>
                            Sell effortlessly using blockchain. Earn big and
                            sell easy with any item
                        </p>
                        <p id="smallerText">Get ahead of the future...</p>
                        <button className="btns">
                            <a href="/login">Sign Up</a>
                        </button>
                    </div>
                    <div className="blockLeft">
                        <div className="leftImg">
                            NFT ART
                            {/* <img src="huh.jpeg" alt="nft"/> */}
                            <ImageSlider getSlides={getSlides} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
