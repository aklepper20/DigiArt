import React, { useState, useEffect } from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import "../style/Navbar.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "../StateProvider";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

function Navbar({ randomUserCoin, user }) {
  const [{ basket }] = useStateValue();
  const [isActive, setActive] = useState("false");
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [filterNav, setFilterNav] = useState("all");
  // const [filteredNav, setFilteredNav] = useState(mrkt);
  const handleToggle = () => {
    setActive(!isActive);
  };
  const logout = async () => {
    await signOut(auth);
    window.location = "/";
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="navbar__drawer">
        <div className="navbar__drawerTop">
          <div>Account</div>
          <h6>@{user}</h6>
        </div>
        {/* <div className="navbar__drawerBottom"> */}
        <div className="navbar__eth">
          <img
            className="wave"
            src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
            alt="ethereum logo"
          />
        </div>
        <p className="eth__number">ETH: {randomUserCoin}</p>
        {/* </div> */}
      </div>
    </Box>
  );
  const handleActive = (e) => {
    setFilterNav(e);
  };
  return (
    <nav>
      <div className="navbar__logo">
        <img src="./images/logo.png" alt="DigiArt Logo" />
        <h2>
          <Link to="/">
            <a href="/">DigiArt</a>
          </Link>
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
        <li
          className={`link ${!isActive ? "fade" : ""} ${
            filterNav === "cart" ? "active" : ""
          }`}
          onClick={() => handleActive("cart")}
        >
          <Link to="/cart">
            <ShoppingCartIcon className="wave" />
            {basket?.length}
          </Link>
        </li>
        <li
          className={`link ${!isActive ? "fade" : ""} ${
            filterNav === "Marketplace" ? "active" : ""
          }`}
          onClick={() => handleActive("Marketplace")}
        >
          <Link to="/marketplace">Marketplace</Link>
        </li>

        <li
          className={`link ${!isActive ? "fade" : ""} ${
            filterNav === "My Portfile" ? "active" : ""
          }`}
          onClick={() => handleActive("My Portfile")}
        >
          <Link to="/profile">My Profile</Link>
        </li>
        <li
          className={`link ${!isActive ? "fade" : ""} ${
            filterNav === "wallet" ? "active" : ""
          }`}
          onClick={() => handleActive("wallet")}
        >
          <div className="navbar__wallet">
            <div>
              {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)}>
                    <AccountBalanceWalletIcon />
                  </Button>
                  <Drawer
                    PaperProps={{
                      style: {
                        height: "50vh",
                        borderRadius: "20px 0 0 20px",
                        backgroundColor: "#141418",
                        marginTop: "60px",
                      },
                    }}
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </div>
          </div>
        </li>
        <li className={`link ${!isActive ? "fade" : ""}`} onClick={logout}>
          <button className="join-button" href="#">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

// logoutbtn ={<button onClick={logout}>LOGOUT</button>}
