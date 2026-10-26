import ConsultationForm from "@/components/ConsultationForm";
import LocationMap from "@/components/LocationMap";
import Section from "@/components/Section";
import { siteConfig } from "@/config/site";
import { faqs, features, pricing, programs, reviews, trainers } from "@/data/content";

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
            <a href="#contact" className="rounded-full bg-accent px-6 py-3 font-semibold text-black">
              무료 체험 신청
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

      <Section id="reviews" eyebrow="Reviews" title="회원 후기" className="bg-white/[0.03]">
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name + r.program} className="flex flex-col rounded-2xl border border-white/10 bg-black p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="text-accent" aria-label={`별점 5점 만점에 ${r.rating}점`}>
                  {"★".repeat(r.rating)}
                  <span className="text-white/20">{"★".repeat(5 - r.rating)}</span>
                </p>
                {r.result && (
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                    {r.result}
                  </span>
                )}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-white/80">“{r.body}”</blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-bold">{r.name} 회원</span>
                <span className="ml-2 text-white/50">{r.program}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section id="pricing" eyebrow="Pricing" title="가격 안내">
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

      <Section id="faq" eyebrow="FAQ" title="자주 묻는 질문" className="bg-white/[0.03]">
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

      <Section id="contact" eyebrow="Contact" title="상담 신청">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-lg text-white/80">
              남겨 주신 연락처로 트레이너가 직접 연락드려요.
              <br />
              첫 방문 시 체성분 분석과 무료 체험 PT를 받아보세요.
            </p>
            <a href={`tel:${siteConfig.phone}`} className="mt-6 inline-block text-2xl font-extrabold text-accent">
              {siteConfig.phone}
            </a>
          </div>
          <ConsultationForm />
        </div>
      </Section>

      <Section id="location" eyebrow="Location" title="오시는 길" className="bg-white/[0.03]">
        <div className="grid gap-8 md:grid-cols-2">
          <LocationMap />
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">주소</h3>
              <p className="mt-1 text-white/70">{siteConfig.address}</p>
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
