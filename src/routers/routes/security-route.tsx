import { Route } from "react-router-dom";
import { Security } from "../../components/pages/security";
import { Error } from "../../components/pages/error";

export const SecurityRoute = (
  <Route path="security" element={<Security />} errorElement={<Error />} />
);
