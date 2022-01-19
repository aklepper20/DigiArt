import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Marketplace from "./pages/Marketplace";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
// import Signup from "./pages/Signup";
// import Signin from "./pages/Signin";
import UploadForm from "./components/UploadForm";
import { REACT_APP_API_KEY } from "./utils/keys";
import Auth from "./components/Auth";

import db, { auth } from "./utils/firebase";
import { onSnapshot, doc } from "firebase/firestore";
import { signOut } from "firebase/auth";

const deadFellazApi = "0x2acab3dea77832c09420663b0e1cb386031ba17b";
const pudgyPenguinsApi = "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8";
const mutantApeApi = "0x60E4d786628Fea6478F785A6d7e704777c86a7c6";
const shibaApi = "0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623";
const wowApi = "0xe785e82358879f061bc3dcac6f0444462d4b5330";

function App() {
    //// user verification code starts here
    const data = [];
    const [userData, setUserData] = useState({});
    const [user, setUser] = useState({});
    const [userProfile, setUserProfile] = useState(userData);

    let [randomUserCoin, setRandomUserCoin] = useState(null);
    useEffect(() => {
        const randomEth = () => {
            let random = Math.random() * (15 - 5) + 5;
            setRandomUserCoin(random.toFixed(2));
        };
        randomEth();
    }, []);

    // database access and user verification
    useEffect(() => {
        //verify the user who signed in using "user" usestate
        auth.onAuthStateChanged((currentUser) => {
            if (currentUser.uid) {
                setUser(currentUser.uid);

                console.log("user set");
            } else {
                console.log("please sign in");
                //do something that user cant see the marketplace without signing in
            }
        });
        //onsnapshot gets data from our database
        onSnapshot(doc(db, "users", `${user}`), (snapshot) => {
            //let username = snapshot.data().userData[0].name;
            // let eachUserData = snapshot
            // .data()
            //.userData.map((data, id) => ({ ...data, id: id }));
            // what do u need this data to do?
            //dasetProfile(eachUserData) ta with users uploads if any
            // setUserProfile(eachUserData);
            console.log(
                snapshot.data().userData.emailID,
                "userprofile has been set"
            );
        });
    }, []);
    //// user verification code ends here
    const [featured, setFeatured] = useState([]);
    const [mrkt, setMrkt] = useState([]);
    const [filterMarket, setFilterMarket] = useState("all");
    const [filteredMrkt, setFilteredMrkt] = useState(mrkt);

    let copyFeatured = [];
    let copyMrkt = [];
    // ******************* opensea api **********
    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "X-API-KEY": REACT_APP_API_KEY,
        },
    };
    // console.log(mrkt);
    // 7. useEffefct that has a handleFilter() function
    useEffect(() => {
        // 7a. handle function should have an if statement that depending on the filterMarket it will setFilterMarketTasks() with the filtered tasks
        const handleFilter = () => {
            if (filterMarket === "Mutant Ape Yacht Club") {
                return setFilteredMrkt(
                    copyMrkt.filter(
                        (nft) => nft.collection.name === "Mutant Ape Yacht Club"
                    )
                );
            } else if (filterMarket === "DeadFellaz") {
                return setFilteredMrkt(
                    copyMrkt.filter(
                        (nft) => nft.collection.name === "DeadFellaz"
                    )
                );
            } else if (filterMarket === "Pudgy Penguins") {
                return setFilteredMrkt(
                    copyMrkt.filter(
                        (nft) => nft.collection.name === "Pudgy Penguins"
                    )
                );
            } else if (filterMarket === "World of Women") {
                return setFilteredMrkt(
                    copyMrkt.filter(
                        (nft) => nft.collection.name === "World of Women"
                    )
                );
            } else if (filterMarket === "Bored Ape Kennel Club") {
                return setFilteredMrkt(
                    copyMrkt.filter(
                        (nft) => nft.collection.name === "Bored Ape Kennel Club"
                    )
                );
            } else {
                // if the status is all setFilteredMrkt to mrkt
                return setFilteredMrkt(copyMrkt);
            }
        };
        handleFilter();
    }, [filterMarket, mrkt]);
    //************     featured */
    useEffect(() => {
        fetch(
            `https://api.opensea.io/api/v1/assets?asset_contract_addresses=${mutantApeApi}&order_direction=desc&offset=0&limit=4`,
            options
        )
            .then((response) => response.json())
            .then((response) => setFeatured(response))
            .catch((err) => console.error(err));
    }, []);
    // ************ merging all api calls into one array */
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
    // console.log(mrkt, "new data");
    const randomNum = () => {
        return Math.floor(Math.random() * 9) + 1;
    };
    featured.assets &&
        featured.assets.map((nft) => {
            let newKey = Object.assign({}, nft);
            newKey.price = `0.${randomNum()} ETH`;
            newKey.category = "crypto punk";
            return copyFeatured.push(newKey);
        });
    mrkt &&
        mrkt.map((nft) => {
            let newKey = Object.assign({}, nft);
            newKey.price = `0.${randomNum()} ETH`;
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
    // ******************* opensea api end **********
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <LandingPage
                                slides={copyMrkt.slice(0, copyMrkt.length)}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/marketplace"
                        element={
                            <Marketplace
                                copyFeatured={copyFeatured}
                                mrkt={copyMrkt}
                                filterMarket={filterMarket}
                                setFilterMarket={setFilterMarket}
                                filteredMrkt={filteredMrkt}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/profile"
                        element={
                            <Profile
                                mrkt={copyMrkt}
                                randomUserCoin={randomUserCoin}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/cart"
                        element={<Cart randomUserCoin={randomUserCoin} />}
                    />
                    <Route exact path="/login" element={<Auth />} />
                    <Route exact path="/upload" element={<UploadForm />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
