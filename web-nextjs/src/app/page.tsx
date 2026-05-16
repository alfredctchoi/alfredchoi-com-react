import WorkExperience from "@/components/work-experience";
import Skills from "@/components/skills";
import Education from "@/components/education";

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-[50px]">
      <h2>About Me</h2>
      <p>
        With over 15 years of frontend-focused software engineering across
        various industries, I believe in building through rapid iteration and
        fast feedback cycles. I like to think of my approach the way Toyota and
        Honda build cars — prioritizing scalability, reliability, and
        maintainability so that teams can move fast without sacrificing quality.
      </p>
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
