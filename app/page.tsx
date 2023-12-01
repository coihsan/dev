import Image from "next/image";
import Experties from "./components/experties";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Experties />
      <Projects />
      <div className="z-[-2]">
        <Resume />
      </div>
      <Contact />
    </main>
  );
}
