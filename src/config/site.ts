// 체육관 기본 정보. 상호명·연락처·주소 등은 이 파일만 고치면 사이트 전체에 반영됩니다.
export const siteConfig = {
  name: "VIMS GYM",
  tagline: "당신의 꿈을 현실로 만드는 공간",
  description:
    "1:1 PT, 그룹 클래스, 24시간 자유이용까지. 전문 트레이너와 함께 목표를 이루세요.",
  url: "https://vimsgym.vercel.app",
  phone: "010-0000-0000",
  address: "서울특별시 ○○구 ○○로 00, 0층",
  // 지도 검색어. 보통 도로명 주소(층수 제외)나 "건물명 + 상호명"이 가장 정확합니다.
  mapQuery: "서울특별시 ○○구 ○○로 00",
  hours: [
    { label: "평일", value: "06:00 – 24:00" },
    { label: "토요일", value: "08:00 – 22:00" },
    { label: "일요일·공휴일", value: "10:00 – 20:00" },
  ],
  links: {
    kakao: "https://pf.kakao.com/",
    instagram: "https://instagram.com/",
    reservation: "https://booking.naver.com/",
  },
} as const;

export const navItems = [
  { href: "#about", label: "소개" },
  { href: "#programs", label: "프로그램" },
  { href: "#trainers", label: "트레이너" },
  { href: "#reviews", label: "후기" },
  { href: "#pricing", label: "가격" },
  { href: "#faq", label: "FAQ" },
  { href: "#location", label: "오시는 길" },
] as const;
