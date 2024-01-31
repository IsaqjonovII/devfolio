import { Link } from "react-router-dom";
import { coder } from "assets";
import c from "./style.module.css";
import { introData, socialLinks } from "static";
import { NavigateLink } from "components/Button";

const Intro = () => {
  return (
    <main className={c.intro} id="intro">
      <div className="container">
        <section>
          <h1 className={c.intro__title}>It&apos;s About Me</h1>
        </section>
        <div className={c.section__wrp + " flex"}>
          <section className={c.me}>
            <div className={c.img__wrp}>
              <img className={c.intro__img} src={coder} alt="" />
            </div>

            <div className={c.social__links}>
              {socialLinks.map(({ key, link, Icon, label }) => (
                <Link
                  key={key}
                  to={link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={c.social__link}
                >
                  <Icon className={c.social__icon} />
                  <span className={c.link__text}>{label}</span>
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
              <NavigateLink link="portfolio" text="Explore my portfolio" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Intro;
