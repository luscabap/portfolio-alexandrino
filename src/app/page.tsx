import About from "./components/about";
import Header from "./components/header";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Apresentation from "./components/apresentation";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] flex flex-col items-center justify-start gap-12 text-center">
      <Header />
      <Apresentation />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <span>Ideia de ter algum depoimento do pessoal que já trabalhou contigo ou estudo te elogiando</span>
      <Footer />
    </div>
  );
}
