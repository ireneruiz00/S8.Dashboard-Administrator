import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Map from "./components/Map";
import Calendar from "./components/Calendar";
import Charts from "./components/Charts";
import RoadmapTable from "./components/RoadmapTable";


function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/roadmap-table" element={<RoadmapTable/>}></Route>
        <Route path="/map" element={<Map/>}></Route>
        <Route path="/calendar" element={<Calendar/>}></Route>
        <Route path="/charts" element={<Charts/>}></Route>
    </Routes>
  )
}

export default AppRoutes