import Image from "next/image";
import Experties from "./components/experties";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Experties />
      <div className="separator"></div>
      <Projects />
      <div className="separator"></div>
      <div className="relative contactSection w-full h-full">
        <Resume />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
