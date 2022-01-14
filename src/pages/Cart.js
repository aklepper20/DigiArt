import React, { useState } from "react";
import CartCard from "../components/CartCard";
import "../style/Cart.css";
import Navbar from "../components/Navbar";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";

const StyledModal = styled(ModalUnstyled)`
    position: fixed;
    z-index: 1300;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Backdrop = styled("div")`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
`;

const style = {
    width: 480,
    bgcolor: "#041010",
    color: "white",
    border: "2px solid #6bbaec",
    p: 2,
    px: 4,
    pb: 3,
};

function Cart() {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const objArray = [
        {
            img: "https://i.insider.com/61a7a6965d47cc0018e8ce17?width=600&format=jpeg&auto=webp",
            price: 0.5,
        },
        {
            img: "https://www.artnews.com/wp-content/uploads/2022/01/unnamed-2.png?w=631",
            price: 0.2,
        },
        {
            img: "https://1734811051.rsc.cdn77.org/data/images/full/392064/youtuber-shares-how-you-can-create-your-nft-on-iphone-heres-how-it-works.jpg",
            price: 0.7,
        },
    ];

    return (
        <>
            <Navbar />

            <h1>Cart Items</h1>
            <div className="cart__container">
                <div className="cart">
                    {objArray.map((obj) => (
                        <CartCard img={obj.img} price={obj.price} />
                    ))}
                    <div className="cart__container__subtotal">
                        <h3>SUB-TOTAL</h3>
                        <h3 style={{ marginLeft: "50px" }}>3.01 ETH</h3>
                    </div>
                </div>
                <div className="cart__checkout">
                    <div className="cart__total">
                        <p>
                            Wallet total <span>.29eth</span>
                        </p>
                        <p>
                            Cart total <span>2.4eth</span>
                        </p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "end",
                            flexDirection: "column",
                        }}
                    >
                        <button
                            type="button"
                            style={{
                                backgroundColor: "lightskyblue",
                                paddingTop: "8px",
                                paddingBottom: "8px",
                                paddingLeft: "12px",
                                paddingRight: "12px",
                                color: "white",
                                marginBottom: "12px",
                                padding: 3,
                            }}
                            onClick={() => setOpen(true)}
                        >
                            Checkout
                        </button>
                        <StyledModal
                            aria-labelledby="unstyled-modal-title"
                            aria-describedby="unstyled-modal-description"
                            open={open}
                            onClose={handleClose}
                            BackdropComponent={Backdrop}
                        >
                            <Box sx={style}>
                                <div
                                    style={{
                                        width: "480px",
                                        display: "grid",
                                        placeItems: "center",
                                    }}
                                >
                                    <iframe
                                        src="https://giphy.com/embed/3o6fJ1BM7R2EBRDnxK"
                                        width="480"
                                        height="234"
                                        frameBorder="0"
                                        class="giphy-embed"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </Box>
                        </StyledModal>
                        <button className="cart__continueBtn">
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
