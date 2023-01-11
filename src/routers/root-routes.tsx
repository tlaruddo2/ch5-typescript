import {
  Route,
  createMemoryRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "../components/pages/home";
import { SideBar } from "../components/navigations/sidebar";
import { ListenRoute } from "./routes/listen-route";
import { HomeRoute } from "./routes/home-route";
import { LightRoute } from "./routes/light-route";
import { ClimateRoute } from "./routes/climate-route";
import { CameraRoute } from "./routes/shade-route";
import { ShadeRoute } from "./routes/camera-route";
import { SecurityRoute } from "./routes/security-route";

export const RootRouter = createMemoryRouter(
  createRoutesFromElements(
    <Route path="/" element={<SideBar />}>
      <Route path="/" element={<Home />} />
      {HomeRoute}
      {ListenRoute}
      {LightRoute}
      {ClimateRoute}
      {ShadeRoute}
      {CameraRoute}
      {SecurityRoute}
    </Route>
  )
);
