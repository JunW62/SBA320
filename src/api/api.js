import axios from "axios";

export const getGames = async (searchTerm = "") => {
  try {
    const {
      data: response,
    } = await axios.post("http://localhost:8080/api/games", { searchTerm });
    return response || [];
  } catch (error) {
    console.error("Error fetching games:", error.message);
    return [];
  }
};
