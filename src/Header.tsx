import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

const Header = () => {
  return (
    <header className="grid h-screen lg:grid-cols-2 lg:items-center lg:justify-items-end max-lg:grid-cols-1 max-lg:justify-items-center max-lg:gap-10 max-sm:gap-5">
      <div className="flex flex-col lg:gap-8 max-lg:gap-5  max-lg:order-1">
        <h1 className="text-6xl font-bold text-[cyan] max-sm:text-5xl">
          Javier Quispe
        </h1>
        <h2 className="text-4xl">Desarrollador Web</h2>
        <p>
          Estudiante de Ingeniería de Software. Entusiasta del desarrollo
          FrontEnd con ganas de explorar y aprender sobre nuevas tecnologías que
          potencien mi crecimiento profesional.
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
            <span>nonamesteam123@gmail.com</span>
          </div>
        </div>
        <button className="flex justify-center items-center gap-2 px-3 w-45 h-12 bg-[#e4e4e4] text-[#0A1F2D] font-extrabold rounded-xl cursor-pointer hover:-translate-y-1 duration-50 ease-in hover:shadow-lg shadow-cyan-500/50">
          <IoDocumentTextOutline fontSize={35} />
          Descargar CV
        </button>
      </div>
      <img
        src="src\assets\img\javier-quispe.jpg"
        alt="Javier Quispe"
        className="w-105 h-105 max-lg:self-end max-sm:h-80 max-sm:w-80 rounded-full object-cover shadow-2xl shadow-cyan-500/40"
      />
    </header>
  );
};

export default Header;
