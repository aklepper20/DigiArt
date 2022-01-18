import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../style/Profile.css";
import "../style/NftCard.css";
import NftCard from "../components/NftCard";
import ProfileProductDetails from "../components/ProfileProductDetails";

function Profile({ randomUserCoin, mrkt }) {
  const [selectedNft, setSelectedNft] = useState(0);
  // const [editInputs, setEditInputs] = useState(false);
  // const [activeNft, setActiveNft] = useState(mrkt[0]);

  // useEffect(() => {
  //   setActiveNft(mrkt[selectedNft]);
  // }, [mrkt, selectedNft]);

  return (
    <>
      <Navbar randomUserCoin={randomUserCoin} />

      {mrkt.length > 0 && (
        <div className="profile">
          <div className="profile__top">
            <div className="profile__user">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz7xkKmOxNZeatDKzjesmJG-s2clYi3gsncQ&usqp=CAU"
                alt=""
              />
              <h2>Kwesi</h2>
              <p>@KwesiB</p>
              <p>eth: {randomUserCoin}</p>
            </div>

            <div className="profile__item">
              <div className="profile__name">
                <h2>PRODUCT DETAILS</h2>
              </div>

              {mrkt && (
                <ProfileProductDetails mrkt={mrkt} selectedNft={selectedNft} />
              )}
              {/* <div className="profile__itemDesc">
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
            </div> */}
            </div>
          </div>

          <h2 style={{ margin: "35px 15px 15px 45px" }}>Your Items</h2>
          <div className="profile__bottom">
            <div className="profile__nftDisplay">
              {mrkt.map((obj) => (
                <div onClick={() => setSelectedNft(obj.id)} className="nftCard">
                  <NftCard img={obj.image_url} ID={obj.id} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
