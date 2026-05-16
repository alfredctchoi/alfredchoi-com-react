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
      "In October 2021, Amazon Advertising rebranded and introduced new information architecture in Advertising Console. This launch simplifies application navigation and is also fully accessible.",
    slug: "amazon-ia2",
  },
  {
    title: "TELUS Peace of Mind Plans",
    image: "/projects/telus-pom/telus-peace-of-mind.jpg",
    shadow: true,
    description:
      "In July of 2019, TELUS launched Peace of Mind Plans which redefined the construct of the mobility plan. The change eliminated overage charges for mobility customers and introduced the ability to finance a device that was separate from your plan.",
    slug: "telus-pom",
  },
  {
    title: "TELUS usage overhaul",
    image: "/projects/telus-pom/telus-usage-overhaul.png",
    shadow: false,
    description:
      "In 2018, my team and I worked on redesigning the mobility usage page from the ground up at TELUS. We worked closely with our designers to implement a design that was both intuitive and functional.",
    slug: "telus-usage",
  },
  {
    title: "My TELUS Navigation Migration",
    image: "/projects/telus-nav/telus-left-nav.png",
    shadow: false,
    description:
      "When I joined TELUS, the company was in the middle of a transition from their legacy technology stack to a more modern stack written in Javascript. One of the initiatives at the time was to migrate the old navigation menu to the new stack while having it backwards compatible with the legacy stack.",
    slug: "telus-nav",
  },
];

export default projects;
