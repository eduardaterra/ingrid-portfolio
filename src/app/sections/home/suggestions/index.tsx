"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";

import { SuggestionsDocument } from "../../../../../prismicio-types";
import styled from "./styles.module.scss";

import "swiper/css";
import "swiper/css/navigation";

const Suggestions = ({ data }: SuggestionsDocument) => {
  return (
    <div className={styled.container}>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        loop
        autoplay={{ delay: 2000 }}
        slidesPerView={"auto"}
        spaceBetween={10}
      >
        {data.suggestionsgroup.map((item, index) => (
          <SwiperSlide className={styled.slide} key={`${item.text} ${index}`}>
            |<span className={styled.text}>{item.text}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Suggestions;

