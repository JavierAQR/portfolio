import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Experience from "./Experience";
import Services from "./Services";
import About from "./About";
import Technologies from "./Technologies";
import Projects from "./Projects";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="flex flex-col items-center font-inter">
      <Nav />
      <div className="max-w-5xl px-10 max-sm:px-5">
        <Header />
        <div className="flex flex-col gap-20 py-14 max-sm:gap-14">
          <About />
          <Experience />
          <Services />
          <Technologies />
          <Projects />
        </div>
        <div className="flex justify-center my-10">
          <p className="text-sm">Hecho con React y Tailwind.</p>
        </div>
      </div>
    </div>
  );
}

export default App;