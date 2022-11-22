import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ButtonTop from "./components/ButtonTop";
import PostList from "./components/PostList";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ButtonTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<PostList />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
