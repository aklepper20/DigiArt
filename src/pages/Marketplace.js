import React, { useRef, useState, useEffect } from "react";
import "../style/LandingPage.css";
import "../style/Card.css";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Input } from "@mui/material";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import FilterControl from "../components/FilterControl";
// import { uploadBytes } from "firebase/storage";
import { setDoc, addDoc, doc } from "firebase/firestore";
//import storage from "../utils/firebase";
// #1b import db from ../utils/firebase.js
import db from "../utils/firebase";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getDoc, onSnapshot, updateDoc, arrayUnion } from "firebase/firestore";

// require("dotenv").config();
function Marketplace({
  setProfileInfo,
  profileInfo,
  userProfileName,
  userID,
  setUserID,
  username,
  user,
  userData,
  copyFeatured,
  mrkt,
  filteredMrkt,
  setFilteredMrkt,
  filterMarket,
  setFilterMarket,
  profileImg,
}) {
  // console.log(filterMarket, "openseamrkt");

  //upload model below
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputFile, setInputFile] = useState({});

  const [seed, setSeed] = useState("");
  const [seedColor, setSeedColor] = useState("");
  const [avatarCategory, setAvatarCategory] = useState("");
  const [randomNftEth, setRandomNftEth] = useState(null);
  const [avatarName, setAvatarName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [button, setButton] = useState(false);
  const [copyProfileInfo, setCopyProfileInfo] = useState(profileInfo);

  useEffect(() => {
    const handleGenerateNFT = async () => {
      setRandomNftEth(avatarEth.toFixed(1));
      setAvatarCategory(randomAvatar);
      setSeed(Math.floor(Math.random() * 5000));
      setSeedColor("23" + fill[Math.floor(Math.random() * fill.length)]);

      await fetch(
        "https://random-word-api.herokuapp.com/word?number=10&swear=0"
      )
        .then((response) => response.json())
        .then((data) => setAvatarName(`${data[0]} ${data[1]}`));
    };

    handleGenerateNFT();
  }, [button]);

  useEffect(() => {
    const handleFetchUrlNft = async () => {
      await fetch(
        `https://avatars.dicebear.com/api/${avatarCategory}/${seed}.svg?background=%${seedColor}`
      ).then((data) => setAvatarUrl(data.url));
    };
    handleFetchUrlNft();
  }, [button]);

  useEffect(() => {
    handleAvatarFirebase();
  }, [avatarUrl]);

  const handleAvatarFirebase = async () => {
    if (avatarUrl && avatarName && randomNftEth) {
      let docRef = doc(db, "user", `${user}`);
      let docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(doc(db, "user", `${user}`), {
          productInfo: [
            {
              productName: avatarName,
              productPrice: randomNftEth,
              productImage: avatarUrl,
            },
          ],
        });
      }
      await updateDoc(doc(db, "user", `${user}`), {
        productInfo: arrayUnion({
          productName: avatarName,
          productPrice: randomNftEth,
          productImage: avatarUrl,
        }),
      });
    }
    setProfileInfo([]);
    handleSnapshot();
  };

  const fill = ["ff0000", "00ff00", "0000ff"];
  const avatars = [
    "adventurer",
    "adventurer-neutral",
    "avataaars",
    "big-ears",
    "big-ears-neutral",
    "big-smile",
    "bottts",
    "croodles",
    "micah",
    "pixel-art",
    "open-peeps",
    "personas",
    "pixel-art-neutral",
    "miniavs",
    "croodles-neutral",
  ];
  let randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
  let avatarEth = Math.random() * (0.9 - 0.05) + 0.05;

  // when i type, a function should run that saves the states of the input

  // console.log(user, userID, "this is user and userID");
  // const handleChangeName = (e) => {
  //   setInputName(e.target.value);
  // };

  // const handleChangePrice = (e) => {
  //   setInputPrice(e.target.value);
  // };

  // const handleChangeFile = (e) => {
  //   setInputFile(e.target.value);
  // };

  // const handleSnapshot = () => {
  //   onSnapshot(doc(db, "user", `${user}`), (snapshot) => {
  //     let eachUserData = snapshot.data().productInfo;

  //     setProfileInfo(eachUserData);
  //   });
  // };

  const handleSnapshot = () => {
    onSnapshot(doc(db, "user", `${user}`), (snapshot) => {
      let eachUserData = snapshot.data().productInfo.map((data, id) => ({
        ...data,
        id: id,
        category: "userData",
      }));
      //  let eachUserData = snapshot.data().productInfo
      setProfileInfo(eachUserData);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //  console.log(db._authCredentials.currentUser.uid, "this is Db")
    if (inputPrice && inputName) {
      let docRef = doc(db, "user", `${user}`);
      let docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(doc(db, "user", `${user}`), {
          productInfo: [
            {
              productName: inputName,
              productPrice: inputPrice,
              productImage: inputFile,
            },
          ],
        });
      }
      await updateDoc(doc(db, "user", `${user}`), {
        productInfo: arrayUnion({
          productName: inputName,
          productPrice: inputPrice,
          productImage: inputFile,
        }),
      });
      setProfileInfo([]);
      handleSnapshot();
    } else {
      alert("please update all informatiom");
    }
    setOpen(false);
  };

  useEffect(() => {
    handleSnapshot();
  }, [user]);

  const logout = async () => {
    await signOut(auth);
    window.location = "/";
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // console.log({username})

  // const handleSubmit = () => {
  //     console.log("upload successful");
  // };
  ///upload modal ends

  return (
    <>
      <div className="marketplace">
        <Navbar />
        <div className="marketplace-wrapper">
          <div className="welcome">Welcome, {userProfileName} </div>
          <div className="options">
            <div className="categories">
              <FilterControl
                setFilterMarket={setFilterMarket}
                filterMarket={filterMarket}
              />
            </div>
          </div>
          <div className="mrkt-title">
            <p className="title">Featured Products</p>
            {/* upload modal html begins here */}
            <div className="button-container">
              <div
                className="generate-nft"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  style={{
                    ":hover": {
                      bgcolor: "pink",
                      color: "white",
                    },
                  }}
                  onClick={() => setButton(!button)}
                >
                  Generate NFT
                </Button>
              </div>
              <div className="addItem">
                <Button
                  style={{
                    ":hover": {
                      bgcolor: "pink",
                      color: "white",
                    },
                  }}
                  onClick={handleClickOpen}
                >
                  Upload
                </Button>
              </div>
            </div>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Upload your Art!!!</DialogTitle>
              <DialogContent>
                <DialogContentText></DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Name of the product"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={(e) => setInputName(e.target.value)}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Price"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={(e) => setInputPrice(e.target.value)}
                />
                {/* <Input
                  onChange={handleChangeFile}
                  type="file"
                  accept="image/*"
                /> */}
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Enter image link"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={(e) => setInputFile(e.target.value)}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
              </DialogActions>
            </Dialog>

            {/* upload modal HTML ends here */}
          </div>
          <div className="market-place-features">
            {copyFeatured &&
              copyFeatured.map((nft) => {
                return (
                  <>
                    <Grid key={nft.id}>
                      <Card
                        id={nft.id}
                        name={nft.collection.name}
                        img={nft.image_url}
                        price={nft.price}
                        description={nft.collection.description}
                      />
                    </Grid>
                  </>
                );
              })}
          </div>
          <h2 className="title">Assets</h2>
          <div className="market-place-assets">
            {filteredMrkt &&
              filteredMrkt.map((nft) => {
                return (
                  <>
                    <Grid key={nft.id}>
                      <Card
                        id={nft.id}
                        nftSymbol={nft.asset_contract.symbol}
                        name={nft.name || nft.collection.name}
                        openSeaLink={nft.permalink}
                        img={nft.image_url}
                        description={nft.collection.description}
                        price={nft.price}
                      />
                    </Grid>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Marketplace;
