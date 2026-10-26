// 섹션별 콘텐츠. 문구·가격·트레이너 정보는 여기서 수정합니다.
// image: public/images 폴더에 올릴 사진 파일 이름 (확장자 제외, 예: program-pt.jpg)

export const features = [
  { title: "최신 장비", body: "프리웨이트부터 머신까지 브랜드 장비를 넉넉하게 갖췄습니다." },
  { title: "전문 트레이너", body: "자격을 갖춘 트레이너가 목표에 맞춘 프로그램을 설계합니다." },
  { title: "쾌적한 환경", body: "넓은 공간, 샤워실, 개인 락커, 무료 운동복을 제공합니다." },
];

export const programs = [
  { name: "1:1 PT", image: "program-pt", body: "체성분 분석과 상담을 바탕으로 한 맞춤형 개인 트레이닝." },
  { name: "그룹 PT", image: "program-group", body: "2–4인 소그룹으로 부담은 낮추고 동기는 높이는 수업." },
  { name: "필라테스", image: "program-pilates", body: "코어 강화와 체형 교정을 위한 기구·매트 필라테스." },
  { name: "자유이용", image: "program-free", body: "원하는 시간에 자유롭게 이용하는 헬스 회원권." },
];

export const trainers = [
  { name: "김OO", image: "trainer-1", role: "대표 트레이너", specialty: "바디프로필 · 다이어트" },
  { name: "이OO", image: "trainer-2", role: "트레이너", specialty: "재활 · 체형교정" },
  { name: "박OO", image: "trainer-3", role: "필라테스 강사", specialty: "코어 · 유연성" },
];

// TODO: 실제 회원 후기로 교체하세요. 아래는 레이아웃 확인용 예시입니다.
export const reviews = [
  {
    name: "김OO",
    program: "1:1 PT · 3개월",
    rating: 5,
    result: "체지방 -7kg",
    body: "운동이 처음이라 걱정했는데, 식단부터 자세까지 하나하나 잡아주셔서 꾸준히 다닐 수 있었어요.",
  },
  {
    name: "이OO",
    program: "필라테스 · 6개월",
    rating: 5,
    result: "허리 통증 개선",
    body: "오래 앉아 일해서 허리가 늘 아팠는데, 코어 운동 덕분에 통증이 확실히 줄었어요.",
  },
  {
    name: "박OO",
    program: "헬스 자유이용 · 1년",
    rating: 4,
    result: "",
    body: "장비가 넉넉해서 붐비는 시간에도 기다릴 일이 거의 없어요. 시설이 늘 깨끗한 것도 좋아요.",
  },
];

export const pricing = [
  { name: "헬스 1개월", price: "70,000원", note: "자유이용", highlight: false },
  { name: "헬스 6개월", price: "300,000원", note: "월 50,000원 · 락커/운동복 포함", highlight: true },
  { name: "PT 10회", price: "600,000원", note: "회당 60,000원 · 헬스 이용 포함", highlight: false },
];

export const faqs = [
  { q: "일일권이 있나요?", a: "네, 일일권은 10,000원이며 프런트에서 바로 결제할 수 있습니다." },
  { q: "주차가 가능한가요?", a: "건물 지하주차장 2시간 무료입니다." },
  { q: "회원권 일시정지가 되나요?", a: "6개월 이상 회원권은 최대 30일까지 일시정지가 가능합니다." },
  { q: "PT 체험 수업이 있나요?", a: "첫 방문 시 무료 체험 PT 1회를 제공합니다. 카카오톡으로 예약해 주세요." },
];
