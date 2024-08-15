import React, { useContext } from "react";
import { CarouselContext } from "../context/CarouselContext";

const Carousel = () => {
  const { slides, currentIndex, nextSlide, prevSlide } = useContext(
    CarouselContext
  );

  return (
    <header>
      <div className="slider-container">
        <div className="carousel-wrapper">
          <button className="arrow left-arrow" onClick={prevSlide}>
            <i className="fas fa-arrow-left"></i>
          </button>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentIndex ? "active" : ""}`}
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div
                className={`slider-content ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                <h2 className="games-title">{slide.title}</h2>
                <p className="games-short-details">{slide.description}</p>
                <div className="g-details">
                  {slide.genres.map((genre) => (
                    <p key={genre} className="genre">
                      {genre}
                    </p>
                  ))}
                  <p className="year">{slide.year}</p>
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
    </header>
  );
};

export default Carousel;
