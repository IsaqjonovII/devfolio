import { array } from "prop-types";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "./style.css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const CustomSwiper = ({ data }) => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {data.map(({ id, title, images, subtitle, key, link }) => {
        const imageUri =
          window.innerWidth > 768 ? images[0] : images[images.length - 1];
        return (
          <SwiperSlide key={id}>
            <div
              className="swiper__card"
              style={{
                backgroundImage: `url(${imageUri})`,
              }}
            >
              <div className="swiper__overlay">
                <div className="swiper__content">
                  <h1 className="swiper__title">{title}</h1>
                  <h2 className="swiper__subtitle">{subtitle}</h2>
                  <Link
                    className="text-center"
                    to={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CustomSwiper;
CustomSwiper.propTypes = {
  data: array.isRequired,
};
