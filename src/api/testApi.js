import { getGames } from "./api.js";

const testGetGames = async () => {
  const games = await getGames("mario");
  console.log(games);
};

testGetGames();
