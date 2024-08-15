export let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

export const toggleFavorite = (game, target) => {
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
};

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem("favorites")) || [];
};

export const isFavorite = (gameId) => {
  return getFavorites().some((fav) => fav.id === gameId);
};
