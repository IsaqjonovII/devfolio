import { array } from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";

const CustomSwiper = ({ data }) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
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
      {data.map(({ id, title, images, subtitle }) => (
        <SwiperSlide key={id}>
          <img src={images[0]} />
          <div className="swiper__overlay">
            <h1 className="swiper__title">{title}</h1>
            <h2 className="swiper__subtitle">{subtitle}</h2>
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
