import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-10 text-sm text-white/60 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:justify-between">
        <div>
          <p className="font-bold text-white">{siteConfig.name}</p>
          <p className="mt-1">{siteConfig.address}</p>
          <p>Tel. {siteConfig.phone}</p>
        </div>
        <div className="flex gap-4">
          <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer" className="hover:text-white">
            Instagram
          </a>
          <a href={siteConfig.links.kakao} target="_blank" rel="noreferrer" className="hover:text-white">
            KakaoTalk
          </a>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-6xl">© {siteConfig.name}. All rights reserved.</p>
    </footer>
  );
}
