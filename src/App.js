import { RouterProvider } from "react-router-dom";
import browserRouter from "./app-routes/Router";

function App() {
  return <RouterProvider router={browserRouter} />;
}

export default App;
