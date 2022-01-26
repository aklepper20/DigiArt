import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Marketplace from "./pages/Marketplace";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import UploadForm from "./components/UploadForm";

import { REACT_APP_API_KEY } from "./utils/keys";

import Auth from "./components/Auth";
import db, { auth } from "./utils/firebase";
import { onSnapshot, doc } from "firebase/firestore";

const deadFellazApi = "0x2acab3dea77832c09420663b0e1cb386031ba17b";
const pudgyPenguinsApi = "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8";
const mutantApeApi = "0x60E4d786628Fea6478F785A6d7e704777c86a7c6";
const shibaApi = "0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623";
const wowApi = "0xe785e82358879f061bc3dcac6f0444462d4b5330";

function App() {
  const data = [];
  const [userID, setUserID] = useState("");
  const [userData, setUserData] = useState({});
  const [user, setUser] = useState({});
  const [userProfile, setUserProfile] = useState(userData);
  const [userProfileName, setUserProfileName] = useState("");
  const [userProfileEmail, setUserProfileEmail] = useState("");
  const [profileInfo, setProfileInfo] = useState([]);
  const [profileImage, setProfileImage] = useState("");
  let [randomUserCoin, setRandomUserCoin] = useState(null);

  useEffect(() => {
    const randomEth = () => {
      let random = Math.random() * (15 - 5) + 5;
      setRandomUserCoin(random.toFixed(2));
    };
    randomEth();
  }, []);

  useEffect(() => {
    const fetchProfileImg = async () => {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      return setProfileImage(data.results[0].picture.large);
    };
    fetchProfileImg();
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser.uid) {
        setUser(currentUser.uid);
      } else {
        console.log("please sign in");
      }
    });

    onSnapshot(doc(db, "users", `${user}`), (snapshot) => {
      let userEmail = snapshot.data().userData[0].emailID;
      let userName = snapshot.data().userData[0].name;
      let eachUserData = snapshot.data().userData.map((data, id) => ({
        ...data,
        id: id,
      }));

      setUserProfileName(userName);
      setUserProfileEmail(userEmail);
    });
  }, [user]);

  const [featured, setFeatured] = useState([]);
  const [mrkt, setMrkt] = useState([]);
  const [filterMarket, setFilterMarket] = useState("all");
  const [filteredMrkt, setFilteredMrkt] = useState(mrkt);

  let copyFeatured = [];
  let copyMrkt = [];

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-API-KEY": REACT_APP_API_KEY,
    },
  };

  useEffect(() => {
    const handleFilter = () => {
      if (filterMarket === "Mutant Ape Yacht Club") {
        return setFilteredMrkt(
          copyMrkt.filter(
            (nft) => nft.collection.name === "Mutant Ape Yacht Club"
          )
        );
      } else if (filterMarket === "DeadFellaz") {
        return setFilteredMrkt(
          copyMrkt.filter((nft) => nft.collection.name === "DeadFellaz")
        );
      } else if (filterMarket === "Pudgy Penguins") {
        return setFilteredMrkt(
          copyMrkt.filter((nft) => nft.collection.name === "Pudgy Penguins")
        );
      } else if (filterMarket === "World of Women") {
        return setFilteredMrkt(
          copyMrkt.filter((nft) => nft.collection.name === "World of Women")
        );
      } else if (filterMarket === "Bored Ape Kennel Club") {
        return setFilteredMrkt(
          copyMrkt.filter(
            (nft) => nft.collection.name === "Bored Ape Kennel Club"
          )
        );
      } else {
        return setFilteredMrkt(copyMrkt);
      }
    };
    handleFilter();
  }, [filterMarket, mrkt]);

  useEffect(() => {
    fetch(
      `https://api.opensea.io/api/v1/assets?asset_contract_addresses=${mutantApeApi}&order_direction=desc&offset=0&limit=4`,
      options
    )
      .then((response) => response.json())
      .then((response) => setFeatured(response))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let market = [];
      let finishedArr = [];
      const arr = [
        mutantApeApi,
        deadFellazApi,
        pudgyPenguinsApi,
        wowApi,
        shibaApi,
      ];
      for (let i = 0; i < arr.length; i++) {
        await fetch(
          `https://api.opensea.io/api/v1/assets?asset_contract_addresses=${arr[i]}&order_direction=desc&offset=0&limit=10`
        )
          .then((res) => res.json())
          .then((response) => market.push(response.assets));
      }
      market.map((mrktItem) => {
        mrktItem.map((item) => {
          return finishedArr.push(item);
        });
      });
      setMrkt(finishedArr);
    };
    fetchData();
  }, []);

  const randomNum = () => {
    return Math.floor(Math.random() * 9) + 1;
  };
  featured.assets &&
    featured.assets.map((nft) => {
      let newKey = Object.assign({}, nft);
      newKey.price = `0.${randomNum()}`;
      newKey.category = "crypto punk";
      return copyFeatured.push(newKey);
    });
  mrkt &&
    mrkt.map((nft) => {
      let newKey = Object.assign({}, nft);
      newKey.price = `0.${randomNum()}`;
      return copyMrkt.push(newKey);
    });

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  shuffle(copyMrkt);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <LandingPage slides={copyMrkt.slice(0, copyMrkt.length)} />
            }
          />
          <Route
            exact
            path="/marketplace"
            element={
              <Marketplace
                user={user}
                userProfileName={userProfileName}
                setUserID={setUserID}
                userID={userID}
                copyFeatured={copyFeatured}
                mrkt={copyMrkt}
                filterMarket={filterMarket}
                setFilterMarket={setFilterMarket}
                filteredMrkt={filteredMrkt}
                profileInfo={profileInfo}
                setProfileInfo={setProfileInfo}
                profileImg={profileImage}
                setFilteredMrkt={setFilteredMrkt}
              />
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <Profile
                user={user}
                userProfileName={userProfileName}
                userProfileEmail={userProfileEmail}
                profileInfo={profileInfo}
                randomUserCoin={randomUserCoin}
                profileImg={profileImage}
              />
            }
          />
          <Route
            exact
            path="/cart"
            element={
              <Cart
                randomUserCoin={randomUserCoin}
                userProfileName={userProfileName}
              />
            }
          />
          <Route
            exact
            path="/login"
            element={<Auth setUserID={setUserID} userID={userID} />}
          />
          <Route exact path="/upload" element={<UploadForm />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
