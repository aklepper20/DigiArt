import React, { useRef, useState } from "react";
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

// require("dotenv").config();
function Marketplace({
  userProfileName,
  userID,
  setUserID,
  username,
  user,
  userData,
  copyFeatured,
  mrkt,
  filteredMrkt,
  filterMarket,
  setFilterMarket,
}) {
  // console.log(filterMarket, "openseamrkt");

  //upload model below
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputFile, setInputFile] = useState({});

  // when i type, a function should run that saves the states of the input

  console.log(user, userID, "this is user and userID");
  const handleChangeName = (e) => {
    setInputName(e.target.value);
  };

  const handleChangePrice = (e) => {
    setInputPrice(e.target.value);
  };

  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    const user = auth.currentUser.email;
    const storage = getStorage();
    const storageRef = ref(storage, user + "/" + file.name);
    setInputFile(
      uploadBytes(storageRef, file).then((snapshot) => {
        console.log("Uploaded a blob or file!");
      })
    );
    console.log("handle file", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputPrice && inputName) {
      //handleChangeFile(inputFile);

      //   const file = e.target.files[0];
      //   const user = auth.currentUser.email;
      //   const storage = getStorage();
      //   const storageRef = ref(storage, user + "/" + file.name);
      //   uploadBytes(storageRef, file).then((snapshot) => {
      //     console.log("Uploaded a blob or file!");
      //   });
      // create a database of array that will take objects with values productName, productPrice: inputPrice
      //console.log("handle file", user, storageRef);
      setDoc(doc(db, "user", `${user}`), {
        productInfo: [
          {
            productName: inputName,
            productPrice: inputPrice,
          },
        ],
      });
    } else {
      alert("please update all informatiom");
    }

    //setdoc to new array productInfo
    // setDoc(doc(db, "user", `${user}`), {
    //   productInfo: [
    //     {
    //       productName: inputName,
    //       productPrice: inputPrice,
    //     },
    //   ],
    // });
  };

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
          <div className="addItem">
            <Button
              style={{
                width: "280px",
                height: "80px",
                ":hover": {
                  bgcolor: "pink",
                  color: "white",
                },
              }}
              onClick={handleClickOpen}
            >
              Upload
            </Button>
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
                  onChange={handleChangeName}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Price"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={handleChangePrice}
                />
                <Input
                  onChange={handleChangeFile}
                  type="file"
                  accept="image/*"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
              </DialogActions>
            </Dialog>
          </div>
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
                      {...nft}
                      // id={nft.id}
                      name={nft.name || nft.collection.name}
                      img={nft.image_url}
                      // // price={Number(nft.stats.average_price).toFixed(
                      // //     2
                      // // )}
                      description={nft.collection.description}
                    />
                  </Grid>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
