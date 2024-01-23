import { Link } from "react-router-dom";
import c from "./style.module.css";
import { introData, socialLinks } from "utils";
import { coder } from "assets";
import { NavigateLink } from "components/Button";

const Intro = () => {
  return (
    <main className={c.intro}>
      <div className="container">
        <section>
          <h1 className={c.intro__title}>It&apos;s About Me</h1>
        </section>
        <div className={c.section__wrp + " flex"}>
          <section className={c.me}>
            <img className={c.intro__img} src={coder} alt="" />

            <div className={c.social__links}>
              {socialLinks.map(({ key, link, Icon }) => (
                <Link
                  key={key}
                  to={link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={c.social__link}
                >
                  <Icon className={c.social__icon} />
                </Link>
              ))}
            </div>
          </section>
          <section className={c.text__wrp}>
            {introData.map(({ id, title, content }) => (
              <div key={id}>
                <p className={c.section__title}>{title}</p>
                {content}
              </div>
            ))}
            <div className="navigate__link">
              <NavigateLink link="/portfolio" text="Explore my portfolio" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Intro;
