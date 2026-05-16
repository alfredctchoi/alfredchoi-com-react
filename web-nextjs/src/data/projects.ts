export interface ProjectEntry {
  title: string;
  image: string;
  shadow: boolean;
  description: string;
  slug: string;
}

const projects: ProjectEntry[] = [
  {
    title: "Amazon Advertising Information Architecture",
    image: "/projects/amazon-ia2/amazon-ia2.png",
    shadow: true,
    description:
      "Led a full navigation redesign and rebrand for Amazon Advertising Console — delivering a fully accessible information architecture with 13% faster JS execution and 10% smaller bundles.",
    slug: "amazon-ia2",
  },
  {
    title: "TELUS Peace of Mind Plans",
    image: "/projects/telus-pom/telus-peace-of-mind.jpg",
    shadow: true,
    description:
      "Shipped the frontend for TELUS's biggest plan restructuring in years — unlimited data, device financing, and new usage experiences across multiple teams and legacy systems.",
    slug: "telus-pom",
  },
  {
    title: "TELUS usage overhaul",
    image: "/projects/telus-pom/telus-usage-overhaul.png",
    shadow: false,
    description:
      "Redesigned the mobility usage page from scratch — replacing a 2015-era PHP view with a React app that handles every plan permutation from the past decade while loading asynchronously for perceived speed.",
    slug: "telus-usage",
  },
  {
    title: "My TELUS Navigation Migration",
    image: "/projects/telus-nav/telus-left-nav.png",
    shadow: false,
    description:
      "Migrated the My TELUS navigation from a legacy PHP stack to a JavaScript SPA — solving dual-authentication, multi-segment routing, and full backwards compatibility in one shared component.",
    slug: "telus-nav",
  },
];

export default projects;
