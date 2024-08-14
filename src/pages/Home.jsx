import React, { useState, useEffect } from "react";
import { getGames } from "../api/api";
import { toggleFavorite } from "../utils/getfav";
import GameList from "../components/GameList";
import Pagination from "../components/Pagination";
import Carousel from "../components/Carousel";
import { useNavigate } from "react-router-dom";

const Home = ({ setSearchResults }) => {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [labelText, setLabelText] = useState("What's Popular");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGames = async () => {
      const gamesData = await getGames();
      setGames(gamesData || []);
    };

    fetchGames();
  }, []);

  const handleSearch = async (term) => {
    const searchResults = await getGames(term);
    setGames(searchResults);
    setSearchResults(searchResults);
    setLabelText(`${searchResults.length} Results for "${term}"`);
    navigate("/favorites");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const showGames = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return games.slice(startIndex, endIndex);
  };

  return (
    <div className="container">
      <Carousel />
      <GameList
        labelText={labelText}
        games={showGames(currentPage)}
        onFavoriteToggle={toggleFavorite}
      />
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={games.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
