import "./App.css";
import Header from "./Header";
import About from "./About";
import Technologies from "./Technologies";
import Projects from "./Projects";
function App() {
  return (
    <div className="flex flex-col items-center font-inter">
      <div className="max-w-5xl px-10 max-sm:px-5">
        <Header />
        <div className="flex flex-col justify-between min-h-screen items-center mb-15">
          <About />
          <Technologies />
        </div>
        <div className="grid grid-rows-2 min-h-screen">
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
