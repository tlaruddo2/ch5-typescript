import { Route } from "react-router-dom";
import { Listen } from "../../components/pages/listen";
import { Error } from "../../components/pages/error";

export const ListenRoute = (
  <Route path="listen" element={<Listen />} errorElement={<Error />} />
);
