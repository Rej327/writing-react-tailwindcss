import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import ButtonTop from "./components/ButtonTop";
import Product from "./components/Product";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ButtonTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
