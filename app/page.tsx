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
      <div className="heroSection">
        <Header />
        <Hero />
      </div>
      <Experties />
      <div className="separator"></div>
      <Projects />
      <div className="overflow-y-hidden relative contactSection max-[600px]:bg-top bg-fixed max-[780]:before:translate-y-[-55%] w-full h-full">
        <Contact />
      </div>
    </main>
  );
}
