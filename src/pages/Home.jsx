import React, { useState, useEffect } from "react";
import { getGames } from "../api/api";
import GameList from "../components/GameList";
import Pagination from "../components/Pagination";
import Carousel from "../components/Carousel";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [labelText, setLabelText] = useState("What's Popular");
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.searchTerm) {
      handleSearch(location.state.searchTerm);
    } else {
      const fetchGames = async () => {
        const gamesData = await getGames();
        setGames(Array.isArray(gamesData) ? gamesData : []);
        setLabelText("What's Popular");
      };
      fetchGames();
    }
  }, [location.state]);

  useEffect(() => {
    if (location.state && location.state.searchTerm) {
      handleSearch(location.state.searchTerm);
    } else {
      setLabelText("What's Popular");
    }
  }, [location.state]);

  const handleSearch = async (term) => {
    const searchResults = await getGames(term);
    console.log("Search Results in Home:", searchResults);
    setGames(Array.isArray(searchResults) ? searchResults : []);
    setLabelText(`${searchResults.length} Results for "${term}"`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFavoriteToggle = () => {
    setGames([...games]);
  };

  const showGames = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return games.slice(startIndex, endIndex);
  };

  return (
    <div className="container">
      <Carousel />
      <Navbar onSearch={handleSearch} />
      <GameList
        labelText={labelText}
        games={showGames(currentPage)}
        onFavoriteToggle={handleFavoriteToggle}
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
