import { Link } from "react-router-dom";
import { Bounce } from "react-reveal";
import c from "./style.module.css";
import { introData, socialLinks } from "utils";
import { coder } from "assets";

const Intro = () => {
  return (
    <main className={c.intro}>
      <div className="container">
        <section>
          <h1 className={c.intro__title}>I&apos;m Ilhomjon</h1>
        </section>
        <div className={c.section__wrp + " flex"}>
          <section>
            <Bounce>
              <img className={c.intro__img} src={coder} alt="" />
            </Bounce>
            <div className={c.social__links}>
              {socialLinks.map(({ key, link, label }) => (
                <Bounce key={key}>
                  <Link to={link} rel="noopener noreferrer" target="_blank">
                    <div className={c.social__link}> {label} </div>
                  </Link>
                </Bounce>
              ))}
            </div>
          </section>
          <section className={c.text__wrp}>
            {introData.map(({ id, title, content }) => (
              <div key={id}>
                <h2 className={c.section__title}>{title}</h2>
                {content}
              </div>
            ))}
            <div className="navigate__link">
              <Link to="/portfolio">Explore my portfolio</Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Intro;
