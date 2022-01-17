import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Marketplace from "./pages/Marketplace";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import UploadForm from "./components/UploadForm";
import { REACT_APP_API_KEY } from "./utils/keys";

const deadFellazApi = "0x2acab3dea77832c09420663b0e1cb386031ba17b";
const pudgyPenguinsApi = "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8";
const mutantApeApi = "0x60E4d786628Fea6478F785A6d7e704777c86a7c6";
const shibaApi = "0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623";
const wowApi = "0xe785e82358879f061bc3dcac6f0444462d4b5330";

function App() {
<<<<<<< HEAD
    const [featured, setFeatured] = useState([]);
    const [mrkt, setMrkt] = useState([]);

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
    console.log(mrkt, "new data");
=======
  // const [mrkt, setMrtk] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [deadFellaz, setDeadFellaz] = useState([]);
  const [pudgyPenguins, setPudgyPenguins] = useState([]);
  const [theSandbox, setTheSandbox] = useState([]);
  const [shiba, setShiba] = useState([]);
  const [wow, setWow] = useState([]);

  let copyFeatured = [];
  let mrkt = [];
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
      `https://api.opensea.io/api/v1/assets?asset_contract_addresses=${mutantApeApi}&order_direction=desc&offset=0&limit=4`,
      options
    )
      .then((response) => response.json())
      .then((response) => setFeatured(response))
      .catch((err) => console.error(err));
  }, []);

  // ******************  mrkt */
  // ******************  deadFellaz */
  useEffect(() => {
    fetch(
      `https://api.opensea.io/api/v1/assets?asset_contract_addresses=${deadFellazApi}&order_direction=desc&offset=0&limit=10`,
      options
    )
      .then((response) => response.json())
      .then((response) => setDeadFellaz(response))
      .catch((err) => console.error(err));
  }, []);
  // ******************  pudgyPenguins */
  useEffect(() => {
    fetch(
      `https://api.opensea.io/api/v1/assets?asset_contract_addresses=${pudgyPenguinsApi}&order_direction=desc&offset=0&limit=10`,
      options
    )
      .then((response) => response.json())
      .then((response) => setPudgyPenguins(response))
      .catch((err) => console.error(err));
  }, []);
  // ******************  theSandbox */
  useEffect(() => {
    fetch(
      `https://api.opensea.io/api/v1/assets?asset_contract_addresses=${theSandboxApi}&order_direction=desc&offset=0&limit=10`,
      options
    )
      .then((response) => response.json())
      .then((response) => setTheSandbox(response))
      .catch((err) => console.error(err));
  }, []);
  // ******************  shiba */
  useEffect(() => {
    fetch(
      `https://api.opensea.io/api/v1/assets?asset_contract_addresses=${shibaApi}&order_direction=desc&offset=0&limit=10`,
      options
    )
      .then((response) => response.json())
      .then((response) => setShiba(response))
      .catch((err) => console.error(err));
  }, []);
  // ******************  wow */
  useEffect(() => {
    fetch(
      `https://api.opensea.io/api/v1/assets?asset_contract_addresses=${wowApi}&order_direction=desc&offset=0&limit=10`,
      options
    )
      .then((response) => response.json())
      .then((response) => setWow(response))
      .catch((err) => console.error(err));
  }, []);
>>>>>>> 21f8f9887a0ff55390f31b025328a1478ab557cf

  const randomNum = () => {
    return Math.floor(Math.random() * 9) + 1;
  };

<<<<<<< HEAD
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
                    <Route exact path="/signup" element={<Signup />} />
                    <Route exact path="/login" element={<Signin />} />
                    <Route exact path="/upload" element={<UploadForm />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
=======
  featured.assets &&
    featured.assets.map((nft) => {
      let newKey = Object.assign({}, nft);
      newKey.price = `0.${randomNum()} ETH`;
      newKey.category = "crypto punk";
      return copyFeatured.push(newKey);
    });

  deadFellaz.assets &&
    deadFellaz.assets.map((nft) => {
      let newKey = Object.assign({}, nft);
      newKey.price = `0.${randomNum()} ETH`;
      newKey.category = "crypto punk";
      return mrkt.push(newKey);
    });

  pudgyPenguins.assets &&
    pudgyPenguins.assets.map((nft) => {
      let newKey = Object.assign({}, nft);
      newKey.price = `0.${randomNum()} ETH`;
      newKey.category = "crypto punk";
      return mrkt.push(newKey);
    });

  theSandbox.assets &&
    theSandbox.assets.map((nft) => {
      let newKey = Object.assign({}, nft);
      newKey.price = `0.${randomNum()} ETH`;
      newKey.category = "crypto punk";
      return mrkt.push(newKey);
    });

  shiba.assets &&
    shiba.assets.map((nft) => {
      let newKey = Object.assign({}, nft);
      newKey.price = `0.${randomNum()} ETH`;
      newKey.category = "crypto punk";
      return mrkt.push(newKey);
    });

  wow.assets &&
    wow.assets.map((nft) => {
      let newKey = Object.assign({}, nft);
      newKey.price = `0.${randomNum()} ETH`;
      newKey.category = "crypto punk";
      return mrkt.push(newKey);
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
    // console.log(array);
    return array;
  }
  shuffle(mrkt);
  console.log(shuffle(mrkt, "new"));
  // console.log(mrkt, "open sea");
  // ******************* opensea api end **********
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route
            exact
            path="/marketplace"
            element={<Marketplace copyFeatured={copyFeatured} mrkt={mrkt} />}
          />
          {/* <Route exact path="/nft/:id" element={<PopUpCard />} /> */}
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Signin />} />
          <Route exact path="/upload" element={<UploadForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
>>>>>>> 21f8f9887a0ff55390f31b025328a1478ab557cf
}

export default App;
