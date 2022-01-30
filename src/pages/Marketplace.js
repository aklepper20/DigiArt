import React, { useRef, useState, useEffect } from "react";
import { Navigate } from "react-router";
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
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import FilterControl from "../components/FilterControl";
import { setDoc, doc } from "firebase/firestore";
import db from "../utils/firebase";
import {
  getDoc,
  onSnapshot,
  updateDoc,
  arrayUnion,
  Timestamp,
} from "firebase/firestore";
import Footer from "../components/Footer";

function Marketplace({
  setProfileInfo,
  profileInfo,
  userProfileName,
  user,
  filteredMrkt,
  filterMarket,
  setFilterMarket,
  randomUserCoin,
}) {
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputFile, setInputFile] = useState({});
  const [open, setOpen] = useState(false);

  const [seed, setSeed] = useState("");
  const [seedColor, setSeedColor] = useState("");
  const [avatarCategory, setAvatarCategory] = useState("");
  const [randomNftEth, setRandomNftEth] = useState(null);
  const [avatarName, setAvatarName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [button, setButton] = useState(false);

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
              createdAt: Timestamp.now(),
            },
          ],
        });
      }
      await updateDoc(doc(db, "user", `${user}`), {
        productInfo: arrayUnion({
          productName: avatarName,
          productPrice: randomNftEth,
          productImage: avatarUrl,
          createdAt: Timestamp.now(),
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

  const handleSnapshot = () => {
    onSnapshot(doc(db, "user", `${user}`), (snapshot) => {
      let eachUserData = snapshot.data().productInfo.map((data, id) => ({
        ...data,
        id: id,
        category: "My Digitally Generated Assets",
        createdAt: Timestamp.now(),
      }));
      setProfileInfo(eachUserData);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
              createdAt: Timestamp.now(),
            },
          ],
        });
      }
      await updateDoc(doc(db, "user", `${user}`), {
        productInfo: arrayUnion({
          productName: inputName,
          productPrice: inputPrice,
          productImage: inputFile,
          createdAt: Timestamp.now(),
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

  return (
    <>
      <div className="marketplace">
        {!user && <Navigate to="/" />}
        <Navbar randomUserCoin={randomUserCoin} user={userProfileName} />
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
                  onClick={() => setOpen(true)}
                >
                  Upload
                </Button>
              </div>
            </div>
            <Dialog open={open} onClose={() => setOpen(false)}>
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
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
              </DialogActions>
            </Dialog>
          </div>
          <div className="market-place-features">
            {profileInfo &&
              [...profileInfo]
                .reverse()
                .slice(0, 10)
                .map((nft) => {
                  return (
                    <>
                      <Grid key={nft.id}>
                        <Card
                          id={nft.id}
                          name={nft.productName}
                          img={nft.productImage}
                          price={nft.productPrice}
                          description={nft.category}
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
      <Footer />
    </>
  );
}

export default Marketplace;
