import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Tools />
        <Contact />
      </main>
      <Footer />
      <RevealInit />
    </>
  );
}
