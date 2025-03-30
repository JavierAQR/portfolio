import { FaGithub } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";

interface Props {
  tags: string[];
  title: string;
  description: string;
  webName?: string;
  codeName: string;
  img: string;
}

const Card = ({ tags, title, description, webName, codeName, img }: Props) => {
  return (
    <div data-aos="zoom-in-left">
      <article className="flex items-center w-full bg-[#3b82c425] p-3 rounded-3xl max-md:flex-col max-md:items-center max-md:gap-3 max-md:max-w-95">
        <img
          src={`src/assets/img/${img}.jpg`}
          className="object-cover rounded-2xl max-w-90 max-h-90 bg-[gray]"
        />
        <div className="flex flex-col gap-5 px-5 max-lg:gap-2 max-lg:px-2 max-md:pl-0 ">
          <p className="text-sm">
            <b className="font-extrabold text-white">{title.toUpperCase()}: </b>
            {description}
          </p>
          <div className="flex text-xs gap-1.5 flex-wrap">
            {tags.map((tag) => (
              <span className="font-light rounded-full text-[#e4e4e4] bg-[#275981] px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <a
              href={`https://github.com/${codeName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="links-card"
            >
              <FaGithub fontSize={20} />
              <h5>Código</h5>
            </a>

            {webName && (
              <a
                href={`https://${webName}.netlify.app`}
                target="_blank"
                rel="noopener noreferrer"
                className="links-card"
              >
                <IoEarthOutline fontSize={20} />
                <h5>Demo</h5>
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;
