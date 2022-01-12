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
              src="https://preview.redd.it/v0caqchbtn741.jpg?auto=webp&s=c5d05662a039c031f50032e22a7c77dfcf1bfddc"
              alt=""
            />
            <h2>Kwesi</h2>
            <p>@KwesiB</p>
            <p>eth: 3.04</p>
          </div>
          <div className="profile__item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Sw6z7D4DQY765mD8KyTzXPnvKyNRSrfSQ&usqp=CAU"
              alt="NFT"
            />
            <div className="profile__productDetails">
              {editInputs ? <EditInputs /> : <ProfileNFTDisplay />}
              <button onClick={() => setEditInputs(true)}>Edit</button>
              <button onClick={() => setEditInputs(false)}>Save</button>
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
