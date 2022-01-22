import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../style/Profile.css";
import "../style/NftCard.css";
import NftCard from "../components/NftCard";
import ProfileProductDetails from "../components/ProfileProductDetails";

function Profile({
  randomUserCoin,
  profileInfo,
  userProfileName,
  userProfileEmail,
  user,
}) {
  const [selectedNft, setSelectedNft] = useState(0);

  return (
    <>
      <Navbar randomUserCoin={randomUserCoin} />
      <div className="profile">
        <div className="profile__top">
          <div className="profile__user">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz7xkKmOxNZeatDKzjesmJG-s2clYi3gsncQ&usqp=CAU"
              alt=""
            />
            <h2>{userProfileName}</h2>
            <p>{userProfileEmail}</p>
            <p>eth: {randomUserCoin}</p>
          </div>

          <div className="profile__item">
            <div className="profile__name">
              <h2>PRODUCT DETAILS</h2>
            </div>

            <ProfileProductDetails
              profileInfo={profileInfo}
              selectedNft={selectedNft}
            />
          </div>
        </div>

        <h2 style={{ margin: "35px 15px 15px 45px" }}>Your Items</h2>
        {profileInfo.length === 0 ? (
          <p style={{ color: "white" }}>You have no NFTS...</p>
        ) : (
          <div className="profile__bottom">
            <div className="profile__nftDisplay">
              {profileInfo.map((obj, index) => (
                <div
                  key={obj.index}
                  onClick={() => setSelectedNft(obj.id)}
                  className="nftCard"
                >
                  <NftCard
                    profileInfo={profileInfo}
                    img={obj.productImage}
                    name={obj.productName}
                    price={obj.productPrice}
                    ID={obj.id}
                    user={user}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;
