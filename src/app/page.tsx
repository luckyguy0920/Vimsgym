import Section from "@/components/Section";
import { siteConfig } from "@/config/site";
import { faqs, features, pricing, programs, trainers } from "@/data/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        id="top"
        className="relative flex min-h-[90vh] items-center bg-[radial-gradient(ellipse_at_top,_#2a2a2a,_#000)] px-4 pt-16 sm:px-6"
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-semibold tracking-widest text-accent">PREMIUM FITNESS</p>
          <h1 className="mt-4 text-5xl leading-tight font-extrabold sm:text-7xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">{siteConfig.tagline}</p>
          <p className="mt-2 max-w-xl text-white/60">{siteConfig.description}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={siteConfig.links.reservation}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent px-6 py-3 font-semibold text-black"
            >
              무료 체험 예약
            </a>
            <a href="#pricing" className="rounded-full border border-white/30 px-6 py-3 font-semibold">
              가격 보기
            </a>
          </div>
        </div>
      </section>

      <Section id="about" eyebrow="About" title="왜 우리 체육관인가요?">
        <div className="grid gap-6 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold">{f.title}</h3>
              <p className="mt-3 text-white/70">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="programs" eyebrow="Programs" title="프로그램" className="bg-white/[0.03]">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/10 p-6">
              {/* TODO: 실제 사진으로 교체 (public/images/...) */}
              <div className="aspect-[4/3] rounded-xl bg-white/10" />
              <h3 className="mt-4 text-lg font-bold">{p.name}</h3>
              <p className="mt-2 text-sm text-white/70">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="trainers" eyebrow="Trainers" title="트레이너 소개">
        <div className="grid gap-6 sm:grid-cols-3">
          {trainers.map((t) => (
            <div key={t.name} className="overflow-hidden rounded-2xl border border-white/10">
              <div className="aspect-[3/4] bg-white/10" />
              <div className="p-5">
                <p className="text-sm text-accent">{t.role}</p>
                <h3 className="mt-1 text-xl font-bold">{t.name}</h3>
                <p className="mt-1 text-sm text-white/70">{t.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="pricing" eyebrow="Pricing" title="가격 안내" className="bg-white/[0.03]">
        <div className="grid gap-6 sm:grid-cols-3">
          {pricing.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-6 ${
                p.highlight ? "border-accent bg-accent/10" : "border-white/10"
              }`}
            >
              {p.highlight && (
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-black">BEST</span>
              )}
              <h3 className="mt-3 text-lg font-bold">{p.name}</h3>
              <p className="mt-2 text-3xl font-extrabold">{p.price}</p>
              <p className="mt-2 text-sm text-white/70">{p.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-white/50">* 가격은 프로모션에 따라 변동될 수 있습니다.</p>
      </Section>

      <Section id="faq" eyebrow="FAQ" title="자주 묻는 질문">
        <div className="divide-y divide-white/10 rounded-2xl border border-white/10">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="cursor-pointer list-none font-semibold">
                Q. {f.q}
              </summary>
              <p className="mt-3 text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section id="location" eyebrow="Location" title="오시는 길" className="bg-white/[0.03]">
        <div className="grid gap-8 md:grid-cols-2">
          {/* TODO: 네이버/카카오 지도 embed 로 교체 */}
          <div className="flex aspect-video items-center justify-center rounded-2xl bg-white/10 text-white/50">
            지도 영역
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">주소</h3>
              <p className="mt-1 text-white/70">{siteConfig.address}</p>
              <a
                href={siteConfig.links.naverMap}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm text-accent underline"
              >
                네이버 지도에서 보기
              </a>
            </div>
            <div>
              <h3 className="font-bold">운영 시간</h3>
              <ul className="mt-1 space-y-1 text-white/70">
                {siteConfig.hours.map((h) => (
                  <li key={h.label}>
                    {h.label} <span className="ml-2">{h.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold">문의</h3>
              <a href={`tel:${siteConfig.phone}`} className="mt-1 block text-white/70">
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
