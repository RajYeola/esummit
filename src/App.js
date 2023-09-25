import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact";
import Events from "./components/Events/Events";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Speakers from "./components/Speakers/Speakers";
import Workshops from "./components/Workshops/Workshops";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="z-10 bg-hero">
        <Hero />
      </div>
      <About />
      <Events />
      <Workshops />
      <Speakers />
      <Contact />
    </div>
  );
}

export default App;
