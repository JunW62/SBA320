import React, { useState, useEffect } from "react";
import { getGames } from "../api/api";

const Carousel = () => {
  const [games, setGames] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesData = await getGames();
        setGames(gamesData || []);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchGames();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + games.length) % games.length
    );
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="slider-container">
      <div className="carousel-wrapper">
        <button className="arrow left-arrow" onClick={prevSlide}>
          <i className="fas fa-arrow-left"></i>
        </button>
        {games.length > 0 &&
          games.map((game, index) => (
            <div
              key={game.id}
              className={`slide ${index === currentIndex ? "active" : ""}`}
              style={{
                backgroundImage: `url(${
                  game.cover
                    ? game.cover.url.replace("t_thumb", "t_720p")
                    : "./images/placeholder.jpeg"
                })`,
              }}
            >
              <div
                className={`slider-content ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                <h2 className="games-title">{game.name}</h2>
                <p className="games-short-details">
                  {game.summary || "No description available."}
                </p>
                <div className="g-details">
                  <p className="genre">
                    {game.genres && game.genres.length > 0
                      ? game.genres.map((genre) => genre.name).join(", ")
                      : "No genre info"}
                  </p>
                  <p className="year">
                    {game.release_dates && game.release_dates.length > 0
                      ? game.release_dates[0].y
                      : "No release date"}
                  </p>
                </div>
                <button className="play-now">
                  <i className="fa-solid fa-gamepad"></i>Play Now
                </button>
              </div>
            </div>
          ))}
        <button className="arrow right-arrow" onClick={nextSlide}>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
