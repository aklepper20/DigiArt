import React from "react";
import "../style/LandingPage.css";
import Navbar from "../components/Navbar";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

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
      </div>
  );
}

export default Marketplace;
