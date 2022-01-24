import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../style/Profile.css";
import "../style/NftCard.css";
import NftCard from "../components/NftCard";
import ProfileProductDetails from "../components/ProfileProductDetails";
import Avatar from "@mui/material/Avatar";

function Profile({
  randomUserCoin,
  profileInfo,
  userProfileName,
  userProfileEmail,
  user,
  profileImg,
}) {
  const [selectedNft, setSelectedNft] = useState(profileInfo.length - 1);

  return (
    <>
      <Navbar randomUserCoin={randomUserCoin} user={userProfileName} />
      <div className="profile">
        <div className="profile__top">
          <div className="profile__user">
            <Avatar
              className="img"
              src={profileImg}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "contain",
                border: "5px solid #292929",
              }}
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

        <h2
          style={{
            margin: "14px 11px 0px 45px",
          }}
        >
          Your Items
        </h2>
        {profileInfo.length === 0 ? (
          <p style={{ color: "white" }}>You have no NFTS...</p>
        ) : (
          <div className="profile__bottom">
            <div className="profile__nftDisplay">
              {[...profileInfo].reverse().map((obj, index) => (
                <div
                  className="card"
                  key={obj.index}
                  onClick={() => setSelectedNft(obj.id)}
                  // className="nftCard"
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
