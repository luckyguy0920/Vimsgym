# VIMS GYM 웹사이트

헬스장 소개용 원페이지 웹사이트입니다.

## 기술 스택

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- 폰트: Pretendard (사이트는 CDN, 공유 이미지는 `assets/fonts`의 OTF · OFL 라이선스)
- 배포: Vercel (https://vimsgym.vercel.app, `main` 푸시 시 자동 배포)

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
│  ├─ FloatingContact.tsx # 모바일 하단 전화/카톡 버튼
│  └─ Photo.tsx           # 사진 (없으면 회색 박스)
├─ lib/images.ts      # public/images 에서 사진 찾기
├─ config/site.ts     # 상호명, 연락처, 주소, 운영시간, 외부 링크
└─ data/content.ts    # 특징, 프로그램, 트레이너, 가격, FAQ
```

## 페이지 섹션

Hero → 소개 → 프로그램 → 트레이너 → 회원 후기 → 가격 → FAQ → 상담 신청 → 오시는 길

회원 후기는 `site.ts`의 `showReviews`로 켜고 끕니다. 섹션 배경은 자동으로 번갈아 칠해집니다.

## 내용 수정 방법

| 바꾸고 싶은 것 | 파일 |
| --- | --- |
| 상호명·전화·주소·운영시간·카톡/인스타 링크, 지도 검색어(`mapQuery`) | `src/config/site.ts` |
| 프로그램·트레이너·회원 후기·가격·FAQ 문구 | `src/data/content.ts` |
| 포인트 컬러 (현재 주황 `#ff6b1a`) | `src/app/globals.css`의 `--accent`, `src/app/opengraph-image.tsx`의 `accent` |
| 사진 | `public/images/`에 정해진 이름으로 올리기 (목록: `public/images/README.md`) |

## 다음 할 일 (TODO)

- [ ] 실제 체육관 정보로 `site.ts`, `content.ts` 채우기
- [ ] 사진 올리기 (기능은 완료, `public/images/README.md`의 파일 이름대로 올리면 자동 표시)
- [x] 지도 (Google 지도 임베드 + 네이버/카카오맵 버튼, `mapQuery`로 위치 지정)
- [x] 공유 미리보기 이미지 (`src/app/opengraph-image.tsx`, site.ts 문구로 자동 생성)
- [x] 배포 주소(https://vimsgym.vercel.app)를 `site.ts`의 `url`에 반영 (커스텀 도메인 연결 시 다시 변경)
- [ ] 회원 후기: 지금은 숨김 상태. `content.ts`의 `reviews`를 실제 후기로 바꾼 뒤 `site.ts`의 `showReviews`를 `true`로
- [x] 상담 신청 폼 (이메일 설정 필요 → 아래 참고)
- [ ] (선택) 네이버 예약 연동

## 상담 신청 폼 설정

신청이 들어오면 [Resend](https://resend.com)로 이메일을 보냅니다. 설정 전에는 폼에
"전화나 카카오톡으로 문의해 주세요" 안내가 나옵니다.

1. resend.com 가입 → **API Keys**에서 키 생성
2. Vercel → 프로젝트 → **Settings → Environment Variables**에 추가 (`.env.example` 참고)
   - `RESEND_API_KEY`: 1에서 만든 키
   - `CONSULTATION_EMAIL`: 신청을 받을 이메일 (Resend 가입 이메일과 같아야 함)
3. **Deployments**에서 최신 배포를 **Redeploy**

다른 이메일 주소로도 받으려면 Resend에서 도메인을 인증하고 `RESEND_FROM`을 설정하세요.
코드는 `src/app/actions/consultation.ts`, 화면은 `src/components/ConsultationForm.tsx`입니다.
