import { Link } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import { sideProjectsData } from "static";
import { Github, LinkIcon } from "assets";

export const HoverCards = () => {
  const [mousePositions, setMousePositions] = useState({});

  const getMousePosition = (id, { clientY, clientX }) => {
    if (window.innerWidth > 768) {
      const { top, left } = document.getElementById(id).getBoundingClientRect();
      setMousePositions((prevState) => ({
        ...prevState,
        [id]: {
          y: `${clientY - top}px`,
          x: `${clientX - left}px`,
        },
      }));
    }
  };
  return (
    <div className="cards__wrp container">
      {sideProjectsData.map(({ title, info, tags, id, link, repoLink }) => (
        <div
          key={id}
          className="card"
          onMouseMove={(e) => getMousePosition(id, e)}
          onMouseLeave={() =>
            setMousePositions((prevState) => ({
              ...prevState,
              [id]: { x: 0, y: 0 },
            }))
          }
          id={id}
          style={{
            "--y": mousePositions[id]?.y || "0",
            "--x": mousePositions[id]?.x || "0",
          }}
        >
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
