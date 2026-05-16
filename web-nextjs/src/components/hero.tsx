import FadeIn from "./fade-in";

const metaCells = [
  { label: "Role", value: <>Technical Lead specializing in <span className="text-accent">frontend</span></> },
  { label: "Based", value: "Toronto, ON — open to remote" },
  { label: "Focus", value: "Performance, scalability, business impact" },
  { label: "Currently", value: "Principal Front End Engineer at Shoptravel, building a new Canadian travel platform" },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1440px] px-8 pt-24 pb-16 max-md:pt-14 max-md:pb-10">
      <div className="mb-14">
        <FadeIn>
          <span className="font-[family-name:var(--mono)] text-[11px] tracking-[0.08em] uppercase font-medium text-fg">
            Alfred Choi / Portfolio / 2015 — 2026
          </span>
        </FadeIn>
      </div>

      <FadeIn delay={120}>
        <h1 className="font-[family-name:var(--sans)] font-medium text-[clamp(44px,8.2vw,128px)] leading-[0.95] tracking-[-0.035em] mb-14 max-md:mb-10" style={{ textWrap: "balance" }}>
          Building web applications<br />
          that are <span className="text-accent italic font-[family-name:var(--serif)] font-normal tracking-[-0.02em]">fast, scalable,</span><br />
          <span className="text-muted">and solve real problems.</span>
        </h1>
      </FadeIn>

      <div className="border-t border-rule-strong pt-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {metaCells.map(({ label, value }, i) => (
            <FadeIn key={label} delay={160 + i * 60}>
              <span className="block mb-2.5 font-[family-name:var(--mono)] text-[11px] tracking-[0.08em] uppercase font-medium text-muted">
                {label}
              </span>
              <span className="text-[15px] leading-[1.4]">{value}</span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
