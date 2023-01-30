import "./App.css";
import { RouterProvider } from "react-router-dom";
import { RootRouter } from "./routers/root-routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { DndProvider } from "react-dnd/dist/core";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Board } from "./components/dnd-chess/board";

function App() {
  return (
    // <Provider store={store}>
    //   <DndProvider backend={HTML5Backend}>
    //     <RouterProvider router={RootRouter} />
    //   </DndProvider>
    // </Provider>
    <Board knightPosition={[3, 2]} />
  );
}

export default App;
