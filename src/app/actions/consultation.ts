"use server";

import { siteConfig } from "@/config/site";

// 상담 신청을 이메일로 보냅니다 (Resend, https://resend.com).
// Vercel 환경 변수:
//   RESEND_API_KEY     Resend API 키 (필수)
//   CONSULTATION_EMAIL 신청을 받을 이메일 (필수)
//   RESEND_FROM        보내는 주소 (선택, 기본값은 Resend 테스트 주소)
//                      테스트 주소는 Resend 가입 이메일로만 보낼 수 있습니다.

export type ConsultationValues = {
  name: string;
  phone: string;
  program: string;
  time: string;
  message: string;
};

export type ConsultationState = {
  status: "idle" | "success" | "error";
  message: string;
  values?: ConsultationValues;
  // 오류 후 폼을 다시 그려 입력값(선택 박스 포함)을 유지하는 데 씁니다.
  attempt?: number;
};

const phonePattern = /^0\d{1,2}-?\d{3,4}-?\d{4}$/;

function field(formData: FormData, key: string, max: number) {
  return String(formData.get(key) ?? "").trim().slice(0, max);
}

export async function submitConsultation(
  prev: ConsultationState,
  formData: FormData,
): Promise<ConsultationState> {
  const attempt = (prev.attempt ?? 0) + 1;
  const values: ConsultationValues = {
    name: field(formData, "name", 30),
    phone: field(formData, "phone", 20),
    program: field(formData, "program", 30),
    time: field(formData, "time", 30),
    message: field(formData, "message", 1000),
  };

  // 봇이 채우는 숨김 필드. 채워져 있으면 조용히 성공 처리합니다.
  if (field(formData, "website", 100)) {
    return { status: "success", message: "상담 신청이 접수되었습니다." };
  }

  if (!values.name) {
    return { status: "error", message: "이름을 입력해 주세요.", values, attempt };
  }
  if (!phonePattern.test(values.phone)) {
    return { status: "error", message: "연락처를 정확히 입력해 주세요. (예: 010-1234-5678)", values, attempt };
  }
  if (formData.get("agree") !== "on") {
    return { status: "error", message: "개인정보 수집·이용에 동의해 주세요.", values, attempt };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONSULTATION_EMAIL;
  if (!apiKey || !to) {
    console.error("상담 신청 이메일 설정이 없습니다: RESEND_API_KEY, CONSULTATION_EMAIL");
    return {
      status: "error",
      message: `지금은 온라인 신청을 받을 수 없어요. 전화(${siteConfig.phone})나 카카오톡으로 문의해 주세요.`,
      values,
      attempt,
    };
  }

  const text = [
    `이름: ${values.name}`,
    `연락처: ${values.phone}`,
    `관심 프로그램: ${values.program || "-"}`,
    `희망 연락 시간: ${values.time || "-"}`,
    "",
    "문의 내용:",
    values.message || "-",
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || `${siteConfig.name} <onboarding@resend.dev>`,
        to: [to],
        subject: `[상담 신청] ${values.name} · ${values.program || "프로그램 미선택"}`,
        text,
      }),
    });
    if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
  } catch (err) {
    console.error("상담 신청 이메일 전송 실패", err);
    return {
      status: "error",
      message: `신청을 보내지 못했어요. 잠시 후 다시 시도하거나 전화(${siteConfig.phone})로 문의해 주세요.`,
      values,
      attempt,
    };
  }

  return {
    status: "success",
    message: "상담 신청이 접수되었습니다. 확인 후 빠르게 연락드릴게요!",
  };
}
