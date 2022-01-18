import React, { useState } from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import "../style/Navbar.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useStateValue } from "../StateProvider";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

function Navbar({ logoutbtn }) {
    const [{ basket }] = useStateValue();
    const [isActive, setActive] = useState("false");
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
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
                    <p>ID: 45235</p>
                </div>
                <div className="navbar__drawerBottom">
                    <div className="navbar__eth">
                        <img
                            src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                            alt="ethereum logo"
                        />
                    </div>
                    <p className="eth__number">Eth: {0.3}</p>
                    <p className="eth__username">@user</p>
                </div>
            </div>
        </Box>
    );

    return (
        // <div className="navbar">
        //   <div className="navbar__logo">
        //     <img
        //       src="https://cdn.logo.com/hotlink-ok/logo-social.png"
        //       alt="DigiArt Logo"
        //     />
        //     <h2>
        //       <Link to="/">
        //         <a href="/">DigiArt</a>
        //       </Link>
        //     </h2>
        //     {logoutbtn}
        //   </div>

        //   <div className="navbar__options">
        //     <div className="navbar__list">
        // <ul>
        //   <li>
        //     <Link to="/marketplace">
        //       <a href="/marketplace">Marketplace</a>
        //     </Link>
        //   </li>
        // <li>
        //   <Link to="/cart">
        //     <div style={{ display: "flex" }}>
        //       <a href="/cart">Cart</a>
        //       <ShoppingBagIcon style={{ color: "yellow" }} />
        //       <div style={{ margin: "0px 5px" }}>{basket?.length}</div>
        //     </div>
        //   </Link>
        // </li>
        // <li>
        //   <Link to="/profile">
        //     <a href="/profile">My Profile</a>
        //   </Link>
        // </li>
        // <li>
        //   <div className="navbar__wallet">
        //     <div>
        //       {["right"].map((anchor) => (
        //         <React.Fragment key={anchor}>
        //           <Button onClick={toggleDrawer(anchor, true)}>
        //             <AccountBalanceWalletIcon />
        //           </Button>
        //           <Drawer
        //             PaperProps={{
        //               style: {
        //                 height: "30vh",
        //                 borderRadius: "10px 0 0 10px",
        //                 marginTop: "60px",
        //               },
        //             }}
        //             anchor={anchor}
        //             open={state[anchor]}
        //             onClose={toggleDrawer(anchor, false)}
        //           >
        //             {list(anchor)}
        //           </Drawer>
        //         </React.Fragment>
        //       ))}
        //     </div>
        //   </div>
        // </li>
        // </ul>
        //     </div>
        //   </div>
        // </div>
        <nav>
            <div className="navbar__logo">
                <img
                    src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                    alt="DigiArt Logo"
                />
                <h2>
                    <Link to="/">
                        <a href="/">DigiArt</a>
                    </Link>
                </h2>
                {logoutbtn}
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
                    <Link to="/marketplace">
                        <a href="/marketplace">Marketplace</a>
                    </Link>
                </li>
                <li className={`${!isActive ? "fade" : ""}`}>
                    <Link to="/cart">
                        <div style={{ display: "flex" }}>
                            <a href="/cart">Cart</a>
                            <ShoppingBagIcon style={{ color: "yellow" }} />
                            <div style={{ margin: "0px 5px" }}>
                                {basket?.length}
                            </div>
                        </div>
                    </Link>
                </li>
                <li className={`${!isActive ? "fade" : ""}`}>
                    <Link to="/profile">
                        <a href="/profile">My Profile</a>
                    </Link>
                </li>
                <li className={`${!isActive ? "fade" : ""}`}>
                    <div className="navbar__wallet">
                        <div>
                            {["right"].map((anchor) => (
                                <React.Fragment key={anchor}>
                                    <Button
                                        onClick={toggleDrawer(anchor, true)}
                                    >
                                        <AccountBalanceWalletIcon />
                                    </Button>
                                    <Drawer
                                        PaperProps={{
                                            style: {
                                                height: "30vh",
                                                borderRadius: "10px 0 0 10px",
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
                <li className={`${!isActive ? "fade" : ""}`}>
                    <button className="login-button" href="#">
                        Login
                    </button>
                </li>
                <li className={`${!isActive ? "fade" : ""}`}>
                    <button className="join-button" href="#">
                        Join
                    </button>
                </li>
                <li className={`${!isActive ? "fade" : ""}`} onClick={logout}>
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
