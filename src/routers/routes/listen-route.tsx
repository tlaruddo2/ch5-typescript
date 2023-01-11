import {
  Route,
  createMemoryRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Listen } from "../../components/pages/listen";
import { Error } from "../../components/pages/error";

type Props = {};

export const ListenRoute = (props: Props) => {
  return <Route path="listen" element={<Listen />} errorElement={<Error />} />;
};
