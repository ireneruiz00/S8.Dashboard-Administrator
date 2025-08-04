import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RoadmapPage from "./pages/RoadmapPage";
import MapPage from "./pages/MapPage";
import CalendarPage from "./pages/CalendarPage";
import ChartsPage from "./pages/ChartsPage";


function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/roadmap-table" element={<RoadmapPage/>}></Route>
        <Route path="/map" element={<MapPage/>}></Route>
        <Route path="/calendar" element={<CalendarPage/>}></Route>
        <Route path="/charts" element={<ChartsPage/>}></Route>
    </Routes>
  )
}

export default AppRoutes