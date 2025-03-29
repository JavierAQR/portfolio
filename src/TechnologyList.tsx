import { TechnologyItem } from "./TechnologyContainer";

const sizeIcon = 45;
const TechnologyList = ({ data }: { data: string[] }) => {
  return (
    <div className="tecnology-list">
      {data.map((item) => (
        <TechnologyItem name={item}>
          <img
            src={`src/assets/icons/${item}.svg`}
            style={{ width: sizeIcon, height: sizeIcon }}
            alt={item}
          />
        </TechnologyItem>
      ))}
    </div>
  );
};

export default TechnologyList;
