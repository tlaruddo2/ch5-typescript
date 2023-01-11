import { Route } from "react-router-dom";
import { Cameras } from "../../components/pages/cameras";
import { Error } from "../../components/pages/error";

export const CameraRoute = (
  <Route path="cameras" element={<Cameras />} errorElement={<Error />} />
);
