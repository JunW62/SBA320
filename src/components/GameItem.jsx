import React from "react";
import { toggleFavorite, isFavorite } from "../utils/getfav";

const GameItem = ({ game, onFavoriteToggle }) => {
  const { id, name, release_dates, genres, cover } = game;
  const isFav = isFavorite(id);
  const favoriteClass = isFav ? "fa-solid" : "fa-regular";
  const favoriteColor = isFav ? "red" : "#ddd";
  const imageUrl = cover
    ? cover.url.replace("t_thumb", "t_720p")
    : "./images/placeholder.jpeg";
  const releaseYear =
    release_dates && release_dates[0] ? release_dates[0].y : "No release date";
  const genreNames = genres
    ? genres.map((genre) => genre.name).join(", ")
    : "No genre info";

  const handleFavoriteClick = () => {
    toggleFavorite(game);
    onFavoriteToggle();
  };

  return (
    <div className="games" key={id} data-game-id={id}>
      <button
        type="button"
        className={`favorite ${favoriteClass} fa-heart`}
        style={{ color: favoriteColor }}
        onClick={handleFavoriteClick}
      ></button>
      <img src={imageUrl} alt={`Cover image for ${name}`} />
      <p className="game-title">{name}</p>
      <div className="short-des">
        <p className="year">{releaseYear}</p>
        <p className="genre">{genreNames}</p>
      </div>
    </div>
  );
};

export default GameItem;
