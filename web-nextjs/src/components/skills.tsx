import Aside from "./aside";

const skills = [
  {
    category: "Programming",
    items: ["React", "NodeJS", "Angular 1", "PHP", "C#"],
  },
  {
    category: "Database",
    items: ["MySQL", "Redis", "MSSQL"],
  },
  {
    category: "Server",
    items: ["AWS (EC2, S3, Route53, etc..)", "Docker", "Kubernetes"],
  },
];

export default function Skills() {
  return (
    <Aside title="Skills">
      {skills.map(({ category, items }) => (
        <div key={category}>
          <h4 className="mb-0">{category}</h4>
          <ul className="my-0">
            {items.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Aside>
  );
}
