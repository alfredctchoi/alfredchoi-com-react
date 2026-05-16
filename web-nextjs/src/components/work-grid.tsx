import Image from "next/image";
import Link from "next/link";
import FadeIn from "./fade-in";
import projects from "@/data/projects";

const projectMeta: Record<string, { role: string; year: string }> = {
  "amazon-ia2": {
    role: "Front End Engineer II · Amazon Advertising",
    year: "2021",
  },
  "telus-pom": { role: "Technical Team Lead · TELUS", year: "2019" },
  "telus-usage": { role: "Senior Software Developer · TELUS", year: "2018" },
  "telus-nav": { role: "Senior Software Developer · TELUS", year: "2017" },
};

export default function WorkGrid() {
  return (
    <section
      className="py-24 max-md:py-16 border-t border-rule-strong"
      id="work"
    >
      <div className="shell">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14 md:items-end">
          <div>
            <FadeIn>
              <div className="font-mono text-[11px] tracking-[0.08em] text-accent font-medium">
                01 / Selected work
              </div>
            </FadeIn>
            <FadeIn delay={60}>
              <h2 className="text-[clamp(28px,4vw,44px)] font-medium tracking-[-0.02em] leading-[1.05] mt-2">
                Projects that shipped, performed,
                <br />
                and moved the needle.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={120}>
            <p className="text-muted text-sm max-w-[36ch] md:justify-self-end md:text-right m-0">
              Four representative projects across design systems, performance,
              real-time UI, and internal tooling.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const meta = projectMeta[project.slug];
            return (
              <FadeIn
                key={project.slug}
                delay={i % 2 === 1 ? 80 : 0}
                as="article"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex flex-col border-t border-rule pt-5"
                >
                  <div className="relative aspect-[16/10] bg-[#E8E5DD] overflow-hidden rounded-[2px] mb-5">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-accent mix-blend-multiply opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
                  </div>
                  <div className="grid grid-cols-[auto_1fr_auto] gap-3 items-baseline mb-3.5">
                    <span className="text-muted font-mono text-[11px] tracking-[0.06em] uppercase">
                      {meta?.role}
                    </span>
                    <span />
                    <span className="text-muted font-mono text-[11px]">
                      {meta?.year}
                    </span>
                  </div>
                  <h3 className="text-[clamp(22px,2.4vw,30px)] font-medium tracking-[-0.015em] leading-[1.1] mb-3.5 flex items-baseline justify-between gap-3">
                    {project.title}
                    <span className="inline-block font-mono text-accent text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </h3>
                  <p className="text-[15px] leading-[1.55] max-w-[52ch] m-0">
                    {project.description}
                  </p>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
