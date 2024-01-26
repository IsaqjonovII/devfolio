import { Link } from "react-router-dom";
import "./style.css";
import { sideProjectsData } from "static";
import { Github, LinkIcon } from "assets";

export const HoverCards = () => {
  return (
    <div className="cards__wrp container">
      {sideProjectsData.map(({ title, info, tags, id, link, repoLink }) => (
        <div className="card" key={id}>
          <div className="card__content">
            <div className="card__head flex">
              <h1 className="card__title">{title}</h1>
              <div className="flex">
                <Link
                  to={repoLink}
                  target={link.includes("/portfolio") ? "_self" : "_blank"}
                >
                  <Github className="icon" />
                </Link>
                <Link
                  to={link}
                  target={link.includes("/portfolio") ? "_self" : "_blank"}
                >
                  <LinkIcon className="icon" />
                </Link>
              </div>
            </div>
            <p className="card__info">{info}</p>
            <div className="tags flex">
              {tags.map((tag) => (
                <div key={tag} className="tag">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
