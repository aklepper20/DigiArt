import React from "react";
import Navbar from "../components/Navbar";
import "../style/Profile.css";
import Avatar from "@mui/material/Avatar";
import NftCard from "../components/NftCard";

function Profile() {
  const objectArr = [
    {
      img: "https://www.artnews.com/wp-content/uploads/2022/01/unnamed-2.png?w=631",
      id: 1934,
    },
    {
      img: "https://1734811051.rsc.cdn77.org/data/images/full/392064/youtuber-shares-how-you-can-create-your-nft-on-iphone-heres-how-it-works.jpg",
      id: 54359,
    },
    {
      img: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6170e01f8d7639b95a7f2eeb%2FSotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs%2F0x0.png%3Ffit%3Dscale",
      id: 2344,
    },
    {
      img: "https://www.artnews.com/wp-content/uploads/2022/01/unnamed-2.png?w=631",
      id: 1934,
    },
    {
      img: "https://1734811051.rsc.cdn77.org/data/images/full/392064/youtuber-shares-how-you-can-create-your-nft-on-iphone-heres-how-it-works.jpg",
      id: 54359,
    },
    {
      img: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6170e01f8d7639b95a7f2eeb%2FSotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs%2F0x0.png%3Ffit%3Dscale",
      id: 2344,
    },
    {
      img: "https://www.artnews.com/wp-content/uploads/2022/01/unnamed-2.png?w=631",
      id: 1934,
    },
    {
      img: "https://1734811051.rsc.cdn77.org/data/images/full/392064/youtuber-shares-how-you-can-create-your-nft-on-iphone-heres-how-it-works.jpg",
      id: 54359,
    },
    {
      img: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6170e01f8d7639b95a7f2eeb%2FSotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs%2F0x0.png%3Ffit%3Dscale",
      id: 2344,
    },
    {
      img: "https://www.artnews.com/wp-content/uploads/2022/01/unnamed-2.png?w=631",
      id: 1934,
    },
    {
      img: "https://1734811051.rsc.cdn77.org/data/images/full/392064/youtuber-shares-how-you-can-create-your-nft-on-iphone-heres-how-it-works.jpg",
      id: 54359,
    },
    {
      img: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6170e01f8d7639b95a7f2eeb%2FSotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs%2F0x0.png%3Ffit%3Dscale",
      id: 2344,
    },
    {
      img: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6170e01f8d7639b95a7f2eeb%2FSotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs%2F0x0.png%3Ffit%3Dscale",
      id: 2344,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="profile__top">
          <div className="profile__user">
            <Avatar />
          </div>

          <div className="profile__userDetails">
            <p>Username</p>
            <p># of items: 13</p>
            <p>Amount of coin: 2.3</p>
          </div>

          <div className="profile__product">
            <img
              src="https://i.insider.com/61a7a6965d47cc0018e8ce17?width=600&format=jpeg&auto=webp"
              alt="Product 1"
            />

            <div className="profile__title">
              <h4>Product Details:</h4>
              <button>Edit</button>
            </div>

            <div className="profile__inputs">
              <div className="profile__inputOne">
                <input placeholder="Title" className="profile__input" />
                <input placeholder="Category" />
              </div>
              <div className="profile__inputTwo">
                <input placeholder="Description" className="profile__input" />
                <input placeholder="Price" />
              </div>
            </div>
            <div className="save-btn">
              <button>Save</button>
            </div>
          </div>
        </div>
        <h1>Your Items:</h1>
        <div className="profile__bottom">
          <div className="profile__nftDisplay">
            {objectArr.map((obj) => (
              <NftCard img={obj.img} id={obj.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
