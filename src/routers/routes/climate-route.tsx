import { Route } from "react-router-dom";
import { Climate } from "../../components/pages/climate";
import { Error } from "../../components/pages/error";

export const ClimateRoute = (
  <Route path="climate" element={<Climate />} errorElement={<Error />} />
);
