import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import FeaturedProjects from "../components/FeaturedProjects";
import OpenSource from "../components/OpenSource";
import Publications from "../components/Publications";
import Certifications from "../components/Certifications";
import Volunteering from "../components/Volunteering";
import Contact from "../components/Contact";

const Home = () => (
  <>
    <Hero />
    <About />
    <FeaturedProjects />
    <Experience />
    <OpenSource />
    <Education />
    <Skills />
    <Publications />
    <Certifications />
    <Volunteering />
    <Contact />
  </>
);

export default Home;
