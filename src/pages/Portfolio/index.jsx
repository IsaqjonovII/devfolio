import { HoverCards } from "components/HoverCard";
import c from "./style.module.css";
import { useState } from "react";

const MyWork = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  return (
    <main className={c.portfolio}>
      <div className="container">
        <h1 className={c.page__title}>Projects I did</h1>

        <section>
          <div className={c.projects__wrp}>
            <div className={c.project__card}></div>
          </div>
        </section>
        <section className={c.container}>
          <div className={c.follower}></div>
          <div className={c.sideprojects}>
            <div className={c.sproject__card}>
              <HoverCards />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MyWork;
