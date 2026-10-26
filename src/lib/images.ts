import { readdirSync } from "node:fs";
import { join } from "node:path";

// public/images 폴더에 올린 사진을 이름으로 찾습니다. (빌드할 때 확인)
// 예: findImage("hero") → public/images/hero.jpg 가 있으면 "/images/hero.jpg", 없으면 null
const imageDir = join(process.cwd(), "public/images");
const extPattern = /\.(jpe?g|png|webp)$/i;

function listImages() {
  try {
    return readdirSync(imageDir).filter((f) => extPattern.test(f));
  } catch {
    return [];
  }
}

export function findImage(name: string): string | null {
  const file = listImages().find((f) => f.replace(extPattern, "").toLowerCase() === name.toLowerCase());
  return file ? `/images/${file}` : null;
}

// gallery-1.jpg, gallery-2.jpg … 를 번호 순서대로 돌려줍니다.
export function findGalleryImages(): string[] {
  return listImages()
    .map((f) => ({ f, n: /^gallery-(\d+)\./i.exec(f)?.[1] }))
    .filter((x): x is { f: string; n: string } => x.n !== undefined)
    .sort((a, b) => Number(a.n) - Number(b.n))
    .map((x) => `/images/${x.f}`);
}
