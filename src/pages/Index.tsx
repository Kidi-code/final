import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;