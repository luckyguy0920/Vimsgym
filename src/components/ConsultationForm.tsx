"use client";

import { useActionState } from "react";
import { submitConsultation, type ConsultationState } from "@/app/actions/consultation";
import { programs } from "@/data/content";

const initialState: ConsultationState = { status: "idle", message: "" };
const times = ["상관없음", "오전 (9–12시)", "오후 (12–18시)", "저녁 (18시 이후)"];

const inputClass =
  "mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-accent focus:outline-none";

export default function ConsultationForm() {
  const [state, formAction, pending] = useActionState(submitConsultation, initialState);
  const v = state.values;

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-accent bg-accent/10 p-8 text-center">
        <p className="text-xl font-bold">{state.message}</p>
      </div>
    );
  }

  return (
    <form key={state.attempt ?? 0} action={formAction} className="grid gap-5 rounded-2xl border border-white/10 bg-black p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          이름 <span className="text-accent">*</span>
          <input name="name" required maxLength={30} defaultValue={v?.name} placeholder="홍길동" className={inputClass} />
        </label>
        <label className="text-sm font-semibold">
          연락처 <span className="text-accent">*</span>
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            required
            maxLength={20}
            pattern="0\d{1,2}-?\d{3,4}-?\d{4}"
            title="예: 010-1234-5678"
            defaultValue={v?.phone}
            placeholder="010-1234-5678"
            className={inputClass}
          />
        </label>
        <label className="text-sm font-semibold">
          관심 프로그램
          <select name="program" defaultValue={v?.program ?? ""} className={inputClass}>
            <option value="">선택해 주세요</option>
            {programs.map((p) => (
              <option key={p.name} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold">
          희망 연락 시간
          <select name="time" defaultValue={v?.time ?? times[0]} className={inputClass}>
            {times.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="text-sm font-semibold">
        문의 내용
        <textarea
          name="message"
          rows={4}
          maxLength={1000}
          defaultValue={v?.message}
          placeholder="운동 목표, 궁금한 점을 자유롭게 적어 주세요."
          className={inputClass}
        />
      </label>

      {/* 봇 차단용 숨김 필드 */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="rounded-xl bg-white/5 p-4 text-xs leading-relaxed text-white/60">
        <p className="font-semibold text-white/80">개인정보 수집·이용 안내</p>
        <p className="mt-1">
          수집 항목: 이름, 연락처, 문의 내용 · 목적: 상담 연락 · 보유 기간: 상담 완료 후 1년 (요청 시 즉시
          파기). 동의를 거부할 수 있으며, 이 경우 온라인 상담 신청이 제한됩니다.
        </p>
        <label className="mt-3 flex items-center gap-2 text-sm font-semibold text-white">
          <input name="agree" type="checkbox" required className="size-4 accent-[var(--accent)]" />
          개인정보 수집·이용에 동의합니다 <span className="text-accent">*</span>
        </label>
      </div>

      {state.status === "error" && (
        <p role="alert" className="text-sm font-semibold text-red-400">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-accent py-4 font-bold text-black disabled:opacity-60"
      >
        {pending ? "보내는 중…" : "상담 신청하기"}
      </button>
    </form>
  );
}
