import type { Metadata } from "next";
import Link from "next/link";
import projects from "@/data/projects";
import AmazonIA2 from "@/components/projects/amazon-ia2";
import TelusPom from "@/components/projects/telus-pom";
import TelusUsage from "@/components/projects/telus-usage";
import TelusNav from "@/components/projects/telus-nav";

const components: Record<string, React.ComponentType> = {
  "amazon-ia2": AmazonIA2,
  "telus-pom": TelusPom,
  "telus-usage": TelusUsage,
  "telus-nav": TelusNav,
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const Component = components[slug];
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!Component) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b border-rule backdrop-blur-[8px]"
        style={{ background: "color-mix(in oklab, var(--bg) 88%, transparent)" }}
      >
        <div className="shell flex items-center justify-between py-[18px]">
          <Link
            href="/#work"
            className="flex items-center gap-3 font-mono text-[13px] tracking-[0.02em]"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            <span className="font-medium">Alfred Choi</span>
            <span className="text-muted">— ← All work</span>
          </Link>
        </div>
      </header>
      <main className="shell py-16 project-prose">
        <Component />
      </main>
      <footer className="shell border-t border-rule-strong py-8 pb-12 flex justify-between font-mono text-sm text-muted">
        {prev ? (
          <Link href={`/projects/${prev.slug}`} className="hover:text-fg transition-colors">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/projects/${next.slug}`} className="hover:text-fg transition-colors">
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </footer>
    </>
  );
}
