import Header from "@/components/header";
import Hero from "@/components/hero";
import WorkGrid from "@/components/work-grid";
import WorkExperience from "@/components/work-experience";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
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
