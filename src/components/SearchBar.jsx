import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term) {
      onSearch(term);
      setTerm("");
      navigate("/favorites");
    }
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <div className="searchbar">
        <input
          type="text"
          id="search"
          placeholder="Search for games..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
