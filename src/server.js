import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 8080;

const clientId = "tw24k2z29pj4lk5dtz7u85t8jqdmfy";
const clientSecret = "u9tqrr4zz82lqqsf3x6tgg0op5817p";
let cachedToken = null;
let tokenExpiry = null;

app.use(cors());
app.use(express.json());

async function getAccessToken() {
  if (cachedToken && tokenExpiry > Date.now()) {
    return cachedToken;
  }

  const authUrl = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`;
  try {
    const response = await axios.post(authUrl);
    cachedToken = response.data.access_token;
    tokenExpiry = Date.now() + 3600 * 1000; // Token expires in 1 hour
    return cachedToken;
  } catch (error) {
    console.error("Error fetching access token:", error.message);
    return null;
  }
}

app.post("/api/games", async (req, res) => {
  const token = await getAccessToken();
  if (!token) {
    return res.status(500).json({ error: "Failed to get access token" });
  }

  const searchTerm = req.body.searchTerm || "";
  let query = searchTerm
    ? `fields name, genres.name, cover.url, release_dates.y, platforms.name; search "${searchTerm}"; limit 40;`
    : "fields name, release_dates.y, genres.name, cover.url; sort aggregated_rating_count desc; where cover.url != null; limit 200;";

  try {
    const response = await axios.post("https://api.igdb.com/v4/games", query, {
      headers: {
        "Content-Type": "text/plain",
        "Client-ID": clientId,
        Authorization: `Bearer ${token}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching games:", error.message);
    res.status(500).json({ error: "Error fetching games" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
