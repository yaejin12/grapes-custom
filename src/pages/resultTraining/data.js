export const dummyTrainingData = [
  {
    id: 1,
    type: ["이메일 훈련"],
    name: "2024년 상반기 보안교육",
    period: "2024.05.01 ~ 2024.05.10",
    participantCount: 120,
    educationType: "영상",
  },
  {
    id: 11,
    type: ["피싱"],
    name: null,
    period: "2024.06.01 ~ 2024.06.07",
    participantCount: 85,
    educationType: "실습",
  },
  {
    id: 111,
    type: ["이메일", "피싱"],
    name: "스피어피싱 대응 훈련",
    period: "2024.07.10 ~ 2024.07.20",
    participantCount: 150,
    educationType: "문서",
  },
  {
    id: 12,
    type: ["보안 퀴즈"],
    name: "정보보안 퀴즈대회",
    period: "2024.08.01 ~ 2024.08.05",
    participantCount: 200,
    educationType: "퀴즈",
  },
  {
    id: 13,
    type: ["이메일 훈련"],
    name: "2024 하반기 훈련",
    period: "2024.09.01 ~ 2024.09.15",
    participantCount: 95,
    educationType: "영상",
  },
];

export const tDetailData = [
  { text: "훈련유형", key: "type" },
  { text: "훈련명", key: "trainingName" },
  { text: "기간", key: "period" },
  { text: "참가자", key: "participantCount" },
  { text: "교육유형", key: "educationType" },
  { text: "action", key: "" },
];
