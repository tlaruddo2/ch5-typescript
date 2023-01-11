import "./App.css";
import { RouterProvider } from "react-router-dom";
import { RootRouter } from "./routers/root-routes";

function App() {
  return <RouterProvider router={RootRouter} />;
}

export default App;
