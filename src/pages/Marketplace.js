import React, { useState, useEffect } from "react";
import "../style/LandingPage.css";
import "../style/Card.css";
import Navbar from "../components/Navbar";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Card from "../components/Card";
import axios from 'axios';

function Marketplace() {
    const [cryptoPunk, setCryptoPunk] = useState([]);
    const [coolCats, setCoolCats] = useState([]);

    const cryptopunk = {
        //*********crypotoPunk */
        method: "GET",
        url: "https://api.nftport.xyz/v0/nfts/0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
        params: { chain: "ethereum", include: "metadata", page_size: "4" },
        headers: {
            "Content-Type": "application/json",
            Authorization: "52f0d4d5-e48d-47e7-b558fb101c99205e",
        },
        //******** deadfellaz*/
        // method: "GET",
        // url: "https://api.nftport.xyz/v0/nfts/0x2acab3dea77832c09420663b0e1cb386031ba17b",
        // params: { chain: "ethereum", page_size: "10", include: "all" },
        // headers: {
        //     "Content-Type": "application/json",
        //     Authorization: "52f0d4d5-e48d-47e7-b558fb101c99205e",
        // },
        //******VeeFriends */
        // method: "GET",
        // url: "https://api.nftport.xyz/v0/nfts/0xa3aee8bce55beea1951ef834b99f3ac60d1abeeb",
        // params: { chain: "ethereum", page_size: "10", include: "all" },
        // headers: {
        //     "Content-Type": "application/json",
        //     Authorization: "52f0d4d5-e48d-47e7-b558fb101c99205e",
        // },
    };
    const coolCatsApi = {
        //************cool cats */
        method: "GET",
        url: "https://api.nftport.xyz/v0/nfts/0x1a92f7381b9f03921564a437210bb9396471050c",
        params: { chain: "ethereum", page_size: "10", include: "all" },
        headers: {
            "Content-Type": "application/json",
            Authorization: "52f0d4d5-e48d-47e7-b558fb101c99205e",
        },
    };
    useEffect(() => {
        axios.request(cryptopunk).then((response) => {
            // console.log(response.data);
            setCryptoPunk(response.data.nfts);
        });
    }, []);
    useEffect(() => {
        axios.request(coolCatsApi).then((response) => {
            // console.log(response.data);
            setCoolCats(response.data.nfts);
        });
    }, []);
    // console.log(coolCats);
    let copyCryptoPunk = [];
    let copyCoolCats = [];
    const randomNum = () => {
        return Math.floor(Math.random() * 9) + 1;
    };

    cryptoPunk.map((nft) => {
        let newKey = Object.assign({}, nft);
        newKey.price = `0.${randomNum()} ETH`;
        return copyCryptoPunk.push(newKey);
    });
    coolCats.map((nft) => {
        let newKey = Object.assign({}, nft);
        newKey.price = `0.${randomNum()} ETH`;
        return copyCoolCats.push(newKey);
    });

    console.log(copyCoolCats);
    return (
        <div className="marketplace">
            <Navbar />
            <div className="marketplace-wrapper">
                <div className="welcome">Welcome, User</div>
                <div className="options">
                    <div className="categories">
                        <div>Digital</div>
                        <div>Technology</div>
                        <div>Everyday Items</div>
                    </div>
                    <div className="addItem">Upload</div>
                </div>
                <p className="title">Featured Products</p>
                <div className="market-place-features">
                    {copyCryptoPunk.map((nft) => {
                        copyCryptoPunk.push(nft);
                        return (
                            <Card
                                name={nft.metadata.name}
                                img={
                                    `${nft.file_url}` ||
                                    nft.metadata.image ||
                                    nft.file_url
                                }
                                price={nft.price}
                                cryptoPunk={cryptoPunk}
                            />
                        );
                    })}
                </div>
                <h2 className="title">Digital Assets</h2>
                <div className="market-place-assets">
                    {copyCoolCats.map((nft) => {
                        return (
                            <Card
                                name={nft.metadata.name}
                                img={
                                    `${nft.file_url}` ||
                                    nft.metadata.image ||
                                    nft.file_url
                                }
                                price={nft.price}
                                description={nft.metadata.description}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Marketplace;
