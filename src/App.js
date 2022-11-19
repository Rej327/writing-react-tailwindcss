import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <Analytics />
       <Cards />
      </div>
    </BrowserRouter>
  );
}

export default App;
