import React, { useState, useEffect } from "react";
import CartCard from "../components/CartCard";
import "../style/Cart.css";
import Navbar from "../components/Navbar";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

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
function Cart({ randomUserCoin }) {
  const [{ basket }, dispatch] = useStateValue();
  let [cartSum, setCartSum] = useState(0);
  let [cartTotal, setCartTotal] = useState(0);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    let updatedWallet = (randomUserCoin - cartSum).toFixed(2);
    if (updatedWallet <= 0) {
      alert("Insufficient Wallet Funds");
    }
    let sum = 0;

    basket.map((nft) => {
      let price = nft.price.slice(0, 4);
      let nftTotal = price * nft.qty;
      sum += nftTotal;
      setCartSum(sum);
    });
  }, [basket, cartSum]);

  return (
    <>
      <Navbar />
      {basket?.length === 0 ? (
        <div className="cart__emptyCart">
          <div className="cart__emptyDetails">
            <div style={{ marginBottom: "20px" }}>
              <h2>Your Shopping Basket is empty...</h2>
              <p>
                Please go to the marketplace to add our digital assets to your
                cart.
              </p>
            </div>
            <Link to="/marketplace">
              <button className="cart__continueBtn">Continue Shopping</button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-around",
              marginLeft: "10px",
            }}
          >
            <h3 style={{ color: "white", marginTop: "18px" }}>Cart Items</h3>
            <p style={{ color: "white", marginRight: "35px" }}>
              Wallet: <span>{randomUserCoin} eth</span>
            </p>
          </div>
          <div className="cart__container">
            <div className="cart">
              {basket?.map((obj) => {
                return (
                  <CartCard
                    img={obj.img}
                    price={obj.price}
                    name={obj.name}
                    id={obj.id}
                    qty={obj.qty}
                  />
                );
              })}
              <div className="cart__container__subtotal">
                <h3>SUB-TOTAL</h3>
                <h3 style={{ marginLeft: "50px" }}>{cartSum.toFixed(2)} ETH</h3>
              </div>
            </div>
            <div className="cart__checkout">
              <div className="cart__total">
                {/* <p>
                  Wallet:<span>{randomUserCoin} eth</span>
                </p> */}
              </div>
              {/* </div> */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      marginBottom: "8px",
                      paddingRight: "6px",
                      fontSize: "16px",
                      color: "white",
                    }}
                  >
                    TOTAL:
                  </span>
                  <h1
                    style={{
                      textAlign: "center",
                      marginBottom: "8px",
                      color: "white",
                    }}
                  >
                    {cartSum.toFixed(2)}
                  </h1>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      color: "white",
                      marginRight: "7px",
                    }}
                  >
                    Updated Wallet:{" "}
                  </span>
                  <h2 style={{ color: "white" }}>
                    {(randomUserCoin - cartSum).toFixed(2)}
                  </h2>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  flexDirection: "column",
                }}
              >
                <button onClick={() => setOpen(true)}>Checkout</button>
              </div>
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
              <Link to="/marketplace">
                <button>Continue Shopping</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
