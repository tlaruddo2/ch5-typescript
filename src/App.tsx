import "./App.css";
import { RouterProvider } from "react-router-dom";
import { RootRouter } from "./routers/root-routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={RootRouter} />
    </Provider>
  );
}

export default App;
