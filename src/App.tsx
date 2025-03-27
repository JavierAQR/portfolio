import "./App.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#1D2835] font-inter">
      <header className="grid max-w-5xl h-auto lg:grid-cols-2 md:grid-cols-1 lg:justify-items-end max-lg:justify-items-center items-center px-10 max-lg:gap-7">
        <div className="flex flex-col lg:gap-8 max-lg:gap-5 text-white max-lg:order-1">
          <h1 className="text-6xl font-bold text-[cyan]">Javier Quispe</h1>
          <h2 className="text-3xl font-semibold">Desarrollador Web</h2>
          <p className="text-xl font-light">
            Estudiante de Ingeniería de Software. Entusiasta del desarrollo de
            aplicativos web con ganas de explorar y aprender sobre nuevas
            tecnologías que potencien mi crecimiento profesional.
          </p>
          <div className="flex gap-8 ">
            <a
              href="https://github.com/JavierAQR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub fontSize={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/javier-quispe-rivera-905ab5271/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin fontSize={40} />
            </a>
            <div className="flex items-center gap-3">
              <a
                href="mailto:tucorreo@nonamesteam123@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGmail fontSize={40} />
              </a>
              <p>nonamesteam123@gmail.com</p>
            </div>
          </div>
          <button className="flex justify-center items-center gap-2 px-3 w-45 h-12 bg-white text-black font-extrabold rounded-xl cursor-pointer ">
            <IoDocumentTextOutline fontSize={35} />
            Descargar CV
          </button>
        </div>
        <img
          src="src\assets\img\javier-quispe.jpg"
          alt="Javier Quispe"
          className="lg:w-105 lg:h-full max-lg:w-100 max-lg: h-100 rounded-full object-cover shadow-2xl shadow-cyan-500/40"
        />
      </header>
    </div>
  );
}

export default App;
