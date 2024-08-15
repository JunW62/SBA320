export let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

favorites = favorites.filter((fav) => fav && fav.id);

export const toggleFavorite = (game, target) => {
  if (!game || !game.id) {
    console.warn("Invalid game object or missing game id:", game);
    return;
  }

  const index = favorites.findIndex((fav) => fav.id === game.id);

  if (index > -1) {
    favorites.splice(index, 1);

    if (target) {
      target.classList.remove("fa-solid", "fa-beat-fade");
      target.classList.add("fa-regular");
      target.style.color = "#ddd";
    }
  } else {
    favorites.push(game);

    if (target) {
      target.classList.remove("fa-regular");
      target.classList.add("fa-solid", "fa-beat-fade");
      target.style.color = "red";
    }
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  console.log("Updated favorites:", favorites);
};

export const getFavorites = () => {
  const favoritesFromStorage =
    JSON.parse(localStorage.getItem("favorites")) || [];
  console.log("Retrieved favorites from storage:", favoritesFromStorage);
  // Ensure no invalid entries
  const validFavorites = favoritesFromStorage.filter((fav) => fav && fav.id);
  localStorage.setItem("favorites", JSON.stringify(validFavorites)); // Clean the storage if needed
  return validFavorites;
};

export const isFavorite = (gameId) => {
  if (!gameId) {
    console.warn("Invalid game id:", gameId);
    return false;
  }

  return getFavorites().some((fav) => fav.id === gameId);
};
