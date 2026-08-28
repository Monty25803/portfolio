import SceneBackground from "./components/SceneBackground";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact, { Footer } from "./components/Contact";

export default function App() {
  return (
    <>
      <SceneBackground />
      <ScrollProgress />
      <div className="spatial-content">
        <Hero />
        <main>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
