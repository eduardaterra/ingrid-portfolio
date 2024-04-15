"use client";
import Carousel from "@/app/components/Carousel";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { asImageSrc } from "@prismicio/client";

import { JobDocument } from "../../../../prismicio-types";
import styled from "./styles.module.scss";

const JobsCarousel = (jobData: JobDocument) => {
  return (
    <div className={styled.slide}>
      <Carousel loop navigation slidesPerView={1}>
        {jobData.data.images.map((item, index) => (
          <SwiperSlide
            className={styled.slide}
            key={`${item.image.alt} ${index}`}
          >
            <div className={styled.imageWrapper}>
              <Image
                fill
                src={asImageSrc(item.image) as string}
                alt={item.image.alt as string}
              />
            </div>
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobsCarousel;

