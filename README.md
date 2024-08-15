# GOGam - Game Search and Favorites App

## Project Overview

GOGam is a React-based web application that allows users to search for video games, view detailed information, and manage their favorite games. The application integrates with the IGDB API to fetch game data and uses a Node.js Express server to handle API requests and manage CORS.

## Render Link : https://sba320-movieapp.onrender.com

## Features

- **Search Functionality**: Users can search for video games using the IGDB API.
- **Game Details**: View detailed information about games including cover images, genres, and release dates.
- **Favorites Management**: Add or remove games from a favorites list.
- **Pagination**: Navigate through search results with pagination.
- **Sticky Navigation Bar**: Includes search functionality and links to home and favorites pages.
- **Carousel**: Displays popular games on the homepage.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: A collection of navigational components that compose declaratively with your application.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **IGDB API**: An API to access a vast database of video game data.
- **Font Awesome**: A library for scalable vector icons that can be customized with CSS.
- **CSS**: Used for styling the application.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- An IGDB API client ID and client secret.

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/JunW62/SBA320.git
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the React development server:
   ```
   npm run dev
   ```

## Usage

- **Search Games**: Use the search bar in the navigation to search for games.
- **Manage Favorites**: Click on the heart icon to add or remove a game from your favorites.
- **View Favorites**: Navigate to the "Favorites" page to view your favorite games.
- **Popular Games**: The homepage carousel displays popular games.

## Components

- **Navbar**: The navigation bar includes the logo, search bar, and links to the home and favorites pages.
- **SearchBar**: Handles the input and submission of search terms.
- **Carousel**: Displays a rotating carousel of popular games on the homepage.
- **GameList**: Lists games based on the current search or favorite games.
- **GameItem**: Displays individual game details including the cover image, title, release year, and genres.
- **Pagination**: Handles pagination for the game list.

## API

### `/api/games`

Handles fetching game data from the IGDB API. Supports searching for games by a search term or fetching popular games.
