import {
  Route,
  createMemoryRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "../components/pages/home";
import { Lights } from "../components/pages/light";
import { Climate } from "../components/pages/climate";
import { Cameras } from "../components/pages/cameras";
import { Shades } from "../components/pages/shades";
import { Security } from "../components/pages/security";
import { SideBar } from "../components/navigations/sidebar";
import { ListenRoute } from "./routes/listen-route";
// import { Listen } from "../components/pages/listen";

export const RootRouter = createMemoryRouter(
  createRoutesFromElements(
    <Route path="/" element={<SideBar />}>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      {/* <Route path="listen" element={<Listen />} /> */}
      <ListenRoute />
      <Route path="lights" element={<Lights />} />
      <Route path="climate" element={<Climate />} />
      <Route path="shades" element={<Shades />} />
      <Route path="cameras" element={<Cameras />} />
      <Route path="security" element={<Security />} />
    </Route>
  )
);
