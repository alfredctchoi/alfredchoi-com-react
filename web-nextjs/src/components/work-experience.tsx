import FadeIn from "./fade-in";
import work from "@/data/work";

const yearRanges: Record<
  string,
  { start: string; end: string; location: string }
> = {
  Shoptravel: { start: "2024", end: "Now", location: "Toronto" },
  "Amazon Advertising": { start: "2020", end: "2024", location: "Toronto" },
  "TELUS Communications": { start: "2017", end: "2020", location: "Toronto" },
  Scotiabank: { start: "2016", end: "2017", location: "Toronto" },
  ScribbleLive: { start: "2015", end: "2016", location: "Toronto" },
  itravel2000: { start: "2014", end: "2015", location: "Mississauga" },
};

export default function WorkExperience() {
  return (
    <section
      className="py-24 max-md:py-16 border-t border-rule-strong"
      id="experience"
    >
      <div className="shell">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14 md:items-end">
          <div>
            <FadeIn>
              <div className="font-mono text-[11px] tracking-[0.08em] text-accent font-medium">
                02 / Experience
              </div>
            </FadeIn>
            <FadeIn delay={60}>
              <h2 className="text-[clamp(28px,4vw,44px)] font-medium tracking-[-0.02em] leading-[1.05] mt-2">
                Over a decade of high-impact engineering
                <br />
                across startups and enterprise platforms.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={120}>
            <p className="text-muted text-sm max-w-[36ch] md:justify-self-end md:text-right m-0">
              Roles in reverse-chronological order. Full résumé available on
              request.
            </p>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="border-t border-rule">
            {work.map(({ company, roles }) => {
              const range = yearRanges[company];
              return (
                <div
                  key={company}
                  className="grid grid-cols-1 md:grid-cols-[132px_1fr] gap-8 max-md:gap-1.5 py-7 border-b border-rule"
                >
                  <div className="font-mono text-xs tracking-[0.04em] pt-[3px]">
                    {range?.start}{" "}
                    <span className="text-muted">— {range?.end}</span>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline gap-4">
                      <span className="text-lg font-medium tracking-[-0.015em]">
                        {company}
                      </span>
                      <span className="font-mono text-[11px] text-muted tracking-[0.04em] whitespace-nowrap">
                        {range?.location}
                      </span>
                    </div>
                    {roles.map(
                      (
                        { title, start, end, isCurrent, responsibilities },
                        ri,
                      ) => (
                        <div
                          key={title}
                          className={`mt-3.5 ${ri > 0 ? "pt-[18px] border-t border-rule" : ""}`}
                        >
                          <div className="flex justify-between items-baseline gap-3 mb-2.5">
                            <span className="text-sm font-medium tracking-[-0.005em]">
                              {title}
                            </span>
                            <span className="font-mono text-[11px] text-muted tracking-[0.04em] whitespace-nowrap">
                              {start} – {isCurrent ? "Present" : end}
                            </span>
                          </div>
                          <ul className="list-none p-0 m-0 grid gap-2">
                            {responsibilities.map((item) => (
                              <li
                                key={item}
                                className="text-[13.5px] leading-[1.55] pl-5 relative before:content-['—'] before:absolute before:left-0 before:top-0 before:text-muted before:font-mono before:text-xs"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
