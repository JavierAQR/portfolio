import { FaWhatsapp } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const benefits = [
  {
    title: "Hecho a la medida de tu negocio",
    description:
      "Sistemas para bodegas, restaurantes, peluquerías o talleres: pedidos, reservas o inventario, adaptados a cómo ya trabajas.",
  },
  {
    title: "Desde el celular o la computadora",
    description:
      "Revisa y actualiza tu negocio desde donde estés, sin instalar nada complicado.",
  },
  {
    title: "Demo gratis, sin compromiso",
    description: "Antes de pagar un sol, ves cómo funcionaría tu sistema.",
  },
  {
    title: "Tú eliges cómo pagarlo",
    description:
      "En la nube con un plan mensual o anual, o una versión local sin costos recurrentes.",
  },
];

const Services = () => {
  return (
    <section
      className="w-full flex flex-col gap-8 items-center text-center"
      id="services"
    >
      <SectionTitle title="Servicios" />
      <p className="max-w-2xl text-[#e4e4e4]">
        Desarrollo sistemas web para negocios pequeños que quieren dejar el
        cuaderno y el Excel atrás. Sin letra chica, sin tecnicismos.
      </p>
      <div className="grid grid-cols-2 gap-5 w-full max-sm:grid-cols-1">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="flex flex-col gap-2 text-left rounded-2xl p-5 bg-[#3b82c425]"
          >
            <h3 className="font-semibold text-white">{b.title}</h3>
            <p className="text-sm text-[#a8a8a8]">{b.description}</p>
          </div>
        ))}
      </div>
        <a
        href="https://wa.me/App.css51959215783?text=Hola%20Javier%2C%20quiero%20una%20demo%20gratis%20de%20un%20sistema%20para%20mi%20negocio"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 h-12 bg-[#25D366] text-[#0A1F2D] font-extrabold rounded-xl cursor-pointer hover:-translate-y-1 duration-100 ease-in hover:shadow-lg shadow-green-500/40"
      >
        <FaWhatsapp fontSize={22} />
        Pide tu demo gratis
      </a>
    </section>
  );
};

export default Services;