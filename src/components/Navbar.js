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
        <h2>DigiArt</h2>
      </div>

      <div className="navbar__options">
        <div className="navbar__list">
          <p>Marketplace</p>
          <p>Cart</p>
          <p>My Profile</p>
        </div>
        <div className="navbar__wallet">
          <AccountBalanceWalletIcon />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
