import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/config/site";
import { programs } from "@/data/content";

// 카톡·SNS 링크 공유 미리보기 이미지. 문구는 site.ts에서 가져옵니다.
// 사진을 쓰고 싶으면 이 파일을 지우고 같은 위치에 opengraph-image.png(1200×630)를 넣으세요.
export const alt = `${siteConfig.name} | ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// globals.css의 --accent와 같은 값
const accent = "#ff6b1a";

const fontDir = join(process.cwd(), "assets/fonts");
const [extraBold, medium] = await Promise.all([
  readFile(join(fontDir, "Pretendard-ExtraBold.otf")),
  readFile(join(fontDir, "Pretendard-Medium.otf")),
]);

export default function Image() {
  const domain = new URL(siteConfig.url).host;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "radial-gradient(ellipse at top left, #2a2a2a, #000000 70%)",
          color: "#ffffff",
          fontFamily: "Pretendard",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, fontWeight: 800, letterSpacing: 6, color: accent }}>
          PREMIUM FITNESS
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 150, fontWeight: 800, lineHeight: 1, letterSpacing: -4 }}>
            {siteConfig.name}
          </div>
          <div style={{ marginTop: 32, fontSize: 48, fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>
            {siteConfig.tagline}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 500, color: "rgba(255,255,255,0.6)" }}>
            {programs.map((p) => p.name).join(" · ")}
          </div>
          <div
            style={{
              display: "flex",
              padding: "14px 28px",
              borderRadius: 999,
              background: accent,
              color: "#000000",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            {domain}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Pretendard", data: extraBold, weight: 800, style: "normal" },
        { name: "Pretendard", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
