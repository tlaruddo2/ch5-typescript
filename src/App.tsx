import React from "react";
import "./App.css";
import { First } from "./components/first";
import { Header } from "./components/header";
import { Listen } from "./components/pages/listen";
import { SideBar } from "./components/sidebar";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Watch } from "@mui/icons-material";

function App() {
  return (
    // <div className="App">
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route path="" element={<Listen />} />
          <Route path="watch" element={<Watch />} />
          {/* <SideBar />
          <First title={"hihi"} /> */}
        </Route>
      </Routes>
    </MemoryRouter>
    // </div>
  );
}

export default App;
