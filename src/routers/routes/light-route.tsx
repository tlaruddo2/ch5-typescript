import { Route } from "react-router-dom";
import { Lights } from "../../components/pages/light";
import { Error } from "../../components/pages/error";

export const LightRoute = (
  <Route path="lights" element={<Lights />} errorElement={<Error />} />
);
