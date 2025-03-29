import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Card = () => {
  const tags = [
    "React",
    "TypeScript",
    "react-hook-form",
    "chartjs",
    "react-router",
    "zod",
  ];

  return (
    <div className="flex items-center bg-[#3b82c425] p-3 rounded-3xl max-md:flex-col max-md:items-center max-md:gap-3 max-md:max-w-95">
      <img
        src="src\assets\img\proyecto-finanzas.jpg"
        className="object-cover rounded-2xl max-w-90 max-h-90"
      />
      <div className="flex flex-col gap-5 px-5 max-lg:gap-2 max-lg:px-2 max-md:pl-0 ">
        <p className="text-sm">
          <b className="font-extrabold">Gestor de Finanzas Personales: </b>
          Permite registrar transacciones de categorías personalizables,
          visualizar un historial en tablas dinámicas y establecer presupuestos.
          Además, integra gráficos estadísticos para el seguimiento correcto de
          las transacciones.
        </p>
        <div className="flex text-xs gap-1.5 flex-wrap">
          {tags.map((tag) => (
            <span className="font-normal rounded-full bg-[#275981] px-2 py-1">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-5">
          <a href="">
            <FaGithub fontSize={23} color="white" />
          </a>
          <a href="">
            <FaExternalLinkAlt fontSize={23} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
