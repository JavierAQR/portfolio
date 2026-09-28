import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="flex flex-col gap-4" id="about">
      <SectionTitle title="Sobre mí" />
      <div data-aos="zoom-in">
        <p className="text-lg/8 max-sm:text-base/8">
          Desarrollador fullstack con experiencia construyendo sistemas web
          para empresas y negocios reales: desde la interfaz que usa la
          persona hasta la lógica que hace que todo funcione por detrás. Me
          gusta convertir procesos manuales en herramientas simples y
          confiables. Soy una persona resiliente y comprometida, lo que me ha
          permitido crecer rápido en cada proyecto en el que participo.
        </p>
      </div>
    </section>
  );
};

export default About;