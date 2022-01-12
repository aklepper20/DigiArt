import React from "react";
import Navbar from "../components/Navbar";
import "../style/LandingPage.css";


function LandingPage() {
  return (
  <div className='landingPage'>
    <div className='landingNavbar'>
      <div className="navbar__logo">
        <img
          src="https://cdn.logo.com/hotlink-ok/logo-social.png"
          alt="DigiArt Logo"
        />
        <h2>DigiArt</h2>
      </div>
      <div className='landingbtns'>
        <button className= 'btns'id='signup'>Sign Up</button>
        <button className= 'btns' id= 'login'>Login</button>
      </div>
    </div>
    <div className='container'>
      <div className='blockRight'>
        <p>Sell effortlessly using blockchain</p>
        <p>Earn big and sell easy with any item</p>
        <p id='smallerText'>Get ahead of the future...</p>
        <button className='btns'>Sign Up</button>

      </div>
      <div className='blockLeft'>
        <div className='leftImg'>NFT ART
        {/* <img src="huh.jpeg" alt="nft"/> */}
        </div>
        <div className='leftImg'>Technology</div>
        <div className='leftImg'>Everyday items</div>
      </div>
    </div>
    <div className='footer'>
      <div className='bannerImg'>ON1</div>
      <div className='bannerImg'>Oxmons</div>
      <div className='bannerImg'>33</div>
      <div className='bannerImg'>3LAU</div>
    </div>
  </div>
  );
}

export default LandingPage;
