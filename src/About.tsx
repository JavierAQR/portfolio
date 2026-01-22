import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="row-span-1 min-h-screen flex flex-col justify-center" id="about">
      <SectionTitle title="Sobre mí" />
      <div data-aos="zoom-in">
        <p className="text-lg/8 max-sm:text-base/8">
          Desarrollador Fullstack Jr. con sólidos conocimientos en React y Typescript, complementando mi perfil con conocimientos en Node.js utilizando Express y bases de datos relacionales MySQL y PostgreSQL. Durante mi formación académica y laboral he fortalecido mis habilidades en el diseño, desarrollo e integración de soluciones fullstack, abarcando desde la construcción de APIs y modelado de datos hasta la implementación de interfaces funcionales y escalables. Me considero una persona resiliente y comprometida, lo que me ha permitido crecer rápidamente dentro de mi área.
        </p>
      </div>
    </section>
  );
};

export default About;
