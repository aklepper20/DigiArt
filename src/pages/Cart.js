import React from "react";
import CartCard from "../components/CartCard";
import "../style/Cart.css";
import Navbar from "../components/Navbar";

function Cart() {
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
      <h1>Cart Items:</h1>
      <div className="cart__container">
        <div className="cart">
          {objArray.map((obj) => (
            <CartCard img={obj.img} price={obj.price} />
          ))}
        </div>

        <div className="cart__checkout">
          <div className="cart__total">
            <p>
              Wallet total: <span>.29eth</span>
            </p>
            <p>
              Cart total: <span>2.4eth</span>
            </p>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
