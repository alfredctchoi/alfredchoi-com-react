import FadeIn from "./fade-in";

const links = [
  { key: "GitHub", value: "github.com/alfredctchoi", href: "https://www.github.com/alfredctchoi" },
  { key: "LinkedIn", value: "linkedin.com/in/alfredctchoi", href: "https://www.linkedin.com/in/alfredctchoi/" },
];

export default function Contact() {
  return (
    <section className="py-24 max-md:py-16 border-t border-rule-strong" id="contact">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14 md:items-end">
          <div>
            <FadeIn>
              <div className="font-[family-name:var(--mono)] text-[11px] tracking-[0.08em] text-accent font-medium">
                04 / Contact
              </div>
            </FadeIn>
            <FadeIn delay={60}>
              <h2 className="text-[clamp(28px,4vw,44px)] font-medium tracking-[-0.02em] leading-[1.05] mt-2">
                Let&apos;s talk.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={120}>
            <p className="text-muted text-sm max-w-[36ch] md:justify-self-end md:text-right m-0">
              Open to principal / staff frontend roles focused on performance, scalability, and shipping products that deliver real business value.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-16 max-md:gap-10 items-start">
          <div>
            <FadeIn>
              <p className="text-[clamp(28px,4vw,56px)] font-medium tracking-[-0.025em] leading-[1.02] m-0 mb-8" style={{ textWrap: "balance" }}>
                Got a web application that needs to be<br />
                <span className="text-accent font-[family-name:var(--serif)] italic font-normal">faster, more scalable,</span> or<br />
                <span className="text-accent font-[family-name:var(--serif)] italic font-normal">built right from the ground up</span>?
              </p>
            </FadeIn>
            <FadeIn delay={80}>
              <a
                href="mailto:alfred.ct.choi@gmail.com"
                className="group inline-flex items-center gap-3.5 font-[family-name:var(--mono)] text-[15px] py-3.5 px-[18px] border border-rule-strong rounded-full transition-all duration-300 hover:bg-accent hover:text-white hover:border-accent"
              >
                alfred.ct.choi@gmail.com
                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>
            </FadeIn>
          </div>

          <FadeIn delay={160}>
            <div className="grid">
              {links.map(({ key, value, href }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-[auto_1fr_auto] gap-4 items-baseline py-4 border-t border-rule last:border-b last:border-rule text-[15px] tracking-[-0.005em] transition-[padding] duration-300 hover:pl-2"
                >
                  <span className="font-[family-name:var(--mono)] text-[11px] tracking-[0.06em] uppercase text-muted w-16">
                    {key}
                  </span>
                  <span>{value}</span>
                  <span className="font-[family-name:var(--mono)] text-accent">↗</span>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
