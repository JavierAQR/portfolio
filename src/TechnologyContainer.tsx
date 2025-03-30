import { ReactNode } from "react";

interface Props {
  name: string;
  children: ReactNode;
}

export const Technology = ({ name, children }: Props) => {
  return (
    <article className="flex flex-col items-start gap-5 w-full h-full rounded-xl p-3 bg-[#3b82c425]">
      <h3 className="max-md:text-center w-full">{name}</h3>
      {children}
    </article>
  );
};

export const TechnologyItem = ({ name, children }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2 text-[#e4e4e4]">
      {children}
      <span className="font-normal">{name}</span>
    </div>
  );
};
