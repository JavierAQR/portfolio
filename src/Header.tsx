import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import SplitText from "./TextAnimations/SplitText/SplitText";
import DecryptedText from "./TextAnimations/DecryptedText/DecryptedText";
import { useEffect, useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="grid h-screen lg:grid-cols-2 lg:items-center lg:justify-items-end max-lg:grid-cols-1 max-lg:justify-items-center max-lg:gap-10 max-sm:gap-5">
      <div className="flex flex-col lg:gap-8 max-lg:gap-5 max-lg:order-1">
        <div className="flex flex-col gap-2">
          <SplitText
            text="Javier Quispe"
            className="text-6xl font-bold text-[cyan] max-sm:text-5xl"
            textAlign="left"
          />
          <div className="min-h-[45px]">
            {active && (
              <DecryptedText
                text="Desarrollador Web"
                className="text-4xl"
                speed={75}
                animateOn={"view"}
                sequential
                revealDirection="start"
              />
            )}
          </div>
        </div>
        <p>
          Estudiante de Ingeniería de Software y desarrollador de sistemas web
          para empresas y negocios. Disponible para proyectos freelance.
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
          <a
            href="https://wa.me/51959215783"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaWhatsapp />
          </a>
          <div className="flex items-center gap-3">
            <a
              href="mailto:nonamesteam123@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <SiGmail />
            </a>
            <span>nonamesteam123@gmail.com</span>
          </div>
        </div>
        <a
          className="flex justify-center items-center gap-2 px-3 w-45 h-12 bg-[#e4e4e4] text-[#0A1F2D] font-extrabold rounded-xl cursor-pointer hover:-translate-y-1 duration-100 ease-in hover:shadow-lg shadow-cyan-500/50"
          href="/docs/Javier_Quispe_CV.pdf"
          download="JavierQuispe_CV.pdf"
        >
          <IoDocumentTextOutline fontSize={35} />
          Descargar CV
        </a>
      </div>
      <div data-aos="zoom-out-down" data-aos-duration="1500">
        <img
          src="img/javier-quispe.jpeg"
          alt="Javier Quispe"
          className="w-100 h-100 max-lg:self-end max-sm:h-80 max-sm:w-80 rounded-full object-cover shadow-2xl shadow-cyan-500/40"
        />
      </div>
    </header>
  );
};

export default Header;