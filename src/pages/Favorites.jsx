import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GameList from "../components/GameList";
import { getFavorites } from "../utils/getfav";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

const Favorites = ({ onSearch }) => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleSearch = (term) => {
    onSearch(term);
    navigate("/", { state: { searchTerm: term } });
  };

  return (
    <div className="container">
      <Navbar onSearch={handleSearch} />
      <Carousel />
      <GameList
        labelText="Your Favorites"
        games={favorites}
        onFavoriteToggle={() => {}}
      />
    </div>
  );
};

export default Favorites;
