import React from "react";
import Navbar from "../components/Navbar";
import "../style/Profile.css";
import Avatar from "@mui/material/Avatar";

function Profile() {
  return (
    <div className="profile">
      <Navbar />

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
            src="https://ca-times.brightspotcdn.com/dims4/default/6dee0c9/2147483647/strip/true/crop/3529x2604+0+0/resize/1486x1096!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fee%2F1f%2F66bec92d4cc6930855a95619237e%2Fla-jolla-cove.jpg"
            alt="Product 1"
          />
          <div className="profile__title">
            <h4>Product Details</h4>
            <button>edit</button>
          </div>
          <div className="profile__inputs">
            <div className="profile__inputOne">
              <input placeholder="Title" />
              <input placeholder="Category" />
            </div>
            <div className="profile__inputTwo">
              <input placeholder="Description" />
              <input placeholder="Price" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
