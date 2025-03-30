import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="row-span-1">
      <SectionTitle title="Sobre mí :)" />
      <div data-aos="zoom-in">
        <p className="text-lg/8 max-sm:text-base/8">
          He trabajado en proyectos personales y colaborativos, creando
          interfaces dinámicas, responsive y centradas en la experiencia del
          usuario. Estoy siempre abierto a aprender nuevas herramientas. Soy
          autodidacta, curioso y comprometido con aprender rápidamente en un
          entorno real. Busco un equipo donde pueda contribuir con mi energía y
          ganas de crecer, mientras aporto soluciones centradas en el usuario.
          Actualmente me encuentro cursando el 7mo ciclo en la Universidad
          Tecnológica del Perú.
        </p>
      </div>
    </section>
  );
};

export default About;
