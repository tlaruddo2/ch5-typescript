import { Route } from "react-router-dom";
import { Shades } from "../../components/pages/shades";
import { Error } from "../../components/pages/error";

export const ShadeRoute = (
  <Route path="shades" element={<Shades />} errorElement={<Error />} />
);
