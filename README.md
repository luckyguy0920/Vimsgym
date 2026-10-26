# VIMS GYM 웹사이트

헬스장 소개용 원페이지 웹사이트입니다.

## 기술 스택

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- 폰트: Pretendard (CDN)
- 배포: Vercel 권장 (GitHub 연결 → 자동 배포)

## 시작하기

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 프로덕션 빌드
npm run lint
```

## 폴더 구조

```
src/
├─ app/
│  ├─ layout.tsx      # 공통 레이아웃, SEO 메타데이터
│  ├─ page.tsx        # 메인 페이지 (섹션 구성)
│  ├─ globals.css     # 브랜드 컬러(--accent), 폰트
│  ├─ sitemap.ts      # /sitemap.xml
│  └─ robots.ts       # /robots.txt
├─ components/
│  ├─ Header.tsx          # 상단 메뉴 (모바일 햄버거)
│  ├─ Footer.tsx
│  ├─ Section.tsx         # 섹션 공통 틀
│  └─ FloatingContact.tsx # 모바일 하단 전화/카톡 버튼
├─ config/site.ts     # 상호명, 연락처, 주소, 운영시간, 외부 링크
└─ data/content.ts    # 특징, 프로그램, 트레이너, 가격, FAQ
```

## 페이지 섹션

Hero → 소개 → 프로그램 → 트레이너 → 가격 → FAQ → 오시는 길

## 내용 수정 방법

| 바꾸고 싶은 것 | 파일 |
| --- | --- |
| 상호명·전화·주소·운영시간·카톡/인스타 링크 | `src/config/site.ts` |
| 프로그램·트레이너·가격·FAQ 문구 | `src/data/content.ts` |
| 포인트 컬러 | `src/app/globals.css`의 `--accent` |
| 사진 | `public/images/`에 넣고 `page.tsx`의 회색 박스(TODO)를 `next/image`로 교체 |

## 다음 할 일 (TODO)

- [ ] 실제 체육관 정보로 `site.ts`, `content.ts` 채우기
- [ ] 사진 추가 (Hero 배경, 프로그램, 트레이너, 시설 갤러리)
- [ ] 네이버/카카오 지도 embed
- [ ] OG 이미지(`src/app/opengraph-image.png`) 추가
- [ ] 도메인 연결 후 `site.ts`의 `url` 변경
- [ ] (선택) 상담 신청 폼, 후기 섹션, 네이버 예약 연동
