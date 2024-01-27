import { HoverCards } from "components/HoverCards";
import c from "./style.module.css";

const MyWork = () => {
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
          <div className={c.sideprojects}>
            <HoverCards />
          </div>
        </section>
      </div>
    </main>
  );
};

export default MyWork;
