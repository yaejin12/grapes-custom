import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../layout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
]);

export const App = () => <RouterProvider router={router} />;
export default App;
