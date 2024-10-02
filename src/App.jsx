import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./ui/Pages/Home/Home";
import Moon from "./ui/Pages/Destination/Moon";
import Mars from "./ui/Pages/Destination/Mars";
import Europa from "./ui/Pages/Destination/Europa";
import Titan from "./ui/Pages/Destination/Titan";
import Commander from "./ui/Pages/Crew/Commander";
import MissionSpecialist from "./ui/Pages/Crew/MissionSpecialist";
import Pilot from "./ui/Pages/Crew/Pilot";
import FightEngineer from "./ui/Pages/Crew/FightEngineer";
import LaunchVehicle from "./ui/Pages/Technology/LaunchVehicle";
import Spaceport from "./ui/Pages/Technology/Spaceport";
import SpaceCapsule from "./ui/Pages/Technology/SpaceCapsule";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/moon" element={<Moon />} />
          <Route path="/destination/mars" element={<Mars />} />
          <Route path="/destination/europa" element={<Europa />} />
          <Route path="/destination/titan" element={<Titan />} />
          <Route path="/crew/commander" element={<Commander />} />
          <Route
            path="/crew/missionspecialist"
            element={<MissionSpecialist />}
          />
          <Route path="/crew/pilot" element={<Pilot />} />
          <Route path="/crew/fightengineer" element={<FightEngineer />} />
          <Route path="/technology/launchvehicle" element={<LaunchVehicle />} />
          <Route path="/technology/spaceport" element={<Spaceport />} />
          <Route path="/technology/spacecapsule" element={<SpaceCapsule />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
