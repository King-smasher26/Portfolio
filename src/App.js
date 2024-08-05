import './App.css';
import Intro from './Components/Intro';
import Skills from './Components/Skills';
import Projects from './Components/Projects'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <section id="intro">
      <Intro/>
      </section>
      <section id="skills">
      <Skills/>
      </section>
      <section id="projects">
      <Projects/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
