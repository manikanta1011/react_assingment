import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./task/Home";
import Cart from "./task/Cart";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;



