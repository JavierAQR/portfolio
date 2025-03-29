import "./App.css";
import Card from "./Card";
import Header from "./Header";
import About from "./About";
import Tecnologies from "./Tecnologies";

function App() {
  return (
    <div className="flex flex-col items-center font-inter">
      <div className="max-w-5xl px-10 max-sm:px-5">
        <Header />
        <div className="grid min-h-screen grid-rows-3 items-center">
          <About />
          <Tecnologies />
        </div>
        <div className="grid grid-rows-2 min-h-screen">
          <section>
            <h2 className="section-title">Proyectos individuales</h2>
            <div className="flex flex-col items-center mt-7">
              <Card />
            </div>
          </section>
          <section>
            <h2 className="section-title">Proyectos Colaborativos</h2>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
