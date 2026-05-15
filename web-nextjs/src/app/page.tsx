import WorkExperience from "@/components/work-experience";
import Skills from "@/components/skills";
import Education from "@/components/education";

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
        <div className="md:col-span-2">
          <WorkExperience />
        </div>
        <div>
          <Skills />
          <Education />
        </div>
      </div>
    </div>
  );
}
