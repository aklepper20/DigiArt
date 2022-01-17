import React, { useRef } from "react";
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

// require("dotenv").config();
function Marketplace({ user, copyFeatured, mrkt }) {
  // console.log(mrkt, "openseamrkt");
  //upload model below
  const productNameRef = useRef();
  const productPriceRef = useRef();
  const productFileRef = useRef();

  // console.log(user)

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

  const handleSubmit = () => {
    console.log("upload successful");
  };
  ///upload modal ends
  return (
    <div className="marketplace">
      <Navbar 
      logoutbtn ={<button onClick={logout}>LOGOUT</button>}/>
      <div className="marketplace-wrapper">
        <div className="welcome">Welcome, {user} </div>
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
                <Input type="file" accept="image/*" ref={productFileRef} />
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
          {mrkt &&
            mrkt.map((nft) => {
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
