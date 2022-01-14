import "./App.css";
import {  BrowserRouter ,Routes, Route,} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Marketplace from "./pages/Marketplace";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Login from "./components/Login";
import Signin from "./pages/Signin";
<<<<<<< HEAD
=======
import UploadForm from "./components/UploadForm";
>>>>>>> mergenabzbranch

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Signin/>} />
<<<<<<< HEAD
=======
          <Route path="/upload" element={<UploadForm/>} />

>>>>>>> mergenabzbranch
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
