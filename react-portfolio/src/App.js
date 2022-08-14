import Aboutme from "./components/Aboutme";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutme />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
