import Image from "next/image";
import Experties from "./components/experties";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Hero />
      <Experties />
      <Projects />
    </main>
  );
}
