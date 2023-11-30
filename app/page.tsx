import Image from "next/image";
import Experties from "./components/experties";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Experties />
      <Projects />
    </main>
  );
}
