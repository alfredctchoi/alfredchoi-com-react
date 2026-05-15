export interface Role {
  start: string;
  end: string;
  isCurrent: boolean;
  title: string;
  responsibilities: string[];
}

export interface WorkEntry {
  company: string;
  logo: string;
  roles: Role[];
}

const work: WorkEntry[] = [
  {
    company: "Shoptravel",
    logo: "/logos/shoptravel.svg",
    roles: [
      {
        start: "Nov 2024",
        end: "",
        isCurrent: true,
        title: "Principal Front End Engineer",
        responsibilities: [
          "Leading end-to-end development of a travel e-commerce platform (hotels, flights, packages), architecting a Next.js web application and a React Native (Expo) mobile app in a shared monorepo from the ground up",
          "Built and lead a team of 4 frontend engineers, setting technical direction, conducting systematic code reviews, and mentoring developers to maintain high standards across the codebase",
          "Translate high-level strategic direction from Senior Leadership into well-scoped, actionable units of work, enabling the team to deliver incrementally with clear priorities",
          "Serve as the key liaison between UX and Backend teams, defining feature scope and negotiating design trade-offs informed by upstream API constraints to ensure feasible, user-centered solutions",
          "Partnered with Marketing to implement API-triggered email campaigns in Braze, execute an SEO strategy (structured data, metadata optimization, sitemap generation), and integrate Google Analytics tracking to support data-driven decision-making",
          "Established performance and quality baselines ahead of launch, achieving Lighthouse scores of 93 (Performance), 83 (Accessibility), 96 (Best Practices), and 100 (SEO)",
        ],
      },
    ],
  },
  {
    company: "Amazon Advertising",
    logo: "/logos/amazon-ads.png",
    roles: [
      {
        start: "Jan 2024",
        end: "Nov 2024",
        isCurrent: false,
        title: "Senior Front End Engineer",
        responsibilities: [
          "Led a team of 6 engineers to unify the global navigation experience across federated applications in Advertising Portal",
          "Drove technical direction for front-end architecture through prototyping and drafting technical design documents (SSR and Web Components)",
          "Assisted leadership in roadmap planning, resource allocation, and delivery estimations for the upcoming year",
          "Contributed to hiring by conducting technical and behavioral interviews, helping grow the team with strong candidates",
          "Coached Front End Engineers and interns through code and design reviews, 1:1s, and pair programming",
        ],
      },
      {
        start: "May 2020",
        end: "Jan 2024",
        isCurrent: false,
        title: "Front End Engineer II",
        responsibilities: [
          "Led redevelopment of the navigation system for Advertising Console's rebranding, achieving a 50% reduction in page load latency, 15% reduction in bundle size, and 13-point increase in Lighthouse score",
          "Designed and implemented an introduction widgets system in Advertising Console to guide customers through newly launched features",
          "Streamlined sprint ceremonies as Scrum Master, reducing the number of planning meetings by 50% while maintaining delivery velocity",
          "Facilitated hardware planning across five teams to ensure applications were properly scaled for high-impact events within budget",
        ],
      },
    ],
  },
  {
    company: "TELUS Communications",
    logo: "/logos/telus.svg",
    roles: [
      {
        start: "Oct 2019",
        end: "May 2020",
        isCurrent: false,
        title: "Technical Lead (My TELUS)",
        responsibilities: [
          "Led multiple teams through the transformation of the My TELUS monolithic PHP application to a React/Node.js microservice architecture, resulting in an 85% decrease in traffic to the legacy system",
          "Drove cross-functional technical direction with architects and developers; optimized the stack to reduce code complexity and duplication",
          "Improved API performance by collaborating with backend partners to identify and address slow service calls",
        ],
      },
      {
        start: "Jul 2018",
        end: "Oct 2019",
        isCurrent: false,
        title: "Technical Team Lead",
        responsibilities: [
          "Led development for the introduction of Peace of Mind Plans and Device Financing in My TELUS, collaborating across TELUS Digital to build shared applications and reduce fragmentation",
          "Mentored junior and intermediate developers through pair programming, whiteboarding sessions, and code reviews",
        ],
      },
      {
        start: "May 2017",
        end: "Jul 2018",
        isCurrent: false,
        title: "Senior Software Developer",
        responsibilities: [
          "Developed high-traffic self-serve applications in React and Node.js for My TELUS (usage, phone number management, rate plan change — serving 2M, 250K, and 100K monthly active users respectively)",
        ],
      },
    ],
  },
  {
    company: "Scotiabank",
    logo: "/logos/scotiabank.svg",
    roles: [
      {
        start: "Dec 2016",
        end: "May 2017",
        isCurrent: false,
        title: "Senior Software Developer",
        responsibilities: [
          "Developed a React Native travel insurance prototype for iOS; conducted training sessions on React and Redux for cross-functional teams",
        ],
      },
    ],
  },
  {
    company: "ScribbleLive",
    logo: "/logos/scribblelive.jpg",
    roles: [
      {
        start: "Jul 2015",
        end: "Dec 2016",
        isCurrent: false,
        title: "Senior Software Developer",
        responsibilities: [
          "Led rebuild of a content management application in React, introducing the framework to the team and providing training to upskill developers",
        ],
      },
    ],
  },
  {
    company: "itravel2000",
    logo: "/logos/itravel2000.svg",
    roles: [
      {
        start: "Nov 2014",
        end: "Jul 2015",
        isCurrent: false,
        title: "Senior Software Developer",
        responsibilities: [
          "Migrated a monolithic C# application to a SPA with REST APIs; improved the flight purchase flow with a mobile-first redesign",
        ],
      },
    ],
  },
];

export default work;
