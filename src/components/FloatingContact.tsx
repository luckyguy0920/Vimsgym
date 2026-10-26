import { siteConfig } from "@/config/site";

// 모바일 하단 고정 버튼: 전화 / 카카오톡 상담
export default function FloatingContact() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 md:hidden">
      <a href={`tel:${siteConfig.phone}`} className="bg-white py-4 text-center font-semibold text-black">
        전화하기
      </a>
      <a
        href={siteConfig.links.kakao}
        target="_blank"
        rel="noreferrer"
        className="bg-accent py-4 text-center font-semibold text-black"
      >
        카톡 상담
      </a>
    </div>
  );
}
