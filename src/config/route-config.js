import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import TotalStatusPg from "../pages/dashboard/totalStatus/TotalStatusPg";
import LiveStatusPg from "../pages/dashboard/liveStatus/LiveStatusPg";
import ParticipantGroup from "../pages/participant/ParticipantGroup";
import MailTemplatesPg from "../pages/mailTemplates/MailTemplatesPg";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // 실시간 현황
      { index: true, element: <LiveStatusPg /> },
      // 종합현황
      { path: "status", element: <TotalStatusPg /> },
      // 대상자 그룹
      {
        path: "participant-group",
        element: <ParticipantGroup />,
        children: [
          {
            path: ":id",
            element: <ParticipantGroup />,
          },
        ],
      },
      // 메일 템플릿
      {
        path: "mail-templates",
        element: <MailTemplatesPg />,
        children: [],
      },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;
export default App;
