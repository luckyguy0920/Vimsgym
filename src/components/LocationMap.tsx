import { siteConfig } from "@/config/site";

// 지도는 site.ts의 address로 자동 생성됩니다. (API 키 불필요)
// 주소 대신 건물명 등으로 검색하고 싶으면 site.ts의 mapQuery를 바꾸세요.
export default function LocationMap() {
  const q = encodeURIComponent(siteConfig.mapQuery);

  return (
    <div>
      <iframe
        title={`${siteConfig.name} 위치 지도`}
        src={`https://maps.google.com/maps?q=${q}&z=16&hl=ko&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="aspect-video w-full rounded-2xl border-0 bg-white/10"
      />
      <div className="mt-3 flex flex-wrap gap-2 text-sm">
        <a
          href={`https://map.naver.com/p/search/${q}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#03c75a] px-4 py-2 font-semibold text-white"
        >
          네이버 지도
        </a>
        <a
          href={`https://map.kakao.com/link/search/${q}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#fee500] px-4 py-2 font-semibold text-black"
        >
          카카오맵
        </a>
      </div>
    </div>
  );
}
