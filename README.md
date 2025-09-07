# S8.Dashboard-Administrator
This project aims to practice integrating common plugins and storing their data in a database. It is divided into two main parts:

Front-end: A React application featuring:

    A top navigation menu with links to: Home, Map, FullCalendar, and Charts.
    Components for an interactive map (Leaflet), an editable calendar (FullCalendar), and charts (Chart.js).
Back-end: A REST API built with Node.js and Express, using MongoDB for data persistence. It provides endpoints for:

    Roadmaps (generic CRUD).
    Map locations (latitude and longitude).
    Calendar events.
    Sample data for bar and line charts.

# Technologies 
**Backend**

- Node.js
- Express(5.1.0)
- MongoDB
- CORS
- Dotenv

**Frontend**

- React (19.0.0-rc.1)
- Vite
- TypeScript (~5.8.3)
- React Router DOM (7.7.0)
- TailwindCSS (4.1.11) @tailwindcss/vite
- FullCalendar (@fullcalendar/react, @fullcalendar/daygrid, @fullcalendar/interaction v6.1.17)
- React Leaflet (v5.0.0) + Leaflet (v1.9.4)
- React Chart.js 2 / Chart.js
- ESLint (+ React plugins)

# Prerequisites
Node.js (v18 or higher)
npm (v9 or higher) or yarn
MongoDB (local installation or Atlas cluster)
Code editor (e.g., VSCode)

# Installation & Setup
Clone the repository
```bash
git clone https://github.com/ireneruiz00/S8.Dashboard-Administrator.git
cd S8.Dashboard-Administrator
```
Configure environment variables
Create a .env file inside the dashboard-backend/ folder with the following content:
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/s8_dashboard
```
Note:
If you’re using MongoDB Atlas, replace the MONGO_URI value with your Atlas connection string.

# Install dependencies
Back-end
```bash
cd server
npm install
```
Front-end
```bash
cd ../client
npm install
```
# Run in development mode
Back-end
```bash
cd server
npm run dev
```
The API will be running at http://localhost:5000

Front-end
```bash
cd client
npm run dev
```
The React app will be available at http://localhost:5173