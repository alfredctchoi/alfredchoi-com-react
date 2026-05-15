import telusPeaceOfMind from "./components/projects/telus-pom/telus-peace-of-mind.jpg";
import amazonIA2 from "./components/projects/amazon-ia2/amazon-ia2.png";
import telusUsageOverhaul from "./components/projects/telus-pom/telus-usage-overhaul.png";
import telusLeftNav from "./components/projects/telus-nav/telus-left-nav.png";

const projects = [
  {
    title: "Amazon Advertising Information Architecture",
    image: amazonIA2,
    includeShadow: true,
    description:
      "In October 2021, Amazon Advertising rebranded and introduced new information architecture in Advertising Console.  This launch simplifies application navigation and is also fully accessible.",
    link: "/projects/amazon-ia2",
  },
  {
    title: "TELUS Peace of Mind Plans",
    image: telusPeaceOfMind,
    includeShadow: true,
    description:
      "In July of 2019, TELUS launched Peace of Mind Plans which redefined the construct of the mobility plan.  The change eliminated overage charges for mobility customers and introduced the ability to finance a device that was separate from your plan.",
    link: "/projects/telus-pom",
  },
  {
    title: "TELUS usage overhaul",
    image: telusUsageOverhaul,
    includeShadow: false,
    description:
      "In 2018, my team and I worked on redesigning the mobility usage page from the ground up at TELUS.  We worked closely with our designers to implement a design that was both intuative and functional.",
    link: "/projects/telus-usage",
  },
  {
    title: "My TELUS Navigation Migration",
    image: telusLeftNav,
    includeShadow: false,
    description:
      "When I joined TELUS, the company was in the middle of a transition from their legacy technology stack to a more modern stack written in Javascript.  One of the initiatives at the time was to migrate the old navigation menu to the new stack while having it backwards compatible with the legacy stack.",
    link: "/projects/telus-nav",
  },
];

export default projects;
