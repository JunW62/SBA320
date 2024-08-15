import axios from "axios";

export const getGames = async (searchTerm = "") => {
  try {
    const {
      data: response,
    } = await axios.post("https://sba320-uy9i.onrender.com/api/games", {
      searchTerm,
    });
    return response || [];
  } catch (error) {
    console.error("Error fetching games:", error.message);
    return [];
  }
};
