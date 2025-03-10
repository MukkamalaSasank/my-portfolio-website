import Intro from '../../components/intro';
import About from '../../components/about';
import Projects from '../../components/projects';
import Skills from '../../components/skills';
import Experience from '../../components/experience';
import Contact from '../../components/contact';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 font-montserrat">
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
