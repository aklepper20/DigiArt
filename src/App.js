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

const deadFellazApi = "0x2acab3dea77832c09420663b0e1cb386031ba17b";
const pudgyPenguinsApi = "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8";
const mutantApeApi = "0x60E4d786628Fea6478F785A6d7e704777c86a7c6";
const shibaApi = "0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623";
const wowApi = "0xe785e82358879f061bc3dcac6f0444462d4b5330";

function App() {
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
    // 7. useEffefct that has a handleFilter() function
    // useEffect(() => {
    //     // 7a. handle function should have an if statement that depending on the filterMarket it will setFilterMarketTasks() with the filtered tasks
    //     const handleFilter = () => {
    //         if (filterMarket === "active") {
    //             return setFilteredMrkt(mrkt.filter((task) => !task.status));
    //         } else if (filterMarket === "completed") {
    //             // if the filter status is completed i should setFilteredMrkt to only mrkt that have the status of true
    //             return setFilteredMrkt(mrkt.filter((task) => task.status));
    //         } else {
    //             // if the status is all setFilteredMrkt to mrkt
    //             return setFilteredMrkt(mrkt);
    //         }
    //     };
    //     handleFilter();
    // }, [filterMarket, mrkt]);
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
            newKey.category = "crypto punk";
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
                    <Route exact path="/" element={<LandingPage />} />
                    <Route
                        exact
                        path="/marketplace"
                        element={
                            <Marketplace
                                copyFeatured={copyFeatured}
                                mrkt={copyMrkt}
                            />
                        }
                    />
                    <Route exact path="/profile" element={<Profile />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/signup" element={<Auth />} />
                    <Route exact path="/login" element={<Auth />} />
                    <Route exact path="/upload" element={<UploadForm />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
