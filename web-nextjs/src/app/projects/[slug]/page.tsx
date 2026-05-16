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

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const Component = components[slug];

  if (!Component) {
    return <div>Project not found</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-[50px]">
      <Component />
    </div>
  );
}
