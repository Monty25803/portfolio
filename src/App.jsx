import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import MarqueeStatement from "./components/MarqueeStatement";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact, { Footer } from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <MarqueeStatement />
        <Services />
        <Projects />
        <Experience />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
