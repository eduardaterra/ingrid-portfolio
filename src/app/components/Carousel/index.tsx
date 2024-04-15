import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import styled from "./styles.module.scss";

const Carousel = ({ children, ...props }: SwiperProps) => {
  return (
    <Swiper
      className={styled.swiper}
      modules={[Navigation, Pagination, A11y]}
      {...props}
    >
      {children}
    </Swiper>
  );
};

export default Carousel;

