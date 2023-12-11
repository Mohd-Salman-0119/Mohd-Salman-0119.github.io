import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import About from "./components/About";
const App = () => {
  return (
    <div className="bg-gradient w-full font-sans scroll-smooth">
      <Navbar />
      <div className="xl:px-40 lg:px-20 md:px-10 sml:px-5 px-2">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contacts />
      </div>
      <Footer />
    </div>
  );
};

export default App;
