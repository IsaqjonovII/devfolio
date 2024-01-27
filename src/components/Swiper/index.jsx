import { array } from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";
import { Link } from "react-router-dom";
import { NavigateLink } from "components/Button";

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
      {data.map(({ id, title, images, subtitle, key }) => (
        <SwiperSlide key={id}>
          <div
            className="swiper__card"
            style={{ backgroundImage: `url(${images[0]})` }}
          >
            <div className="swiper__overlay">
              <div className="swiper__content">
                <h1 className="swiper__title">{title}</h1>
                <h2 className="swiper__subtitle">{subtitle}</h2>
                <NavigateLink
                  className="text-center"
                  text="Learn more"
                  link={`/mywork/${key}`}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomSwiper;
CustomSwiper.propTypes = {
  data: array.isRequired,
};
