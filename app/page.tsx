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
      <div className="bg-[url('/grid.svg')] max-[600px]:bg-[center_top_2rem] max-[600px]:bg-[length:795px_400px] bg-contain bg-no-repeat bg-center w-full">
        <Header />
        <Hero />
      </div>
      <Experties />
      <div className="separator"></div>
      <Projects />
      <div className="separator"></div>
      <div className="overflow-y-hidden relative contactSection max-[600px]:bg-top  w-full h-full">
        <Resume />
        <Contact />
      </div>
    </main>
  );
}
