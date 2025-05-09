import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import TotalStatusPg from "../pages/dashboard/totalStatus/TotalStatusPg";
import LiveStatusPg from "../pages/dashboard/liveStatus/LiveStatusPg";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // 실시간 현황
      { index: true, element: <LiveStatusPg /> },
      // 종합현황
      { path: "status", element: <TotalStatusPg /> },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;
export default App;
