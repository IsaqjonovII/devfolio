import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import c from "./style.module.css";
import { introData, socialLinks } from "utils";
import { coder } from "assets";

const Intro = () => {
  return (
    <main className={c.intro}>
      <div className="container">
        <section>
          <h1 className={c.intro__title}>
            <Fade duration={800} cascade>
              I&apos;m Ilhomjon
            </Fade>
          </h1>
        </section>
        <div className={c.section__wrp + " flex"}>
          <section className={c.me}>
            <Fade delay={150}>
              <img className={c.intro__img} src={coder} alt="" />
            </Fade>
            <div className={c.social__links}>
              {socialLinks.map(({ key, link, label }, index) => (
                <Link
                  key={key}
                  to={link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p className={c.social__link}>
                    {" "}
                    <Fade delay={index * 120}>{label}</Fade>{" "}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <section className={c.text__wrp}>
            {introData.map(({ id, title, content }) => (
              <div key={id}>
                <Fade delay={id * 100}>
                  <h2 className={c.section__title}>{title}</h2>
                  {content}
                </Fade>
              </div>
            ))}
            <Fade delay={250}>
              <div className="navigate__link">
                <Link to="/portfolio">Explore my portfolio</Link>
              </div>
            </Fade>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Intro;
