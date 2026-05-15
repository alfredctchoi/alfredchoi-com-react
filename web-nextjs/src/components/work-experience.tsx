import Image from "next/image";
import work from "@/data/work";

export default function WorkExperience() {
  return (
    <section>
      <h2 className="mb-3">Experience</h2>
      {work.map(({ company, logo, roles }) => (
        <div key={company} className="my-8">
          <div className="flex items-center gap-4">
            <Image
              src={logo}
              alt={`${company} logo`}
              width={60}
              height={15}
              className="h-4 w-auto"
              unoptimized
            />
            <h3 className="leading-none">{company}</h3>
          </div>
          {roles.map(({ start, end, title, isCurrent, responsibilities }) => (
            <div key={title} className="my-2.5">
              <h4 className="text-gray-500 mt-0">
                {start} → {isCurrent ? "Present" : end} - {title}
              </h4>
              <ul className="my-0">
                {responsibilities.map((responsibility) => (
                  <li key={responsibility}>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
