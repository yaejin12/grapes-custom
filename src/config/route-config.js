import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import TotalStatusPg from "../pages/dashboard/totalStatus/TotalStatusPg";
import LiveStatusPg from "../pages/dashboard/liveStatus/LiveStatusPg";
import ParticipantGroup from "../pages/participant/ParticipantGroup";
import MailTemplatesPg from "../pages/mailTemplates/MailTemplatesPg";
import PhishingTemplatesPg from "../pages/phishingTemplates/PhishingTemplatesPg";
import WarningTemplatesPg from "../pages/warningTemplates/WarningTemplatesPg";
import EducationTemplatesPg from "../pages/educationTemplates/EducationTemplatesPg";
import CreateTrainingPg from "../pages/createTraining/CreateTrainingPg";
import RunTrainingPg from "../pages/runTraining/RunTrainingPg";
import RunTrainingDetailPg from "../pages/runTraining/RunTrainingDetailPg";
import ResultTrainingPg from "./../pages/resultTraining/ResultTrainingPg";

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
      // 피싱 템플릿
      {
        path: "phishing-templates",
        element: <PhishingTemplatesPg />,
        children: [],
      },
      // 경고 템플릿
      {
        path: "warning-templates",
        element: <WarningTemplatesPg />,
        children: [],
      },
      // 교육 템플릿
      {
        path: "education-templates",
        element: <EducationTemplatesPg />,
        children: [],
      },
      // 훈련등록
      {
        path: "create-training",
        element: <CreateTrainingPg />,
        children: [],
      },
      // 훈련실행
      {
        path: "run-training",
        element: <RunTrainingPg />,
        children: [
          // 상세보기
          {
            path: ":id",
            element: <RunTrainingDetailPg />,
          },
        ],
      },
      // 훈련결과
      {
        path: "result-training",
        element: <ResultTrainingPg />,
        children: [],
      },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;
export default App;
