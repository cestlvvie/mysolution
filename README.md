# Tengri News Clone

This application performs the functionality of TengriNews with an accent of delivering content related to Kazakhstan.
## Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (preferably the latest LTS version)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-name>
2. **Install dependencies for the backend:**
   Navigate to the backend directory and run:
   ```bash
   npm install
3. **Start the backend server:**
   In the same backend directory, run:
   ```bash
   npm run dev
   ```
   This will start the server on http://localhost:8000.
4. **Install dependencies for the frontend:**
   Open a new terminal, navigate to the frontend directory, and run:
   ```bash
   npm install
5. **Start the frontend server:**
   In the frontend directory, run:
   ```bash
   npm run dev
   ```
   This will start the React app.
   
### Dependencies
**Frontend:**
- react
- react-router-dom
- @mui/material
- axios

**Backend:**
- express
- body-parser
- cors
- axios
- cheerio
- node:crypto

### Design and Development

Application's front end is developed with TypeScript and React, using the Material-UI library for responsive layouts and components. Routing is handled via "react-router-dom". 
   
For the backend, Express.js was chosen along with a news scraper implemented with Cheerio to parse HTML from "https://tengrinews.kz". node:crypto is used to generate unique identifiers for each news item.

### Unique Approaches

A custom scraper was developed to fetch and standardize news data from various sources.

### Known Issues

- The scraper might not correctly parse data if the source website's layout changes.
- There are no search or filter functionalities.
- The backend does not cache responses, which could lead to increased load times and redundant server requests.

### Deployment
I deployed the backend using Render, and frontend using Versel.     
The link is https://mysolutionb-81o6jn5yi-cestlvvies-projects.vercel.app

#### Personal reflections
To be honest, this is not my proudest project. Before this, I haven't really delved into web-development, so learning most of the approaches took some time. Also, at first I added search and filter functionalities and only later added web-scraping. But for some reasons, search and filter didn't work with web-scraping, so I decided to delete them.    

I am not sure, if this should be mentioned, but before sumbitting my application, I thought it will be reviewed at least in two days (my mistake). So, I wasn't really ready when I got the task an hour later, because I already had 2 deadlines and scholarship application until 16th of April. Which is why I couldn't fully commit to this app before sumbitting those deadlines.    

Anyways, this was a great learning opportunity and I present you the fruits of two day coding from my end :) 
