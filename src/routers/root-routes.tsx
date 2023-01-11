import {
  Route,
  createMemoryRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "../components/pages/home";
import { SideBar } from "../components/navigations/sidebar";
import {
  HomeRoute,
  ListenRoute,
  LightRoute,
  ClimateRoute,
  CameraRoute,
  ShadeRoute,
  SecurityRoute,
} from "./routes";

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
