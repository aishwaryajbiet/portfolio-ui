import Layout from "./Components/Layout";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Certifications from "./Components/Certifications";
import Contact from "./Components/Contact";
import About from "./Components/About";

function App() {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <About />
      <Contact />
    </Layout>
  );
}

export default App;
