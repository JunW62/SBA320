import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = ({ onSearch }) => {
  return (
    <div className="menus">
      <div className="container">
        <nav>
          <Link to="/">
            <div className="logo">
              <i className="fa-brands fa-golang"></i>
              <h2>Gam</h2>
            </div>
          </Link>
          <SearchBar onSearch={onSearch} />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/">Games</a>
            </li>
            <li>
              <button type="button" className="get-favorite">
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
