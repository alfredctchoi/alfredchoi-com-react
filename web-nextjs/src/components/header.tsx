import Link from "next/link";

const navLinks = [
  { href: "#work", num: "01", label: "Work" },
  { href: "#experience", num: "02", label: "Experience" },
  { href: "#skills", num: "03", label: "Skills" },
  { href: "#contact", num: "04", label: "Contact" },
];

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-rule backdrop-blur-[8px]"
      style={{ background: "color-mix(in oklab, var(--bg) 88%, transparent)" }}
    >
      <div className="shell flex items-center justify-between py-[18px]">
        <Link
          href="/"
          className="flex items-center gap-3 font-mono text-[13px] tracking-[0.02em]"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          <span className="font-medium">Alfred Choi</span>
          <span className="text-muted">— Principal Frontend Engineer</span>
        </Link>
        <nav
          className="hidden md:flex gap-7 font-mono text-[12px] tracking-[0.04em]"
          aria-label="Section"
        >
          {navLinks.map(({ href, num, label }) => (
            <a
              key={href}
              href={href}
              className="group relative inline-flex items-baseline gap-1.5 pb-0.5"
            >
              <span className="text-accent">{num}</span>
              {label}
              <span className="absolute left-0 right-0 -bottom-px h-px bg-fg origin-left scale-x-0 transition-transform duration-350 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
