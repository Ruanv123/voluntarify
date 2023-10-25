"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { VagaCard } from "@/components/shared/vaga-card";
import { Vaga } from "@prisma/client";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";

interface Props {
  vagas: Vaga[];
}

const CardList = ({ vagas }: Props) => {
  return (
    <section className="w-full overflow-hidden ">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        className="swiper-slide"
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 50,
            loop: false,
            pagination: {
              clickable: true,
            },
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 0,
            loop: true,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            loop: true,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 15,
            loop: true,
          },
        }}
      >
        <SwiperSlide className="!w-fit">
          <VagaCard vaga={vagas[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <VagaCard vaga={vagas[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <VagaCard vaga={vagas[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <VagaCard vaga={vagas[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <VagaCard vaga={vagas[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <VagaCard vaga={vagas[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <VagaCard vaga={vagas[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <VagaCard vaga={vagas[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <VagaCard vaga={vagas[0]} />
        </SwiperSlide>

        {/* {vagas.map((vaga) => (
          <VagaCard vaga={vaga} />
          <VagaCard vaga={vaga} />
          <VagaCard vaga={vaga} />
          <VagaCard vaga={vaga} />
          <VagaCard vaga={vaga} />
      ))} */}
      </Swiper>
    </section>
  );
};

export default CardList;
