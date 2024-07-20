import { HoverCard } from "components/HoverCard";
import { sideProjectsData } from "static";

import c from "./style.module.css";

const MyWork = () => {
  return (
    <main className={c.portfolio} id='portfolio'>
      <div className='container'>
        <h1 className={c.page__title}>Projects I have built</h1>
        <div className='cards__wrp container'>
          {sideProjectsData.map((project, idx) => (
            <HoverCard {...project} id={idx} key={idx} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MyWork;
