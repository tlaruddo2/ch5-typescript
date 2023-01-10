import React from "react";
import "./App.css";
import { First } from "./components/first";
import { Header } from "./components/header";
import { Listen } from "./components/pages/listen";
import { SideBar } from "./components/sidebar";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Watch } from "@mui/icons-material";
import { Home } from "./components/pages/home";
import { Light } from "./components/pages/light";
import { Climate } from "./components/pages/climate";

function App() {
  return (
    // <div className="App">
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route path="" element={<Home />} />
          <Route path="watch" element={<Watch />} />
          <Route path="listen" element={<Listen />} />
          <Route path="lights" element={<Light />} />
          <Route path="climate" element={<Climate />} />
        </Route>
      </Routes>
    </MemoryRouter>
    // </div>
  );
}

export default App;
