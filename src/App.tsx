import React from "react";
import "./App.css";
import { Listen } from "./components/pages/listen";
import { SideBar } from "./components/navigations/sidebar";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Watch } from "@mui/icons-material";
import { Home } from "./components/pages/home";
import { Lights } from "./components/pages/light";
import { Climate } from "./components/pages/climate";
import { Cameras } from "./components/pages/cameras";
import { Shades } from "./components/pages/shades";
import { Security } from "./components/pages/security";

function App() {
  return (
    // <div className="App">
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="listen" element={<Listen />} />
          <Route path="lights" element={<Lights />} />
          <Route path="climate" element={<Climate />} />
          <Route path="shades" element={<Shades />} />
          <Route path="cameras" element={<Cameras />} />
          <Route path="security" element={<Security />} />
        </Route>
      </Routes>
    </MemoryRouter>
    // </div>
  );
}

export default App;
