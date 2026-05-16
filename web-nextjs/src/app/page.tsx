import Header from "@/components/header";
import Hero from "@/components/hero";
import WorkGrid from "@/components/work-grid";
import WorkExperience from "@/components/work-experience";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alfred Choi",
  url: "https://www.alfredchoi.com",
  jobTitle: "Principal Frontend Engineer",
  worksFor: { "@type": "Organization", name: "Shoptravel" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  sameAs: [
    "https://www.github.com/alfredctchoi",
    "https://www.linkedin.com/in/alfredctchoi/",
  ],
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "Frontend Architecture",
    "Web Performance",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="top">
        <Hero />
        <WorkGrid />
        <WorkExperience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
