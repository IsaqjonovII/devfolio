import { useState } from "react";
import { Github, LinkIcon } from "assets";
import "./style.css";

export const HoverCard = ({ id, title, info, tags, link, repoLink }) => {
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
    <div
      className='card'
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
      }}>
      <div className='card__content'>
        <div className='card__head flex'>
          <h1 className='card__title'>{title}</h1>
          <div className='flex'>
            <a
              href={repoLink}
              target={link.includes("/portfolio") ? "_self" : "_blank"}
              rel='noreferrer'>
              <Github className='icon' />
            </a>
            <a
              href={link}
              target={link.includes("/portfolio") ? "_self" : "_blank"}
              rel='noreferrer'>
              <LinkIcon className='icon' />
            </a>
          </div>
        </div>
        <p className='card__info'>{info}</p>
        <div className='tags flex'>
          {tags.map((tag) => (
            <div key={tag} className='tag'>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
