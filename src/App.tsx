import "./App.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import HTMLIcon from "./icons/HTMLIcon";
import CSSIcon from "./icons/CSSIcon";
import JSIcon from "./icons/JSIcon";
import TSIcon from "./icons/TSIcon";
import ReactIcon from "./icons/ReactIcon";
import TailwindIcon from "./icons/TailwindIcon";
import BootstrapIcon from "./icons/BootstrapIcon";
import MaterialIcon from "./icons/MaterialIcon";
import { Technology, TechnologyItem } from "./Technology";
import SQLIcon from "./icons/SQLIcon";
import GitIcon from "./icons/GitIcon";
import GitHubIcon from "./icons/GitHubIcon";
import VSIcon from "./icons/VSIcon";
import FigmaIcon from "./icons/FigmaIcon";
import PostmanIcon from "./icons/PostmanIcon";

const sizeIcon = 45;
function App() {
  return (
    <div className="flex flex-col items-center bg-[#1D2835] font-inter">
      <div className="max-w-5xl px-10 max-sm:px-5">
        <header className="grid h-screen lg:grid-cols-2 lg:items-center lg:justify-items-end md:grid-cols-1 max-lg:justify-items-center max-lg:gap-10 max-sm:gap-5">
          <div className="flex flex-col lg:gap-8 max-lg:gap-5  max-lg:order-1">
            <h1 className="text-6xl font-bold text-[cyan] max-sm:text-5xl">
              Javier Quispe
            </h1>
            <h2>Desarrollador Web</h2>
            <p>
              Estudiante de Ingeniería de Software. Entusiasta del desarrollo
              FrontEnd con ganas de explorar y aprender sobre nuevas tecnologías
              que potencien mi crecimiento profesional.
            </p>
            <div className="flex flex-wrap gap-8 text-white max-sm:gap-5">
              <a
                href="https://github.com/JavierAQR"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/javier-quispe-rivera-905ab5271/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaLinkedin />
              </a>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:tucorreo@nonamesteam123@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <SiGmail />
                </a>
                <p>nonamesteam123@gmail.com</p>
              </div>
            </div>
            <button className="flex justify-center items-center gap-2 px-3 w-45 h-12 bg-white text-black font-extrabold rounded-xl cursor-pointer hover:-translate-y-1 duration-50 ease-in hover:shadow-lg shadow-cyan-500/50">
              <IoDocumentTextOutline fontSize={35} />
              Descargar CV
            </button>
          </div>
          <img
            src="src\assets\img\javier-quispe.jpg"
            alt="Javier Quispe"
            className="w-105 h-105 max-lg:w-90 max-lg:h-90 max-lg:self-end max-sm:h-70 max-sm:w-70 rounded-full object-cover shadow-2xl shadow-cyan-500/40"
          />
        </header>
        <div className="grid grid-rows-3 min-h-screen items-center">
          <section className="row-span-1">
            <h2 className="border-b-2 pb-2">Sobre mí :)</h2>
            <p>...</p>
          </section>
          <section className="row-span-2">
            <h2 className="border-b-2 pb-2">Tecnologías</h2>
            <div className="grid grid-cols-2 gap-10 mt-10 max-sm:grid-cols-1">
              <Technology name="Lenguajes">
                <div className="tecnology-container">
                  <TechnologyItem name="HTML">
                    <HTMLIcon size={sizeIcon} />
                  </TechnologyItem>
                  <TechnologyItem name="CSS">
                    <CSSIcon size={sizeIcon} />
                  </TechnologyItem>
                  <TechnologyItem name="JavaScript">
                    <JSIcon size={sizeIcon} />
                  </TechnologyItem>
                  <TechnologyItem name="TypeScript">
                    <TSIcon size={sizeIcon} />
                  </TechnologyItem>
                </div>
              </Technology>
              <Technology name="Librerías / Frameworks">
                <div className="tecnology-container">
                  <TechnologyItem name="React">
                    <ReactIcon size={sizeIcon} />
                  </TechnologyItem>
                  <TechnologyItem name="Tailwind">
                    <TailwindIcon size={sizeIcon} />
                  </TechnologyItem>
                  <TechnologyItem name="Bootstrap">
                    <BootstrapIcon size={sizeIcon} />
                  </TechnologyItem>
                  <TechnologyItem name="Material UI">
                    <MaterialIcon size={sizeIcon} />
                  </TechnologyItem>
                </div>
              </Technology>
              <Technology name="Base de Datos">
                <div className="tecnology-container">
                  <TechnologyItem name="MySQL">
                    <SQLIcon size={sizeIcon} />
                  </TechnologyItem>
                </div>
              </Technology>
              <Technology name="Herramientas">
                <div className="tecnology-container">
                  <TechnologyItem name="Git">
                    <GitIcon size={sizeIcon} />
                  </TechnologyItem>
                  <TechnologyItem name="GitHub">
                    <GitHubIcon size={sizeIcon} />
                  </TechnologyItem>
                  <TechnologyItem name="VS Code">
                    <VSIcon size={sizeIcon} />
                  </TechnologyItem>
                  <TechnologyItem name="Figma">
                    <FigmaIcon size={sizeIcon} />
                  </TechnologyItem>
                  <TechnologyItem name="Postman">
                    <PostmanIcon size={sizeIcon} />
                  </TechnologyItem>
                </div>
              </Technology>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
