import Aside from "./aside";

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "React Native (Expo)",
  "GraphQL",
  "Node.js",
  "AWS (ECS Fargate, CloudFront, ElastiCache, S3, CodeBuild, CDK)",
  "Datadog",
  "Braze",
];

export default function Skills() {
  return (
    <Aside title="Skills">
      <ul className="my-0">
        {skills.map((skill) => (
          <li key={skill}>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </Aside>
  );
}
