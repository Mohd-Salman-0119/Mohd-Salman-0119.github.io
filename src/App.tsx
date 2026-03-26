import ModernNavbar from "./components/ModernNavbar";
import ModernHero from "./components/ModernHero";
import AnimatedBackground from "./components/AnimatedBackground";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import About from "./components/About";

const App = (): JSX.Element => {
  return (
    <div className="bg-background w-full font-sans scroll-smooth text-foreground min-h-screen">
      <AnimatedBackground />
      <ModernNavbar />
      <div className="xl:px-40 lg:px-20 md:px-10 sml:px-5 px-2">
        <ModernHero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contacts />
      </div>
      <Footer />
    </div>
  );
};

export default App;
