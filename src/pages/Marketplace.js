import React from "react";
import "../style/LandingPage.css";
import Navbar from "../components/Navbar";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Card from "../components/Card";

function Marketplace() {
  return (
    <div className='marketplace'>
      <div className='marketplace_Nav'>
        <div className="navbar__logo">
            <img
              src="https://cdn.logo.com/hotlink-ok/logo-social.png"
              alt="DigiArt Logo"
            />
            <h2>DigiArt</h2>
          </div>
        <div className='marketplaceBtns'>
          <button><a href='/marketplace'>Marketplace</a></button>
          <button><a href='/cart'>Cart</a></button>
          <button><a href='/profile'>My Profile</a></button>
          <div className='walletIcon'>
          <div><AccountBalanceWalletIcon/></div>
          </div>
        </div>
      </div>
      <div className="welcome">Welcome, User</div>
      <div className='options'>
        <div className='categories'>
          <div>Digital</div>
          <div>Technology</div>
          <div>Everyday Items</div>
        </div>
        <div className='addItem'>Upload</div>
      </div>
      <p className='title'>Featured Products</p>
      <div  id='marketFooter'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <p className='title'>Digital  Assets</p>
      <div  id='marketFooter'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <p className='title'>Everyday Items</p>
      <div  id='marketFooter'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      </div>
  );
}

export default Marketplace;
