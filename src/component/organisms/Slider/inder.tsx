'use client';

import SliderContent from "@/component/molecules/SliderContent";
import { sliderConstant } from "@/constants/sliderConstants";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="bg-white"
    >
      {sliderConstant.map((item) => {
        return (
          <SwiperSlide>
            <SliderContent
              key={item.id}
              comment={item.comment}
              fullname={item.fullname}
              jobTitle={item.jobTitle}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
