import { ReactNode } from "react";

const ProjectsContainer = ({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) => {
  return (
    <section>
      <h2 className="section-title">{name}</h2>
      <div className="flex flex-col items-center gap-3 max-md:gap-10">
        <>{children}</>
      </div>
    </section>
  );
};

export default ProjectsContainer;
