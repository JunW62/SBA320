import React, { useState, useEffect } from "react";
import { getFavorites, toggleFavorite } from "../utils/getfav";
import GameList from "../components/GameList";

const Favorites = ({ searchResults }) => {
  const [favoriteGames, setFavoriteGames] = useState([]);

  useEffect(() => {
    if (searchResults.length > 0) {
      setFavoriteGames(searchResults);
    } else {
      setFavoriteGames(getFavorites());
    }
  }, [searchResults]);

  const handleFavoriteToggle = (game) => {
    toggleFavorite(game);
    setFavoriteGames(getFavorites());
  };

  return (
    <div className="container">
      <h1>Your Favorites</h1>
      <GameList games={favoriteGames} onFavoriteToggle={handleFavoriteToggle} />
    </div>
  );
};

export default Favorites;
