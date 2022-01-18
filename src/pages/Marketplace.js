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
import {setDoc, doc} from 'firebase/firestore'
// #1b import db from ../utils/firebase.js
import db from '../utils/firebase'

// require("dotenv").config();
function Marketplace({username, user,userData, copyFeatured, mrkt }) {
  // console.log(mrkt, "openseamrkt");
  
  //upload model below
  const [inputName, setInputName] = useState('')
  const [inputPrice, setInputPrice] = useState('')
  const [inputFile, setInputFile] = useState({})

  // when i type, a function should run that saves the states of the input
  const handleChangeName = (e) => {
      setInputName(e.target.value)
  }

  const handleChangePrice = (e) => {
      setInputPrice(e.target.value)
  }

  const handleChangeFile = (e) => {
      setInputFile(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(inputFile) {
      console.log(inputName, inputPrice, inputFile);
    }
  }

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
            <Navbar  logoutbtn ={<button onClick={logout}>LOGOUT</button>}/>
            <div className="marketplace-wrapper">
                <div className="welcome">Welcome, {username }</div>
                <div className="options">
                    <div className="categories">
                        <FilterControl />
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
                                    onChange=
                                    {handleChangeName}
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Price"
                                    type="number"
                                    fullWidth
                                    variant="standard"
                                    onChange=
                                    {handleChangePrice}
                                />
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange=
                                    {handleChangeFile}
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
                                            description={
                                                nft.collection.description
                                            }
                                        />
                                    </Grid>
                                </>
                            );
                        })}
                </div>
                <h2 className="title">Assets</h2>
                <div className="market-place-assets">
                    {mrkt &&
                        mrkt.map((nft) => {
                            return (
                                <>
                                    <Grid key={nft.id}>
                                        <Card
                                            id={nft.id}
                                            {...nft}
                                            // id={nft.id}
                                            name={
                                                nft.name || nft.collection.name
                                            }
                                            img={nft.image_url}
                                            // // price={Number(nft.stats.average_price).toFixed(
                                            // //     2
                                            // // )}
                                            description={
                                                nft.collection.description
                                            }
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
