import FadeIn from "./fade-in";

const skillGroups = [
  {
    title: "Languages & Core",
    items: ["TypeScript", "JavaScript", "HTML / CSS", "Java"],
  },
  {
    title: "Frameworks & Tooling",
    items: ["React", "Next.js", "Tailwind", "TanStack Query", "GraphQL", "Node.js"],
  },
  {
    title: "Platform & Practice",
    items: ["AWS (CDK, CloudFront, S3, ECS)", "Docker", "Web performance", "Mentoring", "Hiring", "Scrum Master"],
  },
];

export default function Skills() {
  return (
    <section className="py-24 max-md:py-16 border-t border-rule-strong" id="skills">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14 md:items-end">
          <div>
            <FadeIn>
              <div className="font-[family-name:var(--mono)] text-[11px] tracking-[0.08em] text-accent font-medium">
                03 / Skills &amp; toolkit
              </div>
            </FadeIn>
            <FadeIn delay={60}>
              <h2 className="text-[clamp(28px,4vw,44px)] font-medium tracking-[-0.02em] leading-[1.05] mt-2">
                The tools I reach for.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={120}>
            <p className="text-muted text-sm max-w-[36ch] md:justify-self-end md:text-right m-0">
              A focused set — the stack I work in daily.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-rule items-start">
          {skillGroups.map(({ title, items }, i) => (
            <FadeIn
              key={title}
              delay={i * 60}
              className={`py-7 max-md:py-5 ${
                i < skillGroups.length - 1
                  ? "md:border-r md:border-rule max-md:border-b max-md:border-rule"
                  : ""
              } ${
                i === 0 ? "md:pr-8" : i === skillGroups.length - 1 ? "md:pl-8" : "md:px-8"
              }`}
            >
              <h4 className="font-[family-name:var(--mono)] text-[10.5px] tracking-[0.08em] uppercase text-muted font-medium m-0 mb-4">
                {title}
              </h4>
              <ul className="list-none p-0 m-0 grid gap-2.5">
                {items.map((item) => (
                  <li key={item} className="text-[15px] tracking-[-0.005em]">
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
