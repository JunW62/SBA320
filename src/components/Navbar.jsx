import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSearch = (term) => {
    navigate("/", { state: { searchTerm: term } });
  };

  const handleFavoritesClick = () => {
    navigate("/favorites");
  };
  const handleHomeClick = () => {
    navigate("/", { state: { searchTerm: "" } });
    onSearch("");
  };
  return (
    <div className="menus">
      <div className="container">
        <nav>
          <Link href="/" onClick={handleHomeClick}>
            <div className="logo">
              <i className="fa-brands fa-golang"></i>
              <h2>Gam</h2>
            </div>
          </Link>
          <SearchBar onSearch={handleSearch} />
          <ul>
            <li onClick={handleHomeClick}>
              <a href="/">Home</a>
            </li>
            <li>
              <button
                type="button"
                className="get-favorite"
                onClick={handleFavoritesClick}
              >
                <i className="fa-regular fa-heart"></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
