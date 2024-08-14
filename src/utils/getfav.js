// Array to store favorite games
export let favorites = [];

// Function to toggle a game as a favorite or remove it from favorites
export const toggleFavorite = (game, target) => {
  // Find the index of the game in the favorites array
  const index = favorites.findIndex((fav) => fav.id === game.id);

  if (index > -1) {
    // If the game is already in favorites, remove it
    favorites.splice(index, 1);

    // Update the target element's class and style if provided
    if (target) {
      target.classList.remove("fa-solid", "fa-beat-fade");
      target.classList.add("fa-regular");
      target.style.color = "#ddd";
    }
  } else {
    // If the game is not in favorites, add it
    favorites.push(game);

    // Update the target element's class and style if provided
    if (target) {
      target.classList.remove("fa-regular");
      target.classList.add("fa-solid", "fa-beat-fade");
      target.style.color = "red";
    }
  }
};

// Function to get all favorite games
export const getFavorites = () => {
  return favorites;
};

// Function to check if a game is a favorite
export const isFavorite = (gameId) => {
  return favorites.some((fav) => fav.id === gameId);
};
