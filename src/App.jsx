import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { CarouselProvider } from "./context/CarouselContext";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <CarouselProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </CarouselProvider>
  );
};

export default App;
