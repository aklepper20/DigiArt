import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../style/Profile.css";
import NftCard from "../components/NftCard";
import EditInputs from "../components/EditInputs";
import ProfileNFTDisplay from "../components/ProfileNFTDisplay";

function Profile() {
  const [editInputs, setEditInputs] = useState(false);

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
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz7xkKmOxNZeatDKzjesmJG-s2clYi3gsncQ&usqp=CAU"
              alt=""
            />
            <h2>Kwesi</h2>
            <p>@KwesiB</p>
            <p>eth: 3.04</p>
          </div>

          <div className="profile__item">
            <div className="profile__name">
              <h2>PRODUCT DETAILS</h2>
            </div>

            <div className="profile__itemDesc">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Sw6z7D4DQY765mD8KyTzXPnvKyNRSrfSQ&usqp=CAU"
                alt="NFT"
              />
              <div className="profile__productDetails">
                <h2 style={{ color: "white" }}>
                  Blue <span>#24</span>
                </h2>
                {editInputs ? <EditInputs /> : <ProfileNFTDisplay />}
                <div className="profile__btns">
                  <button onClick={() => setEditInputs(false)}>Save</button>
                  <button onClick={() => setEditInputs(true)}>Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 style={{ margin: "35px 15px 15px 45px" }}>Your Items</h2>
        <div className="profile__bottom">
          <div className="profile__nftDisplay">
            {objectArr.map((obj) => (
              <NftCard img={obj.img} ID={obj.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
