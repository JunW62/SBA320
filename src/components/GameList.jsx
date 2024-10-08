import React from "react";
import GameItem from "./GameItem";

const GameList = ({ labelText, games, onFavoriteToggle }) => {
  return (
    <div className="game-list-container">
      <h2 className="label-fav">{labelText}</h2>
      <div className="games-details">
        {games &&
          games.map((game) => (
            <GameItem
              key={game.id}
              game={game}
              onFavoriteToggle={onFavoriteToggle}
            />
          ))}
      </div>
    </div>
  );
};

export default GameList;
