import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Marketplace from "./pages/Marketplace";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
// import Login from "./components/Login";
import Signin from "./pages/Signin";
import UploadForm from "./components/UploadForm";
import PopUpCard from "./components/PopUpCard";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route
                        exact
                        path="/marketplace"
                        element={<Marketplace />}
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
}

export default App;
