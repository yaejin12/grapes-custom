export const reportPgDummyData = [
  {
    id: 1,
    type: ["링크클릭", "랜섬웨어"],
    name: "2024 상반기 보안 훈련",
    date: "2024.03.01 ~ 2024.03.10",
    group: "개발팀",
    count: 120,
    violationRate: "32%",
  },
  {
    id: 2,
    type: ["링크클릭"],
    name: "정보보안 인식 제고 퀴즈",
    date: "2024.04.15 ~ 2024.04.20",
    group: "전사원",
    count: 350,
    violationRate: "18%",
  },
  {
    id: 3,
    type: ["랜섬웨어"],
    cell: "랜섬웨어 대응 훈련",
    name: "하반기 스피어피싱 대응 훈련",
    date: "2024.05.05 ~ 2024.05.12",
    group: "보안팀 외 3팀",
    count: 45,
    violationRate: "44%",
  },
  {
    id: 4,
    type: ["피싱"],
    name: "하반기 스피어피싱 대응 훈련",
    date: "2024.09.01 ~ 2024.09.15",
    group: "마케팅팀",
    count: 80,
    violationRate: "26%",
  },
  {
    id: 5,
    type: ["링크클릭"],
    name: "첨부파일 보안 점검",
    date: "2024.10.01 ~ 2024.10.07",
    group: "디자인팀",
    count: 60,
    violationRate: "15%",
  },
];

//
export const orgTreeData = [
  // 본부
  { id: 1, parent: 0, text: "개발본부", droppable: true },
  { id: 2, parent: 0, text: "기획본부", droppable: true },
  { id: 3, parent: 0, text: "디자인본부", droppable: true },
  { id: 4, parent: 0, text: "경영지원본부", droppable: true },

  // 개발본부 하위 부서
  { id: 10, parent: 1, text: "프론트엔드팀", droppable: true },
  { id: 11, parent: 1, text: "백엔드팀", droppable: true },
  { id: 12, parent: 1, text: "인프라팀", droppable: true },

  // 기획본부 하위 부서
  { id: 20, parent: 2, text: "전략기획팀", droppable: true },
  { id: 21, parent: 2, text: "데이터기획팀", droppable: true },
  { id: 22, parent: 2, text: "신사업팀", droppable: true },

  // 디자인본부 하위 부서
  { id: 30, parent: 3, text: "UX팀", droppable: true },
  { id: 31, parent: 3, text: "BX디자인팀", droppable: true },

  // 경영지원본부 하위 부서
  { id: 40, parent: 4, text: "총무팀", droppable: true },
  { id: 41, parent: 4, text: "회계팀", droppable: true },
  { id: 42, parent: 4, text: "인사팀", droppable: true },

  // 각 부서 하위 파트 또는 업무
  { id: 100, parent: 10, text: "React파트", droppable: true },
  { id: 101, parent: 10, text: "Vue파트", droppable: false },
  { id: 102, parent: 11, text: "Java파트", droppable: false },
  { id: 103, parent: 12, text: "DevOps파트", droppable: false },

  { id: 110, parent: 20, text: "신사업기획", droppable: false },
  { id: 111, parent: 21, text: "데이터분석", droppable: false },
  { id: 112, parent: 22, text: "시장조사", droppable: false },

  { id: 120, parent: 30, text: "웹UX", droppable: false },
  { id: 121, parent: 30, text: "모바일UX", droppable: false },
  { id: 122, parent: 31, text: "CI/BI 디자인", droppable: false },

  { id: 130, parent: 40, text: "자산관리", droppable: false },
  { id: 131, parent: 41, text: "결산업무", droppable: false },
  { id: 132, parent: 42, text: "채용", droppable: true },

  // 담당자 (depth 4)
  { id: 1001, parent: 100, text: "김프론트", droppable: false },
  { id: 1002, parent: 100, text: "이리액트", droppable: false },
  { id: 1003, parent: 132, text: "정인사", droppable: false },
  { id: 1004, parent: 132, text: "박채용", droppable: false },
];

// 직원관리
export const settingUserDummyData = [
  {
    id: 1,
    name: "김예진",
    department: "기획팀",
    position: "대리",
    emailReceivedAt: "yejin.kim@company.com",
    result: "010-1234-5678",
  },
  {
    id: 2,
    name: "박지훈",
    department: "개발팀",
    position: "과장",
    emailReceivedAt: "jihun.park@company.com",
    result: "010-2345-6789",
  },
  {
    id: 3,
    name: "이서연",
    department: "디자인팀",
    position: "사원",
    emailReceivedAt: "seoyeon.lee@company.com",
    result: "010-3456-7890",
  },
  {
    id: 4,
    name: "최민수",
    department: "영업팀",
    position: "부장",
    emailReceivedAt: "minsoo.choi@company.com",
    result: "010-4567-8901",
  },
  {
    id: 5,
    name: "정다은",
    department: "인사팀",
    position: "대리",
    emailReceivedAt: "daeun.jung@company.com",
    result: "010-5678-9012",
  },
  {
    id: 6,
    name: "한지민",
    department: "기획팀",
    position: "팀장",
    emailReceivedAt: "jimin.han@company.com",
    result: "010-6789-0123",
  },
  {
    id: 7,
    name: "서강준",
    department: "개발팀",
    position: "사원",
    emailReceivedAt: "kangjoon.seo@company.com",
    result: "010-7890-1234",
  },
  {
    id: 8,
    name: "오하늘",
    department: "디자인팀",
    position: "과장",
    emailReceivedAt: "haneul.oh@company.com",
    result: "010-8901-2345",
  },
  {
    id: 9,
    name: "윤세아",
    department: "마케팅팀",
    position: "대리",
    emailReceivedAt: "sea.yoon@company.com",
    result: "010-9012-3456",
  },
  {
    id: 10,
    name: "장우진",
    department: "영업팀",
    position: "사원",
    emailReceivedAt: "woojin.jang@company.com",
    result: "010-0123-4567",
  },
];
