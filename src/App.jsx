import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import { getGames } from "./api/api";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (term) => {
    const results = await getGames(term);
    setSearchResults(results);
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route
          path="/"
          element={<Home setSearchResults={setSearchResults} />}
        />
        <Route
          path="/favorites"
          element={<Favorites searchResults={searchResults} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
