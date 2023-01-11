import { Route } from "react-router-dom";
import { Home } from "../../components/pages/home";
import { Error } from "../../components/pages/error";

export const HomeRoute = (
  <Route path="home" element={<Home />} errorElement={<Error />} />
);
