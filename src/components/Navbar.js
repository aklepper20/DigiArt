import React from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import "../style/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img
          src="https://cdn.logo.com/hotlink-ok/logo-social.png"
          alt="DigiArt Logo"
        />
        <h2><a href='/'>DigiArt</a></h2>
      </div>

      <div className="navbar__options">
        <div className="navbar__list">
          <p><a href='/marketplace'>Marketplace</a></p>
          <p><a href='/cart'>Cart</a></p>
          <p><a href='/profile'>My Profile</a></p>
        </div>
        <div className="navbar__wallet">
          <AccountBalanceWalletIcon />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
