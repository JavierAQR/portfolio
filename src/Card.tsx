import { FaGithub } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";

interface Props {
  tags: string[];
  title: string;
  description: string;
  webName?: string;
  codeName: string;
  img: string;
  compact?: boolean;
}

const Card = ({
  tags,
  title,
  description,
  webName,
  codeName,
  img,
  compact,
}: Props) => {
  return (
    <div data-aos="zoom-in-left">
      <article
        className={`flex items-center w-full bg-[#3b82c425] rounded-3xl max-md:flex-col max-md:items-center max-md:gap-3 max-md:max-w-95 ${
          compact ? "p-2" : "p-3"
        }`}
      >
        <img
          src={`img/${img}.jpg`}
          className={`object-cover rounded-2xl bg-[gray] ${
            compact ? "max-w-40 max-h-40" : "max-w-90 max-h-90"
          }`}
        />
        <div
          className={`flex flex-col px-5 max-lg:px-2 max-md:pl-0 ${
            compact ? "gap-2" : "gap-5 max-lg:gap-2"
          }`}
        >
          <p className={compact ? "text-xs" : "text-sm"}>
            <b className="font-extrabold text-white">
              {title.toUpperCase()}:{" "}
            </b>
            {description}
          </p>
          <div className="flex text-xs gap-1.5 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-light rounded-full text-[#e4e4e4] bg-[#275981] px-2 py-1"
              >
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
              <FaGithub fontSize={compact ? 16 : 20} />
              <h5>Código</h5>
            </a>

            {webName && (
              <a
                href={`https://${webName}.netlify.app`}
                target="_blank"
                rel="noopener noreferrer"
                className="links-card"
              >
                <IoEarthOutline fontSize={compact ? 16 : 20} />
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