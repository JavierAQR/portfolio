import { ReactNode } from "react";
import SectionTitle from "./SectionTitle";

const ProjectsContainer = ({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) => {
  return (
    <section>
      <SectionTitle title={name} />
      <div className="flex flex-col items-center gap-10 max-md:gap-10">
        <>{children}</>
      </div>
    </section>
  );
};

export default ProjectsContainer;
