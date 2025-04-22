import { RouterProvider } from "react-router-dom";
import { router } from "./config/route-config";
import "./assets/css/reset.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
