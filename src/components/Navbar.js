import React, { useState } from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import "../style/Navbar.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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
        <CloseIcon onClick={() => setState(false)} className="navbar__close" />
        <div className="navbar__userDetails">
          <p>@user</p>
          <p>Eth: {0.3}</p>
        </div>
      </div>
    </Box>
  );

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img
          src="https://cdn.logo.com/hotlink-ok/logo-social.png"
          alt="DigiArt Logo"
        />
        <h2>
          <a href="/">DigiArt</a>
        </h2>
      </div>

      <div className="navbar__options">
        <div className="navbar__list">
          <p>
            <a href="/marketplace">Marketplace</a>
          </p>
          <p>
            <a href="/cart">Cart</a>
          </p>
          <p>
            <a href="/profile">My Profile</a>
          </p>
        </div>
        <div className="navbar__wallet">
          <div>
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <AccountBalanceWalletIcon />
                </Button>
                <Drawer
                  PaperProps={{
                    style: { height: "40vh" },
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
      </div>
    </div>
  );
}

export default Navbar;
