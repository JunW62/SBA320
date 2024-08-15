import React, { createContext, useState } from "react";

const CarouselContext = createContext();

const initialSlides = [
  {
    id: 1,
    image: "./images/image1.jpg",
    title: "Hogwarts Legacy",
    description:
      "Experience Hogwarts in the 1800s. Make allies, battle Dark wizards, and ultimately decide the fate of the wizarding world. Your legacy is what you make of it. Live the Unwritten.",
    genres: ["RPG", "Adventure"],
    year: 2023,
  },
  {
    id: 2,
    image: "./images/image2.jpg",
    title: "The Legend of Zelda™: Breath of the Wild",
    description:
      "Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series.",
    genres: ["Adventure", "Action"],
    year: 2017,
  },
  {
    id: 3,
    image: "./images/image3.jpg",
    title: "Splatoon™ 3",
    description:
      "As a squid-like Inkling, quickly cover your surroundings (and opponents) in ink with wild weaponry and swim through your own color to sneak and splat.",
    genres: ["Action", "Multi-player"],
    year: 2022,
  },
  {
    id: 4,
    image: "./images/image4.jpg",
    title: "Minecraft",
    description:
      "Build anything you can imagine, uncover mysteries, and face thrilling foes in an infinite world that's unique in every playthrough.",
    genres: ["Sandbox", "Action"],
    year: 2011,
  },
];

const CarouselProvider = ({ children }) => {
  const [slides] = useState(initialSlides);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <CarouselContext.Provider
      value={{ slides, currentIndex, nextSlide, prevSlide }}
    >
      {children}
    </CarouselContext.Provider>
  );
};

export { CarouselProvider, CarouselContext };
