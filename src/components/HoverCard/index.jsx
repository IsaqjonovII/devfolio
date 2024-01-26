import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";
import { sideProjectsData } from "static";
import { Github, LinkIcon } from "assets";

export const HoverCards = () => {
  const [hoverId, setHoverId] = useState(0);
  return (
    <div className="hovercards__wrp container">
      {sideProjectsData.map(({ title, info, tags, id, link }) => (
        <Link
          key={id}
          to={link}
          className="hover__card"
          onMouseEnter={() => setHoverId(id)}
          onMouseLeave={() => setHoverId(null)}
        >
          <AnimatePresence>
            {hoverId === id && (
              <motion.span
                className="card__effect"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="card__content">
            <div className="card__head">
              <Github className="icon" />
              <Link to={link}>
                <LinkIcon className="icon" />
              </Link>
            </div>
            <h1>{title}</h1>
            <p>{info}</p>
            {tags.map((tag) => (
              <div key={tag}>{tag}</div>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
};
