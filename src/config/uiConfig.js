// -------------------------------------------------
// 공통 pg
export const userResultTHeader = [
  { text: "이름", key: "name" },
  { text: "부서", key: "department" },
  { text: "직책", key: "position" },
  { text: "수신메일", key: "emailReceivedAt" },
  { text: "메일열람", key: "emailOpenedAt" },
  { text: "링크클릭", key: "linkClickedAt" },
  { text: "첨부파일 다운", key: "attachmentDownloadedAt" },
  { text: "피싱입력", key: "phishingInputAt" },
  { text: "신고서 제출", key: "reportSubmittedAt" },
  { text: "발송현황", key: "status" },
];

export const deptResultTHeader = [
  { text: "부서", key: "department" },
  { text: "인원수", key: "num" },
  { text: "메일열람", key: "emailOpenedAt" },
  { text: "링크클릭", key: "linkClickedAt" },
  { text: "첨부파일 다운", key: "attachmentDownloadedAt" },
  { text: "피싱입력", key: "phishingInputAt" },
  { text: "신고서 제출", key: "reportSubmittedAt" },
  { text: "교육이수", key: "educationCompletedAt" },
];

export const mailFilterData = [
  { key: "all", label: "전체보기" },
  { key: "click", label: "링크클릭" },
  { key: "ransomware", label: "랜섬웨어" },
  { key: "phishing", label: "피싱" },
];
// -------------------------------------------------
// 대상자 그룹 pg
export const pGTHeader = [
  { text: "No", key: "index" },
  { text: "그룹명", key: "name" },
  { text: "인원", key: "count" },
  { text: "생성일", key: "createdAt" },
  { text: "", key: "actions" },
];
// -------------------------------------------------
// 대상자 그룹 디테일 pg

export const pGDetailTHeader = [
  { text: "No", key: "index" },
  { text: "이름", key: "name" },
  { text: "부서", key: "department" },
  { text: "직위", key: "position" },
  { text: "이메일", key: "email" },
  { text: "연락처", key: "phone" },
];
// -------------------------------------------------
// 대상자 그룹 신규등록 pg

export const pGAddTHeader = [
  { text: "선택", key: "checkBox" },
  { text: "이름", key: "name" },
  { text: "부서", key: "department" },
  { text: "직위", key: "position" },
  { text: "이메일", key: "email" },
  { text: "연락처", key: "phone" },
];
// -------------------------------------------------
// 메일템플릿 신규등록
// 훈련 유형 셀렉 박스
export const TypeOptionData = [
  { value: 1, label: "링크클릭" },
  { value: 2, label: "랜섬웨어" },
  { value: 3, label: "피싱" },
];
export const leftInputFields = [
  {
    key: "templateName",
    label: "메일이름",
    placeholder: "메일 템플릿 이름을 입력해주세요",
  },
  {
    key: "subject",
    label: "메일제목",
    placeholder: "실제 발송할 메일 제목을 입력해주세요",
  },
];

export const rightInputFields = [
  {
    key: "senderName",
    label: "발신자명",
    placeholder: "실제 발송할 발신자명을 입력해주세요",
  },
  {
    key: "senderEmail",
    label: "발신자 이메일",
    placeholder: "실제 발송할 발송자 이메일을 입력해주세요",
  },
];

// -------------------------------------------------
// 훈련실행 pg
export const runPgEducationTHeader = [
  { text: "이름", key: "name" },
  { text: "부서", key: "department" },
  { text: "직책", key: "position" },
  { text: "수신메일", key: "emailReceivedAt" },
  { text: "이수결과", key: "result" },
  { text: "발송현황", key: "status" },
];

export const runDetailTabLabel = [
  { id: "user", label: "훈련" },
  { id: "education", label: "교육" },
];
// // -------------------------------------------------
// 훈련결과 pg
export const resultPgTHeader = [
  { text: "훈련유형", key: "type" },
  { text: "훈련명", key: "name", flex: "left" },
  { text: "기간", key: "period" },
  { text: "참가자", key: "participantCount" },
  { text: "교육유형", key: "educationType" },
  { text: "", key: "actions" },
];

export const resultSettingTabLabel = [
  { id: "user", label: "참여자별" },
  { id: "dept", label: "부서별" },
];

// -------------------------------------------------
// 보고서 pg
export const reportPgTHeader = [
  { text: "훈련유형", key: "type" },
  { text: "훈련명", key: "name", flex: "left" },
  { text: "기간", key: "date" },
  { text: "대상자", key: "group" },
  { text: "대상인원", key: "count" },
  { text: "위반율", key: "violationRate" },
  { text: "", key: "actions" },
];

export const settingPgTab = [
  { text: "이름", key: "name" },
  { text: "부서", key: "department" },
  { text: "직책", key: "position" },
  { text: "수신메일", key: "emailReceivedAt" },
  { text: "메일열람", key: "emailOpenedAt" },
];

// -------------------------------------------------
// 환경설정 pg
export const settingTabLabel = [
  { id: "user", label: "직원관리" },
  { id: "auth", label: "권한관리" },
  { id: "config", label: "기본설정" },
  { id: "tLog", label: "훈련로그" },
  { id: "eLog", label: "오류로그" },
];

// ------------------------------------------------
// setting pg
// 직원관리
export const settingUserTHeader = [
  { text: "이름", key: "name" },
  { text: "부서", key: "department" },
  { text: "직위", key: "position" },
  { text: "이메일", key: "emailReceivedAt" },
  { text: "휴대폰번호", key: "result" },
  { text: "", key: "action" },
];

// 훈련로그
export const settingTLogTHeader = [
  { text: "등록자", key: "name" },
  { text: "훈련명", key: "department" },
  { text: "일시", key: "position" },
  { text: "내용", key: "emailReceivedAt" },
];

// 메일 템플릿 등록
