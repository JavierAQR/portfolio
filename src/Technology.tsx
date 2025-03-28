import { ReactNode } from "react";

interface Props {
  name: string;
  children: ReactNode;
}

export const Technology = ({ name, children }: Props) => {
  return (
    <article className="flex flex-col items-start gap-5 w-full">
      <h3 className="max-md:text-center w-full">{name}</h3>
      {children}
    </article>
  );
};

export const TechnologyItem = ({ name, children }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {children}
      <span>{name}</span>
    </div>
  );
};
