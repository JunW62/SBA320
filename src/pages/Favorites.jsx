import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GameList from "../components/GameList";
import { getFavorites, toggleFavorite } from "../utils/getfav";
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

  const handleFavoriteToggle = (game) => {
    toggleFavorite(game);
    setFavorites(getFavorites());
  };

  return (
    <div className="container">
      <Navbar onSearch={handleSearch} />
      <Carousel />
      <GameList
        labelText="Your Favorites"
        games={favorites}
        onFavoriteToggle={handleFavoriteToggle}
      />
    </div>
  );
};

export default Favorites;
