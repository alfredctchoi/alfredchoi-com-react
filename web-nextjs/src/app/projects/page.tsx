import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects";

export default function Projects() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-[50px]">
      {projects.map((project) => (
        <article key={project.slug} className="py-8 first:pt-0 border-b border-[#ddd] last:border-b-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className={`w-full h-auto ${project.shadow ? "shadow-[5px_5px_5px_rgba(0,0,0,0.2)]" : ""}`}
                unoptimized
              />
            </div>
            <div className="md:col-span-2">
              <h2 className="mt-0">{project.title}</h2>
              <p>{project.description}</p>
              <Link href={`/projects/${project.slug}`}>Read more {">"}</Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
