import "./components/styles/App.scss";
import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Volunteering from "./components/Volunteering";
import Projects from "./components/Projects";
import Stack from "./components/Stack";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="left">
          <Intro />
        </section>
        <section className="right">
          <About />
          <Stack />
          <Projects />
          <Education />
          <Volunteering />
        </section>
      </main>
    </div>
  );
};

export default App;
