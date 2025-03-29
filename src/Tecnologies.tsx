import { Technology } from "./TechnologyContainer";
import TechnologyList from "./TechnologyList";

const languages = ["HTML", "CSS", "JavaScript", "TypeScript"];
const libraries = ["React", "Tailwind", "Bootstrap", "MaterialUI"];
const dataBases = ["MySQL"];
const tools = ["Git", "GitHub", "VSCode", "Figma", "Postman"];
const Tecnologies = () => {
  return (
    <section className="row-span-2">
      <h2 className="section-title">Tecnologías</h2>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-2 gap-10 my-7 w-full max-sm:grid-cols-1 max-sm:max-w-100">
          <Technology name="Lenguajes">
            <TechnologyList data={languages} />
          </Technology>
          <Technology name="Librerías / Frameworks">
            <TechnologyList data={libraries} />
          </Technology>
          <Technology name="Base de Datos">
            <TechnologyList data={dataBases} />
          </Technology>
          <Technology name="Herramientas">
            <TechnologyList data={tools} />
          </Technology>
        </div>
      </div>
    </section>
  );
};

export default Tecnologies;
