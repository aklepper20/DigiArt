import React, { useState, useEffect, useRef } from "react";
import "../style/LandingPage.css";
import "../style/Card.css";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import axios from "axios";
/////upload popup import below
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Input } from "@mui/material";
import { REACT_APP_API_KEY } from "../utils/keys";

const deadFellaz = "0x2acab3dea77832c09420663b0e1cb386031ba17b";
const pudgyPenguins = "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8";
const theSandbox = "0x3845badAde8e6dFF049820680d1F14bD3903a5d0";
const mutantApe = "0x60E4d786628Fea6478F785A6d7e704777c86a7c6";
const shiba = "0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623";
const wow = "0xe785e82358879f061bc3dcac6f0444462d4b5330";

// require("dotenv").config();
function Marketplace({ username }) {
    const [mrkt, setMrtk] = useState([]);
    const [featured, setFeatured] = useState([]);

    //upload model below
    const productNameRef = useRef();
    const productPriceRef = useRef();
    const productFileRef = useRef();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        console.log("upload successful");
    };
    ///upload modal ends

    // ******************* opensea api **********
    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "X-API-KEY": REACT_APP_API_KEY,
        },
    };
    //************     featured */
    useEffect(() => {
        fetch(
            `https://api.opensea.io/api/v1/assets?asset_contract_addresses=${mutantApe}&order_direction=desc&offset=0&limit=4`,
            options
        )
            .then((response) => response.json())
            .then((response) => setFeatured(response))
            .catch((err) => console.error(err));
    }, []);
    // ******************  mrkt */
    useEffect(() => {
        fetch(
            `https://api.opensea.io/api/v1/assets?asset_contract_addresses=${wow}&order_direction=desc&offset=0&limit=10`,
            options
        )
            .then((response) => response.json())
            .then((response) => setMrtk(response))
            .catch((err) => console.error(err));
    }, []);

    const randomNum = () => {
        return Math.floor(Math.random() * 9) + 1;
    };

    let copyFeatured = [];
    featured.assets &&
        featured.assets.map((nft) => {
            let newKey = Object.assign({}, nft);
            newKey.price = `0.${randomNum()} ETH`;
            newKey.category = "crypto punk";
            return copyFeatured.push(newKey);
        });

    console.log(copyFeatured, "open sea");

    // ******************* opensea api end **********
    return (
        <div className="marketplace">
            <Navbar />
            <div className="marketplace-wrapper">
                <div className="welcome">Welcome, {username}</div>
                <div className="options">
                    <div className="categories">
                        <div>Digital</div>
                        <div>Technology</div>
                        <div>Everyday Items</div>
                    </div>
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
                                    ref={productNameRef}
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Price"
                                    type="number"
                                    fullWidth
                                    variant="standard"
                                    ref={productPriceRef}
                                />
                                <Input
                                    type="file"
                                    accept="image/*"
                                    ref={productFileRef}
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
                <p className="title">Featured Products</p>
                <div className="market-place-features">
                    {copyFeatured &&
                        copyFeatured.map((nft) => {
                            return (
                                <>
                                    <Grid key={nft.id}>
                                        <Card
                                            id={nft.id}
                                            // {...nft}
                                            // id={nft.id}
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
                <h2 className="title">Digital Assets</h2>
                <div className="market-place-assets">
                    {mrkt.assets &&
                        mrkt.assets.map((nft) => {
                            return (
                                <>
                                    <Grid key={nft.id}>
                                        <Card
                                            id={nft.id}
                                            {...nft}
                                            // id={nft.id}
                                            // name={nft.name}
                                            img={nft.image_url}
                                            // // price={Number(nft.stats.average_price).toFixed(
                                            // //     2
                                            // // )}
                                            // description={nft.description}
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
