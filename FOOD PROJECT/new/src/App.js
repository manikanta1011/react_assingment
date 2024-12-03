import { BrowserRouter, Routes,Route } from "react-router-dom";
import Food from "./task/Food";
import Welcome from "./task/Welcome";

import SignUp from "./task/Signup";
import Login from "./task/Login";
import Verify from "./task/Verify";
import Reset from "./task/Reset";
import Register from "./task/Register";
import Home from "./task/Home";
import FoodDetails from "./task/FoodDetails";
import Category from "./task/Category";
import Cart from "./task/Cart";
import Orders from "./task/Orders";
import Profile from "./task/Profile";
import Address from "./task/Address";
import Rating from "./task/Rating";
import Reviews from "./task/Reviews";
import Rest from "./task/Rest";
import Fav from "./task/Fav";

import Logout from "./task/Logout"




function App() {
  return (
    <div>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Food/>}   />
  <Route path="/welcome" element={<Welcome/>}   />
  <Route path="/signup" element={<SignUp/>}   />
  <Route path="/login" element={<Login/>}   />
  <Route path="/reset" element={<Reset/>}   />
  <Route path="/verify" element={<Verify/>}   />
  <Route path="/register" element={<Register/>}   />
  <Route path="/home" element={<Home/>}   />
  <Route path="/fooddetails" element={<FoodDetails/>}   />
  <Route path="/category" element={<Category/>}   />
  <Route path="/cart" element={<Cart/>}   />
  <Route path="/orders" element={<Orders/>}   />
  <Route path="/profile" element={<Profile/>}   />
  <Route path="/address" element={<Address/>}   />
  <Route path="/rating" element={<Rating/>}   />
  <Route path="/reviews" element={<Reviews/>}   />
  <Route path="/rest" element={<Rest/>}   />
  <Route path="/fav" element={<Fav/>}   />
  <Route path="/logout" element={<Logout/>}   />
 
 

 
  
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
