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
import ResultDetailPg from "../pages/resultTraining/ResultDetailPg";
import ReportPg from "../pages/report/ReportPg";
import SettingPg from "../pages/setting/SettingPg";
import UserTabPg from "../pages/setting/components/UserTabPg";
import AuthTabPg from "../pages/setting/components/AuthTabPg";
import TrainingLogPg from "../pages/setting/components/TrainingLogPg";
import ErrorLogPg from "../pages/setting/components/ErrorLogPg";
import DefaultSetting from "../pages/setting/components/DefaultSetting";
import ParticipantGroupCreate from "../pages/participant/components/participantGroupCreate/ParticipantGroupCreate";
import ParticipantGroupDetail from "../pages/participant/components/ParticipantGroupDetail";
import ParticipantGroupRandom from "../pages/participant/components/participantGroupRandom/ParticipantGroupRandom";
import CreateMailTemplate from "../pages/mailTemplates/components/CreateMailTemplate";
import CreatePhishingTemplate from "../pages/phishingTemplates/components/CreatePhishingTemplate";
import CreateWarningTemplate from "../pages/warningTemplates/components/CreateWarningTemplate";

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
            element: <ParticipantGroupDetail />,
          },
          {
            path: "add",
            element: <ParticipantGroupCreate />,
          },
          {
            path: "random",
            element: <ParticipantGroupRandom />,
          },
        ],
      },
      // 메일 템플릿
      {
        path: "mail-templates",
        element: <MailTemplatesPg />,
        children: [
          // 신규등록
          {
            path: "create",
            element: <CreateMailTemplate />,
          },
        ],
      },
      // 피싱 템플릿
      {
        path: "phishing-templates",
        element: <PhishingTemplatesPg />,
        children: [
          // 신규등록
          {
            path: "create",
            element: <CreatePhishingTemplate />,
          },
        ],
      },
      // 경고 템플릿
      {
        path: "warning-templates",
        element: <WarningTemplatesPg />,
        children: [
          // 신규등록
          {
            path: "create",
            element: <CreateWarningTemplate />,
          },
        ],
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
        children: [
          // 상세보기
          {
            path: ":id",
            element: <ResultDetailPg />,
          },
        ],
      },
      // 보고서
      {
        path: "report",
        element: <ReportPg />,
        children: [],
      },

      // 환경설정
      {
        path: "setting",
        element: <SettingPg />,
        children: [
          { path: "user", element: <UserTabPg /> },
          { path: "auth", element: <AuthTabPg /> },
          { path: "config", element: <DefaultSetting /> },
          { path: "tLog", element: <TrainingLogPg /> },
          { path: "eLog", element: <ErrorLogPg /> },
        ],
      },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;
export default App;
