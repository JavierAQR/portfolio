import SectionTitle from "./SectionTitle";
import { Technology } from "./TechnologyContainer";
import TechnologyList from "./TechnologyList";

const languages = ["HTML", "CSS", "JavaScript", "TypeScript", "Java", "PHP"];
const libraries = ["React", "Tailwind", "Bootstrap", "Laravel", "Next", "MaterialUI"];
const dataBases = ["MySQL"];
const tools = ["Git", "GitHub", "VSCode", "Postman", "Figma"];
const learning = ["Node.js", "Express.js"];
const Technologies = () => {
  return (
    <section className="w-full row-span-2">
      <SectionTitle title="Tecnologías" />
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-2 gap-10 w-full max-sm:grid-cols-1 max-sm:max-w-100">
          <div data-aos="fade-right">
            <Technology name="Lenguajes">
              <TechnologyList data={languages} />
            </Technology>
          </div>
          <div data-aos="fade-left">
            <Technology name="Librerías / Frameworks">
              <TechnologyList data={libraries} />
            </Technology>
          </div>
          <div data-aos="fade-right">
            <Technology name="Base de Datos">
              <TechnologyList data={dataBases} />
            </Technology>
          </div>
          <div data-aos="fade-left">
            <Technology name="Herramientas">
              <TechnologyList data={tools} />
            </Technology>
          </div>
          <div data-aos="fade-right">
            <Technology name="Aprendiendo">
              <TechnologyList data={learning} />
            </Technology>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
