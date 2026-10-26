import Image from "next/image";
import { findImage } from "@/lib/images";

type Props = {
  name: string;
  alt: string;
  sizes: string;
  className?: string;
};

// public/images/<name>.jpg 등이 있으면 사진을, 없으면 회색 박스를 보여줍니다.
// className으로 비율(aspect-*)과 모서리 등을 지정하세요.
export default function Photo({ name, alt, sizes, className = "" }: Props) {
  const src = findImage(name);

  return (
    <div className={`relative overflow-hidden bg-white/10 ${className}`}>
      {src && <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />}
    </div>
  );
}
