import { HoverCards } from "components/HoverCards";
import c from "./style.module.css";
import CustomSwiper from "components/Swiper";
import { recentProjects } from "static";

const MyWork = () => {
  return (
    <main className={c.portfolio} id="portfolio">
      <div className="container">
        <h1 className={c.page__title}>Projects I have built</h1>

        <section>
          <h1 className={c.section__title}>My recent work</h1>
          <CustomSwiper data={recentProjects} />
        </section>
        <section className={c.container}>
          <h1 className={c.section__title}>Other noteworthy projects</h1>
          <HoverCards />
        </section>
      </div>
    </main>
  );
};

export default MyWork;
