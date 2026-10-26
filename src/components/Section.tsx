import type { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, eyebrow, title, children, className = "" }: Props) {
  return (
    <section id={id} className={`scroll-mt-20 px-4 py-20 sm:px-6 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
