import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import "../style/LandingPage.css";

function LandingPage() {
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
                        <a href="/signup">Sign Up</a>
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
                            <Card />
                        </div>
                    </div>
                </div>
                <div className="landingPage-body-container">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
