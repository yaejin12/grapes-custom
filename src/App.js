import { RouterProvider } from "react-router-dom";
import { router } from "./config/route-config";
import "./assets/css/reset.css";
import "./assets/css/common.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
