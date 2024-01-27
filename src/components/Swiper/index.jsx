import { array } from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";

const Swiper = ({ data }) => {
  return (
    <div>
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
        {data.map(({ id, title, img, subtitle }) => (
          <SwiperSlide key={id}>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swiper;
Swiper.propTypes = {
  data: array.isRequired,
};
